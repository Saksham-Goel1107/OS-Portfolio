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
      name: 'Canva-Clone',
      subtitle: 'Design platform clone with drag-and-drop editor',
      tech: 'NextJS, TailwindCSS, Stripe, Neon',
      date: '',
      githubUrl: 'https://github.com/Saksham-Goel1107/Canva-Clone',
      image: '/projects/canva_clone.png',
      summary: 'A design platform clone offering an intuitive drag-and-drop editor, templates, and premium templates behind Stripe-powered purchases.',
      bullets: [
        'Built a responsive design interface with Next.js and React for dynamic content creation',
        'Implemented a robust template system with customizable elements and layouts',
        'Designed an intuitive drag-and-drop editor with real-time preview capabilities',
        'Integrated Stripe for premium template purchases and subscription management',
      ],
    },
    {
      name: 'Code-Craft',
      subtitle: 'Collaborative online IDE and execution platform',
      tech: 'NextJS, Clerk, Stripe',
      date: '',
      githubUrl: 'https://github.com/Saksham-Goel1107/Code-Craft',
      image: '/projects/code-craft.png',
      summary: 'A collaborative IDE supporting real-time editing, multi-language execution, and secure authentication.',
      bullets: [
        'Developed a feature-rich code editor with syntax highlighting and auto-completion',
        'Implemented secure authentication using Clerk for seamless user management',
        'Created a real-time collaboration system for multiple users to code together',
        'Built a robust code execution environment supporting multiple programming languages',
      ],
    },
    {
      name: 'Droply',
      subtitle: 'File-sharing & cloud storage with collaboration',
      tech: 'NextJS, Neon, Clerk',
      date: '',
      githubUrl: 'https://github.com/Saksham-Goel1107/droply',
      image: '/projects/droply.png',
      summary: 'A secure file-sharing platform with real-time sync, permissions, and an easy drag-and-drop interface.',
      bullets: [
        'Built a secure file-sharing system with end-to-end encryption for data protection',
        'Implemented real-time file synchronization across multiple devices and users',
        'Developed an intuitive user interface with drag-and-drop functionality using Next.js',
        'Created a permission-based sharing system with customizable access controls',
      ],
    },
    {
      name: 'Streamify',
      subtitle: 'Video streaming platform with discovery and personalization',
      tech: 'React, Clerk',
      date: '',
      githubUrl: 'https://github.com/Saksham-Goel1107/streamify',
      image: '/projects/streamify.png',
      summary: 'A streaming platform inspired by Netflix/YouTube with recommendations, adaptive streaming, and engagement features.',
      bullets: [
        'Designed a responsive streaming interface with React for seamless content consumption',
        'Implemented a recommendation engine based on user preferences and viewing history',
        'Created a secure content delivery system with adaptive streaming capabilities',
        'Built user engagement features including comments, ratings, and content sharing',
      ],
    },
    {
      name: 'Shopsy',
      subtitle: 'Modern e‑commerce platform with inventory management',
      tech: 'Stripe, MongoDB, Vite',
      date: '',
      githubUrl: 'https://github.com/Saksham-Goel1107/shopsy',
      image: '/projects/shopsy.png',
      summary: 'An e-commerce platform featuring secure checkout, inventory tracking, and product management.',
      bullets: [
        'Built a responsive e-commerce platform with product categorization and filtering',
        'Implemented secure checkout process using Stripe payment integration',
        'Developed an inventory management system with real-time stock tracking',
        'Created a user account system with order history and saved payment methods',
      ],
    },
    {
      name: 'Gemini Clone',
      subtitle: 'AI assistant with multimodal capabilities',
      tech: 'AI APIs, MongoDB, Stripe',
      date: '',
      githubUrl: 'https://github.com/Saksham-Goel1107/Gemini-Clone',
      image: '/projects/gemini_clone.png',
      summary: 'An AI assistant platform offering conversational AI, multimodal input, and context-aware responses.',
      bullets: [
        'Developed a conversational AI interface with natural language understanding',
        'Implemented context-aware responses and memory for continuous conversations',
        'Created multimodal input capabilities for processing text, images, and code',
        'Built a responsive UI with seamless transitions between different interaction modes',
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
