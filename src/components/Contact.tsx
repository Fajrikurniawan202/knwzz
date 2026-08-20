import { useState } from 'react';
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';

function Instagram({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  const socials = [
    {
      icon: <Instagram size={20} />,
      label: 'Instagram',
      value: '@knwzz_',
      href: 'https://instagram.com/knwzz_',
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'kurniawanfazri111@gmail.com',
      href: 'mailto:kurniawanfazri111@gmail.com',
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      value: '087761751714',
      href: 'https://wa.me/6287761751714',
    },
  ];

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        background: 'linear-gradient(160deg, var(--moss-dark) 0%, var(--moss) 100%)',
        color: 'var(--cream)',
        paddingTop: '5rem',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-5%',
          width: '350px',
          height: '350px',
          borderRadius: '50% 50% 40% 60% / 50% 60% 40% 50%',
          background: 'rgba(168, 184, 154, 0.08)',
          animation: 'floatBlob 20s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-8%',
          width: '280px',
          height: '280px',
          borderRadius: '60% 40% 50% 50% / 40% 60% 40% 60%',
          background: 'rgba(201, 168, 124, 0.1)',
          animation: 'floatBlobSlow 22s ease-in-out infinite',
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
              color: 'var(--leaf)',
              textTransform: 'uppercase',
              marginBottom: '0.8rem',
            }}
          >
            Let's talk
          </p>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: 'var(--cream)',
            }}
          >
            Get in <span style={{ fontStyle: 'italic', color: 'var(--leaf)' }}>Touch</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: info */}
          <div className="scroll-reveal">
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'rgba(247, 245, 240, 0.85)',
                marginBottom: '2rem',
                maxWidth: '420px',
              }}
            >
              Tertarik untuk berkolaborasi atau ingin tahu lebih lanjut? Jangan ragu untuk
              menghubungi saya melalui form di samping atau langsung via kontak berikut.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.3rem',
                    borderRadius: '16px',
                    background: 'rgba(247, 245, 240, 0.07)',
                    border: '1px solid rgba(168, 184, 154, 0.2)',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.3s var(--ease-smooth)',
                  }}
                  className="contact-item"
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(168, 184, 154, 0.15)',
                      color: 'var(--leaf)',
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: '0.72rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(247, 245, 240, 0.6)',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {s.label}
                    </p>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--cream)' }}>
                      {s.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="scroll-reveal">
            <form
              onSubmit={handleSubmit}
              style={{
                background: 'rgba(247, 245, 240, 0.06)',
                border: '1px solid rgba(168, 184, 154, 0.18)',
                borderRadius: '24px',
                padding: '2.2rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(247, 245, 240, 0.7)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(247, 245, 240, 0.08)',
                      border: '1px solid rgba(168, 184, 154, 0.25)',
                      color: 'var(--cream)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'all 0.3s var(--ease-smooth)',
                    }}
                    className="form-input"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(247, 245, 240, 0.7)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(247, 245, 240, 0.08)',
                      border: '1px solid rgba(168, 184, 154, 0.25)',
                      color: 'var(--cream)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'all 0.3s var(--ease-smooth)',
                    }}
                    className="form-input"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(247, 245, 240, 0.7)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      background: 'rgba(247, 245, 240, 0.08)',
                      border: '1px solid rgba(168, 184, 154, 0.25)',
                      color: 'var(--cream)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'all 0.3s var(--ease-smooth)',
                    }}
                    className="form-input"
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.9rem 2rem',
                    borderRadius: '999px',
                    background: sent ? 'var(--leaf)' : 'var(--sage-deep)',
                    color: 'var(--cream)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-smooth)',
                    boxShadow: '0 8px 24px -8px rgba(0,0,0,0.3)',
                  }}
                  className="btn-submit"
                >
                  {sent ? 'Message Sent!' : 'Send Message'}
                  <Send size={16} style={{ animation: sent ? 'none' : undefined }} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(168, 184, 154, 0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingBottom: '2rem',
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'rgba(247, 245, 240, 0.6)' }}>
            © 2026 Fajri Kurniawan. All rights reserved.
          </p>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              color: 'rgba(247, 245, 240, 0.6)',
            }}
          >
            <MapPin size={14} />
            Indonesia
          </p>
        </div>
      </div>

      <style>{`
        .contact-item:hover {
          transform: translateY(-3px);
          background: rgba(247, 245, 240, 0.12) !important;
          border-color: rgba(168, 184, 154, 0.4) !important;
        }
        .form-input:focus {
          border-color: var(--leaf) !important;
          background: rgba(247, 245, 240, 0.12) !important;
        }
        .form-input::placeholder {
          color: rgba(247, 245, 240, 0.4);
        }
        .btn-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px -8px rgba(0,0,0,0.4) !important;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
