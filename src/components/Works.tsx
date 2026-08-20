import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    category: 'AI Engineer',
    title: 'Intelligent Systems',
    description:
      'Membangun solusi AI yang terintegrasi — dari chatbot cerdas, computer vision, hingga automasi berbasis machine learning untuk menjawab kebutuhan bisnis modern.',
    tags: ['Python', 'TensorFlow', 'NLP', 'Computer Vision'],
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: '#contact',
    accent: 'var(--moss)',
  },
  {
    category: 'Web Development',
    title: 'Modern Web Apps',
    description:
      'Mengembangkan aplikasi web yang responsif, cepat, dan elegan menggunakan teknologi terkini seperti React, Tailwind CSS, dan integrasi API pihak ketiga.',
    tags: ['React', 'Tailwind', 'Node.js', 'API'],
    image:
      'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: '#contact',
    accent: 'var(--wood)',
  },
];

export default function Works() {
  return (
    <section
      id="work"
      style={{
        position: 'relative',
        padding: '6rem 0',
        background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-soft) 100%)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '45% 55% 55% 45% / 50% 50% 50% 50%',
          background: 'var(--wood-light)',
          opacity: 0.2,
          filter: 'blur(8px)',
          animation: 'floatBlob 17s ease-in-out infinite',
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
        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
            Portfolio
          </p>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: 'var(--charcoal)',
            }}
          >
            Works &amp; <span style={{ color: 'var(--sage-deep)', fontStyle: 'italic' }}>Projects</span>
          </h2>
          <p
            style={{
              maxWidth: '500px',
              margin: '1rem auto 0',
              color: 'var(--charcoal-soft)',
              fontSize: '1rem',
            }}
          >
            Kumpulan proyek yang saya kerjakan di bidang AI dan pengembangan web.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
          className="works-grid"
        >
          {projects.map((p, i) => (
            <a
              key={p.category}
              href={p.link}
              className="work-card scroll-reveal"
              style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                background: 'var(--white-pure)',
                boxShadow: 'var(--shadow-soft)',
                display: 'block',
                animationDelay: `${i * 0.15}s`,
                transition: 'all 0.4s var(--ease-smooth)',
                cursor: 'pointer',
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '28px 28px 0 0',
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="work-card__img"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s var(--ease-smooth)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(45,58,37,0.55) 100%)',
                  }}
                />
                {/* Category badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1.2rem',
                    left: '1.2rem',
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                    background: 'rgba(247, 245, 240, 0.9)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--sage-deep)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.category}
                </span>
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem 1.8rem 1.8rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.6rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--charcoal)',
                    }}
                  >
                    {p.title}
                  </h3>
                  <span
                    className="work-card__arrow"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'var(--cream)',
                      color: 'var(--sage-deep)',
                      transition: 'all 0.3s var(--ease-smooth)',
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                {/* Reveal description */}
                <div
                  className="work-card__desc"
                  style={{
                    overflow: 'hidden',
                    maxHeight: '0',
                    opacity: 0,
                    transition: 'all 0.5s var(--ease-smooth)',
                  }}
                >
                  <p
                    style={{
                      color: 'var(--charcoal-soft)',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                    }}
                  >
                    {p.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '0.3rem 0.8rem',
                          borderRadius: '6px',
                          background: 'rgba(138, 154, 123, 0.12)',
                          color: 'var(--sage-deep)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .work-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-medium) !important;
        }
        .work-card:hover .work-card__img {
          transform: scale(1.12);
        }
        .work-card:hover .work-card__desc {
          max-height: 300px;
          opacity: 1;
          margin-top: 0.6rem;
        }
        .work-card:hover .work-card__arrow {
          background: var(--sage-deep) !important;
          color: var(--cream) !important;
          transform: rotate(45deg);
        }
      `}</style>
    </section>
  );
}
