export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: ProjectData[] = [
  {
    id: 'proyecto-1',
    title: 'Proyecto 1',
    description: 'Descripción detallada del proyecto 1',
    tech: ['Astro', 'Tailwind', 'TypeScript'],
    link: 'enemyers.dev'
  },
  {
    id: 'proyecto-2',
    title: 'Proyecto 2',
    description: 'Descripción detallada del proyecto 2',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'enemyers.dev'
  },
  {
    id: 'proyecto-3',
    title: 'Proyecto 3',
    description: 'Descripción detallada del proyecto 3',
    tech: ['Vue.js', 'Python', 'Django'],
    link: 'enemyers.dev'
  },
  {
    id: 'proyecto-4',
    title: 'Proyecto 4',
    description: 'Descripción detallada del proyecto 4',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: 'enemyers.dev'
  }
];

export default projects;
