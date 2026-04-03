// Eddy Trejo Portfolio - Main JavaScript

// Projects data with detailed info (Haim Benisty style)
const projects = [
  {
    id: 1,
    name: 'GYM MISTER',
    subtitle: 'AMERICA',
    category: 'Corporate Website',
    description: 'Plataforma digital de alto rendimiento para un gimnasio premium.',
    challenge: 'Exclusive fitness experience, premium results. As a luxury gym targeting high-end clients, GYM MISTER needed a digital platform that reflected their premium brand while making booking classes effortless.',
    solution: 'Developed a dark-luxury platform with editorial typography and smooth animations. Implemented real-time booking system with payment integration and complete admin panel for class and trainer management.',
    image: 'assets/images/gym-mister-web.png',
    heroImage: 'assets/images/gym-mister-web.png',
    desktopImage: 'assets/images/gym-mister-desktop.png',
    tabletImage: 'assets/images/gym-mister-tablet.png',
    mobileImage: 'assets/images/gym-mister-mobile.png',
    gallery: [
      'assets/images/gym-mister-desktop.png',
      'assets/images/gym-mister-tablet.png',
      'assets/images/gym-mister-mobile.png'
    ],
    color: 'from-orange-500/20 to-red-600/20',
    stats: { stat1: '40%', stat2: '1.8s', stat3: '100%', stat4: '5★' },
    colors: [
      { name: 'Midnight', hex: '#0a0a0f' },
      { name: 'Orange', hex: '#ff6b35' },
      { name: 'Crimson', hex: '#dc2626' }
    ],
    testimonial: {
      quote: 'The platform transformed how our clients interact with us. Bookings increased by 40% in the first month.',
      author: 'Carlos Mendez',
      role: 'Founder'
    },
    features: [
      { icon: '📅', title: 'Reservas en tiempo real', desc: 'Sistema de booking con disponibilidad instantánea' },
      { icon: '💳', title: 'Pagos integrados', desc: 'Pasarela segura con múltiples métodos' },
      { icon: '📊', title: 'Panel admin', desc: 'Gestión completa de clases y entrenadores' },
      { icon: '📱', title: 'App-like experience', desc: 'PWA con notificaciones push' },
      { icon: '📈', title: 'Analytics', desc: 'Estadísticas de uso y conversiones' },
      { icon: '🔒', title: 'Seguridad', desc: 'Autenticación JWT y encriptación' }
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    process: [
      { step: 'Discovery', desc: 'Análisis de requerimientos y benchmarking de gimnasios premium' },
      { step: 'UX/UI Design', desc: 'Wireframes, prototipos y diseño visual con Figma' },
      { step: 'Development', desc: 'Desarrollo frontend con React y backend con Node.js' },
      { step: 'Testing', desc: 'Pruebas de usabilidad, performance y seguridad' },
      { step: 'Launch', desc: 'Deploy en Vercel con CI/CD automatizado' }
    ],
    liveLink: '#'
  },
  {
    id: 2,
    name: 'EON',
    subtitle: 'ACTIVEWEAR',
    category: 'E-commerce',
    description: 'E-commerce mobile-first para marca de ropa deportiva futurista.',
    challenge: 'Creating a seamless shopping experience that reflects the futuristic brand identity. The checkout needed to be intuitive to reduce cart abandonment.',
    solution: 'Designed an e-commerce with radical minimalism, optimized one-page checkout and persistent cart. Navigation is ultra-fast with smooth transitions and micro-interactions that guide users.',
    image: 'assets/images/eon-web.png',
    heroImage: 'assets/images/eon-web.png',
    desktopImage: 'assets/images/eon-desktop.png',
    tabletImage: 'assets/images/eon-tablet.png',
    mobileImage: 'assets/images/eon-mobile.png',
    gallery: [
      'assets/images/eon-desktop.png',
      'assets/images/eon-tablet.png',
      'assets/images/eon-mobile.png'
    ],
    color: 'from-blue-500/20 to-cyan-400/20',
    stats: { stat1: '+45%', stat2: '1.5s', stat3: '100%', stat4: '4.9★' },
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Air Force', hex: '#3b82f6' },
      { name: 'Midnight', hex: '#1e3a5f' }
    ],
    testimonial: {
      quote: 'Our conversion rate increased by 45%. The checkout process is incredibly smooth.',
      author: 'Sarah Chen',
      role: 'Marketing Director'
    },
    features: [
      { icon: '🛒', title: 'Checkout optimizado', desc: 'Proceso de compra en 3 pasos' },
      { icon: '❤️', title: 'Wishlist', desc: 'Guarda tus favoritos para después' },
      { icon: '🔍', title: 'Búsqueda inteligente', desc: 'Filtros avanzados y autocomplete' },
      { icon: '📦', title: 'Tracking', desc: 'Seguimiento de pedidos en tiempo real' },
      { icon: '🔄', title: 'Sync inventory', desc: 'Stock actualizado automáticamente' },
      { icon: '📧', title: 'Email marketing', desc: 'Campañas automatizadas' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    process: [
      { step: 'Research', desc: 'Estudio de competidores y análisis de conversión' },
      { step: 'Design System', desc: 'Creación de componentes reutilizables' },
      { step: 'Frontend', desc: 'Next.js con SSR para SEO óptimo' },
      { step: 'Backend', desc: 'API RESTful con integración Stripe' },
      { step: 'Optimization', desc: 'Lighthouse score 95+ en todas las métricas' }
    ],
    liveLink: '#'
  },
  {
    id: 3,
    name: 'AURA',
    subtitle: 'WELLNESS',
    category: 'Web App',
    description: 'Plataforma de bienestar mental con diseño calmado y terapéutico.',
    challenge: 'Creating a digital space that conveys calm and wellness, with an aesthetic that invites relaxation without being boring. The app needed to be intuitive for users of all ages.',
    solution: 'Designed a platform with pastel mesh gradients, editorial serif typography and maximum negative space. Implemented guided meditations with high-quality audio and mood tracking.',
    image: 'assets/images/aura-web.png',
    heroImage: 'assets/images/aura-web.png',
    desktopImage: 'assets/images/aura-desktop.png',
    tabletImage: 'assets/images/aura-tablet.png',
    mobileImage: 'assets/images/aura-mobile.png',
    gallery: [
      'assets/images/aura-desktop.png',
      'assets/images/aura-tablet.png',
      'assets/images/aura-mobile.png'
    ],
    color: 'from-teal-400/20 to-emerald-500/20',
    stats: { stat1: '50K+', stat2: '2.1s', stat3: '100%', stat4: '4.8★' },
    colors: [
      { name: 'Mint', hex: '#99f6e4' },
      { name: 'Teal', hex: '#14b8a6' },
      { name: 'Sage', hex: '#84cc16' }
    ],
    testimonial: {
      quote: 'Our users love the calming interface. Daily active users increased by 50K in three months.',
      author: 'Dr. Emily Park',
      role: 'Wellness Director'
    },
    features: [
      { icon: '🧘', title: 'Meditaciones guiadas', desc: 'Biblioteca de 100+ sesiones' },
      { icon: '📓', title: 'Journal personal', desc: 'Prompts diarios para reflexión' },
      { icon: '📊', title: 'Mood tracker', desc: 'Seguimiento de estado de ánimo' },
      { icon: '👥', title: 'Comunidad', desc: 'Espacio de apoyo anónimo' },
      { icon: '🔔', title: 'Recordatorios', desc: 'Notificaciones personalizables' },
      { icon: '📈', title: 'Progreso', desc: 'Estadísticas semanales y mensuales' }
    ],
    technologies: ['React', 'Firebase', 'Framer Motion', 'Web Audio API'],
    process: [
      { step: 'Concept', desc: 'Definición de la propuesta de valor única' },
      { step: 'UX Research', desc: 'Entrevistas con usuarios de apps de wellness' },
      { step: 'Design', desc: 'Diseño calmado con paleta de colores terapéutica' },
      { step: 'Development', desc: 'React con animaciones fluidas' },
      { step: 'Launch', desc: 'Release en App Store y Google Play' }
    ],
    liveLink: '#'
  },
  {
    id: 4,
    name: 'KAIZEN',
    subtitle: 'STUDIO',
    category: 'Portfolio',
    description: 'Portfolio corporativo de arquitectura de lujo con estilo editorial.',
    challenge: 'Creating a portfolio that reflects the excellence level of luxury architecture projects. The design needed to be minimalist yet impactful, putting focus on the photography.',
    solution: 'Developed a portfolio with asymmetric editorial grid inspired by Wallpaper* and Dezeen. Minimalist navigation, immersive lightbox and detailed project pages with large-scale galleries.',
    image: 'assets/images/kaizen-web.png',
    heroImage: 'assets/images/kaizen-web.png',
    desktopImage: 'assets/images/kaizen-desktop.png',
    tabletImage: 'assets/images/kaizen-tablet.png',
    mobileImage: 'assets/images/kaizen-mobile.png',
    gallery: [
      'assets/images/kaizen-desktop.png',
      'assets/images/kaizen-tablet.png',
      'assets/images/kaizen-mobile.png'
    ],
    color: 'from-gray-500/20 to-slate-600/20',
    stats: { stat1: '+200%', stat2: '1.2s', stat3: '100%', stat4: '5★' },
    colors: [
      { name: 'White', hex: '#fafafa' },
      { name: 'Charcoal', hex: '#374151' },
      { name: 'Black', hex: '#111827' }
    ],
    testimonial: {
      quote: 'The portfolio elevated our brand presence. Client inquiries increased by 200%.',
      author: 'Hiroshi Tanaka',
      role: 'Principal Architect'
    },
    features: [
      { icon: '🖼️', title: 'Galería inmersiva', desc: 'Lightbox con navegación fluida' },
      { icon: '🏷️', title: 'Filtros avanzados', desc: 'Por tipo, ubicación y año' },
      { icon: '🗺️', title: 'Mapa interactivo', desc: 'Ubicación de proyectos con Google Maps' },
      { icon: '📄', title: 'Fichas técnicas', desc: 'Detalles completos de cada proyecto' },
      { icon: '📰', title: 'Blog integrado', desc: 'Noticias y artículos de arquitectura' },
      { icon: '📞', title: 'Contacto directo', desc: 'Formulario para consultas' }
    ],
    technologies: ['Vue.js', 'GSAP', 'Three.js', 'Sanity CMS'],
    process: [
      { step: 'Inspiration', desc: 'Análisis de portfolios de arquitectura premiados' },
      { step: 'Wireframing', desc: 'Estructura de navegación y jerarquía de contenido' },
      { step: 'Visual Design', desc: 'Tipografía editorial y sistema de grillas' },
      { step: 'Development', desc: 'Vue.js con animaciones GSAP' },
      { step: 'CMS Setup', desc: 'Integración con Sanity para gestión de contenido' }
    ],
    liveLink: '#'
  },
  {
    id: 5,
    name: 'NEXUS',
    subtitle: 'TECH',
    category: 'SaaS Platform',
    description: 'Dashboard analítico para inteligencia de negocios con datos en tiempo real.',
    challenge: 'Creating a dashboard that handles large volumes of data without sacrificing performance. Visualizations needed to be clear and actionable for executives.',
    solution: 'Developed a dashboard with real-time data visualizations using D3.js, automated reports and intelligent alerts. The interface is clean and focused on relevant KPIs.',
    image: 'assets/images/nexus-web.png',
    heroImage: 'assets/images/nexus-web.png',
    desktopImage: 'assets/images/nexus-desktop.png',
    tabletImage: 'assets/images/nexus-tablet.png',
    mobileImage: 'assets/images/nexus-mobile.png',
    gallery: [
      'assets/images/nexus-desktop.png',
      'assets/images/nexus-tablet.png',
      'assets/images/nexus-mobile.png'
    ],
    color: 'from-purple-500/20 to-indigo-600/20',
    stats: { stat1: '99.9%', stat2: '0.8s', stat3: '100%', stat4: '4.9★' },
    colors: [
      { name: 'Deep Purple', hex: '#7c3aed' },
      { name: 'Indigo', hex: '#4f46e5' },
      { name: 'Midnight', hex: '#1e1b4b' }
    ],
    testimonial: {
      quote: 'Real-time insights transformed our decision-making process. Uptime is 99.9%.',
      author: 'Michael Torres',
      role: 'CTO'
    },
    features: [
      { icon: '📊', title: 'Gráficos interactivos', desc: 'D3.js con drill-down capability' },
      { icon: '📧', title: 'Reportes auto', desc: 'Envío programado por email' },
      { icon: '🔔', title: 'Alertas inteligentes', desc: 'Notificaciones basadas en umbrales' },
      { icon: '📤', title: 'Exportación', desc: 'PDF, Excel y CSV' },
      { icon: '🔗', title: 'Multi-fuente', desc: 'Integración con múltiples APIs' },
      { icon: '🔐', title: 'MFA', desc: 'Autenticación multi-factor' }
    ],
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
    process: [
      { step: 'Data Analysis', desc: 'Definición de métricas clave y fuentes de datos' },
      { step: 'Dashboard Design', desc: 'Wireframes de widgets y layout' },
      { step: 'Frontend', desc: 'React con componentes de gráficos reutilizables' },
      { step: 'Backend', desc: 'FastAPI con caching Redis' },
      { step: 'Real-time', desc: 'WebSockets para datos en vivo' }
    ],
    liveLink: '#'
  },
  {
    id: 6,
    name: 'VELVET',
    subtitle: 'LOUNGE',
    category: 'Booking System',
    description: 'Sistema de reservas para lounge exclusivo con experiencia premium.',
    challenge: 'Creating a reservation system that reflects the exclusivity of the lounge. The experience needed to be seamless from table selection to confirmation.',
    solution: 'Designed a system with dark design and gold accents, real-time table selection and instant confirmations. The admin panel allows managing reservations and waitlist.',
    image: 'assets/images/velvet-web.png',
    heroImage: 'assets/images/velvet-web.png',
    desktopImage: 'assets/images/velvet-desktop.png',
    tabletImage: 'assets/images/velvet-tablet.png',
    mobileImage: 'assets/images/velvet-mobile.png',
    gallery: [
      'assets/images/velvet-desktop.png',
      'assets/images/velvet-tablet.png',
      'assets/images/velvet-mobile.png'
    ],
    color: 'from-amber-500/20 to-yellow-600/20',
    stats: { stat1: '+60%', stat2: '1.5s', stat3: '100%', stat4: '5★' },
    colors: [
      { name: 'Gold', hex: '#fbbf24' },
      { name: 'Amber', hex: '#f59e0b' },
      { name: 'Black', hex: '#0a0a0a' }
    ],
    testimonial: {
      quote: 'Reservations increased by 60%. The VIP experience starts from the first click.',
      author: 'Isabella Romano',
      role: 'Owner'
    },
    features: [
      { icon: '🪑', title: 'Mapa de mesas', desc: 'Selección visual en tiempo real' },
      { icon: '📅', title: 'Calendario', desc: 'Disponibilidad por fecha y hora' },
      { icon: '🍽️', title: 'Menú digital', desc: 'Pre-ordenar bebidas y platos' },
      { icon: '✉️', title: 'Confirmaciones', desc: 'SMS y email automáticos' },
      { icon: '⏳', title: 'Lista de espera', desc: 'Gestión inteligente de cancelaciones' },
      { icon: '📱', title: 'QR Check-in', desc: 'Validación rápida de reservas' }
    ],
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Twilio', 'SendGrid'],
    process: [
      { step: 'Discovery', desc: 'Entendimiento del flujo de reservas del lounge' },
      { step: 'UX Design', desc: 'Mapa de mesas interactivo y flujo de reserva' },
      { step: 'UI Design', desc: 'Estética dark-luxury con acentos dorados' },
      { step: 'Development', desc: 'Next.js con Prisma ORM' },
      { step: 'Integrations', desc: 'Twilio SMS y SendGrid email' }
    ],
    liveLink: '#'
  },
  {
    id: 7,
    name: 'PULSE',
    subtitle: 'FITNESS',
    category: 'Mobile App',
    description: 'App de seguimiento fitness con gamificación y comunidad integrada.',
    challenge: 'Creating an app that keeps users motivated on their fitness journey. Gamification needed to be fun without being childish.',
    solution: 'Developed an app with wearable sync, weekly challenges, friend leaderboard and achievement system. The community allows sharing progress and motivating each other.',
    image: 'assets/images/pulse-web.png',
    heroImage: 'assets/images/pulse-web.png',
    desktopImage: 'assets/images/pulse-desktop.png',
    tabletImage: 'assets/images/pulse-tablet.png',
    mobileImage: 'assets/images/pulse-mobile.png',
    gallery: [
      'assets/images/pulse-desktop.png',
      'assets/images/pulse-tablet.png',
      'assets/images/pulse-mobile.png'
    ],
    color: 'from-rose-500/20 to-pink-600/20',
    stats: { stat1: '100K+', stat2: '2.3s', stat3: '100%', stat4: '4.7★' },
    colors: [
      { name: 'Rose', hex: '#f43f5e' },
      { name: 'Coral', hex: '#fb7185' },
      { name: 'Pink', hex: '#ec4899' }
    ],
    testimonial: {
      quote: 'User engagement skyrocketed. 100K active users in just 6 months.',
      author: 'David Kim',
      role: 'Product Manager'
    },
    features: [
      { icon: '⌚', title: 'Sync wearables', desc: 'Apple Watch, Fitbit, Garmin' },
      { icon: '🏋️', title: 'Rutinas', desc: 'Planes personalizados por objetivo' },
      { icon: '🥗', title: 'Nutrición', desc: 'Tracking de calorías y macros' },
      { icon: '🏆', title: 'Gamificación', desc: 'Retos, logros y recompensas' },
      { icon: '🏅', title: 'Leaderboard', desc: 'Compite con amigos' },
      { icon: '📸', title: 'Progreso visual', desc: 'Fotos comparativas' }
    ],
    technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit API'],
    process: [
      { step: 'Research', desc: 'Análisis de apps fitness líderes' },
      { step: 'Gamification', desc: 'Diseño de sistema de logros y recompensas' },
      { step: 'Prototyping', desc: 'Prototipos interactivos en Figma' },
      { step: 'Development', desc: 'React Native con Expo' },
      { step: 'Store Release', desc: 'Publicación en App Store y Play Store' }
    ],
    liveLink: '#'
  },
  {
    id: 8,
    name: 'ZENITH',
    subtitle: 'CAPITAL',
    category: 'Fintech',
    description: 'Plataforma de inversión con interfaz minimalista y análisis de mercado.',
    challenge: 'Creating an investment platform accessible for beginners yet powerful for experts. Data needed to be presented clearly without being overwhelming.',
    solution: 'Developed a platform with interactive TradingView charts, customizable watchlist and price alerts. The minimalist interface focuses on relevant information.',
    image: 'assets/images/zenith-web.png',
    heroImage: 'assets/images/zenith-web.png',
    desktopImage: 'assets/images/zenith-desktop.png',
    tabletImage: 'assets/images/zenith-tablet.png',
    mobileImage: 'assets/images/zenith-mobile.png',
    gallery: [
      'assets/images/zenith-desktop.png',
      'assets/images/zenith-tablet.png',
      'assets/images/zenith-mobile.png'
    ],
    color: 'from-emerald-500/20 to-green-600/20',
    stats: { stat1: '$10M+', stat2: '0.5s', stat3: '100%', stat4: '4.9★' },
    colors: [
      { name: 'Emerald', hex: '#10b981' },
      { name: 'Green', hex: '#22c55e' },
      { name: 'Dark', hex: '#064e3b' }
    ],
    testimonial: {
      quote: 'Over $10M in transactions processed. The platform is both beautiful and powerful.',
      author: 'Alexandra Chen',
      role: 'CEO'
    },
    features: [
      { icon: '📈', title: 'Gráficos velas', desc: 'TradingView interactivo' },
      { icon: '👁️', title: 'Watchlist', desc: 'Seguimiento de activos favoritos' },
      { icon: '🔔', title: 'Alertas', desc: 'Notificaciones de precios' },
      { icon: '💰', title: 'Simulador', desc: 'Practica sin riesgo' },
      { icon: '📰', title: 'Noticias', desc: 'Feed de noticias en tiempo real' },
      { icon: '📊', title: 'Historial', desc: 'Registro de todas las transacciones' }
    ],
    technologies: ['React', 'TradingView API', 'Node.js', 'WebSocket', 'MongoDB'],
    process: [
      { step: 'Compliance', desc: 'Investigación de regulaciones fintech' },
      { step: 'Data Design', desc: 'Estructura de datos financieros' },
      { step: 'Charts', desc: 'Integración de TradingView' },
      { step: 'Real-time', desc: 'WebSockets para precios en vivo' },
      { step: 'Security', desc: 'Auditoría de seguridad y encriptación' }
    ],
    liveLink: '#'
  },
];

// DOM Elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const menuText = document.getElementById('menu-text');
const menuPortrait = document.getElementById('menu-portrait');
const menuFooter = document.getElementById('menu-footer');
const bars = document.querySelectorAll('.bar');

// Modal Elements
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalHeroImg = document.getElementById('modal-hero-img');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalDesktopImg = document.getElementById('modal-desktop-img');
const modalMobileImg = document.getElementById('modal-mobile-img');
const modalChallenge = document.getElementById('modal-challenge');
const modalSolution = document.getElementById('modal-solution');
const modalGallery = document.getElementById('modal-gallery');
const modalFeatures = document.getElementById('modal-features');
const modalTech = document.getElementById('modal-tech');
const modalProcess = document.getElementById('modal-process');

// Menu toggle
let menuOpen = false;
menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  
  if (menuOpen) {
    fullscreenMenu.style.clipPath = 'circle(150% at calc(100% - 60px) 40px)';
    fullscreenMenu.classList.add('menu-open');
    fullscreenMenu.style.pointerEvents = 'all';
    menuText.textContent = 'Cerrar';
    menuPortrait.style.opacity = '1';
    menuPortrait.style.transform = 'scale(1)';
    menuPortrait.style.transition = 'all 0.5s ease 0.3s';
    menuFooter.style.opacity = '1';
    menuFooter.style.transitionDelay = '0.6s';
    bars[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    bars[1].style.transform = 'rotate(-45deg) translate(4px, -4px)';
    document.body.style.overflow = 'hidden';
  } else {
    fullscreenMenu.style.clipPath = 'circle(0% at calc(100% - 60px) 40px)';
    fullscreenMenu.classList.remove('menu-open');
    fullscreenMenu.style.pointerEvents = 'none';
    menuText.textContent = 'Menú';
    menuPortrait.style.opacity = '0';
    menuPortrait.style.transform = 'scale(0.95)';
    menuFooter.style.opacity = '0';
    bars[0].style.transform = '';
    bars[1].style.transform = '';
    document.body.style.overflow = '';
  }
});

// Close menu on link click
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    fullscreenMenu.style.clipPath = 'circle(0% at calc(100% - 60px) 40px)';
    fullscreenMenu.classList.remove('menu-open');
    fullscreenMenu.style.pointerEvents = 'none';
    menuText.textContent = 'Menú';
    menuPortrait.style.opacity = '0';
    menuFooter.style.opacity = '0';
    bars[0].style.transform = '';
    bars[1].style.transform = '';
    document.body.style.overflow = '';
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('bg-dark/90', 'backdrop-blur-lg');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-dark/90', 'backdrop-blur-lg');
    navbar.classList.add('bg-transparent');
  }
});

