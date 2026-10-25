export const projectCategories = [
  { id: "digital", label: "Digital Hardware" },
  { id: "embedded", label: "Embedded Systems" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "software", label: "Software" },
];

export const projects = [
  {
    slug: "vector-cpu",
    title: "RISC-V vector CPU tapeout",
    shortTitle: "Vector CPU tapeout",
    category: "Digital Hardware",
    categoryId: "digital",
    eyebrow: "01 / DIGITAL HARDWARE · TAPEOUT",
    lead: "A 32-bit processor project spanning SystemVerilog RTL, functional verification, physical implementation in a TSMC 180 nm process, and a custom PCB for post-fabrication testing.",
    context: "UCLA tapeout project",
    date: "2026",
    focus: "RTL, physical design, and test PCB",
    team: "Team hardware project",
    technologies: ["SystemVerilog", "RISC-V", "Cadence", "Hammer", "KiCad", "TSMC 180 nm"],
    externalActions: [],
    overview: {
      heading: "From RTL to a board-level test interface.",
      paragraphs: [
        "The project joined processor design with the later stages of the hardware lifecycle. I implemented and functionally verified processor RTL, then contributed to synthesis, place and route, layout, and the integration of the core with its pad frame.",
        "I also designed the custom PCB intended to expose the fabricated design for testing. That work connected the chip-level interface to board-level headers and support components, making signal access and practical lab use part of the design problem.",
      ],
      note: "Evidence shown here covers RTL verification, the completed physical-layout artifact, core-to-pad-frame integration, and the custom test-board design.",
    },
    problem: {
      heading: "Make every layer agree.",
      paragraphs: [
        "Moving from a functional RTL description to physical and board artifacts required the design to remain consistent across several representations. Logical interfaces, pad placement, routing, power connections, and the PCB pinout all had to describe the same system.",
      ],
      bullets: [
        "Preserve the processor’s intended behavior while moving through synthesis and physical implementation.",
        "Integrate the core with I/O and power pads under the process and layout design rules.",
        "Resolve physical-design violations and routing issues before finalizing the layout artifact.",
        "Route the central device to accessible headers and supporting components on the test PCB.",
      ],
    },
    implementation: {
      heading: "A connected hardware flow.",
      label: "PROJECT FLOW",
      stack: "RTL → LAYOUT → PCB",
      steps: [
        { title: "Develop and verify RTL", description: "Implemented processor logic in SystemVerilog and used testbench-driven simulation to check functional behavior." },
        { title: "Synthesize the design", description: "Translated the RTL toward a physical implementation and debugged issues exposed by the implementation flow." },
        { title: "Place, route, and integrate pads", description: "Contributed to core placement, routing, layout, and core-to-pad-frame integration using Cadence and Hammer." },
        { title: "Design the test PCB", description: "Created a KiCad board that routes the central device to passive components, breakout headers, power connections, and mounting features." },
      ],
    },
    results: {
      heading: "Evidence at each design boundary.",
      paragraphs: [
        "RTL behavior was checked through simulation and testbenches. During physical implementation, I debugged the design across the flow and helped resolve design-rule violations. The resulting artifacts show the processor core integrated with its pad frame, the routed board design, and the assembled test PCB.",
        "Together, these outcomes document the project’s progression from verified RTL through layout and board design. The emphasis is on implementation quality and traceable design artifacts.",
      ],
      metrics: [],
    },
    evidence: [
      { id: "chip-layout", type: "image", path: "/assets/chip-physical-layout.png", title: "Chip physical layout", caption: "Processor core with I/O and power-pad integration.", alt: "Physical layout of a processor core surrounded by I/O and power pads.", width: 1173, height: 1124 },
      { id: "pcb-layout", type: "image", path: "/assets/chip-test-board-layout.png", title: "Test PCB layout", caption: "Signal routing, connector placement, and ground fill.", alt: "PCB layout showing routed connections between the central device footprint, passive components, and pin headers.", width: 1010, height: 1025 },
      { id: "pcb-photo", type: "image", path: "/assets/chip-test-board.jpg", title: "Assembled test PCB", caption: "Group 25 board with a central device and breakout headers.", alt: "Assembled green test PCB with a small central device, surface-mount components, breakout headers, and four mounting holes.", width: 2728, height: 2728 },
    ],
    previousSlug: "rpg-engine",
    nextSlug: "ooo-processor",
  },
  {
    slug: "ooo-processor",
    title: "Out-of-order RISC-V processor",
    shortTitle: "Out-of-order RISC-V",
    category: "Digital Hardware",
    categoryId: "digital",
    eyebrow: "02 / DIGITAL HARDWARE · MICROARCHITECTURE",
    lead: "A one-wide, 32-bit out-of-order core implemented in SystemVerilog, with register renaming, dynamic scheduling, in-order retirement, memory ordering, and checkpoint-based recovery.",
    context: "UCLA ECE 189 honors project",
    date: "September–December 2025",
    focus: "Speculative microarchitecture and synthesizable RTL",
    team: "Academic hardware project",
    technologies: ["SystemVerilog", "RISC-V", "Vivado", "XSim", "Register renaming", "ROB / LSQ"],
    externalActions: [
      { label: "View source on GitHub", href: "https://github.com/GaussianDoge/Out-of-Order_RISC-V_Processor" },
    ],
    overview: {
      heading: "Expose instruction-level parallelism while preserving precise state.",
      paragraphs: [
        "I implemented a one-wide, 32-bit RISC-V core that allows ready instructions to execute out of program order while architectural updates remain ordered. My work covered the path from fetch and decode through rename, dispatch, execution, memory access, and retirement.",
        "The design uses a map table and free list for register renaming, specialized reservation stations for scheduling, a reorder buffer for in-order commit, a load-store queue for memory operations, and checkpoints for control-flow recovery.",
      ],
      note: "The reported IPC and CPI values are workload-specific simulation summaries. Fetch-based and retirement-based metrics measure different boundaries and are labeled separately below; synthesis resources are estimates.",
    },
    problem: {
      heading: "Speculate internally, retire in order.",
      paragraphs: [
        "An out-of-order core must let independent work move ahead without exposing speculative state as an architectural result. Every issued instruction therefore needs a clear identity, dependency state, destination, and retirement path.",
      ],
      bullets: [
        "Track renamed source and destination registers while reclaiming physical registers safely.",
        "Wake and select ready operations without violating data dependencies.",
        "Retire completed instructions in program order through the reorder buffer.",
        "Coordinate loads and stores through the load-store queue and memory path.",
        "Restore the correct mapping state after a control-flow redirect using checkpoints.",
        "Keep the modules synthesizable and debuggable within the Vivado and XSim workflow.",
      ],
    },
    implementation: {
      heading: "A complete speculative pipeline.",
      label: "MICROARCHITECTURE",
      stack: "FETCH → RETIRE",
      steps: [
        { title: "Fetch and decode", description: "Read instructions from the BRAM-backed instruction path and convert them into the control and operand information used downstream." },
        { title: "Rename and allocate", description: "Use the map table, physical register file, free list, and reorder buffer to remove false register dependencies and track speculative destinations." },
        { title: "Dispatch and schedule", description: "Route work into branch, arithmetic, and load-store reservation stations, where operations wait until their inputs are ready." },
        { title: "Execute and access memory", description: "Send selected operations to the ALU, branch path, and load-store unit while coordinating memory ordering through the LSQ." },
        { title: "Retire or recover", description: "Commit completed instructions in order from the ROB and use checkpoints to restore rename state after a control-flow redirect." },
      ],
    },
    results: {
      heading: "Measure the boundary that each test observes.",
      paragraphs: [
        "I verified the implemented instruction subset through iterative simulation, debugging dependencies, stalls, memory behavior, and recovery paths. The available summaries capture three specific test programs and a synthesis resource estimate.",
        "Vivado estimated 32,857 LUTs, 12,834 flip-flops, 32.5 BRAM, 3 I/O resources, and 11 BUFG resources for the synthesized design. These values describe estimated resource use; they are not post-implementation utilization or evidence of fit on a particular FPGA board.",
      ],
      metrics: [
        { value: "0.9231", label: "Fetch-based IPC", detail: "Overall test: 240 accepted instructions across 260 active cycles; CPI 1.0833." },
        { value: "0.4892", label: "Retirement-based IPC", detail: "Stores, loads, and loops: 68 retired instructions across 139 active cycles; CPI 2.0441." },
        { value: "0.7500", label: "Retirement-based IPC", detail: "R-type test: 21 retired instructions across 28 active cycles; CPI 1.3333." },
      ],
      bullets: [
        "Synthesis estimate: 32,857 LUTs.",
        "Synthesis estimate: 12,834 flip-flops.",
        "Synthesis estimate: 32.5 BRAM, 3 I/O resources, and 11 BUFG resources.",
      ],
      note: "Fetch-based and retirement-based IPC values describe different pipeline boundaries. All figures are workload-specific simulation results; resource figures are synthesis estimates.",
    },
    evidence: [
      { id: "architecture", type: "image", path: "/assets/ooo-architecture.png", title: "Architecture diagram", caption: "Fetch, rename, dispatch, reservation stations, execution, ROB, LSQ, and recovery.", alt: "Block diagram of the out-of-order RISC-V processor showing fetch, decode, rename, dispatch, reservation stations, reorder buffer, execution units, physical registers, and memory.", width: 2918, height: 2087 },
      { id: "overall-simulation", type: "image", path: "/assets/ooo-simulation-overall.png", title: "Overall simulation summary", caption: "240 accepted instructions, 260 active cycles, and fetch-based IPC 0.9231.", alt: "Simulation summary reporting 240 accepted instructions over 260 active cycles, fetch-based IPC 0.9231, and CPI 1.0833.", width: 438, height: 237 },
      { id: "jwsr-simulation", type: "image", path: "/assets/ooo-simulation-jwsr.png", title: "Stores, loads, and loops", caption: "68 retired instructions, 139 active cycles, and retirement-based IPC 0.4892.", alt: "Simulation summary for a stores, loads, and loops program reporting 68 retired instructions, retirement-based IPC 0.4892, and CPI 2.0441.", width: 441, height: 236 },
      { id: "r-type-simulation", type: "image", path: "/assets/ooo-simulation-r-type.png", title: "R-type simulation", caption: "21 retired instructions, 28 active cycles, and retirement-based IPC 0.7500.", alt: "R-type simulation summary reporting 21 retired instructions, retirement-based IPC 0.7500, and CPI 1.3333.", width: 422, height: 237 },
      { id: "synthesis-estimate", type: "image", path: "/assets/ooo-utilization.png", title: "Synthesis resource estimate", caption: "32,857 LUT, 12,834 FF, 32.5 BRAM, 3 I/O, and 11 BUFG.", alt: "Synthesis resource estimate listing 32,857 LUTs, 12,834 flip-flops, 32.5 BRAM, 3 I/O, and 11 BUFG resources.", width: 412, height: 138 },
    ],
    previousSlug: "vector-cpu",
    nextSlug: "pid-car",
  },
  {
    slug: "pid-car",
    title: "Autonomous PID car",
    shortTitle: "PID car",
    category: "Embedded Systems",
    categoryId: "embedded",
    eyebrow: "03 / EMBEDDED SYSTEMS",
    lead: "A closed-loop line-following car built around calibrated infrared sensing, filtered measurements, and PID control on Arduino.",
    context: "UCLA lab project",
    date: "September–December 2024",
    focus: "Embedded control and hardware integration",
    team: "Course lab project",
    technologies: ["Arduino", "C++", "PID control", "IR sensors"],
    externalActions: [],
    overview: {
      heading: "Control that holds up on real hardware.",
      paragraphs: [
        "The project paired embedded software with a physical line-following platform. I calibrated the infrared sensors, filtered noisy measurements, implemented the feedback controller in C++, and debugged the interaction between sensing, actuation, and control behavior.",
        "The goal was practical stability: the car needed to interpret the track continuously and turn sensor error into useful steering corrections over an entire lap.",
      ],
      bullets: [
        "Calibrated the sensor response against the track.",
        "Filtered measurements before they entered the control loop.",
        "Tuned proportional, integral, and derivative behavior through hardware tests.",
        "Diagnosed instability across both hardware and software.",
      ],
    },
    problem: {
      heading: "Noisy input, immediate decisions.",
      paragraphs: [
        "Line tracking is sensitive to the quality of each measurement. Sensor variation, electrical noise, and changing position over the track can all disturb the error signal. The controller then has to react quickly without amplifying noise into oscillation.",
        "Tuning on a physical system also couples software decisions to the mechanics of the car. A value that looks reasonable in isolation can behave differently once sensing delay, motor response, and track geometry interact.",
      ],
      note: "The design process centered on repeatable hardware tests, targeted adjustments, and observation of the complete sensing-to-steering loop.",
    },
    implementation: {
      heading: "A measured path from sensing to steering.",
      label: "CONTROL PIPELINE",
      stack: "ARDUINO + C++",
      steps: [
        { title: "Calibrate the sensors", description: "Characterize the infrared readings so the software can interpret the car’s position relative to the line." },
        { title: "Filter the measurements", description: "Reduce noise before calculating control error and updating the steering command." },
        { title: "Apply PID feedback", description: "Convert the current error, accumulated error, and rate of change into closed-loop steering corrections." },
        { title: "Test and retune", description: "Run the car on the physical track, identify unstable behavior, and adjust the control path through successive hardware tests." },
      ],
    },
    results: {
      heading: "Performance proven on the lab track.",
      paragraphs: [
        "Verification happened on the physical car rather than through a software-only result. Repeated track tests exposed noise, tuning problems, and integration issues that could then be isolated and corrected.",
        "After calibration, filtering, and controller tuning, the car achieved first place in the lab’s lap-performance competition.",
      ],
      metrics: [
        { value: "1st", label: "Lab lap-performance competition", detail: "Course lab result; no lap time or broader benchmark is claimed." },
        { value: "IR", label: "Calibrated line sensing", detail: "Sensor readings were calibrated and filtered before control updates." },
        { value: "PID", label: "Closed-loop steering", detail: "Controller tuning was verified through repeated physical-track tests." },
      ],
      note: "The result describes the course lab competition. No lap time or broader benchmark is claimed.",
    },
    evidence: [
      { id: "car-animation", type: "image", path: "/assets/pid-car-demo.webp", title: "Hardware in motion", caption: "Autonomous line-following car moving during a lab test.", alt: "Autonomous line-following car moving during a lab test.", width: 320, height: 568, animated: true },
      { id: "car-still", type: "image", path: "/assets/pid-car-demo-still.jpg", title: "Lab-test still", caption: "Supplied frame from the physical-car demonstration.", alt: "Autonomous PID line-following car held above the lab track during testing.", width: 320, height: 568 },
    ],
    previousSlug: "ooo-processor",
    nextSlug: "semg",
  },
  {
    slug: "semg",
    title: "sEMG keystroke prediction",
    shortTitle: "sEMG prediction",
    category: "Machine Learning",
    categoryId: "machine-learning",
    eyebrow: "04 / MACHINE LEARNING",
    lead: "A three-person study of sequence models for decoding text from noisy wrist surface-electromyography signals.",
    context: "UCLA machine-learning project",
    date: "January–March 2026",
    focus: "Single-subject sequence-model comparison",
    team: "Three-person team",
    technologies: ["Python", "PyTorch", "LSTM", "CTC", "STFT"],
    externalActions: [
      { label: "View source on GitHub", href: "https://github.com/GaussianDoge/sEMG_Keystroke_Prediction" },
    ],
    overview: {
      heading: "Learning text from muscle signals.",
      paragraphs: [
        "I worked in a three-person team to evaluate how recurrent, residual, and attention-based sequence models decode keystrokes from wrist sEMG. The study used the emg2qwerty pipeline and measured output quality with character error rate.",
        "The team compared several model families under a consistent single-subject evaluation. This made the project an architecture study as well as a signal-processing task: each experiment changed how temporal structure was represented while preserving a shared training and evaluation path.",
      ],
      bullets: [
        "Prepared time-frequency input features from the recorded signal.",
        "Compared RNN, GRU, LSTM, residual LSTM, and local cross-attention variants.",
        "Used CTC training for sequence alignment without per-character timestamps.",
        "Reported both the strongest result and the limits of the evaluation scope.",
      ],
    },
    problem: {
      heading: "A noisy signal with no simple alignment.",
      paragraphs: [
        "Surface EMG records muscle activity rather than characters directly. The input is noisy, varies over time, and does not arrive with a clean frame-by-frame mapping to the intended text. A useful model therefore needs both local feature extraction and long-range sequence context.",
        "The reported experiments evaluate Subject 89335547. That controlled scope supports comparison among the tested models for one subject, but it does not establish cross-subject generalization.",
      ],
      note: "All headline metrics come from the supplied team report and refer to its single-subject test setup.",
    },
    implementation: {
      heading: "From time-frequency features to decoded text.",
      label: "EXPERIMENT PIPELINE",
      stack: "PYTORCH",
      steps: [
        { title: "Represent the signal", description: "Transform the sEMG input into log-spectrogram features with an STFT-based front end." },
        { title: "Augment training data", description: "Apply signal augmentation to expose the models to controlled variation during training." },
        { title: "Compare sequence architectures", description: "Evaluate vanilla recurrent networks, GRU, LSTM, residual TDS + LSTM, and a local cross-attention variant." },
        { title: "Train and score with CTC", description: "Use connectionist temporal classification for sequence learning and character error rate for model comparison." },
      ],
    },
    results: {
      heading: "A lower error rate with residual temporal modeling.",
      paragraphs: [
        "After 150 epochs, the four-layer Residual TDS + LSTM reached a test CER of 13.29, compared with the 22.41 baseline. That is a 9.12-point reduction, or 40.7% relative improvement.",
        "The local cross-attention variant reached a test CER of 17.85. The result remained above the best residual recurrent model in this experiment, making the comparison useful even though attention did not produce the leading score.",
      ],
      metrics: [
        { value: "22.41", label: "Baseline test CER", detail: "Single-subject test result after 150 epochs." },
        { value: "13.29", label: "Best test CER", detail: "Four-layer Residual TDS + LSTM after 150 epochs." },
        { value: "40.7%", label: "Relative CER reduction", detail: "A 9.12-point reduction from the 22.41 baseline." },
      ],
      note: "CER values are specific to the report’s training setup and Subject 89335547. They should not be read as a cross-subject benchmark.",
    },
    evidence: [
      { id: "results-table", type: "image", path: "/assets/semg-results-table.png", title: "Model comparison", caption: "Validation and test character error rates after 40 and 150 epochs.", alt: "Table comparing model validation and test character error rates after 40 and 150 epochs.", width: 1264, height: 628 },
      { id: "project-report", type: "pdf", path: "/assets/semg-keystroke-prediction.pdf", title: "Project report", caption: "Experimental setup, model variants, training behavior, results, and team analysis.", alt: "PDF report for the sEMG keystroke prediction project.", page: 5 },
    ],
    previousSlug: "pid-car",
    nextSlug: "eventhub",
  },
  {
    slug: "eventhub",
    title: "EventHub",
    shortTitle: "EventHub",
    category: "Software",
    categoryId: "software",
    eyebrow: "05 / SOFTWARE · FULL-STACK WEB",
    lead: "A team-built event-sharing application with event media, social interactions, and discussion flows backed by a MERN stack.",
    context: "UCLA CS 35L team project",
    date: "January–April 2025",
    focus: "Interactive event and discussion flows",
    team: "Full-stack team contributor",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Zustand"],
    externalActions: [
      { label: "View source on GitHub", href: "https://github.com/JasonL233/EventHub" },
      { label: "Watch demo from 5:04", href: "https://www.youtube.com/watch?v=_q9G_yhAYJg&t=304s" },
    ],
    overview: {
      heading: "Connecting event discovery with conversation.",
      paragraphs: [
        "EventHub was developed as a UCLA CS 35L team project. The product combines event pages and media with lightweight social features so people can follow events and discuss them in one application.",
        "My work covered the React event experience and the data path behind it. I built pages with images and video, likes and follows, comments and replies, then connected those interactions to MongoDB models, Express APIs, and Zustand-managed client state.",
      ],
    },
    problem: {
      heading: "Keep a changing interface consistent.",
      paragraphs: [
        "Every interaction crossed several layers: a user action in React, an asynchronous request, a database update, shared application state, and the final rendered view. Delayed or differently shaped data could leave the interface showing an earlier event, an incorrect count, or the wrong author.",
        "The work also had to fit a shared team codebase. Event and discussion features needed clear data contracts so independently developed components could read and update the same records without drifting apart.",
      ],
      note: "The central engineering task was maintaining one coherent view of event and discussion data while asynchronous work completed in the background.",
    },
    implementation: {
      heading: "One path from database to interaction.",
      label: "APPLICATION FLOW",
      stack: "MERN + ZUSTAND",
      steps: [
        { title: "Event presentation", description: "Built React event-detail views that present text, images, and video as a unified event page." },
        { title: "Social interactions", description: "Implemented likes, follows, comments, and nested replies as connected user flows." },
        { title: "Models and APIs", description: "Defined MongoDB data models and Express endpoints for event and discussion records." },
        { title: "Client state", description: "Used Zustand to coordinate fetched data and updates across interactive React components." },
      ],
    },
    results: {
      heading: "Debugging the seams between layers.",
      paragraphs: [
        "Testing the complete interaction flow exposed state and timing problems that individual components did not reveal. I investigated asynchronous fetching and React state behavior behind stale content, flickering like counts, and mismatched comment authors.",
        "The resulting application connected event content, social actions, and threaded discussion in one working team product. The source repository and time-linked team demonstration provide the public evidence for the implementation.",
      ],
      bullets: [
        "Investigated stale event content after asynchronous data fetching.",
        "Traced flickering like counts across shared state and rendered components.",
        "Debugged mismatched author data in comment and reply presentation.",
      ],
      metrics: [],
    },
    evidence: [
      {
        id: "discovery-interface",
        type: "image",
        path: "/assets/eventhub-discovery-feed.png",
        title: "EventHub discovery interface",
        caption:
          "Event discovery feed with mixed media, search, profiles, and like counts.",
        alt:
          "EventHub discovery page with a sidebar, search bar, and a masonry feed of image and video event posts with profiles and like counts.",
        width: 1535,
        height: 964,
        gallery: false,
      },
    ],
    previousSlug: "semg",
    nextSlug: "meow-talk",
  },
  {
    slug: "meow-talk",
    title: "Meow Talk video chat",
    shortTitle: "Meow Talk",
    category: "Software",
    categoryId: "software",
    eyebrow: "06 / SOFTWARE · REAL-TIME COMMUNICATION",
    lead: "A real-time, multi-peer video chat application that coordinates WebRTC connections through a React Native interface and Firebase-backed connection data.",
    context: "Independent software project",
    date: "Started July 2025",
    focus: "Multi-peer media connections",
    team: "WebRTC and application implementation",
    technologies: ["WebRTC", "React Native", "Firebase", "Firestore"],
    externalActions: [],
    overview: {
      heading: "Building the path between peers.",
      paragraphs: [
        "Meow Talk is a real-time video chat application started in July 2025. I implemented its multi-peer communication path with WebRTC, built the application interface in React Native, and used Firebase and Firestore for connection data.",
        "The project sits at the boundary between user-interface state and networked media. Each participant needs an interface that reacts to connection changes while the application coordinates a separate media relationship with every other peer.",
      ],
    },
    problem: {
      heading: "Coordinate many direct connections.",
      paragraphs: [
        "A peer mesh grows from a simple call into a set of independent connections. The application has to represent each participant, keep the correct media stream associated with that participant, and exchange the connection data required to establish every WebRTC path.",
        "Those connection events also have to remain understandable at the interface layer. React Native manages what the user sees, while Firestore provides a shared place for participants to publish and receive connection information.",
      ],
      note: "The design prioritizes a direct, inspectable peer topology and a clear separation between media transport, shared connection data, and interface state.",
    },
    implementation: {
      heading: "Three layers, one conversation.",
      label: "IMPLEMENTATION",
      stack: "REACT NATIVE + WEBRTC",
      steps: [
        { title: "Peer mesh", description: "Created a WebRTC peer connection for each participant relationship in a conversation." },
        { title: "Media experience", description: "Connected real-time video streams to a React Native interface designed around multiple participants." },
        { title: "Connection records", description: "Used Firebase and Firestore to manage the information exchanged while peers establish their media paths." },
        { title: "Application state", description: "Kept participant and connection changes reflected in the visible conversation experience." },
      ],
    },
    results: {
      heading: "A complete multi-peer path.",
      paragraphs: [
        "The documented outcome is an application architecture that connects multiple participants through WebRTC while React Native presents the conversation and Firestore manages shared connection data.",
        "This case study does not claim a measured latency, maximum participant count, or public deployment. Its result is the implemented end-to-end path across peer media, connection coordination, and the application interface.",
      ],
      metrics: [],
    },
    evidence: [],
    previousSlug: "eventhub",
    nextSlug: "rpg-engine",
  },
  {
    slug: "rpg-engine",
    title: "2D RPG game engine",
    shortTitle: "2D RPG engine",
    category: "Software",
    categoryId: "software",
    eyebrow: "07 / SOFTWARE · GAME SYSTEMS",
    lead: "A C++ and SFML engine that brings together game states, animated sprites, camera-relative rendering, interactions, audio, weather, and custom controls.",
    context: "CCSF honors project",
    date: "January–May 2024",
    focus: "Real-time game systems",
    team: "C++ and SFML implementation",
    technologies: ["C++", "SFML", "Game loops", "Sprite animation"],
    externalActions: [],
    overview: {
      heading: "Learning real-time systems by building one.",
      paragraphs: [
        "This City College of San Francisco honors project explored the structure behind a 2D role-playing game. I built the engine in C++ with SFML and connected the core loop to rendering, animation, interaction, audio, weather, and interface behavior.",
        "Rather than treating those features as isolated demonstrations, the project organized them into shared game states and an update-and-render cycle that could support a complete interactive scene.",
      ],
    },
    problem: {
      heading: "Make independent systems move together.",
      paragraphs: [
        "A game engine has to process user input, advance movement and animation, detect interactions, update sound and weather, and render the correct view every frame. If these responsibilities share timing or state carelessly, the experience becomes inconsistent.",
        "The engine therefore needed explicit state boundaries, camera-aware coordinates, collision hitboxes, and elapsed-time updates. Those choices kept behavior tied to the simulated world rather than to a particular number of rendered frames.",
      ],
      note: "The project focused on the engine loop and the interfaces between systems: input, update, interaction, rendering, audio, and UI.",
    },
    implementation: {
      heading: "Systems composed around the game loop.",
      label: "ENGINE SYSTEMS",
      stack: "UPDATE + RENDER",
      steps: [
        { title: "State and input", description: "Implemented multiple game states, button controls, mouse handling, and event-driven interactions." },
        { title: "World interaction", description: "Defined hitboxes and object interactions for movement through the scene." },
        { title: "Animation and timing", description: "Advanced movement and sprite animation from elapsed time between frames." },
        { title: "Presentation systems", description: "Rendered sprites relative to the player camera and added sound playback, rain, and custom UI behavior." },
      ],
    },
    results: {
      heading: "An integrated engine foundation.",
      paragraphs: [
        "The completed honors project integrated game-state management, animated sprites, camera rendering, hitboxes and interactions, sound playback, a rain system, and mouse-driven UI controls in one C++/SFML engine.",
        "Elapsed-time updates kept movement logic independent of raw frame count. This page reports the implemented systems without adding an unverified frame-rate figure, public build, or repository link.",
      ],
      metrics: [],
    },
    evidence: [],
    previousSlug: "meow-talk",
    nextSlug: "vector-cpu",
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export default projects;
