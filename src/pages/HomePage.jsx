import { useEffect } from "react";
import { Link } from "react-router-dom";

import { homeData } from "../data/home.js";

const sectionNumber = (index) => String(index + 1).padStart(2, "0");
const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}assets/${path.replace(/^\/?assets\//, "")}`;

function HomePage() {
  const {
    profile,
    experience,
    projects,
    coursework,
    background,
    skills,
    contact,
  } = homeData;

  useEffect(() => {
    document.title = homeData.meta.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.append(description);
    }
    description.setAttribute("content", homeData.meta.description);
  }, []);

  return (
    <main id="main" className="home-page">
      <Hero profile={profile} />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <CourseworkSection coursework={coursework} />
      <BackgroundSection background={background} profile={profile} skills={skills} />
      <ContactSection contact={contact} />
    </main>
  );
}

function Hero({ profile }) {
  const artifact = profile.featuredArtifact;

  return (
    <section className="hero wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" /> {profile.eyebrow}
        </p>
        <h1 id="hero-title">
          Zhengwen
          <br />
          <span>Tang.</span>
        </h1>
        <p className="intro">{profile.introduction}</p>
        <div className="hero-actions">
          <Link className="button" to="/?section=experience">
            View my work <span aria-hidden="true">↓</span>
          </Link>
          <a
            className="text-link"
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <dl className="profile-facts">
          <div>
            <dt>Education</dt>
            <dd>
              {profile.education.degree}
              <br />
              {profile.education.institution}
            </dd>
          </div>
          <div>
            <dt>Interests</dt>
            <dd>{profile.interests.join(" · ")}</dd>
          </div>
        </dl>
      </div>

      {/* <figure className="chip-figure">
        <div className="figure-top">
          <span>01 / {artifact.label}</span>
          <span>{artifact.discipline}</span>
        </div>
        <img
          className="chip-art"
          src={assetUrl(artifact.image)}
          width={artifact.width}
          height={artifact.height}
          alt={artifact.alt}
          decoding="async"
        />
        <figcaption>
          <span>{artifact.title}</span>
          <span>Project artifact</span>
        </figcaption>
      </figure> */}

      {/* <div className="hero-foot">
        <span>{profile.education.shortInstitution} · Computer Science & Engineering</span>
        <span>
          {profile.primaryTools.map((tool, index) => (
            <span key={tool}>
              {index > 0 && <span className="slash"> / </span>}
              {tool}
            </span>
          ))}
        </span>
      </div> */}
    </section>
  );
}

function ExperienceSection({ experience }) {
  return (
    <section
      className="experience-section wrap section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{experience.eyebrow}</p>
          <h2 id="experience-title">{experience.title}</h2>
        </div>
        <p>{experience.summary}</p>
      </div>
      <article className="experience-entry">
        <div className="experience-role">
          <p className="experience-date">{experience.date}</p>
          <h3>{experience.role}</h3>
          <p>
            {experience.organization}
            <br />
            {experience.institution}
          </p>
        </div>
        <div className="experience-body">
          <p className="experience-lead">{experience.lead}</p>
          <div className="experience-highlights">
            {experience.highlights.map((highlight, index) => (
              <div key={highlight.title}>
                <span>{sectionNumber(index)}</span>
                <div>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

function ProjectsSection({ projects }) {
  return (
    <section className="home-project-section wrap section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{projects.eyebrow}</p>
          <h2 id="work-title">{projects.title}</h2>
        </div>
        <p>{projects.summary}</p>
      </div>
      <div className="category-grid">
        {projects.categories.map((category, index) => (
          <Link
            className="category-card"
            to={`/projects?section=${category.slug}`}
            key={category.slug}
          >
            <p className="category-meta">
              {sectionNumber(index)} · {category.projects.length}{" "}
              {category.projects.length === 1 ? "PROJECT" : "PROJECTS"}
            </p>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <ul>
              {category.projects.map((project) => (
                <li key={project.slug}>{project.name}</li>
              ))}
            </ul>
            <span className="category-link">Explore {category.title.toLowerCase()} →</span>
          </Link>
        ))}
      </div>
      <Link className="directory-cta" to="/projects">
        <strong>Browse the complete project directory</strong>
        <span>Open all seven case studies →</span>
      </Link>
    </section>
  );
}

function CourseworkSection({ coursework }) {
  return (
    <section
      className="coursework-section wrap section"
      id="coursework"
      aria-labelledby="coursework-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">{coursework.eyebrow}</p>
          <h2 id="coursework-title">{coursework.title}</h2>
        </div>
        <p>{coursework.summary}</p>
      </div>
      <ul className="course-list" aria-label="Relevant coursework">
        {coursework.courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </section>
  );
}

function BackgroundSection({ background, profile, skills }) {
  return (
    <section className="wrap section about-section" id="about" aria-labelledby="about-title">
      <div>
        <p className="eyebrow">{background.eyebrow}</p>
        <h2 id="about-title">{background.title}</h2>
        {background.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <a
          className="text-link"
          href={profile.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="skills" aria-label="Technical skills">
        {skills.map((skill) => (
          <div key={skill.title}>
            <h3>{skill.title}</h3>
            <p>{skill.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ contact }) {
  return (
    <section className="contact-section wrap" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">{contact.eyebrow}</p>
      <div className="contact-row">
        <h2 id="contact-title">{contact.title}</h2>
        <div>
          <p>{contact.description}</p>
          <a className="email-link" href={`mailto:${contact.email}`}>
            {contact.email} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