// Hero animations
window.addEventListener('load', () => {
  document.getElementById('hero').classList.add('hero-loaded');
  
  setTimeout(() => {
    document.getElementById('hero-badge').style.opacity = '1';
    document.getElementById('hero-badge').style.transform = 'translateY(0)';
    document.getElementById('hero-badge').style.transition = 'all 0.7s ease';
  }, 100);
  
  setTimeout(() => {
    document.getElementById('hero-subtitle').style.opacity = '1';
    document.getElementById('hero-subtitle').style.transform = 'translateY(0)';
    document.getElementById('hero-subtitle').style.transition = 'all 0.8s ease 0.5s';
  }, 500);
  
  setTimeout(() => {
    document.getElementById('hero-cta').style.opacity = '1';
    document.getElementById('hero-cta').style.transform = 'translateY(0)';
    document.getElementById('hero-cta').style.transition = 'all 0.8s ease 0.65s';
  }, 650);
  
  setTimeout(() => {
    document.getElementById('particle-container').style.opacity = '1';
    document.getElementById('particle-container').style.transform = 'translateX(0)';
    document.getElementById('particle-container').style.transition = 'all 1s ease 0.3s';
  }, 300);
  
  setTimeout(() => {
    document.getElementById('scroll-indicator').style.opacity = '1';
    document.getElementById('scroll-indicator').style.transition = 'opacity 1s ease 1s';
  }, 1000);
  
  setTimeout(() => {
    document.getElementById('hero-socials').style.opacity = '1';
    document.getElementById('hero-socials').style.transition = 'opacity 1s ease 1.2s';
  }, 1200);
  
  initParticleCanvas();
});

