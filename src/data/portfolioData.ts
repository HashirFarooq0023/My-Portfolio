import {
  ProjectDetail,
  EducationItem,
  CertificationItem,
  ExperienceItem,
  TechnicalCapabilityGroup
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Hashir Farooq",
  eyebrow: "AI & FULL-STACK SOFTWARE DEVELOPER",
  heroHeadline: "Building software that solves real problems.",
  heroSummary:
    "Computer Science student and software developer focused on AI, full-stack development, SaaS, and automation.",
  introLead:
    "Computer Science student and software developer focused on AI, full-stack development, SaaS, and automation.",
  introBody:
    "I build practical software products across education, business management, e-commerce, logistics, AI, and automation. As the founder of the MegaTrix software ecosystem, I develop end-to-end applications designed to replace chaotic manual workflows with clean, reliable digital systems.",
  email: "hashirfarooq48@gmail.com",
  phone: "+92 308 1505859",
  phoneRaw: "+923081505859",
  githubUrl: "https://github.com/hashirfarooq0023",
  linkedinUrl: "https://linkedin.com/in/hashir-farooq-615aa122a",
  portfolioUrl: "https://hashirfarooq.online",
  profileImage: "/Image/myPic.png"
};

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Computer Science",
  institution: "University of Central Punjab",
  period: "Oct 2023 — July 2027"
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "ai-for-everyone",
    title: "AI For Everyone",
    issuer: "DeepLearning.AI / Coursera",
    date: "July 2026",
    description: "Foundations of AI, machine learning, deep learning, and AI applications.",
    verifyUrl: "https://coursera.org/verify/IL1T9CUOIA55",
    image: "/Image/certificates/ai-for-everyone.png"
  },
  {
    id: "git-and-github",
    title: "Introduction to Git and GitHub",
    issuer: "Google / Coursera",
    date: "August 2026",
    description: "Git version control, GitHub workflows, repositories, commits, branching, and collaboration.",
    verifyUrl: "https://coursera.org/verify/64Z4KP6LZOF4",
    image: "/Image/certificates/git-and-github.png"
  },
  {
    id: "navttc-mern",
    title: "MERN Stack Web Development",
    issuer: "NAVTTC",
    date: "Nov 2025 — Jan 2026",
    description: "Built and deployed production-ready web applications, RESTful APIs, and integrated databases."
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "ieee-cs-ucp",
    role: "Web Developer",
    organization: "IEEE Computer Society UCP",
    period: "July 2026 — Present",
    points: [
      "Completely revamped and modernized the IEEE CS UCP website.",
      "Worked with Next.js and PostgreSQL to build and maintain the platform."
    ],
    website: "https://ieeecsucp.vercel.app"
  },
  {
    id: "cyber-security-society",
    role: "Vice President",
    organization: "Cyber Security Society UCP",
    period: "October 2025 — May 2026",
    points: [
      "Assisted with Final Year Project (FYP) Exhibition event coordination.",
      "Contributed to cybersecurity awareness activities and technical engagement among students."
    ]
  },
  {
    id: "navttc-experience",
    role: "MERN Stack Web Development Trainee",
    organization: "NAVTTC",
    period: "Nov 2025 — Jan 2026",
    points: [
      "Built and deployed full-stack web applications using MongoDB, Express, React, and Node.js.",
      "Engineered secure authentication, relational schema modeling, and RESTful API endpoints."
    ]
  }
];

