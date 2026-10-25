import { Link, Outlet, useLocation } from 'react-router-dom';
import ScrollToSection from './ScrollToSection';

function SectionLink({ section, children, className = '' }) {
  const location = useLocation();
  const activeSection = new URLSearchParams(location.search).get('section');
  const isActive = location.pathname === '/' && activeSection === section;
  const classes = [className, isActive ? 'route-active' : ''].filter(Boolean).join(' ');

  return (
    <Link
      to={`/?section=${section}`}
      className={classes || undefined}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}

export default function SiteLayout() {
  const location = useLocation();
  const activeSection = new URLSearchParams(location.search).get('section');
  const homeActive = location.pathname === '/' && !activeSection;
  const projectsActive = location.pathname.startsWith('/projects');

  const skipToContent = (event) => {
    event.preventDefault();
    const content = document.getElementById('main-content');
    content?.focus({ preventScroll: true });
    content?.scrollIntoView({ block: 'start' });
  };

  const returnToTop = () => {
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" onClick={skipToContent}>
        Skip to content
      </a>

      <header className="site-header wrap">
        <Link className="wordmark" to="/" aria-label="Zhengwen Tang, home">
          <span className="mark" aria-hidden="true">
            zt<span>.</span>
          </span>
          <span>Zhengwen Tang</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <Link
            to="/"
            className={homeActive ? 'route-active' : undefined}
            aria-current={homeActive ? 'page' : undefined}
            onClick={returnToTop}
          >
            Home
          </Link>
          <SectionLink section="experience">Experience</SectionLink>
          <Link
            to="/projects"
            className={projectsActive ? 'route-active' : undefined}
            aria-current={projectsActive ? 'page' : undefined}
          >
            Projects
          </Link>
          <SectionLink section="coursework">Coursework</SectionLink>
          <SectionLink section="contact" className="nav-contact">
            Get in touch <span aria-hidden="true">↗</span>
          </SectionLink>
        </nav>
      </header>

      <ScrollToSection />
      <div id="main-content" className="route-content" tabIndex="-1">
        <Outlet />
      </div>

      <footer className="site-footer wrap">
        <span>© {new Date().getFullYear()} Zhengwen Tang</span>
        <span>Hardware, software, and the systems between them.</span>
        <Link to="/" onClick={returnToTop}>
          Back to top ↑
        </Link>
      </footer>
    </div>
  );
}
