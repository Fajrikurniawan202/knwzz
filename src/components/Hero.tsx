import { ArrowDown } from 'lucide-react';

const profileImg = '/1780134801596.jpg';

const labels = ['FRONTEND', 'AI WEB', 'UX'];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      {/* Floating decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '-5%',
          width: '320px',
          height: '320px',
          borderRadius: '42% 58% 63% 37% / 42% 38% 62% 58%',
          background: 'linear-gradient(135deg, var(--leaf), var(--sage))',
          opacity: 0.35,
          filter: 'blur(8px)',
          animation: 'floatBlob 14s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '-8%',
          width: '380px',
          height: '380px',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          background: 'linear-gradient(135deg, var(--wood-light), var(--wood))',
          opacity: 0.3,
          filter: 'blur(10px)',
          animation: 'floatBlobSlow 18s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '45%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'var(--sage-deep)',
          opacity: 0.12,
          filter: 'blur(4px)',
          animation: 'floatBlob 20s ease-in-out infinite reverse',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          minHeight: 'calc(100vh - 11rem)',
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div style={{ position: 'relative' }}>
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.35em',
              color: 'var(--sage-deep)',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
              opacity: 0,
              animation: 'fadeSlideUp 0.8s var(--ease-smooth) 0.2s forwards',
            }}
          >
            Web Developer
          </p>

          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
              fontWeight: 800,
              color: 'var(--charcoal)',
              lineHeight: 1.05,
              marginBottom: '1.8rem',
              opacity: 0,
              animation: 'fadeSlideUp 0.8s var(--ease-smooth) 0.45s forwards',
            }}
          >
            Fajri
            <br />
            <span style={{ color: 'var(--sage-deep)', fontStyle: 'italic' }}>Kurniawan</span>
          </h1>

          {/* Labels */}
          <div
            style={{
              display: 'flex',
              gap: '0.8rem',
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeSlideUp 0.8s var(--ease-smooth) 0.7s forwards',
            }}
          >
            {labels.map((label, i) => (
              <span
                key={label}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '999px',
                  background: 'rgba(138, 154, 123, 0.15)',
                  border: '1px solid rgba(138, 154, 123, 0.35)',
                  color: 'var(--sage-deep)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  backdropFilter: 'blur(4px)',
                  animation: `fadeSlideUp 0.6s var(--ease-smooth) ${0.85 + i * 0.12}s forwards`,
                  opacity: 0,
                }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeSlideUp 0.8s var(--ease-smooth) 1.2s forwards',
            }}
          >
            <a
              href="#work"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                borderRadius: '999px',
                background: 'var(--sage-deep)',
                color: 'var(--cream)',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'all 0.3s var(--ease-smooth)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-ghost"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 2rem',
                borderRadius: '999px',
                background: 'transparent',
                color: 'var(--charcoal)',
                border: '2px solid var(--sage)',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'all 0.3s var(--ease-smooth)',
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: Profile card (Uiverse-inspired) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0,
            animation: 'fadeIn 1s var(--ease-smooth) 0.5s forwards',
          }}
        >
          <div className="profile-card">
            <div className="profile-card__inner">
              <div className="profile-card__ring" />
              <div className="profile-card__ring profile-card__ring--2" />
              <div className="profile-card__frame">
                <img src={profileImg} alt="Fajri Kurniawan" className="profile-card__img" />
                <div className="profile-card__glare" />
              </div>
              <div className="profile-card__badge">
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                  AVAILABLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--sage-deep)',
          zIndex: 2,
          opacity: 0,
          animation: 'fadeIn 1s ease 1.8s forwards',
        }}
      >
        <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <ArrowDown size={18} style={{ animation: 'floatBlob 2.5s ease-in-out infinite' }} />
      </a>

      <style>{`
        .btn-primary:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 14px 40px -10px rgba(95, 111, 84, 0.5) !important;
          background: var(--moss) !important;
        }
        .btn-ghost:hover {
          transform: translateY(-3px) !important;
          background: var(--sage) !important;
          color: var(--cream) !important;
        }

        /* === Uiverse-inspired profile card === */
        .profile-card {
          position: relative;
          width: 320px;
          height: 400px;
          perspective: 1000px;
        }
        .profile-card__inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: floatBlob 6s ease-in-out infinite;
        }
        .profile-card__ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 42% 58% 63% 37% / 45% 45% 55% 55%;
          border: 2px solid rgba(138, 154, 123, 0.4);
          animation: spinSlow 18s linear infinite;
        }
        .profile-card__ring--2 {
          width: 110%;
          height: 110%;
          border: 1.5px dashed rgba(201, 168, 124, 0.45);
          border-radius: 58% 42% 37% 63% / 55% 55% 45% 45%;
          animation: spinSlow 24s linear infinite reverse;
        }
        .profile-card__frame {
          position: relative;
          width: 280px;
          height: 350px;
          border-radius: 42% 58% 63% 37% / 45% 45% 55% 55%;
          overflow: hidden;
          box-shadow: 0 25px 60px -15px rgba(60, 70, 50, 0.4),
                      inset 0 0 0 4px rgba(247, 245, 240, 0.6),
                      inset 0 0 0 8px rgba(138, 154, 123, 0.5);
          transition: all 0.5s var(--ease-smooth);
        }
        .profile-card__frame:hover {
          border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
          box-shadow: 0 30px 70px -15px rgba(60, 70, 50, 0.5),
                      inset 0 0 0 4px rgba(247, 245, 240, 0.7),
                      inset 0 0 0 10px rgba(138, 154, 123, 0.6),
                      var(--shadow-glow);
        }
        .profile-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease-smooth);
        }
        .profile-card__frame:hover .profile-card__img {
          transform: scale(1.08);
        }
        .profile-card__glare {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%);
          pointer-events: none;
        }
        .profile-card__badge {
          position: absolute;
          bottom: 20px;
          right: 10px;
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          background: rgba(74, 93, 63, 0.9);
          color: var(--cream);
          backdrop-filter: blur(8px);
          box-shadow: 0 6px 20px -6px rgba(0,0,0,0.3);
          animation: pulseRing 3s ease-in-out infinite;
          z-index: 2;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            text-align: center;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .profile-card { width: 260px; height: 330px; }
          .profile-card__frame { width: 230px; height: 290px; }
        }
      `}</style>
    </section>
  );
}
