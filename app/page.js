'use client';

import Link from 'next/link';
import Image from 'next/image';
import PageTemplate from '../components/PageTemplate';

export default function HomePage() {
  return (
    <PageTemplate>
      <section className="hero">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '2rem' 
        }}>
          <div style={{ textAlign: 'center', maxWidth: '600px' }}>
            <h1 className="hero-title">Hi, I'm Muhammad Sabran</h1>
            <p className="hero-subtitle">
              A Full Stack Developer with experience in React, Laravel, Golang, and more.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/projects" className="btn btn-primary">
                See My Projects
              </Link>
              <Link href="/about" className="btn btn-outline">
                About Me
              </Link>
              <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: '#16a34a', color: 'white' }}>
                Contact Me
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              position: 'relative', 
              width: '256px', 
              height: '256px', 
              borderRadius: '50%', 
              overflow: 'hidden', 
              border: '4px solid var(--primary-light)',
              boxShadow: 'var(--shadow-md)',
              background: 'linear-gradient(45deg, var(--primary-light), var(--accent-color))'
            }}>
              <Image 
                src="/images/profile.png" 
                alt="Muhammad Sabran" 
                width={256}
                height={256}
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
