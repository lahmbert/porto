export default function SkillCard({ name, level, description, icon }) {
  const getProgressWidth = () => {
    switch (level) {
      case 'Beginner':
        return '25%';
      case 'Intermediate':
        return '50%';
      case 'Advanced':
        return '75%';
      case 'Expert':
        return '100%';
      default:
        return '50%';
    }
  };

  return (
    <div className="card skill-card">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '0.75rem'
      }}>
        <div style={{ 
          marginRight: '0.75rem', 
          color: 'var(--primary-color)'
        }}>
          {icon}
        </div>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600'
        }}>
          {name}
        </h3>
      </div>
      
      <div style={{ marginBottom: '0.75rem' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '0.875rem', 
          marginBottom: '0.25rem'
        }}>
          <span>{level}</span>
          <span style={{ color: 'var(--text-light)' }}>Proficiency</span>
        </div>
        <div style={{ 
          width: '100%', 
          backgroundColor: 'var(--gray)',
          borderRadius: '9999px',
          height: '0.625rem' 
        }}>
          <div style={{ 
            backgroundColor: 'var(--primary-color)',
            height: '0.625rem',
            borderRadius: '9999px',
            width: getProgressWidth(),
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      </div>
      
      <p style={{ color: 'var(--text-light)' }}>{description}</p>
    </div>
  );
}