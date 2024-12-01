export default {
  nav: {
    submitTicket: 'Crear Ticket',
    trackTicket: 'Seguir Ticket',
    admin: 'Panel de Admin',
  },
  home: {
    hero: {
      title: 'Servicios Profesionales de Reparación',
      subtitle: 'Reparaciones rápidas y confiables para todas tus necesidades tecnológicas.',
      cta: 'Crear Ticket de Reparación',
      track: 'Seguir Reparación',
    },
    features: {
      expert: {
        title: 'Técnicos Expertos',
        description: 'Nuestros profesionales certificados tienen años de experiencia.',
      },
      quick: {
        title: 'Servicio Rápido',
        description: 'La mayoría de las reparaciones se completan en 24-48 horas.',
      },
      warranty: {
        title: 'Garantía de Servicio',
        description: 'Garantía de 90 días en reparaciones y piezas.',
      },
    },
    process: {
      title: 'Cómo Funciona',
      step1: {
        title: 'Crear Ticket',
        description: 'Describe los problemas de tu dispositivo.',
      },
      step2: {
        title: 'Diagnóstico',
        description: 'Nuestros expertos evaluarán el problema.',
      },
      step3: {
        title: 'Reparación Rápida',
        description: 'Recupera tu dispositivo en funcionamiento.',
      },
    },
  },
  submitTicket: {
    title: 'Crear Ticket de Reparación',
    form: {
      title: 'Título del Problema',
      titlePlaceholder: 'Breve descripción del problema',
      description: 'Descripción Detallada',
      descriptionPlaceholder: 'Por favor, proporciona todos los detalles posibles sobre el problema',
      name: 'Tu Nombre',
      namePlaceholder: 'Ingresa tu nombre completo',
      email: 'Correo Electrónico',
      emailPlaceholder: 'Ingresa tu correo electrónico',
      device: 'Tipo de Dispositivo',
      devicePlaceholder: 'Selecciona el tipo de dispositivo',
      priority: 'Nivel de Prioridad',
      priorityPlaceholder: 'Selecciona el nivel de prioridad',
      submit: 'Enviar Ticket',
      submitting: 'Enviando...',
    },
    priority: {
      low: 'Baja',
      medium: 'Media',
      high: 'Alta',
    },
    device: {
      laptop: 'Portátil',
      desktop: 'Computadora de Escritorio',
      tablet: 'Tableta',
      phone: 'Teléfono Inteligente',
      other: 'Otro Dispositivo',
    },
  },
  trackTicket: {
    title: 'Seguimiento de Ticket',
    form: {
      ticketId: 'ID del Ticket',
      ticketIdPlaceholder: 'Ingresa el ID del ticket (ej. TIX-123)',
      email: 'Correo Electrónico',
      emailPlaceholder: 'Ingresa el correo usado en el ticket',
      search: 'Buscar Ticket',
      searching: 'Buscando...',
    },
    description: 'Descripción',
    customer: 'Cliente',
    device: 'Dispositivo',
    priority: 'Prioridad',
    created: 'Creado',
    status: {
      pending: 'Pendiente',
      in_progress: 'En Proceso',
      resolved: 'Resuelto',
    },
    error: {
      notFound: 'No se encontró ningún ticket con el ID y correo proporcionados',
      generic: 'Ocurrió un error al buscar el ticket',
    },
  },
};