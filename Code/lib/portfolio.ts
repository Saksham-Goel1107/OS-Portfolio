export const PORTFOLIO = {
  name: 'Saksham Goel',
  title: 'Computer Engineering Student',
  email: 'sakshamgoel1107@gmail.com',
  github: 'github.com/Saksham-Goel1107',
  linkedin: 'linkedin.com/in/sakshamgoel11',
  twitter: 'x.com/Saksham1199805',
  website: 'wwww.sakshamg.me',
  education: {
    degree: 'Bachelor of Technology in Computer Engineering',
    school: 'Vidyalankar Institute of Technology',
    location: 'Mumbai, India',
    period: 'Sept 2024 – Present',
    cgpa: '10.0 (First Year)',
    sgpa: '10.0 (Sem 3)',
    graduation: '2028',
    courses: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Database Management Systems'],
  },
  skills: {
    languages: ['C', 'Python', 'Assembly', 'Java'],
    databases: ['MySQL'],
    tools: ['Git', 'GitHub'],
  },
  experience: [
    {
      role: 'Open Source Contributor & Paid Contributor',
      company: 'Open World Holidays Framework',
      period: 'Jan 2025 – June 2025',
      location: 'Remote',
      link: 'github.com/commenthol/date-holidays',
      image: '/experience/owhf.png',
      summary: 'Climbed to rank 7 of 2300+ during Google Winter of Code, good enough to earn a paid sponsorship to extend the library. Added lunar calendar support for Mongolia, holiday logic for India and Nepal, and l10n translations (Hindi, Mongolian) across a library with 20M+ monthly PyPI downloads.',
      bullets: [
        'Ranked #7 out of 2300+ contributors in GWoC, leading to a paid sponsored task building Mongolian holiday logic from scratch.',
        'Implemented a full lunar-calendar engine for Mongolia and extended date-system logic to cover 249 countries without breaking existing functionality.',
        'Shipped Hindi and Mongolian l10n translations, making the library natively accessible to millions of regional users.',
      ],
    },
  ],
  projects: [
    {
      name: 'Transformer From Scratch',
      subtitle: 'Neural Machine Translation',
      tech: 'Python, PyTorch',
      date: 'Dec 2025',
      githubUrl: 'https://github.com/FairArena/FairArena-app',
      image: '/projects/transformer.jpg',
      summary: 'End-to-end implementation of the Transformer ("Attention Is All You Need") in PyTorch, written without high-level wrappers. Includes training, evaluation, and inference tooling with reproducible checkpoints and notebooks.',
      bullets: [
        'Implemented core Transformer components by hand: scaled dot-product attention, multi-head attention, positional encodings, encoder/decoder stacks, and label smoothing.',
        'Trained on OPUS Books (English→Italian) using learning-rate warmup, dropout scheduling, mixed-precision support, and beam-search decoding for inference.',
        'Built automated evaluation and logging with SacreBLEU, WER/CER metrics, TensorBoard experiments, and published trained checkpoints with an inference notebook.',
      ],
    },
    {
      name: 'BaseKernel',
      subtitle: 'Custom 32-bit OS Kernel',
      tech: 'C, NASM, QEMU',
      date: 'Sep 2025',
      githubUrl: 'https://github.com/FairArena/FairArena-tools',
      image: '/projects/kernel.jpg',
      summary: 'A from-scratch 32-bit x86 protected-mode kernel and bootloader. No external bootloaders or runtime — boots directly into a custom kernel that provides core OS primitives for experimentation and teaching.',
      bullets: [
        'Authored a 16-bit bootloader that enables the A20 line, initializes the GDT, and switches to 32-bit protected mode without GRUB.',
        'Designed and populated GDT/IDT entries, implemented CPU exception handlers, IRQ routing, and a VGA text-mode console for early I/O.',
        'Implemented a preemptive round-robin scheduler, simple paging support, and an ATA driver plus minimal filesystem for block storage demos.',
      ],
    },
    {
      name: 'Alloc',
      subtitle: 'Custom Memory Allocator in C',
      tech: 'C, NASM',
      date: 'Jun 2025',
      githubUrl: 'https://github.com/FairArena/FairArena',
      image: '/projects/alloc.jpg',
      summary: 'A hand-built malloc/free replacement operating over a 1 GB virtual heap. Focused on low-level allocator design, fragmentation control, and secure free semantics for learning and tooling.',
      bullets: [
        'Implemented a word-aligned heap using packed 32-bit headers encoding size and allocation flags, with first-fit/coalescing strategies.',
        'Provided `alloc()` and `destroy()` APIs, a debugging `show()` to inspect free lists and fragmentation, and secure zeroing on free.',
        'Added convenience macros for size units, integration tests, and microbenchmarks demonstrating allocation throughput and fragmentation behavior.',
      ],
    },
  ],
  extracurricular: [
    {
      name: 'Our Tech Community (OTC)',
      link: 'ourtech.community',
      role: 'Co-Organiser',
      period: 'Jul 2025 – Present',
      image: '/extracurricular/otc.jpg',
      summary: 'Helping grow and run a 600+ member open tech community in Mumbai focused on weekly learning sessions, technical talks, and building a space where anyone (hobbyist or professional) is welcome.',
      bullets: [
        'Plan and execute flagship programs including weekly catchups, technical talks, and community events.',
        'Handle technical setup and infra for events, documentation, and community tooling.',
      ],
    },
    {
      name: 'Rotary Divyang Center',
      link: '',
      role: 'Social Service Intern',
      period: 'Feb 2026 – Present',
      image: '/extracurricular/rotary.jpg',
      summary: 'Volunteering at a rehabilitation center that provides artificial limbs to people with physical disabilities. Supporting patients through the process and handling administrative work alongside building a website for the center.',
      bullets: [
        'Assist patients with administrative procedures, paperwork, and day-to-day coordination at the center.',
        'Engage directly with patients who come in for artificial limb attachment, offering support and guidance.',
        'Building a website for the center (in progress) to improve outreach and information accessibility.',
      ],
    },
  ],
};

