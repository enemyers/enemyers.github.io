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
    link: '/proyectos/proyecto-1'
  },
  {
    id: 'proyecto-2',
    title: 'Proyecto 2',
    description: 'Descripción detallada del proyecto 2',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '/proyectos/proyecto-2'
  },
  {
    id: 'proyecto-3',
    title: 'Proyecto 3',
    description: 'Descripción detallada del proyecto 3',
    tech: ['Vue.js', 'Python', 'Django'],
    link: '/proyectos/proyecto-3'
  },
  {
    id: 'proyecto-4',
    title: 'Proyecto 4',
    description: 'Descripción detallada del proyecto 4',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: '/proyectos/proyecto-4'
  },
    {
    id: 'proyecto-5',
    title: 'Proyecto 5',
    description: 'Descripción detallada del proyecto 5',
    tech: ['Next.js', 'NestJS', 'Firebase'],
    link: '/proyectos/proyecto-5'
  }
];

export default projects;
