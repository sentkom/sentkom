const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => nav.classList.toggle("open"));
  nav
    .querySelectorAll("a")
    .forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("open")),
    );
}
document.querySelector("#year").textContent = new Date().getFullYear();

const studentOfferWidget = document.querySelector("#studentOfferWidget");
if (studentOfferWidget) {
  const offerDismissedKey = "sentkom-student-offer-dismissed";
  const dismissStudentOffer = () => {
    sessionStorage.setItem(offerDismissedKey, "true");
    studentOfferWidget.classList.remove("is-visible");
    window.setTimeout(() => {
      studentOfferWidget.hidden = true;
    }, 250);
  };

  if (!sessionStorage.getItem(offerDismissedKey)) {
    window.setTimeout(() => {
      if (!sessionStorage.getItem(offerDismissedKey)) {
        studentOfferWidget.hidden = false;
        window.requestAnimationFrame(() =>
          studentOfferWidget.classList.add("is-visible"),
        );
      }
    }, 1200);
  }

  document
    .querySelector("#studentOfferDismiss")
    .addEventListener("click", dismissStudentOffer);
  studentOfferWidget
    .querySelector(".student-offer-card")
    .addEventListener("click", () => {
      sessionStorage.setItem(offerDismissedKey, "true");
    });
}

const services = {
  "graphic-design": {
    number: "01 / DESIGN & BRANDING",
    title: "Graphic Design & Branding",
    lead: "Build a memorable visual identity and polished creative materials for your business, event or personal brand.",
    audience:
      "Businesses, schools and colleges, event organisers, startups, restaurants, professionals and organisations.",
    items: [
      "Logo Design",
      "Brand Identity Design",
      "Posters and Promotional Designs",
      "Event Posters",
      "Flex and Banner Designs",
      "Standee Designs",
      "Brochure and Flyer Designs",
      "Visiting Card Designs",
      "ID Card Designs",
      "Custom Invitations for Weddings, Birthdays and Every Special Occasion",
      "Photo Frames and Collage Designs",
      "Memento and Trophy Design",
      "Social Media Posts and Advertisements",
      "YouTube Thumbnails",
      "Presentation (PPT) Design",
      "Menu Card Designs",
      "Letterhead and Business Stationery",
      "Custom Digital Illustrations",
    ],
  },
  "website-development": {
    number: "02 / WEBSITE DEVELOPMENT",
    title: "Website Development",
    lead: "Get a responsive website designed around your goals, audience and brand—from an effective landing page to a complete online store.",
    audience:
      "Businesses, companies, schools and colleges, event organisers, entrepreneurs, professionals and individuals.",
    items: [
      "Business Websites",
      "Company Websites",
      "Portfolio Websites",
      "Educational Institution Websites",
      "E-commerce Websites",
      "Event and Symposium Websites",
      "Landing Page Development",
      "Personal Websites",
      "Responsive Website Development",
      "Website Redesign and Maintenance",
      "Domain and Hosting Setup",
      "Website Deployment (Vercel and other platforms)",
    ],
  },
  "software-development": {
    number: "03 / SOFTWARE & APPLICATIONS",
    title: "Software & Application Development",
    lead: "Streamline work with custom applications built for the way your organisation actually operates.",
    audience:
      "Small businesses, shops, startups, educational institutions, companies and teams with a custom workflow.",
    items: [
      "Custom Software Development",
      "Desktop Application Development",
      "Web Application Development",
      "Mobile Application Development",
      "Business Management Software",
      "Billing and Inventory Management Systems",
      "Student Management Systems",
      "Employee Management Systems",
      "Database-Driven Applications",
      "Automation Software",
      "API Development and Integration",
    ],
  },
  "ai-machine-learning": {
    number: "04 / AI & MACHINE LEARNING",
    title: "AI & Machine Learning Solutions",
    lead: "Put data and intelligent automation to work with practical AI features and machine learning solutions.",
    audience:
      "Startups, businesses, researchers and organisations looking to add useful AI capabilities or automate work.",
    items: [
      "AI-Based Application Development",
      "Machine Learning Model Development",
      "Predictive Analytics",
      "AI Chatbot Development",
      "Intelligent Automation",
      "Data Analysis and Prediction Systems",
      "AI-Based Monitoring Systems",
      "Natural Language Processing Solutions",
      "Computer Vision Applications",
      "AI Integration into Existing Applications",
    ],
  },
  "iot-embedded": {
    number: "05 / IOT & EMBEDDED SYSTEMS",
    title: "IoT & Embedded Systems",
    lead: "Connect hardware, sensors and software to prototype smart devices and real-time monitoring systems.",
    audience:
      "Students, researchers, startups, manufacturers, businesses and teams developing connected products or prototypes.",
    items: [
      "IoT-Based Project Development",
      "Smart Monitoring Systems",
      "Sensor-Based Automation",
      "ESP32 and ESP8266 Projects",
      "Arduino-Based Solutions",
      "Raspberry Pi Applications",
      "Wireless Communication Systems",
      "Real-Time Data Monitoring",
      "Smart Home Automation",
      "Hardware and Software Integration",
      "IoT Dashboard Development",
      "Prototype Development",
    ],
  },
  "ui-ux-design": {
    number: "06 / UI/UX DESIGN",
    title: "UI/UX Design",
    lead: "Make digital products easier to understand and use with thoughtful research, interface design and interactive prototypes.",
    audience:
      "Businesses, product teams, startups and organisations creating or improving a website, app or software product.",
    items: [
      "Website UI Design",
      "Mobile App UI Design",
      "Software Interface Design",
      "Wireframing",
      "Interactive Prototyping",
      "User Experience Research",
      "Dashboard Design",
      "Figma-Based Design",
      "Existing Interface Redesign",
    ],
  },
  "digital-marketing": {
    number: "07 / DIGITAL MARKETING & CREATIVE MEDIA",
    title: "Digital Marketing & Creative Media",
    lead: "Present your brand consistently with campaign-ready creative assets and clear brand guidelines for online channels.",
    audience:
      "Small businesses, startups, shops, restaurants, event organisers, professionals and growing brands.",
    items: [
      "Social Media Creative Design",
      "Digital Advertising Creatives",
      "Business Branding",
      "Brand Guidelines",
      "Promotional Campaign Designs",
      "Digital Business Profiles",
      "Marketing Materials",
      "Business Presentation Design",
      "Online Brand Identity Development",
    ],
  },
  "data-archival": {
    number: "08 / DATA & DATABASES",
    title: "Data Archival & Database Management",
    lead: "Keep important information organised, accessible and better protected with practical data and database solutions.",
    audience:
      "Schools, colleges, clinics, NGOs, companies and organisations managing important records or business data.",
    items: [
      "Digital Data Archival",
      "Data Storage Solutions",
      "Database Design and Development",
      "Database Management",
      "Data Backup Solutions",
      "Data Recovery Planning",
      "Data Migration",
      "Excel and CSV Data Management",
      "Digital Record Management",
      "Document Management Systems",
      "Data Organization and Processing",
    ],
  },
  "academic-projects": {
    number: "09 / ACADEMIC & PROTOTYPE DEVELOPMENT",
    title: "Academic & Prototype Development",
    lead: "Get practical support to plan, develop and demonstrate academic projects and working prototypes.",
    audience:
      "College students, schools, researchers and academic teams. A special student offer is available for eligible work.",
    items: [
      "Final-Year Project Development",
      "Mini Project Development",
      "Engineering Project Prototypes",
      "Software Project Development",
      "IoT Project Development",
      "AI/ML Project Development",
      "Research Prototype Development",
      "Project Documentation",
      "Technical Presentation Preparation",
      "Project Demonstration Support",
      "Technical Training and Workshops",
    ],
  },
  "it-solutions": {
    number: "10 / IT & DIGITAL TRANSFORMATION",
    title: "IT Solutions & Digital Transformation",
    lead: "Make everyday operations more reliable and efficient through hands-on IT support, integration and automation.",
    audience:
      "Small businesses, schools, colleges, companies, NGOs and teams modernising their digital workflows.",
    items: [
      "IT Consulting",
      "Business Process Automation",
      "Digital Transformation Solutions",
      "Technical Troubleshooting",
      "Software Installation and Configuration",
      "Website Maintenance",
      "System Setup and Configuration",
      "Cloud Deployment Support",
      "Technology Integration",
      "Digital Workflow Development",
    ],
  },
};

