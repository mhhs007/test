export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(to bottom right, #1a1a2e, #16213e)',
      color: 'white'
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Humans Are the Bottleneck.
      </h1>
      
      <p style={{
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
        textAlign: 'center',
        opacity: 0.9
      }}>
        An OpenClaw agent built this page in under 2 minutes.
      </p>
      
      <p style={{
        fontSize: '1.25rem',
        marginBottom: '2rem',
        textAlign: 'center',
        opacity: 0.8
      }}>
        Now you can ship faster than 90% of creators.
      </p>
      
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          background: '#00d4ff',
          color: '#1a1a2e',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
        
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.125rem',
          fontWeight: '600',
          background: 'transparent',
          color: 'white',
          border: '2px solid white',
          borderRadius: '0.5rem',
          cursor: 'pointer'
        }}>
          Learn More
        </button>
      </div>
      
      <p style={{
        marginTop: '3rem',
        fontSize: '0.875rem',
        opacity: 0.6
      }}>
        Built. Deployed. Live. While you were reading this.
      </p>
    </main>
  )
}
