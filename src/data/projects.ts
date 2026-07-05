export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  detail: ProjectDetail;
}

export interface ProjectMetric {
  metric: string;
  value: string;
  note: string;
}

export interface ProjectDetail {
  label: string;
  context: string;
  objective: string;
  role: string;
  duration: string;
  challenge: string;
  solution: string;
  architecture: string[];
  metrics: ProjectMetric[];
  roadmap: string[];
}

const projects: ProjectData[] = [
  {
    id: 'nova-finanzas',
    title: 'Nova Finanzas',
    description: 'Rediseño web para una consultora financiera enfocada en captacion de leads B2B',
    tech: ['Astro', 'Tailwind', 'TypeScript'],
    link: '/proyectos/nova-finanzas',
    detail: {
      label: 'Sitio corporativo con SEO tecnico',
      context:
        'La marca necesitaba una web mas rapida, clara y preparada para competir en busquedas de servicios financieros de alto ticket.',
      objective:
        'Aumentar conversion organica y reducir el tiempo de lanzamiento de nuevas landings comerciales.',
      role: 'Frontend lead y arquitectura de componentes',
      duration: '5 semanas',
      challenge:
        'El sitio previo tenia Core Web Vitals bajos, estructura de contenido desordenada y baja conversion en formularios clave.',
      solution:
        'Se construyo una base en Astro + TypeScript con sistema de componentes reutilizables y UI utility-first con Tailwind.',
      architecture: [
        'Astro (80%) para render estatico y excelente performance SEO.',
        'TypeScript (80%) para tipado de componentes y contenido.',
        'Tailwind CSS (80%) y CSS (85%) para consistencia visual y velocidad de desarrollo.'
      ],
      metrics: [
        { metric: 'Performance', value: '95+', note: 'Promedio en Lighthouse móvil' },
        { metric: 'Conversion', value: '+34%', note: 'Formularios completados en 60 dias' },
        { metric: 'Tiempo de carga', value: '-48%', note: 'Comparado con la versión anterior' }
      ],
      roadmap: [
        'Integrar CMS ligero para edición por equipo de marketing.',
        'A/B testing en hero y CTA principal.',
        'Publicar biblioteca interna de componentes y patrones.'
      ]
    }
  },
  {
    id: 'ops-control-center',
    title: 'Ops Control Center',
    description: 'Sistema interno para gestionar incidencias operativas y SLAs en tiempo real',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '/proyectos/ops-control-center',
    detail: {
      label: 'Dashboard de operaciones 24/7',
      context:
        'El area operativa gestionaba incidencias en hojas de calculo y canales dispersos sin visibilidad centralizada.',
      objective:
        'Centralizar la operacion en un tablero unico y reducir el tiempo de resolucion de incidentes criticos.',
      role: 'Desarrollador full stack',
      duration: '7 semanas',
      challenge:
        'Habia duplicidad de registros, cambios sin historial y alto tiempo de handoff entre turnos.',
      solution:
        'Se implemento un dashboard React conectado a API de Express con eventos operativos y trazabilidad por estado.',
      architecture: [
        'React (90%) para UI reactiva en monitores de operacion.',
        'JavaScript (90%) y Express.js (90%) para API REST y reglas de negocio.',
        'MongoDB (70%) optimizado con indices por severidad, estado y ventana de tiempo.'
      ],
      metrics: [
        { metric: 'Resolucion', value: '-39%', note: 'Tiempo medio de cierre de incidencias' },
        { metric: 'Errores de registro', value: '-62%', note: 'Reducción por validaciones automáticas' },
        { metric: 'Adopción', value: '89%', note: 'Usuarios activos semanales del equipo' }
      ],
      roadmap: [
        'Agregar notificaciones en tiempo real por nivel de severidad.',
        'Crear reportes exportables para stakeholders.',
        'Incluir reglas de automatización por prioridad.'
      ]
    }
  },
  {
    id: 'campus-pro',
    title: 'Campus Pro',
    description: 'Plataforma e-learning para academias con rutas de aprendizaje y analitica',
    tech: ['Vue.js', 'Python', 'Django'],
    link: '/proyectos/campus-pro',
    detail: {
      label: 'E-learning con seguimiento de progreso',
      context:
        'Una academia digital necesitaba escalar cursos y mejorar la tasa de finalizacion sin aumentar soporte manual.',
      objective:
        'Elevar la finalizacion de cursos y automatizar el seguimiento academico de estudiantes activos.',
      role: 'Backend lead y soporte frontend',
      duration: '11 semanas',
      challenge:
        'La operacion academica no tenia trazabilidad por modulo ni alertas tempranas de abandono.',
      solution:
        'Se construyo backend Python con Django y servicios de evaluacion, conectado a interfaz Vue para consumo rapido.',
      architecture: [
        'Python (70%) y Django para logica academica, calificaciones y certificados.',
        'Vue.js (70%) para vistas dinamicas de lecciones, quizzes y progreso.',
        'PostgreSQL (80%) como base principal para historial de actividad y evaluaciones.'
      ],
      metrics: [
        { metric: 'Finalizacion de cursos', value: '+26%', note: 'Comparado con cohorte previa' },
        { metric: 'Soporte academico', value: '-31%', note: 'Menos tickets por dudas operativas' },
        { metric: 'Tiempo de publicacion', value: '-52%', note: 'Creacion de nuevos modulos' }
      ],
      roadmap: [
        'Implementar recomendaciones de contenido por progreso.',
        'Añadir analítica de aprendizaje por segmento.',
        'Incorporar evaluaciones adaptativas por nivel.'
      ]
    }
  },
  {
    id: 'pipeline-vision',
    title: 'Pipeline Vision',
    description: 'CRM comercial para forecast de ventas y trazabilidad de actividades del equipo',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: '/proyectos/pipeline-vision',
    detail: {
      label: 'SaaS B2B para gestion comercial',
      context:
        'La direccion comercial requeria datos confiables en tiempo real para forecast mensual y seguimiento de cuentas.',
      objective:
        'Reducir desviaciones de forecast y estandarizar el proceso comercial entre equipos.',
      role: 'Lead técnico y backend',
      duration: '9 semanas',
      challenge:
        'El equipo operaba con reportes manuales sin unica fuente de verdad y con baja calidad de datos.',
      solution:
        'Se desarrollo un SaaS en Next.js con backend de servicios en Express y persistencia relacional con PostgreSQL.',
      architecture: [
        'Next.js (80%) para vistas de alto rendimiento y carga hibrida.',
        'Express.js (90%) para servicios de negocio y validaciones comerciales.',
        'PostgreSQL (80%) con modelo relacional para cuentas, oportunidades y actividades.'
      ],
      metrics: [
        { metric: 'Exactitud de forecast', value: '+21%', note: 'Mejora en proyeccion mensual' },
        { metric: 'Registro de actividad', value: '+41%', note: 'Interacciones comerciales documentadas' },
        { metric: 'Tiempo de reporte', value: '-63%', note: 'Generación de informes ejecutivos' }
      ],
      roadmap: [
        'Integrar sincronización bidireccional con CRM externo.',
        'Activar panel de salud de pipeline en tiempo real.',
        'Incluir permisos avanzados por unidad de negocio.'
      ]
    }
  },
  {
    id: 'marketplace-orbit',
    title: 'Marketplace Orbit',
    description: 'Plataforma marketplace para un nicho retail con onboarding de vendedores y checkout optimizado',
    tech: ['Next.js', 'NestJS', 'Firebase'],
    link: '/proyectos/marketplace-orbit',
    detail: {
      label: 'Marketplace transaccional',
      context:
        'Una startup de retail necesitaba lanzar marketplace multivendedor con foco en conversion mobile y escalabilidad.',
      objective:
        'Disminuir abandono en checkout y reducir el tiempo de alta de catalogo para nuevos vendedores.',
      role: 'Arquitectura backend y API design',
      duration: '8 semanas',
      challenge:
        'La plataforma MVP tenia alta friccion de onboarding y cuellos de botella en la validacion de catalogo.',
      solution:
        'Se implemento stack Next.js + NestJS con autenticacion en Firebase y endpoints modulares para ordenes y pagos.',
      architecture: [
        'Next.js (80%) para catalogo SSR y paginas de conversion.',
        'NestJS (80%) para API modular con seguridad y validacion de dominio.',
        'JavaScript (90%) y TypeScript (80%) para consistencia en frontend y backend.'
      ],
      metrics: [
        { metric: 'Checkout completado', value: '+29%', note: 'Incremento de conversion en mobile' },
        { metric: 'Publicación de productos', value: '-44%', note: 'Tiempo medio por vendedor' },
        { metric: 'Retención 30 días', value: '+16%', note: 'Usuarios compradores recurrentes' }
      ],
      roadmap: [
        'Motor de recomendaciones por comportamiento de compra.',
        'Sistema de reputación para vendedores y compradores.',
        'Estrategia de campañas automatizadas por segmento.'
      ]
    }
  }
];

export default projects;
