'use client';

import { useState } from 'react';
import PageTemplate from '../../components/PageTemplate';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // In a real implementation, this would send data to a backend service
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus((prevStatus) => ({ ...prevStatus, submitted: false }));
      }, 5000);
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message });
    }
  };

  return (
    <PageTemplate>
      <section className="section">
        <h1 className="section-title">Contact Me</h1>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-light)', 
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Have a question or want to work together? Feel free to send me a message and I'll get back to you as soon as possible.
        </p>
        
        <div className="card" style={{ padding: '2rem' }}>
          {status.submitted && (
            <div style={{ 
              backgroundColor: '#d1fae5', 
              border: '1px solid #34d399', 
              color: '#047857',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              marginBottom: '1.5rem'
            }}>
              Thank you for your message! I'll get back to you soon.
            </div>
          )}
          
          {status.error && (
            <div style={{ 
              backgroundColor: '#fee2e2', 
              border: '1px solid #f87171', 
              color: '#b91c1c',
              padding: '0.75rem 1rem',
              borderRadius: '0.375rem',
              marginBottom: '1.5rem'
            }}>
              {status.error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status.submitting}
              className="btn btn-primary"
              style={{ 
                padding: '0.75rem 1.5rem',
                opacity: status.submitting ? 0.7 : 1,
                cursor: status.submitting ? 'not-allowed' : 'pointer'
              }}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          <div style={{ 
            marginTop: '2rem', 
            paddingTop: '2rem',
            borderTop: '1px solid var(--gray)'
          }}>
            <h2 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Alternative Ways to Contact Me
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ 
                display: 'flex', 
                alignItems: 'center',
                color: 'var(--text-color)'
              }}>
                <svg style={{ 
                  width: '1.5rem', 
                  height: '1.5rem', 
                  marginRight: '0.75rem',
                  color: 'var(--primary-color)'
                }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a 
                  href="mailto:muhammadsabran86@gmail.com" 
                  style={{ 
                    color: 'var(--text-color)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-color)'}
                >
                  muhammadsabran86@gmail.com
                </a>
              </p>
              
              <p style={{ 
                display: 'flex', 
                alignItems: 'center',
                color: 'var(--text-color)'
              }}>
                <svg style={{ 
                  width: '1.5rem', 
                  height: '1.5rem', 
                  marginRight: '0.75rem',
                  color: 'var(--primary-color)'
                }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Response time: within 24-48 hours</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}