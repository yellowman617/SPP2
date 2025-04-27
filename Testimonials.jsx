import React, { useEffect, useState } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      rating: 5,
      text: "SecurePass Pro has revolutionized how we handle password security in our organization. The customizable options and strength indicators are invaluable.",
      author: "Sarah Johnson",
      role: "IT Security Director, TechCorp",
      avatar: "/images/testimonials/user1.jpg"
    },
    {
      rating: 5,
      text: "As a freelance developer, I need to generate secure passwords for multiple clients. This tool saves me time and ensures I'm following security best practices.",
      author: "Michael Chen",
      role: "Freelance Developer",
      avatar: "/images/testimonials/user2.jpg"
    },
    {
      rating: 4.5,
      text: "The password strength indicator helps me understand exactly how secure my passwords are. I've recommended this tool to all my friends and family.",
      author: "Emily Rodriguez",
      role: "Digital Marketing Specialist",
      avatar: "/images/testimonials/user3.jpg"
    },
    {
      rating: 5,
      text: "Our compliance team required a secure password solution, and SecurePass Pro exceeded our expectations. The audit logs and reporting features are top-notch.",
      author: "David Thompson",
      role: "Compliance Officer, Financial Services",
      avatar: "/images/testimonials/user4.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Users Say</h2>
        <p className={styles.sectionSubtitle}>Trusted by security professionals and individuals worldwide</p>
        
        <div className={styles.testimonialSlider}>
          <div 
            className={styles.testimonialTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialSlide}>
                <div className={styles.testimonialContent}>
                  <div className={styles.testimonialRating}>
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < testimonial.rating ? styles.filled : ''}`}
                      />
                    ))}
                  </div>
                  <p className={styles.testimonialText}>{testimonial.text}</p>
                  <div className={styles.testimonialAuthor}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className={styles.testimonialAvatar}
                    />
                    <div className={styles.testimonialInfo}>
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.testimonialControls}>
            <button 
              className={`${styles.testimonialControl} ${styles.prev}`} 
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left" />
            </button>
            <div className={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.testimonialDot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button 
              className={`${styles.testimonialControl} ${styles.next}`} 
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 