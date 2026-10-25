import { useEffect } from "react";
import { Link } from "react-router-dom";

import { homeData } from "../data/home.js";

const sectionNumber = (index) => String(index + 1).padStart(2, "0");

function HomePage() {
  const {
    profile,
    experience,
    projects,
    coursework,
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
      <Hero profile={profile} contact={contact} />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <CourseworkSection coursework={coursework} />
      <ContactSection contact={contact} />
    </main>
  );
}

function ContactIcon({ type }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7.25A5.65 5.65 0 0 0 19.22 3.3 5.4 5.4 0 0 0 19.13 1S17.95.65 15 2.48a13.38 13.38 0 0 0-6 0C6.05.65 4.87 1 4.87 1a5.4 5.4 0 0 0-.09 2.3A5.65 5.65 0 0 0 8.06 14.5 4.8 4.8 0 0 0 7 18v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="5" cy="5" r="2" />
      <path d="M3 9h4v12H3zM11 9h4v2a4.5 4.5 0 0 1 8 3v7h-4v-6.5a2 2 0 0 0-4 0V21h-4z" />
    </svg>
  );
}

function ContactIcons({ email, links }) {
  const contacts = [
    { type: "email", label: "Email", href: `mailto:${email}` },
    { type: "github", label: "GitHub", href: links.github, external: true },
    { type: "linkedin", label: "LinkedIn", href: links.linkedin, external: true },
  ];

  return (
    <ul className="contact-icons" aria-label="Contact links">
      {contacts.map((item) => (
        <li key={item.type}>
          <a
            className="contact-icon"
            href={item.href}
            aria-label={item.label}
            title={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            <ContactIcon type={item.type} />
            <span className="sr-only">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Hero({ profile, contact }) {
  return (
    <section className="hero wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-identity">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" /> {profile.eyebrow}
          </p>
          <h1 id="hero-title">
            Zhengwen
            <br />
            <span>Tang.</span>
          </h1>
        </div>
        <div className="hero-summary">
          <p className="intro">{profile.introduction}</p>
          <div className="hero-actions">
            <Link className="button" to="/?section=experience">
              View my work <span aria-hidden="true">↓</span>
            </Link>
            <ContactIcons email={contact.email} links={profile.links} />
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
      </div>
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
          {/* <h2 id="experience-title">{experience.title}</h2> */}
        </div>
        <p>{experience.summary}</p>
      </div>
      <article className="experience-entry">
        <div className="experience-role">
          <p className="experience-date">{experience.date}</p>
          <h3>{experience.organization}</h3>
          <h4>{experience.institution}</h4>
          <p>{experience.role}</p>
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
