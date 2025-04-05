'use client';

import SkillCard from '../../components/SkillCard';
import PageTemplate from '../../components/PageTemplate';

const skills = [
  {
    name: 'React / Next.js',
    level: 'Expert',
    description: 'Building modern, responsive web applications with advanced features like server-side rendering and static site generation.',
    icon: <span style={{ color: '#61dafb', fontSize: '1.75rem' }}>⚛️</span>,
  },
  {
    name: 'JavaScript / TypeScript',
    level: 'Expert',
    description: 'Proficient in modern JavaScript (ES6+) and TypeScript for type-safe code development.',
    icon: <span style={{ color: '#f7df1e', fontSize: '1.75rem' }}>JS</span>,
  },
  {
    name: 'Laravel',
    level: 'Advanced',
    description: 'Building robust backend systems with Laravel\'s elegant syntax and powerful features.',
    icon: <span style={{ color: '#ff2d20', fontSize: '1.75rem' }}>🔺</span>,
  },
  {
    name: 'Golang',
    level: 'Intermediate',
    description: 'Developing high-performance backend services and microservices with Go.',
    icon: <span style={{ color: '#00add8', fontSize: '1.75rem' }}>GO</span>,
  },
  {
    name: 'Tailwind CSS',
    level: 'Expert',
    description: 'Creating beautiful, responsive designs with utility-first CSS framework.',
    icon: <span style={{ color: '#06b6d4', fontSize: '1.75rem' }}>🎨</span>,
  },
  {
    name: 'Node.js',
    level: 'Advanced',
    description: 'Building scalable server-side applications and APIs with Node.js.',
    icon: <span style={{ color: '#339933', fontSize: '1.75rem' }}>🟢</span>,
  },
  {
    name: 'PostgreSQL',
    level: 'Advanced',
    description: 'Designing and optimizing databases for performance and scalability.',
    icon: <span style={{ color: '#336791', fontSize: '1.75rem' }}>🐘</span>,
  },
  {
    name: 'Supabase',
    level: 'Intermediate',
    description: 'Building applications with Supabase as the backend service for authentication, database, and storage.',
    icon: <span style={{ color: '#3ecf8e', fontSize: '1.75rem' }}>⚡</span>,
  },
];

export default function SkillsPage() {
  return (
    <PageTemplate>
      <section className="section">
        <h1 className="section-title">My Skills</h1>
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-light)', 
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Here are some technologies I work with regularly
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr', 
          gap: '1.5rem',
          marginBottom: '3rem'
        }}
        className="grid-cols-2">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
        
        <div className="card" style={{ 
          padding: '2rem',
          marginTop: '3rem' 
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            marginBottom: '1.5rem',
            color: 'var(--text-color)'
          }}>
            Additional Skills
          </h2>
          
          <div className="skill-tags" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '0.75rem' 
          }}>
            {[
              'HTML5', 'CSS3', 'Redis', 'Docker', 'Git', 'GitHub Actions', 
              'RESTful APIs', 'GraphQL', 'Responsive Design', 'UI/UX Design',
              'Jest', 'Testing', 'Agile Methodology', 'CI/CD'
            ].map((skill) => (
              <span 
                key={skill} 
                className="skill-tag"
                style={{ 
                  padding: '0.5rem 1rem',
                  backgroundColor: 'var(--gray-light)',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  display: 'inline-block'
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}