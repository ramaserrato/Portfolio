import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const es = {
  header: { proyectos: "Proyectos", sobreMi: "Sobre mí", contacto: "Contacto" },
  hero: {
    nombre: "Ramiro Serrato",
    titulo: "Desarrollador Full-Stack",
    descripcion: "Construyo aplicaciones web y móviles, integrando bases de datos y modelos de inteligencia artificial."
  },
  proyectos: {
    titulo: "Proyectos",
    banksheets: { descripcion: "Aplicación para contadores que automatiza conciliaciones y pasa PDFs a Excel, de manera rápida y precisa." },
    moviereviews: { descripcion: "Registra reseñas de películas mediante una API en FastAPI, y usa un modelo de IA para clasificarlas como positivas o negativas." }
  },
  sobreMi: {
    titulo: "Sobre mí",
    texto1: "Soy de Argentina, tengo 22 años y vivo en Ciudad Autónoma de Buenos Aires. Me encuentro a un paso de recibirme como",
    carrera: "Técnico Universitario en Programación Informática",
    universidad: "en la Universidad Nacional de San Martín.",
    texto2: "Soy",
    rol: "desarrollador full-stack",
    texto3: "Me gusta trabajar tanto en frontend como en backend, integrando varios tipos bases de datos y, cuando el proyecto lo pide, modelos de inteligencia artificial.",
    texto4: "No tengo experiencia profesional en IT. Durante el transcurso de mi carrera aprendí a diseñar aplicaciones y páginas web de manera educativa, cuya enseñanza aplico para diseñar proyectos como los que se pueden ver en esta página.",
    texto5: "También tengo conocimientos en telecomunicaciones y redes, métodos numéricos aplicados a la programación, procesamiento de datos y sistemas operativos."
  },
  contacto: {
    titulo: "Contacto",
    descripcion: "¿Tenés un proyecto en mente o querés charlar? Escribime por cualquiera de estos medios.",
    mailCopiado: "¡Mail copiado!",
    telefonoCopiado: "¡Teléfono copiado!",
    cv: "Mi CV"
  },
  modal: { leerMas: "Leer más", repositorio: "Repositorio", pagina: "Página de BankSheets" },
  banksheets: {
    epigrafe1: "Presentación de la Landing Page al entrar a la página.",
    epigrafe2: "Dashboard inicial, con gráficos y estadísticas de los últimos extractos.",
    epigrafe3: "Herramienta de extracción de PDF.",
    epigrafe4: "Herramienta de conciliación.",
    epigrafe5: "Herramienta de inversiones.",
    intro: "es el trabajo final de la materia",
    materia: "Proyecto de Software",
    intro2: "cuya consigna consistía en realizar, en grupo, un proyecto libre, con la condición de que este fuera",
    redituable: "redituable",
    intro3: "y que nosotros tuviéramos la oportunidad de venderlo en un futuro.",
    parrafo2: "Luego de ponernos en contacto con un contador, nos contó sobre el problema que atravesaban al transcribir",
    pdfs: "PDFs de recibos de bancos a Excel",
    parrafo2b: "Hacerlo a mano es un trabajo que lleva días enteros de trabajo y no existe ninguna página que pueda hacerlo de manera rápida y eficaz. Por esto, creamos",
    parrafo2c: "que llega para facilitar las tareas de los contadores a un precio justo.",
    motor: "motor en Python",
    parrafo3: "que realiza todas las operaciones que son la base de las herramientas que brinda el proyecto. Utilizando bibliotecas como",
    parrafo3b: "este motor realiza 3 tareas principales:",
    tarea1titulo: "Conversión de extractos PDF a Excel",
    tarea1desc: "Extracción geométrica de datos, sin los errores de los lectores genéricos.",
    tarea2titulo: "Conciliación fiscal",
    tarea2desc: "Cruza lo declarado ante ARCA contra el subdiario de la empresa, automáticamente.",
    tarea3titulo: "Inversiones",
    tarea3desc: "Seguimiento de cartera con cálculo de costo real por activo.",
    parrafo4: "La interfaz de la página está construida en",
    parrafo4b: "y para la orquestación y lógica se utiliza",
    parrafo4c: "que organizan el sistema de usuarios y tokens respectivamente. Para organizar el sistema de membresías utilizamos",
    esta: "Esta aplicación está construida a partir de un"
  },
  moviereviews: {
    epigrafe1: "Pantalla principal de la página.\nPrimera opción: muestra la página con las películas. Segunda opción: redirige al formulario.",
    epigrafe2: "Pantalla de películas, con la opción de búsqueda por nombre y un filtro para las más reseñadas.",
    epigrafe3: "Formulario. La DB crea un usuario si no hay ninguno registrado con ese nombre.\nSi ya hay uno registrado, le asigna el ID de ese usuario a la reseña",
    epigrafe4: "Ventana que muestra los datos de la película reseñada y el resultado arrojado por la IA según la reseña.",
    epigrafe5: "Búsqueda dinámica de películas.",
    epigrafe6: "Modal que sale al seleccionar una película, que muestra sus datos y reseñas.\nCada reseña tiene el porcentaje calculado por la IA y, en la descripción, se muestra un promedio de la valoración de todas las reseñas.",
    materia: "Bases de Datos",
    intro: "Trabajo final de la materia",
    intro2: "cuya consigna constaba de producir, en grupos, una página que integre",
    sql: "bases de datos SQL",
    intro3: "con modelos de",
    ml: "Machine Learning",
    intro4: "o Inteligencia Artificial. Nuestra idea para su resolución fue la siguiente: una aplicación que toma reseñas de películas y las califica como",
    positivas: "Positivas",
    negativas: "Negativas",
    parrafo2: "Para ello, construimos un motor en",
    parrafo2b: "que toma un dataset de 100.000 reseñas de películas en inglés y aprende la connotación de sus palabras para ponerle la calificación. La traducción de las reseñas (para poder publicarlas en español) está hecho con la librería de googleTranslate, por lo que puede fallar.",
    parrafo3: "Utilizamos",
    parrafo3b: "para comunicar el front con la DB en MySQL Workbench. El front hecho en",
    parrafo3c: "muestra dos opciones: la de \"Subir una reseña\", que lleva a un formulario que hace POST a la DB, y la de abrir la pestaña de Películas, que hace le hace GET y toma las películas por nombre. En esta pestaña, al seleccionar una película, se muestran sus datos gracias a un JSON crudo, y sus reseñas que saca de la DB.",
    parrafo4: "Al ser un proyecto educativo, este",
    sinDeploy: "no tiene Deploy",
    parrafo4b: "ya que lo realizado nos alcanzó para la aprobación del proyecto. Como puntos que nos quedaron pendientes, podemos agregar: un sistema de usuarios y amigos (como el de IMDB, por ejemplo), sistemas para mostrar novedades o recomendaciones (que podría hacerse cacheando películas) y su obvio Deploy."
  }
};

