export default function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '6rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Organic background blob */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '55% 45% 35% 65% / 55% 35% 65% 45%',
          background: 'linear-gradient(135deg, var(--leaf), var(--sage))',
          opacity: 0.18,
          filter: 'blur(6px)',
          animation: 'floatBlobSlow 16s ease-in-out infinite',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Visual organic element */}
          <div className="scroll-reveal" style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1',
                maxWidth: '380px',
                margin: '0 auto',
              }}
            >
              {/* SVG leaf abstraction */}
              <svg
                viewBox="0 0 200 200"
                style={{ width: '100%', height: '100%', animation: 'leafSway 6s ease-in-out infinite' }}
              >
                <defs>
                  <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--sage)" />
                    <stop offset="100%" stopColor="var(--moss)" />
                  </linearGradient>
                  <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--wood-light)" />
                    <stop offset="100%" stopColor="var(--wood)" />
                  </linearGradient>
                </defs>
                <path
                  d="M100,20 C150,30 180,80 170,140 C160,180 120,190 100,180 C80,190 40,180 30,140 C20,80 50,30 100,20 Z"
                  fill="url(#leafGrad)"
                  opacity="0.85"
                />
                <path
                  d="M100,40 C130,50 150,90 145,130 C140,160 115,165 100,160 C85,165 60,160 55,130 C50,90 70,50 100,40 Z"
                  fill="url(#leafGrad2)"
                  opacity="0.6"
                />
                <path
                  d="M100,30 L100,175"
                  stroke="var(--moss-dark)"
                  strokeWidth="1.5"
                  opacity="0.4"
                />
                <path d="M100,70 Q120,75 135,90" stroke="var(--moss-dark)" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M100,70 Q80,75 65,90" stroke="var(--moss-dark)" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M100,110 Q125,115 140,130" stroke="var(--moss-dark)" strokeWidth="1" fill="none" opacity="0.3" />
                <path d="M100,110 Q75,115 60,130" stroke="var(--moss-dark)" strokeWidth="1" fill="none" opacity="0.3" />
              </svg>
              {/* Floating dots */}
              <div
                style={{
                  position: 'absolute',
                  top: '15%',
                  right: '10%',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--wood)',
                  animation: 'floatBlob 5s ease-in-out infinite',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '5%',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'var(--sage-deep)',
                  animation: 'floatBlobSlow 7s ease-in-out infinite',
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="scroll-reveal">
            <p
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.3em',
                color: 'var(--sage-deep)',
                textTransform: 'uppercase',
                marginBottom: '0.8rem',
              }}
            >
              Get to know me
            </p>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                color: 'var(--charcoal)',
                marginBottom: '2rem',
              }}
            >
              About <span style={{ color: 'var(--sage-deep)', fontStyle: 'italic' }}>Me</span>
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.85,
                color: 'var(--charcoal-soft)',
                marginBottom: '1.5rem',
              }}
            >
              Saya adalah seorang yang berfokus pada bidang Rekayasa Perangkat Lunak (Software
              Engineering) dengan fokus pada pengembangan aplikasi web dan mobile. Saya menguasai
              dasar-dasar pengembangan menggunakan PHP, HTML, CSS, JavaScript, Tailwind CSS, Flutter
              (Dart), serta MySQL untuk membangun aplikasi yang responsif, fungsional, dan mudah
              digunakan. Saya juga terbiasa mempelajari teknologi baru serta menerapkan praktik
              pengembangan yang terstruktur dalam setiap proyek.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.85,
                color: 'var(--charcoal-soft)',
              }}
            >
              Bagi saya, teknologi bukan hanya tentang menulis kode, tetapi juga tentang menciptakan
              solusi yang mampu menjawab kebutuhan pengguna. Oleh karena itu, saya terus
              mengembangkan kemampuan di bidang pengembangan web, aplikasi mobile, integrasi API,
              UI/UX, dan pemanfaatan teknologi AI dalam perangkat lunak. Dengan semangat belajar
              yang tinggi dan kemampuan beradaptasi terhadap perkembangan teknologi, saya siap
              berkontribusi dalam menciptakan inovasi digital yang bermanfaat.
            </p>

            {/* Skill chips */}
            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                gap: '0.6rem',
                flexWrap: 'wrap',
              }}
            >
              {['PHP', 'JavaScript', 'Tailwind', 'Flutter', 'MySQL', 'API', 'UI/UX', 'AI'].map(
                (skill, i) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: '8px',
                      background: 'var(--cream-soft)',
                      border: '1px solid rgba(138, 154, 123, 0.25)',
                      color: 'var(--sage-deep)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      transition: 'all 0.3s var(--ease-smooth)',
                      animation: `fadeSlideUp 0.5s var(--ease-smooth) ${0.1 * i}s both`,
                    }}
                    className="skill-chip"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skill-chip:hover {
          background: var(--sage) !important;
          color: var(--cream) !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px -6px rgba(95, 111, 84, 0.4);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
