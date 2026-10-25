export const homeData = {
  meta: {
    title: "Zhengwen Tang — Hardware & Software Engineer",
    description:
      "Zhengwen Tang is a UCLA Computer Science and Engineering student working across processor architecture, embedded systems, hardware security, machine learning, and software engineering.",
  },

  // Home page introduction
  profile: {
    name: "Zhengwen Tang",
    shortMark: "zt.",
    eyebrow: "Hi, I’M",
    introduction:
      "I’m a Computer Science and Engineering student at UCLA. My studies and research cover computer architecture, digital integrated circuits, hardware security, embedded systems, machine learning, operating systems, and full-stack software.",
    education: {
      degree: "B.S. Computer Science & Engineering",
      institution: "University of California, Los Angeles",
      shortInstitution: "UCLA",
    },
    interests: [
      "Architecture",
      "Security",
      "Embedded systems",
      "Machine learning",
      "Software",
    ],
    // primaryTools: ["Verilog", "SystemVerilog", "C & C++", "Python", "Java", "C#", "JavaScript", "HTML", "MATLAB", "MIPS", "RISC-V", "ARM", "Lisp", "Shell", "Haskell"],
    links: {
      github: "https://github.com/GaussianDoge",
      linkedin: "https://www.linkedin.com/in/zhengwen-tang-18124827a/",
    },
    featuredArtifact: {
      label: "RISC-V",
      discipline: "Physical design",
      title: "Processor core + pad frame",
      image: "/assets/chip-physical-layout.png",
      width: 1173,
      height: 1124,
      alt: "Physical layout of a processor core surrounded by I/O and power pads.",
    },
  },
  
  // Professional experience section
  experience: {
    eyebrow: "01 / PROFESSIONAL EXPERIENCE",
    title: "Research across security and architecture.",
    summary: "Embedded security, measurement automation, and chiplet-GPU scheduling.",
    date: "May 2026 — Present",
    role: "Undergraduate Researcher",
    organization: "Secure Systems and Architectures Lab",
    institution: "University of California, Los Angeles",
    lead:
      `I studied hardware and software systems security and low-level performance optimization, 
      focusing on instruction-level side-channel attacks and GPU scheduling policies.`,
    highlights: [
      {
        title: "Hardware security",
        description:
          `Explored power side-channel vulnerabilities in widely used encryption algorithms (AES, ARIA, LEA, and SEED)
           using STM32 microcontrollers, ChipWhisperer, oscilloscopes, signal processing, and machine learning.`,
      },
      {
        title: "Automated experiment pipeline",
        description:
          `Developed Python scripts to automatically generate thousands of embedded C firmware and ARM Cortex-M0 
            assembly payloads and enable automatic board-drive flash and instruction-level power traces on an oscilloscope.`,
      },
      {
        title: "GPU scheduling and architecture",
        description:
          "Explore scheduling policies and chiplet placement for LLM workloads on chiplet-based GPU architectures.",
      },
    ],
  },

  // Projects section
  projects: {
    eyebrow: "02 / PROJECTS",
    title: "Projects.",
    summary:
      "Seven projects, each with its own page, technical decisions, and supporting evidence.",
    categories: [
      {
        slug: "digital",
        title: "Digital Design",
        description:
          "Processor microarchitecture, RTL verification, physical design, and tapeout support.",
        projects: [
          { name: "RISC-V vector CPU tapeout", slug: "vector-cpu" },
          { name: "Out-of-order RISC-V processor", slug: "ooo-processor" },
        ],
      },
      {
        slug: "embedded",
        title: "Embedded Systems",
        description:
          "Closed-loop control that connects sensing, firmware, tuning, and physical behavior.",
        projects: [{ name: "Autonomous PID car", slug: "pid-car" }],
      },
      {
        slug: "machine-learning",
        title: "Machine Learning",
        description:
          "Sequence modeling and signal processing for wrist-sEMG keystroke decoding.",
        projects: [{ name: "sEMG keystroke prediction", slug: "semg" }],
      },
      {
        slug: "software",
        title: "Software",
        description:
          "Real-time communication, full-stack product development, and interactive systems.",
        projects: [
          { name: "EventHub", slug: "eventhub" },
          { name: "Meow Talk", slug: "meow-talk" },
          { name: "2D RPG game engine", slug: "rpg-engine" },
        ],
      },
    ],
  },
  coursework: {
    eyebrow: "03 / RELEVANT COURSEWORK",
    title: "Relevant coursework.",
    summary:
      "Courses spanning hardware, systems, software, artificial intelligence, and theory.",
    courses: [
      "Computer Systems Architecture",
      "Digital Circuits",
      "Digital Design Laboratory",
      "Design and Experimental Verification of CMOS Circuits",
      "Electrical and Electronic Circuits",
      "Systems and Signals",
      "Operating Systems",
      "Computer System Security",
      "Network Fundamentals",
      "Programming Languages",
      "Software Construction",
      "Data Structures",
      "Machine Learning",
      "Neural Networks & Deep Learning",
      "Computer Graphics",
      "Algorithms and Complexity",
      "Theory of Computation",
      "Probability and Statistics",
    ],
  },
  background: {
    eyebrow: "04 / BACKGROUND",
    title: "Across the hardware–software boundary.",
    paragraphs: [
      `I’m studying Computer Science and Engineering at the University of California, 
        Los Angeles. My work spans processor microarchitecture, digital implementation, 
        embedded control, hardware security research, machine learning, and full-stack applications.`,
      `I’m especially interested in architecture, GPU scheduling, and security—and 
      in turning those ideas into systems that can be implemented, measured, and explained clearly.`,
    ],
  },
  skills: [
    {
      title: "Digital design",
      items: ["SystemVerilog", "Verilog", "RISC-V", "Vivado / XSim", "Cadence", "Hammer"],
    },
    {
      title: "Embedded & systems",
      items: ["C", "C++", "ARM assembly", "Python", "STM32", "Arduino", "Linux", "Git", "GDB"],
    },
    {
      title: "Lab & analysis",
      items: ["ChipWhisperer", "Oscilloscopes", "KiCad", "NumPy", "PyTorch", "Matplotlib"],
    },
    {
      title: "Full-stack software",
      items: ["React", "Node.js", "Express", "MongoDB", "Zustand", "JavaScript", "HTML"],
    },
  ],
  contact: {
    eyebrow: "05 / CONTACT",
    title: "Let’s build something tangible.",
    description:
      "For embedded systems, digital design, software engineering, and hardware research conversations.",
    email: "zhengwen@ucla.edu",
  },
  footer: "Hardware, software, and the systems between them.",
};