// Particle Canvas
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  if (isTouchDevice) return;
  
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let rafId = null;
  
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    initParticles(rect.width, rect.height);
  }
  
  function initParticles(w, h) {
    particles = [];
    const centerX = w / 2;
    const centerY = h / 2;
    const radiusX = w * 0.35;
    const radiusY = h * 0.4;
    
    for (let angle = 0; angle < Math.PI * 2; angle += 0.08) {
      for (let r = 0.3; r <= 1; r += 0.15) {
        const headCenterY = centerY - radiusY * 0.4;
        const headRadiusX = radiusX * 0.45;
        const headRadiusY = radiusY * 0.35;
        
        const x = centerX + Math.cos(angle) * headRadiusX * r;
        const y = headCenterY + Math.sin(angle) * headRadiusY * r;
        
        if (Math.random() > 0.3) {
          particles.push({
            x: x + (Math.random() - 0.5) * 30,
            y: y + (Math.random() - 0.5) * 30,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
            size: Math.random() * 2 + 1,
            alpha: Math.random() * 0.5 + 0.3,
          });
        }
      }
    }
    
    for (let i = 0; i < 80; i++) {
      const angle = Math.PI + (Math.random() - 0.5) * 1.5;
      const r = 0.5 + Math.random() * 0.5;
      const x = centerX + Math.cos(angle) * radiusX * r;
      const y = centerY + radiusY * 0.5 + Math.random() * radiusY * 0.3;
      
      particles.push({
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        baseX: x,
        baseY: y,
        vx: 0,
        vy: 0,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.2,
      });
    }
  }
  
  function animate() {
    const rect = canvas.parentElement.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    const repulsionRadius = 100;
    const repulsionForce = 5;
    const springStrength = 0.08;
    const damping = 0.85;
    
    particles.forEach((p) => {
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < repulsionRadius) {
        const angle = Math.atan2(dy, dx);
        const force = ((repulsionRadius - dist) / repulsionRadius) * repulsionForce;
        p.vx += Math.cos(angle) * force;
        p.vy += Math.sin(angle) * force;
      }
      
      p.vx += (p.baseX - p.x) * springStrength;
      p.vy += (p.baseY - p.y) * springStrength;
      p.vx *= damping;
      p.vy *= damping;
      p.x += p.vx;
      p.y += p.vy;
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.fill();
    });
    
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach((p2) => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 50) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 50)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
    
    rafId = requestAnimationFrame(animate);
  }
  
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) * (canvas.width / rect.width / window.devicePixelRatio);
    mouse.y = (e.clientY - rect.top) * (canvas.height / rect.height / window.devicePixelRatio);
  });
  
  canvas.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });
  
  window.addEventListener('resize', resize);
  resize();
  animate();
}