export const BOOT_LINES = [
  { text: '[    0.000000] Booting GoelOS Linux 6.5.0-kapoor-generic...', type: 'default' },
  { text: '[    0.183421] ACPI: BIOS IRQ0 pin2 override ignored', type: 'default' },
  { text: '[  OK  ] Started udev Kernel Device Manager.', type: 'ok' },
  { text: '[  OK  ] Mounted /proc filesystem.', type: 'ok' },
  { text: '[  OK  ] Reached target Network.', type: 'ok' },
  { text: '[  OK  ] Started NetworkManager.', type: 'ok' },
  { text: '[  OK  ] Started GNOME Display Manager.', type: 'ok' },
  { text: "         Welcome to GoelOS 24.04 LTS (Kapoor's Realm) 🎉", type: 'welcome' },
];

export const DOCK_APPS = [
  { id: 'terminal', icon: '🖥️', label: 'Terminal' },
  { id: 'files', icon: '📁', label: 'Files' },
  { id: 'about', icon: '👤', label: 'About Me' },
  { id: 'projects', icon: '💼', label: 'Projects' },
  { id: 'calendar', icon: '📅', label: 'Calendar' },
  { id: 'settings', icon: '⚙️', label: 'Settings' },
];

export const DESKTOP_ICONS = [
  { id: 'about', icon: '👤', label: 'About Me' },
  { id: 'projects', icon: '💼', label: 'Projects' },
  { id: 'extracurricular', icon: '🌱', label: 'Community' },
  { id: 'experience', icon: '🏅', label: 'Experience' },
  { id: 'terminal', icon: '🖥️', label: 'Terminal' },
  { id: 'files', icon: '📁', label: 'Files' },
  { id: 'resume-pdf', icon: '📋', label: 'resume.pdf', kind: 'file', path: 'resume.pdf' },
  { id: 'github-link', icon: '🐙', label: 'GitHub', kind: 'link', href: 'https://github.com/Saksham-Goel1107' },
  { id: 'linkedin-link', icon: '💼', label: 'LinkedIn', kind: 'link', href: 'https://linkedin.com/in/sakshamgoel11' },
  { id: 'twitter-link', icon: '🐦', label: 'Twitter / X', kind: 'link', href: 'https://x.com/Saksham1199805' },
  { id: 'email-link', icon: '✉️', label: 'Email', kind: 'link', href: 'mailto:sakshamgoel1107@gmail.com' },
  { id: 'simple-mode', icon: '🌐', label: 'Simple Mode' },
];

