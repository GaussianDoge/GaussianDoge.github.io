import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projectCategories, projects } from "../data/projects";

const categoryDescriptions = {
  digital:
    "Processor microarchitecture, RTL verification, physical implementation, and board-level test design.",
  embedded:
    "Closed-loop control that connects calibrated sensing, firmware, tuning, and physical behavior.",
  "machine-learning":
    "Sequence modeling and signal processing for decoding text from wrist sEMG.",
  software:
    "Full-stack products, real-time communication, and interactive systems built around clear state and timing.",
};

const cardEvidenceIds = {
  "vector-cpu": "chip-layout",
  "ooo-processor": "architecture",
  "pid-car": "car-still",
  semg: "results-table",
};

const placeholders = {
  eventhub: {
    label: "MERN + ZUSTAND",
    title: "Events, social state, and threaded discussion.",
    description: "A full-stack path from MongoDB records to responsive React interactions.",
  },
  "meow-talk": {
    label: "WEBRTC PEER MESH",
    title: "Real-time media across multiple peers.",
    description: "React Native interface state coordinated with direct WebRTC connections and Firestore data.",
  },
  "rpg-engine": {
    label: "C++ / SFML",
    title: "A game loop composed from focused systems.",
    description: "States, timing, camera rendering, collision, audio, weather, and interface behavior.",
  },
};

function resolveAsset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

function ProjectCard({ project }) {
  const preferredEvidence = project.evidence.find(
    (item) => item.id === cardEvidenceIds[project.slug],
  );
  const placeholder = placeholders[project.slug];
  const mediaClass = [
    "card-media",
    project.slug === "vector-cpu" ? "dark" : "light",
    project.slug === "pid-car" ? "photo" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className="project-card" to={`/projects/${project.slug}`}>
      {preferredEvidence ? (
        <div className={mediaClass}>
          <img
            src={resolveAsset(preferredEvidence.path)}
            width={preferredEvidence.width}
            height={preferredEvidence.height}
            alt={preferredEvidence.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="card-placeholder" aria-hidden="true">
          <span>{placeholder.label}</span>
          <strong>{placeholder.title}</strong>
          <p>{placeholder.description}</p>
        </div>
      )}
      <div className="project-card-body">
        <div className="card-meta">
          <span>{project.date}</span>
          <span>{project.technologies.slice(0, 2).join(" · ")}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.lead}</p>
        <span className="card-action">Read case study →</span>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Engineering Projects — Zhengwen Tang";
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.append(description);
    }
    description.content =
      "Explore Zhengwen Tang’s digital hardware, embedded systems, machine-learning, and software engineering projects.";
  }, []);

  return (
    <main id="main">
      <header className="page-intro wrap">
        <p className="eyebrow">PROJECT DIRECTORY / 07 CASE STUDIES</p>
        <h1>Engineering across hardware and software.</h1>
        <p>
          Detailed project pages cover the problem, implementation, verification,
          and available evidence behind each build.
        </p>
        <nav className="category-jumps" aria-label="Project categories">
          {projectCategories.map((category) => (
            <Link key={category.id} to={`/projects?section=${category.id}`}>
              {category.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="project-directory wrap">
        {projectCategories.map((category, categoryIndex) => {
          const categoryProjects = projects.filter(
            (project) => project.categoryId === category.id,
          );
          const listClass = [
            "project-list",
            categoryProjects.length === 1 ? "one" : "",
            categoryProjects.length === 3 ? "three" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <section
              className="project-group"
              id={category.id}
              key={category.id}
              aria-labelledby={`${category.id}-title`}
            >
              <div className="group-heading">
                <div>
                  <p className="eyebrow">
                    {String(categoryIndex + 1).padStart(2, "0")} / {categoryProjects.length}{" "}
                    {categoryProjects.length === 1 ? "PROJECT" : "PROJECTS"}
                  </p>
                  <h2 id={`${category.id}-title`}>{category.label}</h2>
                </div>
                <p>{categoryDescriptions[category.id]}</p>
              </div>
              <div className={listClass}>
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