// Current project index for navigation
let currentProjectIndex = 0;

// Open Modal (Haim Benisty style - full page)
function openModal(project) {
  // Store current project index
  currentProjectIndex = projects.findIndex(p => p.id === project.id);
  
  // Hero section
  modalHeroImg.src = project.heroImage;
  modalHeroImg.alt = project.name;
  document.getElementById('modal-category').textContent = project.category;
  document.getElementById('modal-title').textContent = `${project.name} ${project.subtitle}`;
  document.getElementById('modal-subtitle').textContent = project.description;
  
  // Challenge
  modalChallenge.textContent = project.challenge;
  
  // Website preview (main screenshot without device frame)
  document.getElementById('modal-web-img').src = project.image;
  
  // Device mockups
  document.getElementById('modal-desktop-img').src = project.desktopImage;
  document.getElementById('modal-tablet-img').src = project.tabletImage;
  document.getElementById('modal-mobile-img').src = project.mobileImage;
  
  // Color Palette
  const modalColors = document.getElementById('modal-colors');
  if (project.colors) {
    modalColors.innerHTML = project.colors.map(color => `
      <div class="flex items-center gap-3">
        <div class="w-16 h-16 rounded-lg shadow-lg" style="background-color: ${color.hex}"></div>
        <div>
          <p class="text-sm font-medium text-white">${color.name}</p>
          <p class="text-xs text-white/50 font-mono">${color.hex}</p>
        </div>
      </div>
    `).join('');
  }
  
  // Features
  modalFeatures.innerHTML = project.features.map(feature => `
    <div class="space-y-3">
      <span class="text-3xl">${feature.icon}</span>
      <h4 class="font-semibold text-white">${feature.title}</h4>
      <p class="text-sm text-white/60">${feature.desc}</p>
    </div>
  `).join('');
  
  // Technologies
  modalTech.innerHTML = project.technologies.map(tech => `
    <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:border-accent/50 hover:text-accent transition-all">
      ${tech}
    </span>
  `).join('');
  
  // Testimonial
  if (project.testimonial) {
    document.getElementById('modal-testimonial').textContent = project.testimonial.quote;
    document.getElementById('modal-testimonial-author').textContent = project.testimonial.author;
    document.getElementById('modal-testimonial-role').textContent = project.testimonial.role;
  }
  
  // Navigation
  updateNavigation();
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  window.scrollTo(0, 0);
}

