export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsByCategory: SkillCategory[] = [
  {
    category: 'Lenguajes de Programación',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Python', level: 70 }
    ]
  },
  {
    category: 'Frameworks y Librerías Backend',
    skills: [
      { name: 'Express.js', level: 90 },
      { name: 'NestJS', level: 80 },
      { name: 'FastAPI', level: 80 },
      { name: 'Flask', level: 70 }
    ]
  },
  {
    category: 'Frameworks y Librerías Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Astro', level: 80 },
      { name: 'Next.js', level: 80 },
      { name: 'Vue.js', level: 70 }
    ]
  },
  {
    category: 'Bases de Datos',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 70 },
      { name: 'PostgreSQL', level: 80 }
    ]
  },
  {
    category: 'Diseño y herramientas',  
    skills: [
      { name: 'CSS', level: 85 },
      { name: 'Tailwind CSS', level: 80 }
    ]
  }
];

export default skillsByCategory;
