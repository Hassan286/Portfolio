// ─────────────────────────────────────────────────────────────
// Edit YOUR content here. Pages read from this file only.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Muhammad Hassan Ch",
  firstName: "Muhammad",
  lastName: "Hassan Ch",
  role: "Frontend Developer",
  location: "Islamabad, Pakistan",
  photo: "/assets/hassan.jpg",
  resumeFile: "/resume.pdf",
  tagline: "Web Developer based in Pakistan.",
  intro: "Frontend developer with 6 months of freelance experience building responsive, user-focused interfaces with React.js. Currently completing a Bachelor's in Business & Information Technology at Virtual University of Pakistan.",
  story: "I started learning frontend development by building small UI clones and freelance projects, focusing on React.js, responsive layouts, and clean component structure. I'm currently looking for an entry-level frontend role — remote or based in Pakistan — where I can keep building real product work.",
  email: "mhassanch02@gmail.com",
  phone: "+92 340 6084213",
  linkedin: "https://www.linkedin.com/in/hassan-ch-8b7696193/",
  github: "https://github.com/Hassan286",
}

export const stats = [
  { value: "6", label: "Months Freelance Experience" },
  { value: "1", label: "Live Project Shipped" },
]

export const focusAreas = [
  { title: "Frontend Development", detail: "React.js, JavaScript (ES6+)" },
  { title: "Responsive Design", detail: "Tailwind CSS, Bootstrap" },
]

export const skillGroups = [
  { group: "Languages", items: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
  { group: "Frontend Tools", items: ["React.js", "React Router", "Redux (basics)", "Vite"] },
  { group: "Styling", items: ["Tailwind CSS", "Bootstrap", "Flexbox / Grid"] },
  { group: "Extra Tools", items: ["Git & GitHub", "npm", "Chrome DevTools"] },
]

// Add more project objects here as you build them.
export const projects = [
  {
    name: "GublooTech Website Clone",
    tag: "personal-project",
    description: "Rebuilt the GublooTech.com frontend with React and Vite — focused on a fully responsive navbar with route-aware active states and a mobile drawer menu.",
    stack: ["React", "Vite", "React Router"],
    github: "https://github.com/Hassan286",
    live: "",
  },
  // {
  //   name: "Your Next Project",
  //   tag: "freelance-project",
  //   description: "One or two lines on what it does and what you built.",
  //   stack: ["React", "Tailwind CSS"],
  //   github: "https://github.com/Hassan286/repo-name",
  //   live: "https://your-live-link.vercel.app",
  // },
]

export const socials = [
  { label: "LinkedIn", url: profile.linkedin },
  { label: "GitHub", url: profile.github },
  { label: "Email", url: `mailto:${profile.email}` },
]
