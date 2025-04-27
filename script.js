// Calculate password strength
function calculateStrength(password) {
    let strength = 0;
    const strengthIndicator = document.querySelector('.strength-indicator');
    const strengthText = document.getElementById('strength-text');

    // Reset classes
    strengthIndicator.classList.remove('strength-weak', 'strength-medium', 'strength-good', 'strength-strong');

    if (password === 'Click to generate a password') {
        strengthText.textContent = 'Weak';
        strengthIndicator.classList.add('strength-weak');
        return;
    }

    // Length check
    if (password.length >= 8) strength += 1;

    // Character type checks
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase
    if (/[a-z]/.test(password)) strength += 1; // Lowercase
    if (/[0-9]/.test(password)) strength += 1; // Numbers
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; // Symbols

    // Set strength level
    if (strength <= 2) {
        strengthText.textContent = 'Weak';
        strengthIndicator.classList.add('strength-weak');
    } else if (strength <= 4) {
        strengthText.textContent = 'Medium';
        strengthIndicator.classList.add('strength-medium');
    } else if (strength <= 6) {
        strengthText.textContent = 'Good';
        strengthIndicator.classList.add('strength-good');
    } else {
        strengthText.textContent = 'Strong';
        strengthIndicator.classList.add('strength-strong');
    }
}

// Password Generation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const clearBtn = document.getElementById('clear-btn');
    const passwordDisplay = document.getElementById('password');
    const checkboxes = {
        uppercase: document.getElementById('uppercase'),
        lowercase: document.getElementById('lowercase'),
        numbers: document.getElementById('numbers'),
        symbols: document.getElementById('symbols')
    };

    // Character sets
    const characterSets = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    // Check if user has premium access
    function hasPremiumAccess() {
        // This would typically check the user's subscription status
        // For demo purposes, we'll use a simple check
        const plan = localStorage.getItem('selectedPlan');
        return plan === 'enterprise' || plan === 'annual';
    }

    // Enable premium features if user has access
    function updatePremiumFeatures() {
        const premiumOptions = document.querySelectorAll('.length-option.premium');
        const hasPremium = hasPremiumAccess();
        
        premiumOptions.forEach(option => {
            const length = parseInt(option.dataset.length);
            // Only enable 56, 125, 256 for Enterprise and Annual plans
            if (hasPremium && (length === 56 || length === 125 || length === 256)) {
                option.disabled = false;
                option.classList.remove('premium');
                option.querySelector('.premium-badge')?.remove();
            } else if (length > 20) {
                option.disabled = true;
                option.classList.add('premium');
                if (!option.querySelector('.premium-badge')) {
                    const badge = document.createElement('span');
                    badge.className = 'premium-badge';
                    badge.textContent = 'Premium';
                    option.appendChild(badge);
                }
            }
        });
    }

    // Set initial password length
    let passwordLength = 8;

    // Generate password function
    function generatePassword() {
        // Get selected character sets
        let availableChars = '';
        let selectedSets = [];

        // Check which character sets are selected
        Object.entries(checkboxes).forEach(([type, checkbox]) => {
            if (checkbox.checked) {
                availableChars += characterSets[type];
                selectedSets.push(characterSets[type]);
            }
        });

        // Ensure at least one character set is selected
        if (availableChars.length === 0) {
            passwordDisplay.textContent = 'Please select at least one character type';
            return;
        }

        // Generate password
        let password = '';
        
        // First, ensure at least one character from each selected set
        selectedSets.forEach(set => {
            const randomIndex = Math.floor(Math.random() * set.length);
            password += set[randomIndex];
        });

        // Fill the rest of the password with random characters
        while (password.length < passwordLength) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            password += availableChars[randomIndex];
        }

        // Shuffle the password to ensure randomness
        password = password.split('').sort(() => Math.random() - 0.5).join('');

        // Update display
        passwordDisplay.textContent = password;
        calculateStrength(password);
    }

    // Copy password function
    function copyPassword() {
        const password = passwordDisplay.textContent;
        if (password && password !== 'Click to generate a password') {
            navigator.clipboard.writeText(password).then(() => {
                // Show feedback
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy password:', err);
            });
        }
    }

    // Clear password function
    function clearPassword() {
        passwordDisplay.textContent = 'Click to generate a password';
        calculateStrength('Click to generate a password');
    }

    // Handle length option clicks
    document.querySelectorAll('.length-option').forEach(option => {
        option.addEventListener('click', () => {
            if (option.disabled) {
                // Show premium upgrade message
                alert('This feature is available for premium users only. Upgrade to Pro, Enterprise, or Annual plan to access longer passwords!');
                return;
            }

            // Remove active class from all options
            document.querySelectorAll('.length-option').forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Update password length
            passwordLength = parseInt(option.dataset.length);
            
            // Generate new password
            generatePassword();
        });
    });

    // Add event listeners
    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);
    clearBtn.addEventListener('click', clearPassword);

    // Initialize premium features
    updatePremiumFeatures();

    // Generate initial password
    generatePassword();
});

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set initial placeholder
    document.getElementById('password').textContent = 'Click to generate a password';
    calculateStrength('Click to generate a password');
    
    // Set default active length
    const defaultLength = document.querySelector('.length-option[data-length="16"]');
    if (defaultLength) {
        defaultLength.classList.add('active');
    }
    
    // Length option click handlers
    document.querySelectorAll('.length-option').forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            document.querySelectorAll('.length-option').forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Generate new password with selected length
            generatePassword();
        });
    });
    
    // Premium option click handlers
    document.querySelectorAll('.checkbox-group.premium').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This feature is available for premium users only!');
        });
    });
    
    // Upgrade button handler
    document.querySelector('.upgrade-btn').addEventListener('click', () => {
        alert('Upgrade to Premium to access longer passwords and advanced options!');
    });
}); 