const servicePage = document.querySelector(".service-detail");
if (servicePage) {
  const service =
    services[new URLSearchParams(window.location.search).get("service")];
  if (service) {
    document.title = `${service.title} | SENTKOM`;
    document.querySelector('meta[name="description"]').content = service.lead;
    document.querySelector("#serviceNumber").textContent = service.number;
    document.querySelector("#serviceTitle").textContent = service.title;
    document.querySelector("#serviceLead").textContent = service.lead;
    document.querySelector("#serviceAudience").textContent = service.audience;
    const items = document.querySelector("#serviceItems");
    service.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      items.append(listItem);
    });
    const enquiry = `index.html?service=${encodeURIComponent(service.title)}#contact`;
    document.querySelector("#serviceEnquiry").href = enquiry;
    document.querySelector("#serviceWhatsApp").href =
      `https://wa.me/919345005902?text=${encodeURIComponent(`Hello SENTKOM, I would like to enquire about ${service.title}.`)}`;
  } else {
    document.querySelector(".detail-hero").innerHTML =
      '<a class="detail-back" href="index.html#services">← All services</a><p class="eyebrow">SERVICE NOT FOUND</p><h1>Explore what we do.</h1><p class="detail-lead">Choose one of our services to see how SENTKOM can help with your project.</p><a class="btn" href="index.html#services">View all services ↗</a>';
    document.querySelector(".detail-content").hidden = true;
  }
}

