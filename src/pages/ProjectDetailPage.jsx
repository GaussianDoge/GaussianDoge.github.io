import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PidDemo from "../components/PidDemo";
import { getProjectBySlug } from "../data/projects";

const resolveAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const resultEvidenceIds = {
  "ooo-processor": ["overall-simulation"],
  semg: ["results-table"],
};

function setDescription(content) {
  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement("meta");
    description.name = "description";
    document.head.append(description);
  }
  description.content = content;
}

function ProjectIntroduction({ paragraphs }) {
  return (
    <div className="detail-copy">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function TapeoutHeroGallery({ evidence }) {
  const images = evidence.filter((item) => item.type === "image");

  return (
    <div className="tapeout-hero-gallery" aria-label="Tapeout project artifacts">
      {images.map((item, index) => (
        <figure className="tapeout-hero-card" key={item.id}>
          <a
            href={resolveAsset(item.path)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.title.toLowerCase()} at full size`}
          >
            <img
              src={resolveAsset(item.path)}
              width={item.width}
              height={item.height}
              alt={item.alt}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
            />
          </a>
          <figcaption>
            <span>{item.title}</span>
            <span aria-hidden="true">↗</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function HeroAside({ project }) {
  if (project.slug === "pid-car") {
    return <PidDemo />;
  }

  if (project.slug === "vector-cpu") {
    return <TapeoutHeroGallery evidence={project.evidence} />;
  }

  const heroEvidence = project.evidence.find((item) => item.type === "image");
  if (heroEvidence) {
    const visualClass = [
      "detail-visual",
      project.slug === "vector-cpu" ? "dark" : "light",
    ].join(" ");
    return (
      <figure className={visualClass}>
        <a
          href={resolveAsset(heroEvidence.path)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${heroEvidence.title.toLowerCase()} at full size`}
        >
          <img
            src={resolveAsset(heroEvidence.path)}
            width={heroEvidence.width}
            height={heroEvidence.height}
            alt={heroEvidence.alt}
            fetchPriority="high"
            decoding="async"
          />
        </a>
        <figcaption>
          <span>{heroEvidence.title}</span>
          <span>Open full resolution ↗</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <aside className="project-summary-panel" aria-label={`${project.title} summary`}>
      <span>{project.category}</span>
      <strong>{project.focus}</strong>
      <p>{project.technologies.join(" · ")}</p>
    </aside>
  );
}

function SelectedResults({ project }) {
  const evidenceIds = resultEvidenceIds[project.slug];
  if (!evidenceIds) {
    return null;
  }

  const resultEvidence = evidenceIds
    .map((id) => project.evidence.find((item) => item.id === id))
    .filter(Boolean);
  const resultMetrics =
    project.slug === "ooo-processor"
      ? project.results.metrics.slice(0, 1)
      : project.results.metrics;

  return (
    <section
      className="project-results-section"
      aria-labelledby={`${project.slug}-results-title`}
    >
      <div className="wrap">
        <div className="project-results-head">
          <div>
            <p className="eyebrow">SELECTED RESULTS</p>
            <h2 id={`${project.slug}-results-title`}>{project.results.heading}</h2>
          </div>
          <div
            className={`compact-result-metrics${resultMetrics.length === 1 ? " single" : ""}`}
            aria-label="Selected project metrics"
          >
            {resultMetrics.map((metric) => (
              <div key={`${metric.value}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`result-gallery${resultEvidence.length === 1 ? " single" : ""}`}>
          {resultEvidence.map((item) => (
            <figure className="result-card" key={item.id}>
              <a
                href={resolveAsset(item.path)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.title.toLowerCase()} at full size`}
              >
                <img
                  src={resolveAsset(item.path)}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Zhengwen Tang`;
      setDescription(`${project.title} case study by Zhengwen Tang. ${project.lead}`);
    } else {
      document.title = "Project not found — Zhengwen Tang";
      setDescription("The requested project could not be found in Zhengwen Tang’s portfolio.");
    }
  }, [project]);

  if (!project) {
    return (
      <main className="page-intro wrap" id="main">
        <p className="eyebrow">PROJECT DIRECTORY</p>
        <h1>Project not found.</h1>
        <p>
          This case study is unavailable. <Link to="/projects">Browse all projects →</Link>
        </p>
      </main>
    );
  }

  const previousProject = getProjectBySlug(project.previousSlug);
  const nextProject = getProjectBySlug(project.nextSlug);

  return (
    <main className="project-page" id="main">
      <section className="project-hero wrap" aria-labelledby="project-title">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to={`/projects?section=${project.categoryId}`}>{project.category}</Link>
            </li>
            <li aria-current="page">{project.shortTitle}</li>
          </ol>
        </nav>

        <div className="detail-hero-grid">
          <div className="detail-header">
            <p className="eyebrow">{project.eyebrow}</p>
            <h1 id="project-title">{project.title}</h1>
            <p className="detail-lead">{project.lead}</p>
            {project.externalActions.length > 0 && (
              <div className="detail-actions">
                {project.externalActions.map((action) => (
                  <a
                    href={action.href}
                    key={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {action.label} ↗
                  </a>
                ))}
              </div>
            )}
            <ul className="detail-tags" aria-label="Technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <dl className="fact-grid">
              <div>
                <dt>Context</dt>
                <dd>{project.context}</dd>
              </div>
              <div>
                <dt>Period</dt>
                <dd>{project.date}</dd>
              </div>
            </dl>
          </div>
          <HeroAside project={project} />
        </div>
      </section>

      <section className="detail-section" aria-labelledby="overview-title">
        <div className="wrap detail-layout">
          <div className="detail-section-title">
            <p className="eyebrow">PROJECT INTRODUCTION</p>
            <h2 id="overview-title">{project.overview.heading}</h2>
          </div>
          <ProjectIntroduction paragraphs={project.overview.paragraphs} />
        </div>
      </section>

      <SelectedResults project={project} />

      <nav className="project-pager wrap" aria-label="Project navigation">
        <Link to={`/projects/${previousProject.slug}`}>
          <span>← Previous project</span>
          <strong>{previousProject.title}</strong>
        </Link>
        <Link to={`/projects/${nextProject.slug}`}>
          <span>Next project →</span>
          <strong>{nextProject.title}</strong>
        </Link>
      </nav>
    </main>
  );
}
