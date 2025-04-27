const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

// Configure OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Configure email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your preferred email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // 1. Save to database (you'll need to implement this)
        // await saveSubscriber(email);

        // 2. Send confirmation email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to SecurePass Pro Newsletter!',
            html: `
                <h2>Thank you for subscribing!</h2>
                <p>You're now subscribed to receive security tips and updates from SecurePass Pro.</p>
                <p>If you didn't subscribe to our newsletter, you can safely ignore this email.</p>
            `
        });

        // 3. Send notification to admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Newsletter Subscription',
            text: `New subscriber: ${email}`
        });

        res.json({ message: 'Successfully subscribed to the newsletter!' });
    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({ message: 'Failed to process subscription' });
    }
});

// Chatbot endpoint
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ message: 'Message is required' });
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: `You are a helpful AI assistant for SecurePass Pro, a password management and security service. 
                    Your main goals are to:
                    1. Help users with password-related questions and security concerns
                    2. Explain SecurePass Pro features and pricing
                    3. Provide general cybersecurity advice
                    4. Handle basic troubleshooting
                    5. Only escalate to human support for complex technical issues or account-specific problems
                    
                    Be friendly, professional, and security-focused in your responses.`
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0.7,
            max_tokens: 500
        });

        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({ 
            message: 'I apologize, but I encountered an error. Please try again or contact support if the issue persists.' 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 