'use client';

import Image from 'next/image';
import PageTemplate from '../../components/PageTemplate';

export default function AboutPage() {
  return (
    <PageTemplate>
      <section className="section">
        <h1 className="section-title">About Me</h1>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginTop: '2rem',
          maxWidth: '1000px',
          margin: '2rem auto'
        }}
        className="about-container">
          <div style={{ width: '100%' }} className="about-image-container">
            <div className="card" style={{ 
              padding: '1.5rem', 
              background: 'linear-gradient(45deg, var(--primary-light), var(--accent-color))',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50%',
                padding: '0.5rem',
                width: '300px',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'var(--shadow)'
              }}>
                <Image 
                  src="/profile.png" 
                  alt="Muhammad Sabran" 
                  width={280}
                  height={280}
                  style={{ 
                    objectFit: 'contain',
                    borderRadius: '50%'
                  }}
                />
              </div>
            </div>
          </div>
          
          <div style={{ width: '100%' }} className="about-content">
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1rem' 
            }}>
              Muhammad Sabran
            </h2>
            
            <h3 style={{ 
              fontSize: '1.25rem', 
              color: 'var(--primary-color)', 
              marginBottom: '1.5rem' 
            }}>
              Full Stack Developer
            </h3>
            
            <div className="about-details">
              <p style={{ 
                marginBottom: '1.5rem',
                lineHeight: '1.8',
                fontSize: '1.05rem',
                color: 'var(--text-color)',
                textShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}>
                I'm a passionate Full Stack Developer with expertise in building modern web applications
                using React, Next.js, Laravel, and Golang. I enjoy solving complex problems and creating
                intuitive, user-friendly interfaces.
              </p>
              
              <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>Skills</h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Laravel', 'Golang', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase'].map((skill) => (
                    <span 
                      key={skill} 
                      style={{
                        padding: '0.375rem 0.75rem',
                        background: 'var(--primary-gradient)',
                        color: 'white',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        boxShadow: 'var(--shadow-sm)',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  background: 'var(--primary-gradient)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}>Experience</h3>
                
                <div className="card" style={{ 
                  marginBottom: '1rem',
                  padding: '1.25rem',
                  borderLeft: '4px solid var(--primary-color)',
                  transition: 'all 0.3s ease'
                }}>
                  <h4 style={{ 
                    fontWeight: '600', 
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem'
                  }}>
                    Full Stack Developer
                  </h4>
                  <p style={{ 
                    color: 'var(--text-light)', 
                    marginBottom: '0.75rem',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    2019 - Present
                  </p>
                  <p style={{ lineHeight: '1.6' }}>
                    Working on various web projects, focusing on creating responsive, 
                    performant applications with modern technologies.
                  </p>
                </div>
              </div>
              
              <div style={{ marginTop: '2rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  background: 'var(--primary-gradient)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}>Education</h3>
                
                <div className="card" style={{ 
                  padding: '1.25rem',
                  borderLeft: '4px solid var(--accent-color)',
                  transition: 'all 0.3s ease'
                }}>
                  <h4 style={{ 
                    fontWeight: '600', 
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem'
                  }}>
                    Bachelor's Degree in Physics
                  </h4>
                  <p style={{ 
                    color: 'var(--text-light)',
                    fontSize: '0.9rem',
                    fontWeight: '500' 
                  }}>
                    Hasanuddin University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
