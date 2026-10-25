export const homeData = {
  meta: {
    title: "Zhengwen Tang — Hardware & Software Engineer",
    description:
      "Zhengwen Tang is a UCLA Computer Science and Engineering student working across processor architecture, embedded systems, hardware security, machine learning, and software engineering.",
  },
  profile: {
    name: "Zhengwen Tang",
    shortMark: "zt.",
    eyebrow: "HELLO, I’M",
    introduction:
      "I’m a Computer Science and Engineering student at UCLA. I build and study systems across processor architecture, embedded control, hardware security, machine learning, and full-stack software.",
    education: {
      degree: "B.S. Computer Science & Engineering",
      institution: "University of California, Los Angeles",
      shortInstitution: "UCLA",
    },
    interests: [
      "Architecture",
      "GPU scheduling",
      "Security",
      "Embedded systems",
      "Machine learning",
      "Software",
    ],
    primaryTools: ["SystemVerilog", "C & C++", "Python"],
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
  experience: {
    eyebrow: "01 / PROFESSIONAL EXPERIENCE",
    title: "Research across security and architecture.",
    summary: "Embedded security, measurement automation, and chiplet-GPU scheduling.",
    date: "May 2026 — Present",
    role: "Undergraduate Researcher",
    organization: "Secure Systems and Architectures Lab",
    institution: "University of California, Los Angeles",
    lead:
      "I investigate how low-level behavior and architectural choices affect secure, efficient systems—from instruction-level power leakage to scheduling and placement in chiplet GPUs.",
    highlights: [
      {
        title: "Hardware security",
        description:
          "Study power side channels in cryptographic workloads using STM32 microcontrollers, ChipWhisperer, oscilloscopes, signal processing, and machine-learning analysis.",
      },
      {
        title: "Measurement systems",
        description:
          "Develop embedded C firmware, ARM Cortex-M0 assembly workloads, and Python automation for flashing boards, capturing power traces, and reproducing experiments.",
      },
      {
        title: "GPU architecture",
        description:
          "Explore scheduling policies and chiplet placement for LLM workloads on chiplet-based GPU architectures.",
      },
    ],
  },
  research: {
    eyebrow: "02 / RESEARCH",
    title: "Studying behavior below the software layer.",
    affiliation: "Secure Systems and Architectures Lab, UCLA",
    focus: "Hardware security · Computer architecture",
    lead:
      "My research connects instruction-level measurements with architecture-level decisions across secure embedded systems and AI hardware.",
    items: [
      {
        title: "Power side-channel analysis",
        description:
          "Study instruction-level power traces from cryptographic workloads using embedded firmware, lab instrumentation, signal processing, and machine-learning analysis.",
      },
      {
        title: "Repeatable measurement automation",
        description:
          "Build scripts and firmware workflows that make board programming, trace capture, and experiment reproduction more reliable.",
      },
      {
        title: "Chiplet GPU architecture",
        description:
          "Explore scheduling policies and chiplet placement for LLM workloads on chiplet-based GPU architectures.",
      },
    ],
  },
  projects: {
    eyebrow: "03 / PROJECTS",
    title: "Work organized by engineering discipline.",
    summary:
      "Seven projects, each with its own page, technical decisions, and supporting evidence.",
    categories: [
      {
        slug: "digital",
        title: "Digital Hardware",
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
    eyebrow: "04 / RELEVANT COURSEWORK",
    title: "The foundation behind the work.",
    summary:
      "Coursework across hardware, systems, software, artificial intelligence, and theory.",
    groups: [
      {
        title: "Hardware & architecture",
        courses: [
          "Computer Systems Architecture",
          "Digital Circuits",
          "Digital Design",
          "Digital Design Laboratory",
          "Design and Experimental Verification of CMOS Circuits",
          "Electrical and Electronic Circuits",
          "Systems and Signals",
        ],
      },
      {
        title: "Systems & security",
        courses: [
          "Operating Systems",
          "Computer System Security",
          "Network Fundamentals",
          "Programming Languages",
          "Software Construction",
        ],
      },
      {
        title: "Software & AI",
        courses: [
          "Data Structures",
          "Machine Learning",
          "Neural Networks & Deep Learning",
          "Computer Graphics",
        ],
      },
      {
        title: "Theory & mathematics",
        courses: [
          "Algorithms and Complexity",
          "Theory of Computation",
          "Probability and Statistics",
        ],
      },
    ],
  },
  background: {
    eyebrow: "05 / BACKGROUND",
    title: "Across the hardware–software boundary.",
    paragraphs: [
      "I’m studying Computer Science and Engineering at the University of California, Los Angeles. My work spans processor microarchitecture, digital implementation, embedded control, hardware security research, machine learning, and full-stack applications.",
      "I’m especially interested in architecture, GPU scheduling, and security—and in turning those ideas into systems that can be implemented, measured, and explained clearly.",
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
    eyebrow: "06 / CONTACT",
    title: "Let’s build something tangible.",
    description:
      "For embedded systems, digital design, software engineering, and hardware research conversations.",
    email: "zhengwen@ucla.edu",
  },
  footer: "Hardware, software, and the systems between them.",
};