const en = {
  header: { proyectos: "Projects", sobreMi: "About me", contacto: "Contact" },
  hero: {
    nombre: "Ramiro Serrato",
    titulo: "Full-Stack Developer",
    descripcion: "I build web and mobile applications, integrating databases and artificial intelligence models."
  },
  proyectos: {
    titulo: "Projects",
    banksheets: { descripcion: "Application for accountants that automates reconciliations and converts PDFs to Excel, quickly and accurately." },
    moviereviews: { descripcion: "Records movie reviews through a FastAPI-powered API and uses an AI model to classify them as positive or negative." }
  },
  sobreMi: {
    titulo: "About me",
    texto1: "I'm from Argentina, I'm 22 years old and I live in Buenos Aires. I'm one step away from graduating as a",
    carrera: "University Technician in Computer Programming",
    universidad: "at the National University of San Martín.",
    texto2: "I'm a",
    rol: "full-stack developer",
    texto3: "I enjoy working on both frontend and backend, integrating various types of databases and, when the project calls for it, artificial intelligence models.",
    texto4: "I have no professional IT experience. Throughout my degree I learned to design applications and websites in an educational setting, and I apply that knowledge to build projects like the ones shown on this page.",
    texto5: "I also have knowledge in telecommunications and networks, numerical methods applied to programming, data processing and operating systems."
  },
  contacto: {
    titulo: "Contact",
    descripcion: "Have a project in mind or just want to chat? Reach out through any of these channels.",
    mailCopiado: "Email copied!",
    telefonoCopiado: "Phone copied!",
    cv: "My CV"
  },
  modal: { leerMas: "Read more", repositorio: "Repository", pagina: "BankSheets website" },
  banksheets: {
    epigrafe1: "Landing Page presentation when entering the site.",
    epigrafe2: "Initial dashboard with charts and statistics from the latest statements.",
    epigrafe3: "PDF extraction tool.",
    epigrafe4: "Reconciliation tool.",
    epigrafe5: "Investment tracking tool.",
    intro: "is the final project for the course",
    materia: "Software Project",
    intro2: "whose assignment was to build, as a group, a free project with the condition that it be",
    redituable: "profitable",
    intro3: "and that we would have the opportunity to sell it in the future.",
    parrafo2: "After getting in touch with an accountant, we learned about the problem they faced when transcribing",
    pdfs: "bank statement PDFs to Excel",
    parrafo2b: "Doing it manually is a task that takes entire days of work and no existing tool does it quickly and accurately. So we created",
    parrafo2c: "to streamline accountants' workflows at a fair price.",
    motor: "Python engine",
    parrafo3: "that handles all the core operations behind the project's tools. Using libraries such as",
    parrafo3b: "this engine performs 3 main tasks:",
    tarea1titulo: "PDF statement to Excel conversion",
    tarea1desc: "Geometric data extraction, free from the errors of generic readers.",
    tarea2titulo: "Tax reconciliation",
    tarea2desc: "Automatically cross-checks what was declared to ARCA against the company's sub-ledger.",
    tarea3titulo: "Investments",
    tarea3desc: "Portfolio tracking with real cost calculation per asset.",
    parrafo4: "The page's interface is built with",
    parrafo4b: "and for orchestration and logic it uses",
    parrafo4c: "which manage the user and token systems respectively. For the membership system we use",
    esta: "This application is built on a"
  },
  moviereviews: {
    epigrafe1: "Main page screen.\nFirst option: shows the movies page. Second option: redirects to the form.",
    epigrafe2: "Movies screen, with a search by name option and a filter for the most reviewed ones.",
    epigrafe3: "Form. The DB creates a user if none is registered with that name.\nIf one already exists, it assigns that user's ID to the review.",
    epigrafe4: "Window showing the reviewed movie's data and the result returned by the AI based on the review.",
    epigrafe5: "Dynamic movie search.",
    epigrafe6: "Modal shown when selecting a movie, displaying its data and reviews.\nEach review includes the percentage calculated by the AI and the description shows an average rating across all reviews.",
    materia: "Databases",
    intro: "Final project for the course",
    intro2: "whose assignment was to build, as a group, a page integrating",
    sql: "SQL databases",
    intro3: "with",
    ml: "Machine Learning",
    intro4: "models or Artificial Intelligence. Our idea was the following: an application that takes movie reviews and classifies them as",
    positivas: "Positive",
    negativas: "Negative",
    parrafo2: "To do this, we built an engine in",
    parrafo2b: "that trains on a dataset of 100,000 English movie reviews and learns the connotation of words to assign the rating. The translation of reviews (to display them in Spanish) is done with the googleTranslate library, so it may occasionally fail.",
    parrafo3: "We used",
    parrafo3b: "to connect the frontend with the MySQL Workbench DB. The frontend built in",
    parrafo3c: "offers two options: 'Submit a review', which leads to a form that POSTs to the DB, and opening the Movies tab, which GETs movies by name. In this tab, selecting a movie shows its data from a raw JSON and its reviews from the DB.",
    parrafo4: "Being an educational project, it",
    sinDeploy: "has no deployment",
    parrafo4b: "since what we built was enough to pass the project. Pending features include: a user and friends system (like IMDB's), recommendation or news systems (which could be implemented using caching) and an actual deployment."
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });

export default i18n;