import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PidDemo from "../components/PidDemo";
import { getProjectBySlug } from "../data/projects";

const resolveAsset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

function setDescription(content) {
  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement("meta");
    description.name = "description";
    document.head.append(description);
  }
  description.content = content;
}

function ImplementationPanel({ implementation, compact = false }) {
  const steps = compact
    ? implementation.steps.slice(0, 3)
    : implementation.steps;

  return (
    <div className="implementation-panel">
      <div className="implementation-panel-header">
        <span>{implementation.label}</span>
        <span>{implementation.stack}</span>
      </div>
      <ol className="implementation-steps">
        {steps.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Narrative({ content }) {
  return (
    <div className="detail-copy">
      {content.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {content.bullets?.length > 0 && (
        <ul>
          {content.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {content.note && <div className="detail-note-box">{content.note}</div>}
    </div>
  );
}

function HeroAside({ project }) {
  if (project.slug === "pid-car") {
    return <PidDemo />;
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
    <aside aria-label={`${project.title} system overview`}>
      <ImplementationPanel implementation={project.implementation} compact />
    </aside>
  );
}

function EvidenceGallery({ project }) {
  const galleryEvidence = project.evidence.filter(
    (item) => item.gallery !== false,
  );

  if (galleryEvidence.length === 0) {
    return null;
  }

  return (
    <section className="detail-section" id="evidence" aria-labelledby="evidence-title">
      <div className="wrap">
        <div className="detail-section-title">
          <p className="eyebrow">05 / EVIDENCE</p>
          <h2 id="evidence-title">Inspect the project artifacts.</h2>
        </div>
        <div className={`evidence-grid${galleryEvidence.length === 3 ? " three" : ""}`}>
          {galleryEvidence.map((item) => {
            const assetUrl = resolveAsset(item.path);
            if (item.type === "pdf") {
              const reportUrl = item.page ? `${assetUrl}#page=${item.page}` : assetUrl;
              return (
                <article className="external-demo" key={item.id}>
                  <div>
                    <span className="play-icon" aria-hidden="true">
                      ↗
                    </span>
                    <h2>{item.title}</h2>
                    <p>{item.caption}</p>
                    <a href={reportUrl} target="_blank" rel="noopener noreferrer">
                      {item.page ? `Open report · page ${item.page}` : "Open report"}
                    </a>
                  </div>
                </article>
              );
            }

            const cardClass = [
              "evidence-card",
              project.slug === "vector-cpu" && item.id === "chip-layout"
                ? "dark"
                : "",
              item.id.includes("photo") || item.id === "car-still" ? "photo" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <figure className={cardClass} key={item.id}>
                <a href={assetUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={assetUrl}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.caption} Open artifact ↗</span>
                </figcaption>
              </figure>
            );
          })}
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
              <div>
                <dt>Role / team</dt>
                <dd>{project.team}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{project.focus}</dd>
              </div>
            </dl>
          </div>
          <HeroAside project={project} />
        </div>
      </section>

      <section className="detail-section" aria-labelledby="overview-title">
        <div className="wrap detail-layout">
          <div className="detail-section-title">
            <p className="eyebrow">01 / OVERVIEW &amp; ROLE</p>
            <h2 id="overview-title">{project.overview.heading}</h2>
          </div>
          <Narrative content={project.overview} />
        </div>
      </section>

      <section className="detail-section" aria-labelledby="problem-title">
        <div className="wrap detail-layout">
          <div className="detail-section-title">
            <p className="eyebrow">02 / PROBLEM &amp; CONSTRAINTS</p>
            <h2 id="problem-title">{project.problem.heading}</h2>
          </div>
          <Narrative content={project.problem} />
        </div>
      </section>

      <section className="detail-section" aria-labelledby="implementation-title">
        <div className="wrap detail-layout">
          <div className="detail-section-title">
            <p className="eyebrow">03 / IMPLEMENTATION</p>
            <h2 id="implementation-title">{project.implementation.heading}</h2>
          </div>
          <ImplementationPanel implementation={project.implementation} />
        </div>
      </section>

      <section className="detail-section" aria-labelledby="results-title">
        <div className="wrap detail-layout">
          <div className="detail-section-title">
            <p className="eyebrow">04 / VERIFICATION &amp; RESULTS</p>
            <h2 id="results-title">{project.results.heading}</h2>
          </div>
          <div className="detail-copy">
            {project.results.metrics.length > 0 && (
              <div className="detail-metrics" aria-label="Selected project results">
                {project.results.metrics.map((metric) => (
                  <div key={`${metric.value}-${metric.label}`}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    {metric.detail && <small>{metric.detail}</small>}
                  </div>
                ))}
              </div>
            )}
            {project.results.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {project.results.bullets?.length > 0 && (
              <ul>
                {project.results.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {project.results.note && (
              <div className="detail-note-box">{project.results.note}</div>
            )}
          </div>
        </div>
      </section>

      <EvidenceGallery project={project} />

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