// Update navigation buttons
function updateNavigation() {
  const prevIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : projects.length - 1;
  const nextIndex = currentProjectIndex < projects.length - 1 ? currentProjectIndex + 1 : 0;
  
  document.getElementById('modal-prev-title').textContent = `${projects[prevIndex].name} ${projects[prevIndex].subtitle}`;
  document.getElementById('modal-next-title').textContent = `${projects[nextIndex].name} ${projects[nextIndex].subtitle}`;
}

// Navigate to previous project
document.getElementById('modal-prev').addEventListener('click', () => {
  const prevIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : projects.length - 1;
  openModal(projects[prevIndex]);
});

// Navigate to next project
document.getElementById('modal-next').addEventListener('click', () => {
  const nextIndex = currentProjectIndex < projects.length - 1 ? currentProjectIndex + 1 : 0;
  openModal(projects[nextIndex]);
});

// Close Modal
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Render projects with device mockups (MacBook + iPhone style)
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;
  
  container.innerHTML = projects.map((project, index) => {
    const isReversed = index % 2 === 1;
    return `
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-24 ${isReversed ? 'lg:direction-rtl' : ''}">
        <!-- Device Mockup - iPhone Result -->
        <div class="relative ${isReversed ? 'lg:order-2' : ''} reveal flex justify-center">
          <div class="relative max-w-[320px] lg:max-w-[380px] transform hover:scale-[1.02] transition-transform duration-500">
            <img src="${project.image}" alt="${project.name}" loading="lazy" class="w-full rounded-3xl shadow-2xl shadow-black/50">
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6 ${isReversed ? 'lg:order-1 lg:text-right' : ''} reveal">
          <div class="space-y-2 ${isReversed ? 'lg:items-end' : ''} flex flex-col">
            <span class="text-accent text-xs font-bold tracking-[0.3em] uppercase">${project.category}</span>
            <h3 class="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
              ${project.name}<br><span class="text-outline">${project.subtitle}</span>
            </h3>
          </div>
          <p class="text-white/60 text-lg max-w-md leading-relaxed">${project.description}</p>
          
          <!-- Tech preview -->
          <div class="flex flex-wrap gap-2 ${isReversed ? 'lg:justify-end' : ''}">
            ${project.technologies.slice(0, 4).map(tech => `
              <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-white/50">${tech}</span>
            `).join('')}
          </div>
          
          <button onclick="window.openModalById(${project.id})" class="skew-btn inline-flex items-center gap-3 bg-white/10 hover:bg-accent px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 group ${isReversed ? 'lg:ml-auto' : ''}">
            <span>Explorar</span>
            <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Global function to open modal by ID
window.openModalById = function(id) {
  const project = projects.find(p => p.id === id);
  if (project) openModal(project);
};

// Intersection Observer for reveal animations
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Initialize
renderProjects();
initRevealAnimations();
