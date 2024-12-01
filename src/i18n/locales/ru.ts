export default {
  nav: {
    submitTicket: 'Создать заявку',
    trackTicket: 'Отследить заявку',
    admin: 'Панель администратора',
  },
  home: {
    hero: {
      title: 'Профессиональный ремонт компьютеров',
      subtitle: 'Быстрый и надежный ремонт для всех ваших технических потребностей.',
      cta: 'Создать заявку на ремонт',
      track: 'Отследить ремонт',
    },
    features: {
      expert: {
        title: 'Эксперты-техники',
        description: 'Наши сертифицированные специалисты имеют многолетний опыт работы.',
      },
      quick: {
        title: 'Быстрое обслуживание',
        description: 'Большинство ремонтов выполняется в течение 24-48 часов.',
      },
      warranty: {
        title: 'Гарантия на услуги',
        description: '90-дневная гарантия на все ремонтные работы и запчасти.',
      },
    },
    process: {
      title: 'Как это работает',
      step1: {
        title: 'Создайте заявку',
        description: 'Опишите проблемы с вашим устройством.',
      },
      step2: {
        title: 'Диагностика',
        description: 'Наши эксперты оценят проблему.',
      },
      step3: {
        title: 'Быстрый ремонт',
        description: 'Получите ваше устройство в рабочем состоянии.',
      },
    },
  },
  submitTicket: {
    title: 'Создать заявку на ремонт',
    form: {
      title: 'Название проблемы',
      titlePlaceholder: 'Краткое описание проблемы',
      description: 'Подробное описание',
      descriptionPlaceholder: 'Пожалуйста, предоставьте как можно больше деталей о проблеме',
      name: 'Ваше имя',
      namePlaceholder: 'Введите ваше полное имя',
      email: 'Email адрес',
      emailPlaceholder: 'Введите ваш email адрес',
      device: 'Тип устройства',
      devicePlaceholder: 'Выберите тип устройства',
      priority: 'Уровень приоритета',
      priorityPlaceholder: 'Выберите уровень приоритета',
      submit: 'Отправить заявку',
      submitting: 'Отправка...',
    },
    priority: {
      low: 'Низкий',
      medium: 'Средний',
      high: 'Высокий',
    },
    device: {
      laptop: 'Ноутбук',
      desktop: 'Настольный компьютер',
      tablet: 'Планшет',
      phone: 'Смартфон',
      other: 'Другое устройство',
    },
  },
  trackTicket: {
    title: 'Отследить вашу заявку',
    form: {
      ticketId: 'ID заявки',
      ticketIdPlaceholder: 'Введите ID вашей заявки (напр., TIX-123)',
      email: 'Email адрес',
      emailPlaceholder: 'Введите email, использованный при создании заявки',
      search: 'Найти заявку',
      searching: 'Поиск...',
    },
    description: 'Описание',
    customer: 'Клиент',
    device: 'Устройство',
    priority: 'Приоритет',
    created: 'Создано',
    status: {
      pending: 'В ожидании',
      in_progress: 'В работе',
      resolved: 'Решено',
    },
    error: {
      notFound: 'Заявка с указанным ID и email не найдена',
      generic: 'Произошла ошибка при поиске заявки',
    },
  },
  admin: {
    title: 'Управление заявками',
    totalTickets: '{{count}} заявок найдено',
    confirmDelete: 'Вы уверены, что хотите удалить эту заявку?',
    filters: {
      status: {
        label: 'Фильтр по статусу',
        all: 'Все статусы',
        pending: 'В ожидании',
        in_progress: 'В работе',
        resolved: 'Решено',
      },
      priority: {
        label: 'Фильтр по приоритету',
        all: 'Все приоритеты',
        low: 'Низкий',
        medium: 'Средний',
        high: 'Высокий',
      },
    },
    table: {
      id: 'ID',
      title: 'Название',
      customer: 'Клиент',
      status: 'Статус',
      priority: 'Приоритет',
      device: 'Устройство',
      created: 'Создано',
      actions: 'Действия',
    },
    actions: {
      edit: 'Редактировать',
      delete: 'Удалить',
    },
  },
};