export const ALL_PROJECTS: ProjectDetail[] = [
  {
    slug: "asanshipping",
    title: "AsanShipping",
    subtitle: "AI Logistics & Courier Management Platform",
    tag: "Final Year Project",
    category: "collaborative",
    categoryLabel: "Real-World & Collaborative",
    status: "Under active development (Final Year Project)",
    shortDescription:
      "Enterprise SaaS platform for e-commerce order management, automated COD verification, multi-courier integration, and intelligent logistics automation.",
    overview:
      "AsanShipping is my Final Year Project (FYP) engineered to solve the most painful operational bottlenecks in Pakistani e-commerce: soaring Return-To-Origin (RTO) rates on Cash-on-Delivery orders, fractured courier APIs, and manual dispatch chaos. The platform acts as a unified logistics operating system connecting merchant stores, WhatsApp verification workflows, and regional courier services.",
    coverImage: "/Image/AsanShipping/dashboard.png",
    gallery: [
      "/Image/AsanShipping/DASHB OARD.png",
      "/Image/AsanShipping/inventoryu.png",
      "/Image/AsanShipping/manual order.png",
      "/Image/AsanShipping/SETTINGS.png",
      "/Image/AsanShipping/Screenshot 2026-07-26 173625.png"
    ],
    problem:
      "E-commerce in cash-dominated emerging markets suffers from high Cash-on-Delivery (COD) failure rates exceeding 30-40%. Merchants waste hours manually confirming orders via phone calls, copy-pasting addresses into multiple courier portals (Trax, Leopard, CallCourier), and managing lost parcels without unified tracking or automated reverse logistics.",
    solution:
      "AsanShipping delivers a centralized logistics engine that ingests orders from e-commerce channels (Shopify, WooCommerce, manual entry), automates customer order confirmation via WhatsApp Cloud API workflows, evaluates courier regional delivery strength to route shipments intelligently, and tracks full parcel lifecycles from dispatch to settlement.",
    howHandled: [
      {
        number: "01",
        title: "ORDER NORMALIZATION",
        description:
          "Orders arriving through diverse external platforms and manual entries are normalized into a unified, version-controlled order schema with rigorous validation."
      },
      {
        number: "02",
        title: "AUTOMATED VERIFICATION",
        description:
          "Pre-fulfillment WhatsApp workflows prompt customers to verify their delivery address and order items, screening out invalid numbers and impulse cancellations before shipping fees are incurred."
      },
      {
        number: "03",
        title: "INTELLIGENT COURIER ROUTING",
        description:
          "Courier availability, regional destination coverage, delivery performance rates, and tariff weights are factored in before assigning orders to the optimal courier partner."
      },
      {
        number: "04",
        title: "QUEUE-BASED WORKFLOWS",
        description:
          "Asynchronous BullMQ/Redis worker pipelines execute external courier booking API calls, tracking polling, and bulk label generations without degrading merchant UI responsiveness."
      },
      {
        number: "05",
        title: "MODULAR INTEGRATION LAYER",
        description:
          "Third-party courier APIs, WhatsApp Cloud API, and store webhooks are isolated behind decoupled adapter layers, shielding core business logic from third-party breaking changes."
      }
    ],
    architecture: {
      layers: [
        {
          name: "FRONTEND INTERFACE",
          tech: "React / Next.js, Tailwind CSS",
          description: "High-density merchant dashboard, order batch management, analytics, and settings"
        },
        {
          name: "API GATEWAY & CORE",
          tech: "Node.js / Express.js, TypeScript",
          description: "RESTful endpoints, authentication, multi-tenant merchant isolation, order state machine"
        },
        {
          name: "AUTOMATION & LOGISTICS ENGINE",
          tech: "Python / FastAPI, Worker Queues",
          description: "Address parsing, courier recommendation heuristics, asynchronous job scheduling"
        },
        {
          name: "PERSISTENCE & CACHE",
          tech: "MongoDB, Redis",
          description: "Indexed document collections for orders, inventory, courier tariffs, and session state"
        },
        {
          name: "EXTERNAL INTEGRATIONS",
          tech: "WhatsApp Cloud API, Courier APIs, Shopify",
          description: "Automated customer messaging, courier booking APIs, webhook event synchronization"
        }
      ]
    },
    features: [
      {
        number: "01",
        title: "Order Lifecycle State Machine",
        description:
          "Deterministic state engine tracking orders across Unverified, Confirmed, Booked, In-Transit, Delivered, and RTO Returned stages."
      },
      {
        number: "02",
        title: "Automated WhatsApp Confirmation",
        description:
          "Interactive buttons and quick-replies sent via WhatsApp Cloud API allowing buyers to confirm or cancel orders in seconds."
      },
      {
        number: "03",
        title: "Unified Multi-Courier Booking",
        description:
          "Single-click booking across major regional couriers with automated shipping label generation and consolidated tracking numbers."
      },
      {
        number: "04",
        title: "Intelligent Courier Assignment",
        description:
          "Automated rule-based assignment matching parcel weight, destination city, and courier delivery success history."
      },
      {
        number: "05",
        title: "Inventory & Reverse Logistics",
        description:
          "Real-time warehouse SKU deduction upon dispatch and automated restock workflows when returned packages are checked in."
      },
      {
        number: "06",
        title: "Merchant Analytics & RTO Insights",
        description:
          "Data views highlighting return trends by geography, high-risk customer tags, and courier delivery efficiency."
      }
    ],
    challenges: [
      {
        number: "01",
        title: "Heterogeneous Courier API Formats",
        description:
          "Every shipping carrier uses vastly different parameter naming, authentication styles, and error responses. Solved by writing strict unified adapter classes that normalize requests and responses into a single canonical format."
      },
      {
        number: "02",
        title: "Webhook Reliability & Message Ordering",
        description:
          "WhatsApp user responses and courier tracking webhooks can arrive out of order or fail under network blips. Implemented idempotent webhook consumers with Redis event deduplication and timestamp checks."
      },
      {
        number: "03",
        title: "Tenant Isolation & High Concurrency",
        description:
          "Preventing cross-tenant data leakage while handling simultaneous bulk CSV order uploads. Handled via tenant-scoped database queries and rate-limited queue concurrency."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "Next.js", "Tailwind CSS", "Lucide Icons"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js", "TypeScript"]
      },
      {
        category: "AI & Automation",
        technologies: ["Python", "FastAPI", "Address Parsing"]
      },
      {
        category: "Database & Storage",
        technologies: ["MongoDB", "Mongoose", "Redis"]
      },
      {
        category: "External Services",
        technologies: ["WhatsApp Cloud API", "Courier APIs", "Shopify API", "Webhooks"]
      }
    ],
    links: {
      github: "https://github.com/hashirfarooq0023"
    },
    nextProjectSlug: "school-hub"
  },
  {
    slug: "school-hub",
    title: "School Hub",
    subtitle: "Comprehensive Multi-Portal School Management SaaS",
    tag: "MegaTrix Product",
    category: "collaborative",
    categoryLabel: "Real-World & Collaborative",
    status: "Completed SaaS product (Part of MegaTrix ecosystem)",
    shortDescription:
      "Enterprise school management SaaS providing dedicated portals for Administrators, Teachers, Students, and Parents to streamline academic and financial operations.",
    overview:
      "School Hub is an institutional management platform created as part of the MegaTrix product suite. It digitizes the end-to-end administration of schools and colleges, eliminating fragmented paperwork and spreadsheets by delivering purpose-built interfaces for every campus stakeholder.",
    coverImage: "/Image/schoolhub_dashboard.jpg",
    problem:
      "Educational institutions struggle with disconnected software: attendance is recorded on paper, marks are calculated in individual spreadsheets, fee vouchers are printed manually, and parents have zero real-time visibility into their children's academic performance or fee dues.",
    solution:
      "School Hub consolidates campus operations into an integrated multi-portal platform: Administrators manage staff, admissions, and institutional finances; Teachers mark attendance and record exam scores; Students access materials and schedules; Parents review attendance and fee payment statuses.",
    howHandled: [
      {
        number: "01",
        title: "ROLE-BASED AUTHENTICATION",
        description:
          "Engineered strict JWT and role-claim validation middleware separating Admin, Teacher, Student, and Parent portals with airtight data scoping."
      },
      {
        number: "02",
        title: "ACADEMIC TIMETABLES & ATTENDANCE",
        description:
          "Daily attendance registries with instant summary metrics and timetable mapping across sections, grades, and teacher assignments."
      },
      {
        number: "03",
        title: "EXAMINATION & GRADEBOOK ENGINE",
        description:
          "Automated computation of weighted term exams, grade boundaries, student rankings, and printable report cards."
      },
      {
        number: "04",
        title: "FEE LEDGER & RECEIPT GENERATION",
        description:
          "Customizable fee structure definitions, monthly voucher generation, paid status reconciliation, and outstanding dues tracking."
      }
    ],
    architecture: {
      layers: [
        {
          name: "ROLE-BASED FRONTEND",
          tech: "React, Tailwind CSS",
          description: "Distinct UI workflows for Administration, Faculty, Students, and Guardians"
        },
        {
          name: "APPLICATION BACKEND",
          tech: "Node.js, Express.js",
          description: "Secure REST APIs for academic records, attendance logging, and billing"
        },
        {
          name: "DATABASE PERSISTENCE",
          tech: "MongoDB",
          description: "Relational-modeled document collections for Classes, Sections, Enrollments, and Ledgers"
        }
      ]
    },
    features: [
      {
        number: "01",
        title: "Multi-Role Portal Hierarchy",
        description:
          "Dedicated dashboards tailored precisely to the daily responsibilities of admins, educators, students, and parents."
      },
      {
        number: "02",
        title: "Attendance & Daily Absence Tracking",
        description:
          "One-click classroom attendance recording with automated monthly percentage summaries."
      },
      {
        number: "03",
        title: "Fee Management & Voucher Generation",
        description:
          "Automated monthly invoice calculation with customizable discounts, fines, and payment records."
      },
      {
        number: "04",
        title: "Exam Grading & Report Cards",
        description:
          "Teacher gradebook entry with automated GPA calculation and printable student progress reports."
      },
      {
        number: "05",
        title: "Student & Staff Directories",
        description:
          "Comprehensive personnel profiles, emergency contact records, and enrollment histories."
      }
    ],
    challenges: [
      {
        number: "01",
        title: "Complex Academic Hierarchies in Document DB",
        description:
          "Structuring school terms, classes, sections, subjects, and teacher allocations without relational foreign keys. Addressed by designing clean referencing schemas with composite indices."
      },
      {
        number: "02",
        title: "Granular Permission Security",
        description:
          "Preventing unauthorized cross-class mark edits while allowing department heads supervisory access. Implemented scoped middleware checking both role and entity assignment."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "Tailwind CSS", "Lucide Icons"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js"]
      },
      {
        category: "Database",
        technologies: ["MongoDB", "Mongoose"]
      }
    ],
    links: {
      github: "https://github.com/hashirfarooq0023"
    },
    nextProjectSlug: "bizmanager"
  },
  {
    slug: "bizmanager",
    title: "BizManager",
    subtitle: "All-in-One Business Operations & Financial Management",
    tag: "MegaTrix Product",
    category: "collaborative",
    categoryLabel: "Real-World & Collaborative",
    status: "Completed SaaS product (Part of MegaTrix ecosystem)",
    shortDescription:
      "Integrated ERP and business management platform handling customer accounts, inventory stock levels, sales POS, expenses, suppliers, and net profit analytics.",
    overview:
      "BizManager is a core software platform in the MegaTrix lineup built for commercial businesses and retail operations. It replaces chaotic paper registers and error-prone spreadsheets with an intuitive dashboard that tracks inventory in real time, manages customer credit lines, and calculates true net profitability.",
    coverImage: "/Image/bizmanager_dashboard.jpg",
    problem:
      "Small and mid-sized enterprises often run blind: stock discrepancies go unnoticed until items are sold out, supplier debts and customer credit receivables are scribbled in paper notebooks, and business owners cannot calculate their actual monthly net profit after factoring in operational overhead.",
    solution:
      "BizManager provides a unified commercial operating system combining real-time inventory tracking, Point-of-Sale (POS) invoicing, customer receivables ledgers, supplier payables, expense categorization, and automated net profit analysis.",
    howHandled: [
      {
        number: "01",
        title: "REAL-TIME INVENTORY CONTROL",
        description:
          "Automatic stock count decrementing upon sales finalization, low-stock threshold notifications, and purchase order restock reconciliation."
      },
      {
        number: "02",
        title: "CUSTOMER & SUPPLIER LEDGERS",
        description:
          "Track unpaid invoices, partial cash payments, and credit balances across individual customer and vendor accounts."
      },
      {
        number: "03",
        title: "POINT-OF-SALE INVOICING",
        description:
          "High-speed sales terminal supporting barcode lookups, line-item discounts, multiple tax rates, and thermal receipt printing."
      },
      {
        number: "04",
        title: "PROFIT & EXPENSE LEDGER",
        description:
          "Categorized expense logging (rent, utilities, salaries) integrated with gross sales margins to calculate accurate net profit figures."
      }
    ],
    architecture: {
      layers: [
        {
          name: "BUSINESS UI DASHBOARD",
          tech: "React, Tailwind CSS",
          description: "High-contrast sales screens, stock tables, and financial overview charts"
        },
        {
          name: "TRANSACTION SERVICE LAYER",
          tech: "Node.js, Express.js",
          description: "Atomic transaction handlers ensuring inventory deductions match financial receipts"
        },
        {
          name: "DATABASE PERSISTENCE",
          tech: "MongoDB",
          description: "Stores products, inventory batches, ledger entries, and historical transactions"
        }
      ]
    },
    features: [
      {
        number: "01",
        title: "Real-Time Stock Depletion & Alerts",
        description:
          "Instant inventory balance tracking with proactive warnings when popular items drop below safety thresholds."
      },
      {
        number: "02",
        title: "Point of Sale (POS) Billing",
        description:
          "Clean keyboard-friendly billing interface with thermal invoice printing and itemized tax handling."
      },
      {
        number: "03",
        title: "Customer Credit & Debt Ledger",
        description:
          "Comprehensive receivables history tracking customer credit, payments received, and overdue debt."
      },
      {
        number: "04",
        title: "Supplier Purchase Order Management",
        description:
          "Vendor invoice logging, payables tracking, and automated inventory replenishment on delivery."
      },
      {
        number: "05",
        title: "Automated Profit & Loss Analytics",
        description:
          "Real-time calculation of gross revenue, Cost of Goods Sold (COGS), operational expenses, and net profit."
      }
    ],
    challenges: [
      {
        number: "01",
        title: "Inventory Concurrency & Atomic Updates",
        description:
          "Preventing negative stock levels when multiple sales counters checkout the same final unit. Solved by leveraging MongoDB atomic conditional updates (`$inc` with stock condition guards)."
      },
      {
        number: "02",
        title: "Financial Ledger Accuracy",
        description:
          "Ensuring every edited sale or return accurately cascades back to customer credit and profit records without discrepancy."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "Tailwind CSS", "Data Tables", "Lucide Icons"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js"]
      },
      {
        category: "Database",
        technologies: ["MongoDB", "Mongoose"]
      }
    ],
    links: {
      github: "https://github.com/hashirfarooq0023"
    },
    nextProjectSlug: "myportalucp"
  },
  {
    slug: "myportalucp",
    title: "MyPortalUCP",
    subtitle: "Student Resource & Academic Collaboration Platform",
    tag: "MegaTrix Product",
    category: "collaborative",
    categoryLabel: "Real-World & Collaborative",
    status: "Live student platform (Part of MegaTrix ecosystem)",
    shortDescription:
      "Centralized academic resource platform built to help University of Central Punjab students collaborate, access past exam archives, calculate GPA/CGPA, and share course notes.",
    overview:
      "MyPortalUCP is an academic community platform developed to solve a common campus frustration: valuable study materials, past exam question papers, and teacher slides are scattered across disappearing WhatsApp groups and informal chats. It gives UCP students a permanent, organized digital library and precision GPA forecasting tools.",
    coverImage: "/Image/myportalucp_dashboard.jpg",
    problem:
      "University students frequently miss crucial exam preparation materials because past papers are shared informally in ephemeral chat threads. Furthermore, students struggle to calculate semester GPA targets accurately due to complex course credit weightings.",
    solution:
      "MyPortalUCP delivers a streamlined digital repository organized by academic faculty, degree program, course code, and semester. It includes an official-formula GPA/CGPA calculator, lecture note downloads, and student resource sharing.",
    howHandled: [
      {
        number: "01",
        title: "COURSE & RESOURCE INDEXING",
        description:
          "Indexed archive organizing lecture notes, presentations, and past exam papers by university course code and department."
      },
      {
        number: "02",
        title: "UCP GPA/CGPA ALGORITHM",
        description:
          "Engineered precision GPA calculation reflecting exact UCP grading policies, credit hours, and quality points."
      },
      {
        number: "03",
        title: "COMMUNITY RESOURCE SHARING",
        description:
          "Moderated upload pipeline allowing senior students to contribute verified midterm/final exam papers and study guides."
      },
      {
        number: "04",
        title: "FAST STATIC DELIVERY",
        description:
          "Optimized database indices and asset delivery ensuring high-speed access during heavy exam week traffic peaks."
      }
    ],
    architecture: {
      layers: [
        {
          name: "CAMPUS WEB CLIENT",
          tech: "React, Tailwind CSS",
          description: "Mobile-responsive web interface designed for rapid lookup on campus Wi-Fi"
        },
        {
          name: "RESOURCE API",
          tech: "Node.js, Express.js",
          description: "File metadata querying, search filtering, and user authentication"
        },
        {
          name: "DATABASE & FILE INDEX",
          tech: "MongoDB",
          description: "Stores course taxonomy, document metadata, and academic semester archives"
        }
      ]
    },
    features: [
      {
        number: "01",
        title: "Categorized Past Exam Papers Archive",
        description:
          "Filterable repository of past midterm and final examination papers organized by course and semester."
      },
      {
        number: "02",
        title: "Precision GPA / CGPA Calculator",
        description:
          "Interactive calculator calibrated to exact UCP grading scale and credit hour weightings."
      },
      {
        number: "03",
        title: "Course Notes & Study Materials",
        description:
          "Downloadable slides, assignment references, and syllabus guides contributed by top students."
      },
      {
        number: "04",
        title: "Community Submissions",
        description:
          "Student upload interface allowing peer collaboration and content enrichment."
      }
    ],
    challenges: [
      {
        number: "01",
        title: "Handling Traffic Bursts During Exam Weeks",
        description:
          "Exam periods generate intense query spikes. Resolved by optimizing MongoDB index paths and caching static resource listings."
      },
      {
        number: "02",
        title: "Content Quality & Verification",
        description:
          "Filtering out incorrect course uploads through metadata tags and administrator verification workflows."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "Tailwind CSS", "Lucide Icons"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js"]
      },
      {
        category: "Database",
        technologies: ["MongoDB", "Mongoose"]
      }
    ],
    links: {
      github: "https://github.com/hashirfarooq0023"
    },
    nextProjectSlug: "talent-vector"
  },
  {
    slug: "talent-vector",
    title: "Talent Vector AI",
    subtitle: "AI-Powered Candidate Evaluation & Talent Matching Platform",
    tag: "6th Sem AI/ML Course",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    status: "Completed university project (6th Semester AI/ML Course, April — June 2026)",
    shortDescription:
      "Intelligent recruitment platform utilizing Natural Language Processing (NLP) and vector embeddings for automated candidate resume parsing and job description matching.",
    overview:
      "Talent Vector AI is an AI-powered talent intelligence application built for my 6th semester Artificial Intelligence and Machine Learning course. It parses unstructured resume documents, extracts candidate skill profiles, and computes semantic vector similarity scores against job requisitions.",
    coverImage: "/Image/TalentVector/Screenshot 2026-07-25 231427.png",
    problem:
      "Recruiters are overwhelmed by hundreds of applicants for technical positions. Keyword search tools miss qualified talent who use alternative terminology, while manual resume screening introduces cognitive bias, fatigue, and severe delays.",
    solution:
      "Talent Vector AI applies semantic vector embeddings and NLP tokenization to evaluate applicant resumes holistically. It extracts candidate technical skills, education, and experience markers, matches them against target job descriptions, and presents recruiters with ranked match scores and skills-gap insights.",
    howHandled: [
      {
        number: "01",
        title: "UNSTRUCTURED TEXT PARSING",
        description:
          "Engineered document ingestion pipelines extracting raw text from PDF and DOCX resume formats with layout normalization."
      },
      {
        number: "02",
        title: "ENTITY & SKILL EXTRACTION",
        description:
          "Applied NLP tokenization and vocabulary recognition to extract programming languages, tools, frameworks, and education levels."
      },
      {
        number: "03",
        title: "SEMANTIC VECTOR SIMILARITY",
        description:
          "Generated vector embeddings for both job criteria and candidate profiles, computing cosine similarity scores for objective candidate ranking."
      },
      {
        number: "04",
        title: "RECRUITER SCORING DASHBOARD",
        description:
          "Interactive candidate comparison matrix displaying match percentages, identified strengths, and missing prerequisite skills."
      }
    ],
    architecture: {
      layers: [
        {
          name: "EVALUATION DASHBOARD",
          tech: "React, Tailwind CSS",
          description: "Resume dropzone, candidate ranking leaderboard, and skill breakdown cards"
        },
        {
          name: "NLP & MATCHING SERVICE",
          tech: "Python, FastAPI",
          description: "Text extraction, preprocessing pipelines, TF-IDF / vector embeddings, cosine matching"
        },
        {
          name: "DATA STORAGE",
          tech: "MongoDB / File Storage",
          description: "Indexed candidate profiles, extracted entity tokens, and evaluated scorecards"
        }
      ]
    },
    features: [
      {
        number: "01",
        title: "Automated Resume Parsing",
        description:
          "Extracts unstructured sections into structured data."
      },
      {
        number: "02",
        title: "Semantic Job Fit Scoring",
        description:
          "Computes contextual compatibility beyond exact keyword matches using vector similarity."
      },
      {
        number: "03",
        title: "Skills Gap Identification",
        description:
          "Visual breakdown showing which required skills the candidate possesses and which are missing."
      },
      {
        number: "04",
        title: "Ranked Candidate Shortlist",
        description:
          "Sorts applicants objectively based on algorithmic fit scores for streamlined interview pipelines."
      }
    ],
    challenges: [
      {
        number: "01",
        title: "Inconsistent Resume Formats",
        description:
          "Multi-column PDFs and non-standard visual layouts often scramble text extraction order. Addressed by implementing layout-aware text block segmentation."
      },
      {
        number: "02",
        title: "Semantic Discrepancies in Tech Terminology",
        description:
          "Recognizing that alternative naming conventions represent the same capability. Handled through custom technical taxonomy maps and token normalization."
      }
    ],
    techStack: [
      {
        category: "AI & Machine Learning",
        technologies: ["Python", "NLP", "Scikit-learn", "Cosine Similarity", "FastAPI"]
      },
      {
        category: "Frontend",
        technologies: ["React", "Tailwind CSS", "Lucide Icons"]
      },
      {
        category: "Backend & Database",
        technologies: ["Python", "FastAPI", "MongoDB"]
      }
    ],
    links: {
      github: "https://github.com/hashirfarooq0023"
    },
    nextProjectSlug: "psx-prediction"
  },
  {
    slug: "psx-prediction",
    title: "PSX Prediction System",
    subtitle: "Machine Learning Analysis & Forecast for Pakistan Stock Exchange",
    tag: "6th Sem P&S Course",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    status: "Completed university project (6th Semester Probability & Statistics Course, April 2026)",
    shortDescription:
      "Machine learning analytical system analyzing historical Pakistan Stock Exchange (PSX) market time-series data to identify statistical momentum and forecast price trends.",
    overview:
      "The PSX Prediction System was engineered for my 6th semester Probability and Statistics course. It explores financial time-series modeling applied to equities listed on the Pakistan Stock Exchange, training machine learning algorithms on historical trading data to study predictive power and market volatility.",
    coverImage: "/Image/PPSM/chart.png",
    gallery: [
      "/Image/PPSM/ai-img1.png",
      "/Image/PPSM/ai-img 2.png",
      "/Image/PPSM/ai-img 3.png"
    ],
    problem:
      "Individual investors in the Pakistan Stock Exchange frequently rely on informal rumors or unverified tips without quantitative insight into historical volatility, moving average support levels, or probabilistic price trajectories.",
    solution:
      "A quantitative machine learning pipeline that ingests historical daily PSX ticker data (Open, High, Low, Close, Volume), calculates key technical indicators, and trains supervised regression and classification models to forecast short-term market momentum.",
    howHandled: [
      {
        number: "01",
        title: "TIME-SERIES PREPROCESSING",
        description:
          "Cleaned, normalized, and interpolated historical daily trading sessions, handling trading holidays and non-trading anomalies."
      },
      {
        number: "02",
        title: "TECHNICAL FEATURE ENGINEERING",
        description:
          "Extracted statistical momentum features: Relative Strength Index (RSI), Moving Average Convergence Divergence (MACD), SMA, and EMA."
      },
      {
        number: "03",
        title: "MODEL TRAINING & BACKTESTING",
        description:
          "Trained machine learning models (Linear Regression, Random Forest) on time-lagged features with strict temporal train/validation splitting."
      },
      {
        number: "04",
        title: "QUANTITATIVE EVALUATION",
        description:
          "Assessed model forecasts using Root Mean Squared Error (RMSE) and Mean Absolute Error (MAE) benchmarks against real historical price trajectories."
      }
    ],
    architecture: {
      layers: [
        {
          name: "VISUALIZATION INTERFACE",
          tech: "React, Charting, Tailwind CSS",
          description: "Interactive price charts, model prediction overlays, and statistical metric displays"
        },
        {
          name: "DATA & ML ENGINE",
          tech: "Python, Scikit-learn, Pandas, NumPy",
          description: "Data ingestion, statistical preprocessing, indicator extraction, and ML training pipelines"
        }
      ]
    },
    features: [
      {
        number: "01",
        title: "Historical PSX Ticker Analysis",
        description:
          "Ingestion and preprocessing of historical daily OHLCV trading data across leading PSX equities."
      },
      {
        number: "02",
        title: "Technical Indicator Computation",
        description:
          "Automated extraction of RSI, MACD, 20/50-day moving averages, and volatility bands."
      },
      {
        number: "03",
        title: "Supervised ML Trend Forecasting",
        description:
          "Machine learning models evaluating price direction probability based on lag feature matrices."
      },
      {
        number: "04",
        title: "Error Metrics & Accuracy Benchmarking",
        description:
          "Visual comparison of predicted trajectories against actual market prices with RMSE and MAE statistics."
      }
    ],
    challenges: [
      {
        number: "01",
        title: "High Noise & Volatility in Emerging Markets",
        description:
          "PSX data exhibits abrupt geopolitical shifts and trading halts. Mitigated by applying smoothing filters and multi-day rolling window features."
      },
      {
        number: "02",
        title: "Preventing Data Leakage in Time Series",
        description:
          "Ensuring backward lag calculations never accessed future prices during normalization or validation splits."
      }
    ],
    techStack: [
      {
        category: "Machine Learning & Data",
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Time-Series Analysis"]
      },
      {
        category: "Visualization",
        technologies: ["React", "Matplotlib / Charting", "Tailwind CSS"]
      }
    ],
    links: {
      github: "https://github.com/hashirfarooq0023"
    },
    nextProjectSlug: "psx-portfolio-manager"
  },
  {
    slug: "psx-portfolio-manager",
    title: "Personal PSX Portfolio Manager",
    subtitle: "Investment Tracking & LLM-Powered Market Analytics",
    tag: "Self-Directed",
    category: "ai",
    categoryLabel: "AI & Machine Learning",
    status: "Completed self-directed project",
    shortDescription:
      "Personal investment management platform for tracking Pakistan Stock Exchange portfolios, cost-basis calculations, and LLM-assisted corporate disclosure insights.",
    overview:
      "The Personal Portfolio Manager for PSX is a self-directed financial application built to manage and analyze personal equity investments on the Pakistan Stock Exchange. It pairs cost-basis portfolio accounting with LLM capabilities to summarize complex corporate filings and quarterly announcements.",
    coverImage: "/Image/PPSM/portfolio .png",
    gallery: [
      "/Image/PPSM/main 1.png",
      "/Image/PPSM/login.png",
      "/Image/PPSM/chart.png"
    ],
    problem:
      "Brokerage interfaces in Pakistan offer clunky user experiences with rudimentary tracking: they fail to provide clear weighted-average cost accounting, dividend history tracking, or clear sector exposure breakdowns. Furthermore, analyzing dense regulatory corporate notices requires tedious manual reading.",
    solution:
      "A modern personal financial dashboard tracking equity positions, realized and unrealized gains, sector allocations, and historical transactions, combined with an LLM-powered module that condenses official PSX corporate announcements into actionable bullet points.",
    howHandled: [
      {
        number: "01",
        title: "WEIGHTED COST-BASIS ACCOUNTING",
        description:
          "Implemented precise tracking of multiple purchase lots, calculating weighted average buy rates and exact tax deductions."
      },
      {
        number: "02",
        title: "REAL-TIME GAIN/LOSS ATTRIBUTION",
        description:
          "Live calculation of unrealized capital gains, daily fluctuation attribution, and historical realized profits."
      },
      {
        number: "03",
        title: "SECTOR EXPOSURE DIVERSIFICATION",
        description:
          "Interactive breakdown displaying capital concentration across Banking, Oil & Gas, Tech, Fertilizer, and Cement sectors."
      },
      {
        number: "04",
        title: "LLM NOTICE SUMMARIZATION",
        description:
          "Engineered prompt pipelines parsing company disclosures (earnings releases, board meetings, dividend declarations) into concise executive summaries."
      }
    ],
    architecture: {
      layers: [
        {
          name: "PORTFOLIO ANALYTICS UI",
          tech: "React, Tailwind CSS",
          description: "High-contrast dark dashboard with asset allocation donuts and performance charts"
        },
        {
          name: "FINANCIAL BACKEND",
          tech: "Python, FastAPI",
          description: "Cost-basis calculation engine, trade history management, and LLM orchestration"
        },
        {
          name: "AI INTELLIGENCE",
          tech: "LLMs, Prompt Engineering",
          description: "Automated analysis and summarization of official corporate announcements"
        }
      ]
    },
    features: [
      {
        number: "01",
        title: "Realized & Unrealized P&L Tracking",
        description:
          "Real-time calculations of capital gains across individual stocks and aggregate portfolio holdings."
      },
      {
        number: "02",
        title: "Sector Exposure Breakdown",
        description:
          "Visual allocation metrics helping maintain disciplined sector diversification."
      },
      {
        number: "03",
        title: "LLM Corporate Filing Summarizer",
        description:
          "Generates digestible summaries of quarterly financial earnings statements and director reports."
      },
      {
        number: "04",
        title: "Trade & Dividend Ledger",
        description:
          "Complete historical log of buy/sell transactions, cash dividends, and portfolio cash balances."
      }
    ],
    challenges: [
      {
        number: "01",
        title: "Accurate Cost-Basis Adjustments",
        description:
          "Correctly factoring in bonus share issuances and dividend withholdings into the historical cost average without corrupting historical records."
      },
      {
        number: "02",
        title: "Structured LLM Extraction from Financial PDFs",
        description:
          "Guiding the LLM to pull precise EPS figures and dividend percentages reliably without hallucinations."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "Tailwind CSS", "Lucide Icons"]
      },
      {
        category: "Backend & Logic",
        technologies: ["Python", "FastAPI"]
      },
      {
        category: "AI",
        technologies: ["LLMs", "Prompt Engineering"]
      }
    ],
    links: {
      github: "https://github.com/hashirfarooq0023"
    },
    nextProjectSlug: "megatrix-ai-social"
  },
  {
    slug: "megatrix-ai-social",
    title: "MegaTrix AI Social / AutoPosting",
    subtitle: "Autonomous Social Media Content Generation & Publishing",
    tag: "Self-Directed Automation",
    category: "automation",
    categoryLabel: "Automation",
    status: "Completed self-directed automation project (Part of MegaTrix ecosystem)",
    shortDescription:
      "Autonomous social media pipeline integrating LLMs, Antigravity workflow automation, and Buffer MCP to discover tech topics, generate tailored copy, and publish automatically.",
    overview:
      "MegaTrix AI Social is an automated content operations pipeline developed to eliminate manual overhead in technical social media management. It leverages Large Language Models and the Buffer Model Context Protocol (MCP) to curate trending engineering discussions, generate platform-optimized copy, and queue scheduled releases.",
    coverImage: "/Image/autoposting_dashboard.jpg",
    gallery: ["/Image/unnamed1.jpg"],
    problem:
      "Maintaining an active, high-quality technical social media presence requires hours of research, copy drafting tailored to different platform cultures, graphic creation, and manual queue scheduling across fragmented social dashboards.",
    solution:
      "An automated pipeline orchestrating topic discovery, multi-platform copy generation (X/Twitter threads, LinkedIn thought-leadership, technical summaries), and automated queue management via Buffer MCP and automated webhooks.",
    howHandled: [
      {
        number: "01",
        title: "TOPIC DISCOVERY ENGINE",
        description:
          "Aggregates trending developer news, open-source releases, and engineering discussions to curate relevant conversation prompts."
      },
      {
        number: "02",
        title: "CONTEXTUAL COPY GENERATION",
        description:
          "Employs tailored prompt engineering to draft authentic, engaging posts formatted for Twitter character limits or LinkedIn formatting."
      },
      {
        number: "03",
        title: "BUFFER MCP INTEGRATION",
        description:
          "Direct integration with Buffer Model Context Protocol (MCP) server to schedule and publish drafted content to target profiles."
      },
      {
        number: "04",
        title: "HUMAN-IN-THE-LOOP APPROVAL",
        description:
          "Supports both fully automated hands-off publishing and an interactive review mode for quick one-click authorization."
      }
    ],
    architecture: {
      layers: [
        {
          name: "AGENTIC ORCHESTRATION",
          tech: "Antigravity, Node.js / Python",
          description: "Autonomous workflow coordinating research, drafting, and queue dispatches"
        },
        {
          name: "AI COPY ENGINE",
          tech: "LLMs, Prompt Chains",
          description: "Semantic generation of platform-specific posts, hashtags, and hooks"
        },
        {
          name: "MCP PUBLISHING GATEWAY",
          tech: "Buffer MCP Server, Webhooks",
          description: "Standardized tool protocol communicating with social channel queues"
        }
      ]
    },
    features: [
      {
        number: "01",
        title: "Automated Tech Topic Curation",
        description:
          "Continuous scanning of software engineering topics and industry news to inspire relevant content."
      },
      {
        number: "02",
        title: "Multi-Platform Copy Adaptations",
        description:
          "Generates punchy short-form posts for X/Twitter alongside detailed narrative insights for LinkedIn."
      },
      {
        number: "03",
        title: "Buffer MCP Direct Queueing",
        description:
          "Dispatches approved content straight into scheduled publishing slots via standard MCP tool calls."
      },
      {
        number: "04",
        title: "Audit & Execution Logs",
        description:
          "Comprehensive execution tracing displaying topic sources, generated drafts, and publishing statuses."
      }
    ],
    challenges: [
      {
        number: "01",
        title: "Avoiding Generic AI Voice",
        description:
          "Standard LLM text often feels artificial. Tuned few-shot prompts with strict style guidelines prioritizing direct technical observations over corporate clichés."
      },
      {
        number: "02",
        title: "MCP Connection Reliability",
        description:
          "Ensuring persistent authentication and smooth fallback handling when social platform rate limits occur."
      }
    ],
    techStack: [
      {
        category: "Core & Automation",
        technologies: ["AI", "Automation", "Buffer MCP", "Antigravity"]
      },
      {
        category: "AI & Generation",
        technologies: ["LLMs", "Prompt Engineering", "NLP"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Python"]
      }
    ],
    links: {
      github: "https://github.com/hashirfarooq0023"
    },
    nextProjectSlug: "trendsstore"
  },
  {
    slug: "trendsstore",
    title: "MERN E-Commerce Platform / TrendsStore",
    subtitle: "Production-Grade Full-Stack Retail Platform with Admin Operations",
    tag: "NAVTTC Capstone",
    category: "fullstack",
    categoryLabel: "Full-Stack Development",
    status: "Completed full-stack project (NAVTTC MERN Web Development capstone)",
    shortDescription:
      "Full-stack MERN e-commerce application featuring a customer shopping storefront, product catalog, shopping cart, checkout, and a comprehensive merchant back-office management portal.",
    overview:
      "TrendsStore is a full-stack e-commerce platform built as the capstone project for my NAVTTC MERN Stack Web Development certification. It implements production e-commerce patterns including dynamic product catalogs, multi-step checkout, real-time inventory management, and an administrative control portal for order dispatch and merchant metrics.",
    coverImage: "/Image/trendsstore/ecom main.png",
    gallery: [
      "/Image/trendsstore/admin portal .png",
      "/Image/trendsstore/product page.png",
      "/Image/trendsstore/cehckoutpage .png",
      "/Image/trendsstore/order management .png",
      "/Image/trendsstore/collection veiw.png",
      "/Image/trendsstore/customers data .png",
      "/Image/trendsstore/products .png",
      "/Image/trendsstore/top rateed courasel.png",
      "/Image/trendsstore/hero and social links serttings .png",
      "/Image/trends sotre.png"
    ],
    problem:
      "Building a dependable e-commerce platform requires solving thorny architectural hurdles beyond static pages: preventing cart race conditions when inventory is low, maintaining secure user authentication, managing order statuses, and giving merchants full control over products and customer accounts.",
    solution:
      "A complete MERN stack architecture providing both customer-facing storefront capabilities (product filtering, cart, order placement) and a merchant administration suite (product CRUD, image uploads, order fulfillment status, customer records).",
    howHandled: [
      {
        number: "01",
        title: "RESTFUL API ARCHITECTURE",
        description:
          "Structured modular Express routers with JWT authentication and role-based guards protecting administrative endpoints."
      },
      {
        number: "02",
        title: "STATEFUL CLIENT STOREFRONT",
        description:
          "React state management handling persistent local cart state, dynamic price calculations, and responsive search filtering."
      },
      {
        number: "03",
        title: "MERCHANT BACK-OFFICE PORTAL",
        description:
          "Dedicated admin portal providing real-time views into product inventories, customer order statuses, and banner settings."
      },
      {
        number: "04",
        title: "ORDER FULFILLMENT LIFECYCLE",
        description:
          "Order status transitions tracking customer orders from initial placement through packaging, courier dispatch, and delivery."
      }
    ],
    architecture: {
      layers: [
        {
          name: "STOREFRONT & ADMIN CLIENTS",
          tech: "React, Tailwind CSS",
          description: "Responsive shopping interface, cart slider, product galleries, and admin portal"
        },
        {
          name: "REST API SERVER",
          tech: "Node.js, Express.js",
          description: "Secure routing, JWT token verification, order processing, and product catalog controllers"
        },
        {
          name: "DATABASE STORAGE",
          tech: "MongoDB, Mongoose",
          description: "Schemas with validation for Users, Products, Categories, Orders, and System Settings"
        }
      ]
    },
    features: [
      {
        number: "01",
        title: "Responsive Customer Storefront",
        description:
          "Fast-loading catalog browsing with category filtering, featured product carousels, and detailed product view."
      },
      {
        number: "02",
        title: "Persistent Cart & Multi-Step Checkout",
        description:
          "Local storage cart synchronization with address validation and Cash-on-Delivery payment selection."
      },
      {
        number: "03",
        title: "Admin Product Management (CRUD)",
        description:
          "Merchant dashboard to add new items, modify pricing, update stock quantities, and manage featured banners."
      },
      {
        number: "04",
        title: "Order Tracking & Fulfillment",
        description:
          "Administrative pipeline to view incoming orders, inspect customer shipping details, and update dispatch status."
      },
      {
        number: "05",
        title: "Customer Records Database",
        description:
          "Secure customer registration, order histories, and merchant analytics on top-selling items."
      }
    ],
    challenges: [
      {
        number: "01",
        title: "Mongoose Schema Design for Varied Products",
        description:
          "Designing a schema flexible enough to handle clothing sizes and colors while maintaining strict price and stock validation."
      },
      {
        number: "02",
        title: "JWT Authentication & Route Protection",
        description:
          "Securing administrative APIs so regular authenticated customers cannot trigger merchant actions."
      }
    ],
    techStack: [
      {
        category: "Frontend",
        technologies: ["React", "Tailwind CSS", "Context API", "Lucide Icons"]
      },
      {
        category: "Backend",
        technologies: ["Node.js", "Express.js", "RESTful API", "JWT"]
      },
      {
        category: "Database",
        technologies: ["MongoDB", "Mongoose ODM"]
      }
    ],
    links: {
      github: "https://github.com/hashirfarooq0023"
    },
    nextProjectSlug: "asanshipping"
  }
];

