import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s var(--ease-smooth)',
        background: scrolled ? 'rgba(45, 58, 37, 0.82)' : 'rgba(45, 58, 37, 0.55)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(168, 184, 154, 0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 32px -8px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#home"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--cream)',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--sage)',
              color: 'var(--moss-dark)',
              fontSize: '1.1rem',
              fontWeight: 800,
              fontFamily: 'var(--font-sans)',
            }}
          >
            F
          </span>
          Fajri
        </a>

        {/* Desktop menu */}
        <ul
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            alignItems: 'center',
          }}
          className="nav-desktop"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  color: 'rgba(247, 245, 240, 0.85)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                  position: 'relative',
                  padding: '0.3rem 0',
                  transition: 'all 0.3s var(--ease-smooth)',
                }}
                className="nav-link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-toggle"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--cream)',
          }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: 'rgba(45, 58, 37, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '1.5rem 2rem 2rem',
            animation: 'fadeSlideUp 0.4s var(--ease-smooth)',
          }}
          className="nav-mobile"
        >
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: 'var(--cream)',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--leaf);
          border-radius: 2px;
          transition: width 0.3s var(--ease-smooth);
        }
        .nav-link:hover {
          color: var(--cream) !important;
          transform: translateY(-2px);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
