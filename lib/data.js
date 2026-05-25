// ============================================================
// PORTFOLIO DATA — Harold Jirro I. Madrona
// Update this file to change any content across the whole site
// ============================================================

export const personal = {
  name: 'Harold Jirro I. Madrona',
  initials: 'H.J.I.M',
  tagline: 'IT Graduate & Creative Professional',
  location: 'Nueva Ecija, Philippines',
  email: 'haroldjirro@gmail.com',
  phone: '+63-954-2868-276',
  available: true,
  summary: `A results-driven Information Technology graduate with hands-on experience in software development, UI/UX design, system security, and video production. Equally comfortable in technical and non-technical environments — adaptable, detail-oriented, and eager to deliver value across diverse industries.`,
  roles: [
    'UI/UX Designer',
    'Web Developer',
    'Video Editor',
    'Tech Support',
    'Graphic Designer',
    'Virtual Assistant',
    'Encoder / Data Entry',
    'Creative Technologist',
  ],
  social: {
    github: 'https://github.com/jirrocchio',
    linkedin: 'https://www.linkedin.com/in/harold-jirro-madrona-081557382/',
    facebook: 'https://www.facebook.com/Jirrocchio',
  },
}

export const skills = [
  {
    category: 'Programming & Development',
    icon: '💻',
    items: ['PHP', 'MySQLi', 'Java', 'C#', 'HTML/CSS', 'Web Development'],
  },
  {
    category: 'System & Security',
    icon: '🛡️',
    items: ['Authentication Systems', 'Honeypot Implementation', 'Data Logging', 'Access Control'],
  },
  {
    category: 'Testing & QA',
    icon: '🧪',
    items: ['PHPUnit', 'JUnit', 'Debugging', 'System Testing', 'Documentation'],
  },
  {
    category: 'Design & Creative',
    icon: '🎨',
    items: ['UI/UX Design', 'Graphic Design', 'Video Editing', 'Figma', 'Canva'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🔧',
    items: ['VS Code', 'NetBeans', 'Figma', 'Canva', 'Git'],
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    items: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability', 'Attention to Detail'],
  },
]

export const jobRoles = [
  { label: 'Web Developer', icon: '💻', desc: 'PHP, MySQLi, Java, C# — full-stack capable' },
  { label: 'UI/UX Designer', icon: '🎨', desc: 'Figma, Canva — clean, user-centered design' },
  { label: 'IT Support', icon: '🛠️', desc: 'Networking, troubleshooting, system setup' },
  { label: 'Graphic Designer', icon: '✏️', desc: 'Branding, layouts, visual content creation' },
  { label: 'Video Editor', icon: '🎬', desc: 'Storytelling through motion and media' },
  { label: 'Virtual Assistant', icon: '🖥️', desc: 'Scheduling, data entry, remote support' },
  { label: 'Encoder / Admin', icon: '📋', desc: 'Accurate, fast, organised data management' },
  { label: 'Customer Support', icon: '📞', desc: 'Clear communication, client-focused service' },
]

export const experience = [
  {
    role: 'IT Intern',
    company: 'ESJAY Auto Corporation',
    location: 'Quezon Avenue, Nueva Ecija',
    period: 'January 2026 – March 2026',
    type: 'Internship',
    highlights: [
      'Encoded labor amounts and service-related data with high accuracy and completeness.',
      'Organised and maintained physical and digital filing systems for fast record retrieval.',
      'Prepared daily operational reports, printed documents, and assisted with appointment scheduling.',
      'Executed targeted text-blast campaigns to notify clients of service updates and appointments.',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'OLSHKEY',
    subtitle: 'Computer Laboratory Smart Lock System',
    date: 'February 2026',
    category: 'Development',
    description: 'An automated laboratory management system featuring smart access control and real-time student attendance tracking, with instant SMS notifications delivered to parents and guardians.',
    highlights: [
      'Automated smart lock integration for laboratory access control',
      'Real-time student attendance monitoring and data logging',
      'SMS gateway integration for parent/guardian notifications',
      'Structured MySQLi database with full data integrity enforcement',
      'Admin dashboard for managing access logs and reports',
    ],
    tech: ['PHP', 'MySQLi', 'SMS API', 'Authentication', 'JavaScript'],
    color: '#e63329',
    icon: '🔐',
    featured: true,
  },
]

export const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Our Lady of the Sacred Heart College of Guimba, Inc.',
    period: '2022 – 2026',
    location: 'Guimba, Nueva Ecija',
    icon: '🎓',
    type: 'Degree',
  },
]

export const activities = [
  {
    role: 'Member',
    org: 'Junior Philippine Computer Society',
    period: '2022 – 2026',
    icon: '🤝',
    type: 'Organization',
    desc: 'Participated in academic and technical IT activities. Engaged in collaborative learning, workshops, and peer knowledge-sharing initiatives.',
  },
]

export const certifications = [
  {
    title: 'Bachelor of Science in Information Technology',
    issuer: 'OLSHCGI',
    year: '2026',
    icon: '🎓',
    category: 'Academic',
    desc: 'Four-year degree covering software development, networking, database systems, and system security.',
  },
  // 👉 Add your certifications here:
  // { title: 'Certificate Name', issuer: 'Issuing Body', year: '2025', icon: '📜', category: 'Technical', desc: 'Brief description.' },
]

export const stats = [
  { label: 'Years of Study', value: 4, suffix: '+', icon: '🎓' },
  { label: 'Projects Built', value: 5, suffix: '+', icon: '🚀' },
  { label: 'Skills Mastered', value: 15, suffix: '+', icon: '⚡' },
  { label: 'Job Roles Ready', value: 8, suffix: '', icon: '💼' },
]