export const MEGATRIX_PRODUCTS: ProjectDetail[] = ALL_PROJECTS.filter(p =>
  ["asanshipping", "myportalucp", "school-hub", "bizmanager", "megatrix-ai-social"].includes(p.slug)
);

export const TECHNICAL_CAPABILITIES: TechnicalCapabilityGroup[] = [
  {
    category: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Mongoose"]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "LLMs",
      "AI / ML",
      "NLP",
      "RAG",
      "AI Agents",
      "AI Content Generation"
    ]
  },
  {
    category: "APIs & Automation",
    skills: [
      "WhatsApp Cloud API",
      "Shopify API",
      "Meta Graph API",
      "Courier APIs",
      "Webhooks",
      "Redis / BullMQ",
      "Buffer MCP"
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
      "Azure",
      "Docker",
      "Puppeteer"
    ]
  }
];

export const ENGINEERING_APPROACH = [
  {
    number: "01",
    title: "Understand the problem.",
    description:
      "Deeply analyze the user's manual friction, real bottlenecks, and operational pain before writing code."
  },
  {
    number: "02",
    title: "Design the system around the actual workflow.",
    description:
      "Model entities and data lifecycles to match real-world operations rather than abstract technical dogma."
  },
  {
    number: "03",
    title: "Build the simplest architecture that can support it.",
    description:
      "Prioritize clean, maintainable modular services over convoluted microservice hype and premature complexity."
  },
  {
    number: "04",
    title: "Integrate automation where it genuinely helps.",
    description:
      "Deploy AI, LLMs, queues, and background jobs only where they eliminate real human toil and enhance reliability."
  },
  {
    number: "05",
    title: "Make the final interface feel simple.",
    description:
      "Conceal backend complexity behind clean typography, intuitive hierarchies, and fast, responsive interfaces."
  }
];

export const INTERESTS_DATA = [
  "AI & Creative Technology",
  "Chess",
  "Gaming",
  "Gym",
  "Robotics"
];
