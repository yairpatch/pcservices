export default {
  nav: {
    submitTicket: 'Submit Ticket',
    trackTicket: 'Track Ticket',
    admin: 'Admin',
    login: 'Login',
    logout: 'Logout',
  },
  home: {
    hero: {
      title: 'Professional Computer Repair Services',
      subtitle: 'Fast, reliable repairs for all your tech needs. Expert technicians ready to help.',
      cta: 'Submit a Repair Ticket',
      track: 'Track Your Repair',
    },
    features: {
      expert: {
        title: 'Expert Technicians',
        description: 'Our certified professionals have years of experience in computer repair.',
      },
      quick: {
        title: 'Quick Turnaround',
        description: 'Most repairs are completed within 24-48 hours.',
      },
      warranty: {
        title: 'Service Warranty',
        description: '90-day warranty on all repairs and parts.',
      },
    },
    process: {
      title: 'How It Works',
      step1: {
        title: 'Submit a Ticket',
        description: 'Describe your device issues in detail.',
      },
      step2: {
        title: 'Diagnosis',
        description: 'Our experts will assess the problem.',
      },
      step3: {
        title: 'Quick Repair',
        description: 'Get your device back in working order.',
      },
    },
  },
  submitTicket: {
    title: 'Submit a Repair Ticket',
    form: {
      title: 'Issue Title',
      titlePlaceholder: 'Brief description of the problem',
      description: 'Detailed Description',
      descriptionPlaceholder: 'Please provide as much detail as possible about the issue',
      name: 'Your Name',
      namePlaceholder: 'Enter your full name',
      email: 'Email Address',
      emailPlaceholder: 'Enter your email address',
      device: 'Device Type',
      devicePlaceholder: 'Select your device type',
      priority: 'Priority Level',
      priorityPlaceholder: 'Select priority level',
      submit: 'Submit Ticket',
      submitting: 'Submitting...',
    },
    priority: {
      low: 'Low',
      medium: 'Medium',
      high: 'High',
    },
    device: {
      laptop: 'Laptop',
      desktop: 'Desktop Computer',
      tablet: 'Tablet',
      phone: 'Smartphone',
      other: 'Other Device',
    },
  },
  trackTicket: {
    title: 'Track Your Repair Ticket',
    form: {
      ticketId: 'Ticket ID',
      ticketIdPlaceholder: 'Enter your ticket ID (e.g., TIX-123)',
      email: 'Email Address',
      emailPlaceholder: 'Enter the email used for the ticket',
      search: 'Search Ticket',
      searching: 'Searching...',
    },
    description: 'Description',
    customer: 'Customer',
    device: 'Device',
    priority: 'Priority',
    created: 'Created',
    status: {
      pending: 'Pending',
      in_progress: 'In Progress',
      resolved: 'Resolved',
    },
    error: {
      notFound: 'No ticket found with the provided ID and email',
      generic: 'An error occurred while searching for the ticket',
    },
  },
  admin: {
    title: 'Ticket Management',
    totalTickets: '{{count}} tickets found',
    filters: {
      status: {
        label: 'Filter by Status',
        all: 'All Status',
        pending: 'Pending',
        in_progress: 'In Progress',
        resolved: 'Resolved',
      },
      priority: {
        label: 'Filter by Priority',
        all: 'All Priorities',
        low: 'Low',
        medium: 'Medium',
        high: 'High',
      },
    },
    table: {
      id: 'ID',
      title: 'Title',
      customer: 'Customer',
      status: 'Status',
      priority: 'Priority',
      device: 'Device',
      created: 'Created',
      actions: 'Actions',
    },
    actions: {
      edit: 'Edit Ticket',
      delete: 'Delete Ticket',
    },
  },
  ticket: {
    comments: {
      title: 'Comments',
      placeholder: 'Add your comment here...',
      staff: 'Staff',
      customer: 'Customer',
      submit: 'Send',
      customerNote: 'You can reply once after each staff comment',
      waitingForStaff: 'Waiting for staff response...',
    },
  },
  common: {
    loading: 'Loading...',
    back: 'Back',
  },
  login: {
    title: 'Admin Login',
    username: 'Username',
    password: 'Password',
    submit: 'Sign in',
    invalidCredentials: 'Invalid username or password',
  },
};