export const WIN_DEFAULTS: Record<string, { w: number; h: number; title: string }> = {
  terminal: { w: 700, h: 480, title: 'Terminal — saksham@GoelOS' },
  about: { w: 720, h: 560, title: 'About Me — Saksham Goel' },
  resume: { w: 680, h: 600, title: 'Resume — Saksham Goel' },
  projects: { w: 700, h: 560, title: 'Projects — Saksham Goel' },
  extracurricular: { w: 700, h: 560, title: 'Community — Saksham Goel' },
  experience: { w: 700, h: 520, title: 'Experience — Saksham Goel' },
  calendar: { w: 420, h: 460, title: 'Calendar' },
  files: { w: 720, h: 500, title: 'Files' },
  settings: { w: 680, h: 480, title: 'Settings' },
  'text-viewer': { w: 750, h: 550, title: 'Text Viewer' },
  'pdf-viewer': { w: 800, h: 650, title: 'Document Viewer' },
};

export const FILES: Record<string, { n: string; icon: string; dir?: boolean; src?: string }[]> = {
  Home: [
    { n: 'Documents', icon: '📁', dir: true },
    { n: 'Downloads', icon: '📁', dir: true },
    { n: 'Projects', icon: '📁', dir: true },
    { n: 'resume.pdf', icon: '📋', src: '/assets/os/resume.pdf' }
  ],
  Documents: [
    { n: 'notes.txt', icon: '📄', src: '/assets/os/Documents/notes.txt' }
  ],
  Downloads: [
    { n: 'test.txt', icon: '📄', src: '/assets/os/Downloads/test.txt' },
    { n: 'trial.txt', icon: '📄', src: '/assets/os/Downloads/trial.txt' }
  ],
  Projects: []
};

export const SETTINGS_PANELS: Record<string, [string, string][]> = {
  'About GoelOS': [
    ['OS Name', 'GoelOS 24.04 LTS'],
    ['Kernel', 'Linux 6.5.0-kapoor-generic'],
    ['GNOME Version', '45.2'],
    ['Windowing', 'Wayland'],
    ['CPU', 'Intel Core i9-13900K × 24'],
    ['RAM', '32.0 GiB'],
    ['Graphics', 'NVIDIA GeForce RTX 4090'],
    ['Disk', '2.0 TB'],
    ['Build Date', 'Feb 26, 2026'],
  ],
  Appearance: [
    ['Theme', 'Dark (GoelOS)'],
    ['Icon Theme', 'Yaru-Dark'],
    ['Cursor', 'DMZ-Black'],
    ['Font', 'Ubuntu 11'],
  ],
  Background: [
    ['Wallpaper', 'GoelOS Aubergine'],
    ['Lock Screen', 'Same as desktop'],
    ['Style', 'Zoom'],
  ],
  Notifications: [
    ['Do Not Disturb', 'Off'],
    ['Lock Screen Notifications', 'On'],
    ['Sound', 'On'],
  ],
  Privacy: [
    ['Location Services', 'Off'],
    ['Diagnostics', 'Off'],
    ['File History', 'On'],
  ],
};
