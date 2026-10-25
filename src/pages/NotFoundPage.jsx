import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page not found — Zhengwen Tang';

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.append(description);
    }
    description.content = 'The requested page was not found in Zhengwen Tang’s engineering portfolio.';
  }, []);

  return (
    <main className="not-found wrap" aria-labelledby="not-found-title">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1 id="not-found-title">This page is off the map.</h1>
      <p>
        The address may have changed, or the project may have moved. Return home or
        browse the complete project directory.
      </p>
      <div className="not-found-actions">
        <Link className="button" to="/">
          Return home <span aria-hidden="true">→</span>
        </Link>
        <Link className="text-link" to="/projects">
          Browse projects <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