const form = document.querySelector("#enquiryForm");
if (form) {
  const requestedService = new URLSearchParams(window.location.search).get(
    "service",
  );
  if (requestedService) form.elements.service.value = requestedService;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      "Hello SENTKOM! I would like to make an enquiry.",
      "",
      "Name: " + data.get("name"),
      "Email: " + data.get("email"),
      "Service: " + data.get("service"),
      "Project details: " + data.get("message"),
    ].join("\n");
    const url =
      "https://wa.me/919345005902?text=" + encodeURIComponent(message);
    window.open(url, "_blank", "noopener");
  });
}

// Progressive enhancement: motion is disabled for users requesting reduced motion.
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const progressBar = document.querySelector(".scroll-progress");
const header = document.querySelector(".header");
const backTop = document.querySelector(".back-top");
const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
let scrollScheduled = false;
function updateScrollUI() {
  const maxScroll = Math.max(
    1,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  const y = window.scrollY;
  if (progressBar)
    progressBar.style.transform = `scaleX(${Math.min(1, y / maxScroll)})`;
  header?.classList.toggle("is-scrolled", y > 20);
  backTop?.classList.toggle("visible", y > 500);
  scrollScheduled = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollScheduled) {
      window.requestAnimationFrame(updateScrollUI);
      scrollScheduled = true;
    }
  },
  { passive: true },
);
window.addEventListener("resize", updateScrollUI, { passive: true });
updateScrollUI();
backTop?.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" }),
);

const revealTargets = document.querySelectorAll(
  ".section .eyebrow, .section h2, .section-head p, .two-col p, .cards article, .service-card, .client-list > div, .steps article, .contact-row, #enquiryForm",
);
if ("IntersectionObserver" in window && !reduceMotion) {
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    if (element.matches(".cards article, .service-card, .steps article"))
      element.style.transitionDelay = `${(index % 3) * 90}ms`;
  });
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -25px 0px" },
  );
  revealTargets.forEach((el) => revealObserver.observe(el));
}
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id,
          ),
        );
      });
    },
    { rootMargin: "-25% 0px -60% 0px" },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((section) => sectionObserver.observe(section));
}
const glow = document.querySelector(".cursor-glow");
if (glow && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener(
    "pointermove",
    (event) => {
      glow.style.transform = `translate3d(${event.clientX - 210}px, ${event.clientY - 210}px, 0)`;
    },
    { passive: true },
  );
}

const serviceOrbit = document.querySelector(".service-orbit-10-layout");
if (serviceOrbit) {
  const serviceHub = serviceOrbit.querySelector(".service-orbit-hub");
  const serviceLines = serviceOrbit.querySelector(".service-orbit-lines");
  const connectors = serviceLines.querySelectorAll("path[data-target]");
  const updateServiceConnectors = () => {
    const layoutBounds = serviceOrbit.getBoundingClientRect();
    const hubBounds = serviceHub.getBoundingClientRect();
    const hubCenterX = hubBounds.left + hubBounds.width / 2 - layoutBounds.left;
    const hubCenterY = hubBounds.top + hubBounds.height / 2 - layoutBounds.top;
    const radius = Math.min(hubBounds.width, hubBounds.height) / 2 + 21;

    serviceLines.setAttribute(
      "viewBox",
      `0 0 ${layoutBounds.width} ${layoutBounds.height}`,
    );

    connectors.forEach((connector) => {
      const card = serviceOrbit.querySelector(connector.dataset.target);
      if (!card) return;

      const cardBounds = card.getBoundingClientRect();
      const cardCenterX = cardBounds.left + cardBounds.width / 2 - layoutBounds.left;
      const cardCenterY = cardBounds.top + cardBounds.height / 2 - layoutBounds.top;
      const directionX = cardCenterX - hubCenterX;
      const directionY = cardCenterY - hubCenterY;
      const length = Math.hypot(directionX, directionY);
      if (!length) return;

      const unitX = directionX / length;
      const unitY = directionY / length;
      const cardEdgeX =
        (directionX < 0 ? cardBounds.right : cardBounds.left) -
        layoutBounds.left;
      const cardEdgeY = cardCenterY;
      const hubEdgeX = hubCenterX + unitX * radius;
      const hubEdgeY = hubCenterY + unitY * radius;

      connector.setAttribute(
        "d",
        `M ${cardEdgeX} ${cardEdgeY} L ${hubEdgeX} ${hubEdgeY}`,
      );
    });
  };

  updateServiceConnectors();
  window.addEventListener("resize", updateServiceConnectors, { passive: true });
  if ("ResizeObserver" in window) {
    const serviceOrbitObserver = new ResizeObserver(updateServiceConnectors);
    serviceOrbitObserver.observe(serviceOrbit);
    serviceOrbitObserver.observe(serviceHub);
    serviceOrbit.querySelectorAll(".service-orbit-card").forEach((card) => {
      serviceOrbitObserver.observe(card);
    });
  }
  serviceOrbit.querySelectorAll(".service-orbit-card").forEach((card) => {
    ["pointerenter", "pointerleave", "focus", "blur"].forEach((eventName) => {
      card.addEventListener(eventName, () =>
        window.requestAnimationFrame(updateServiceConnectors),
      );
    });
  });
}
