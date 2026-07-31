import {
  AppWindow,
  BarChart3,
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  FileSpreadsheet,
  Globe,
  Layers,
  LineChart,
  Megaphone,
  Rocket,
  Server,
  Smartphone,
  TableProperties,
  Terminal,
  Waves,
} from "lucide-react";
import type { Course } from "@/types";

export const COURSES: Course[] = [
  // Data & AI
  {
    slug: "data-analytics",
    title: "Data Analytics",
    category: "Data & AI",
    description:
      "Learn to clean, explore, and visualize real-world datasets to uncover insights that drive business decisions.",
    icon: BarChart3,
    level: "Beginner",
    gradient: "from-primary to-violet",
    duration: "6 weeks",
    audience: "Beginners who want to work confidently with real business data",
    learn: [
      "Data cleaning and preparation with Python and Excel",
      "Exploratory analysis and visualization techniques",
      "Building dashboards that communicate insights clearly",
      "A capstone project analyzing a real-world dataset end-to-end",
    ],
    curriculum: [
      {
        title: "Data Fundamentals",
        topics: [
          "Understanding data types and structures",
          "Excel and Python for data handling",
          "Data cleaning and preprocessing techniques",
        ],
      },
      {
        title: "Exploratory Data Analysis",
        topics: [
          "Descriptive statistics and distributions",
          "Data visualization with charts and plots",
          "Identifying trends, outliers, and patterns",
        ],
      },
      {
        title: "Dashboards & Reporting",
        topics: [
          "Building interactive dashboards in Power BI",
          "KPI tracking and automated reporting",
          "Presenting insights to stakeholders",
        ],
      },
      {
        title: "Capstone Project",
        topics: [
          "Working with a real-world business dataset",
          "End-to-end analysis and insight generation",
          "Portfolio-ready final presentation",
        ],
      },
    ],
    reviews: [
      {
        name: "Priya Sundaram",
        role: "Business Analyst",
        rating: 5,
        comment: "The hands-on projects made all the difference — I went from spreadsheets to actually telling stories with data.",
      },
      {
        name: "Karthik R",
        role: "Career Switcher",
        rating: 5,
        comment: "Clear explanations and real datasets. I landed an analyst role within two months of finishing.",
      },
    ],
    tools: ["Python", "Excel", "Power BI", "SQL", "Jupyter Notebook"],
    projects: ["Sales performance dashboard for a retail dataset", "Customer churn analysis report", "Monthly KPI tracker automation"],
  
    coverImage: "/images/courses/data-analytics.jpg",
  
    coverImageRatio: 1.0,
  },
  {
    slug: "data-science",
    title: "Data Science",
    category: "Data & AI",
    description:
      "Master statistics, Python, and predictive modeling to turn raw data into actionable business intelligence.",
    icon: Database,
    level: "Intermediate",
    gradient: "from-violet to-cyan",
    duration: "10 weeks",
    audience: "Learners with basic Python who want to move into data science roles",
    learn: [
      "Statistics and probability for data-driven decisions",
      "Predictive modeling with regression and classification",
      "Feature engineering and model evaluation",
      "A portfolio project solving a real business problem",
    ],
    curriculum: [
      {
        title: "Statistics for Data Science",
        topics: [
          "Probability and distributions",
          "Hypothesis testing",
          "Statistical inference for decision making",
        ],
      },
      {
        title: "Python for Data Science",
        topics: [
          "Pandas and NumPy for data wrangling",
          "Data visualization with Matplotlib and Seaborn",
          "Working with Jupyter notebooks",
        ],
      },
      {
        title: "Predictive Modeling",
        topics: [
          "Regression and classification models",
          "Model evaluation and validation",
          "Feature engineering techniques",
        ],
      },
      {
        title: "Real-World Projects",
        topics: [
          "End-to-end data science pipeline",
          "Business intelligence case study",
          "Final portfolio project and review",
        ],
      },
    ],
    reviews: [
      {
        name: "Aravind Kumar",
        role: "Software Engineer",
        rating: 5,
        comment: "The pacing was perfect for someone transitioning from software into data science. Loved the case studies.",
      },
      {
        name: "Divya Menon",
        role: "MBA Student",
        rating: 5,
        comment: "Finally a course that connects the statistics to actual business decisions, not just theory.",
      },
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook", "SQL"],
    projects: ["Predicting customer lifetime value", "House price prediction model", "End-to-end data science case study"],
  
    coverImage: "/images/courses/data-science.jpg",
  
    coverImageRatio: 1.2496,
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    category: "Data & AI",
    description:
      "Build a strong foundation in AI concepts, neural networks, and practical applications used across industries today.",
    icon: Bot,
    level: "Advanced",
    gradient: "from-cyan to-primary",
    duration: "8 weeks",
    audience: "Developers and analysts ready to build practical AI features",
    learn: [
      "Core AI concepts, neural networks, and how they learn",
      "Working with modern AI APIs like OpenAI and Gemini",
      "Building AI-powered features into real applications",
      "Responsible AI practices and evaluating model output",
    ],
    curriculum: [
      {
        title: "AI Foundations",
        topics: [
          "History and core concepts of AI",
          "Types of AI: narrow vs general",
          "Ethics and responsible AI",
        ],
      },
      {
        title: "Neural Networks",
        topics: [
          "Perceptrons and deep learning basics",
          "Training and backpropagation",
          "Common architectures: CNNs and RNNs",
        ],
      },
      {
        title: "Applied AI",
        topics: [
          "Working with OpenAI and Gemini APIs",
          "Building AI-powered features",
          "Prompt engineering fundamentals",
        ],
      },
      {
        title: "Capstone Build",
        topics: [
          "Designing an AI feature for a real use case",
          "Testing and evaluating model output",
          "Deploying an AI-powered mini-app",
        ],
      },
    ],
    reviews: [
      {
        name: "Sanjay Iyer",
        role: "Product Manager",
        rating: 5,
        comment: "Gave me exactly what I needed to have informed conversations with my engineering team about AI features.",
      },
      {
        name: "Meena Krishnan",
        role: "Computer Science Student",
        rating: 5,
        comment: "The applied AI module was excellent — building with real APIs made concepts click instantly.",
      },
    ],
    tools: ["Python", "OpenAI API", "Gemini API", "TensorFlow", "Jupyter Notebook"],
    projects: ["AI-powered customer support assistant", "Document summarization tool", "Image classification mini-app"],
  
    coverImage: "/images/courses/artificial-intelligence.jpg",
  
    coverImageRatio: 1.2496,
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    category: "Data & AI",
    description:
      "Design, train, and deploy machine learning models with hands-on projects covering classification, regression, and clustering.",
    icon: Brain,
    level: "Advanced",
    gradient: "from-primary to-cyan",
    duration: "10 weeks",
    audience: "Learners comfortable with Python who want to build predictive models",
    learn: [
      "Supervised learning: classification and regression",
      "Unsupervised learning and clustering techniques",
      "Model tuning, validation, and deployment basics",
      "An end-to-end ML project from raw data to prediction",
    ],
    curriculum: [
      {
        title: "ML Foundations",
        topics: [
          "Types of machine learning",
          "Data preparation for ML",
          "Bias-variance tradeoff",
        ],
      },
      {
        title: "Supervised Learning",
        topics: [
          "Regression models in depth",
          "Classification algorithms",
          "Decision trees and ensembles",
        ],
      },
      {
        title: "Unsupervised Learning",
        topics: [
          "Clustering techniques",
          "Dimensionality reduction",
          "Anomaly detection",
        ],
      },
      {
        title: "Deployment & Projects",
        topics: [
          "Model tuning and validation",
          "Deploying models with simple APIs",
          "Capstone project across the ML lifecycle",
        ],
      },
    ],
    reviews: [
      {
        name: "Naveen Raj",
        role: "Data Engineer",
        rating: 5,
        comment: "Solid, practical coverage of the algorithms that actually get used in production, not just toy examples.",
      },
      {
        name: "Shruti Pillai",
        role: "Analytics Lead",
        rating: 5,
        comment: "The projects forced me to think about real deployment concerns, which most courses skip entirely.",
      },
    ],
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook"],
    projects: ["Customer segmentation with clustering", "Fraud detection classifier", "Sales forecasting model"],
  
    coverImage: "/images/courses/machine-learning.jpg",
  
    coverImageRatio: 1.2496,
  },
  {
    slug: "python",
    title: "Python",
    category: "Data & AI",
    description:
      "Go from fundamentals to advanced scripting in Python, the most in-demand language for data, automation, and AI.",
    icon: Terminal,
    level: "Beginner",
    gradient: "from-violet to-primary",
    duration: "6 weeks",
    audience: "Absolute beginners to programming, or those switching languages",
    learn: [
      "Python syntax, data structures, and control flow",
      "Writing reusable functions and working with libraries",
      "Automating everyday tasks with scripts",
      "Mini-projects that build real coding confidence",
    ],
    curriculum: [
      {
        title: "Python Basics",
        topics: [
          "Variables, data types, and control flow",
          "Functions and modules",
          "Working with files and errors",
        ],
      },
      {
        title: "Data Structures",
        topics: [
          "Lists, dictionaries, sets, and tuples",
          "List comprehensions",
          "Object-oriented programming basics",
        ],
      },
      {
        title: "Practical Python",
        topics: [
          "Working with libraries and packages",
          "Automating everyday tasks",
          "Reading and writing data: CSV and JSON",
        ],
      },
      {
        title: "Mini Projects",
        topics: [
          "Building small automation scripts",
          "A simple data project",
          "Code review and best practices",
        ],
      },
    ],
    reviews: [
      {
        name: "Ramya Devi",
        role: "First-time Programmer",
        rating: 5,
        comment: "I had zero coding background and this course made Python feel approachable from day one.",
      },
      {
        name: "Vignesh S",
        role: "Mechanical Engineer",
        rating: 5,
        comment: "Great for switching fields — practical examples instead of abstract theory.",
      },
    ],
    tools: ["Python", "VS Code", "Git", "Jupyter Notebook", "PyPI"],
    projects: ["Personal expense tracker script", "Simple automation bot", "Command-line data tool"],
  
    coverImage: "/images/courses/python.jpg",
  
    coverImageRatio: 1.2496,
  },
  {
    slug: "sql",
    title: "SQL",
    category: "Data & AI",
    description:
      "Write efficient queries, design schemas, and manage relational databases used by virtually every data-driven company.",
    icon: TableProperties,
    level: "Beginner",
    gradient: "from-cyan to-violet",
    duration: "4 weeks",
    audience: "Anyone who works with data and needs to query it directly",
    learn: [
      "Writing SELECT queries, joins, and subqueries",
      "Designing normalized database schemas",
      "Aggregations, window functions, and performance tuning",
      "Hands-on practice with real-world business datasets",
    ],
    curriculum: [
      {
        title: "SQL Fundamentals",
        topics: [
          "SELECT statements and filtering",
          "Sorting and aggregating data",
          "Working with multiple tables via joins",
        ],
      },
      {
        title: "Intermediate Queries",
        topics: [
          "Subqueries and CTEs",
          "Window functions",
          "Data types and constraints",
        ],
      },
      {
        title: "Database Design",
        topics: [
          "Normalization and schema design",
          "Indexes and performance basics",
          "Working with real business schemas",
        ],
      },
      {
        title: "Applied Practice",
        topics: [
          "Writing queries against live datasets",
          "Query optimization techniques",
          "Final assessment project",
        ],
      },
    ],
    reviews: [
      {
        name: "Harish Babu",
        role: "Backend Developer",
        rating: 5,
        comment: "Filled in gaps I didn't know I had — the window functions module alone was worth it.",
      },
      {
        name: "Lakshmi N",
        role: "Data Analyst",
        rating: 5,
        comment: "Clear, practical, and directly applicable to my day job within the first week.",
      },
    ],
    tools: ["SQL", "PostgreSQL", "MySQL Workbench", "DBeaver"],
    projects: ["E-commerce sales query dashboard", "Database schema for a booking system", "Performance-optimized reporting queries"],
  
    coverImage: "/images/courses/sql.jpg",
  
    coverImageRatio: 1.2496,
  },
  {
    slug: "power-bi",
    title: "Power BI",
    category: "Data & AI",
    description:
      "Create interactive dashboards and reports that turn spreadsheets into clear, decision-ready visual stories.",
    icon: LineChart,
    level: "Intermediate",
    gradient: "from-primary to-violet",
    duration: "5 weeks",
    audience: "Analysts and managers who need to present data clearly",
    learn: [
      "Connecting and transforming data with Power Query",
      "Building interactive dashboards and reports",
      "DAX formulas for calculated metrics",
      "Publishing and sharing dashboards with stakeholders",
    ],
    curriculum: [
      {
        title: "Power BI Basics",
        topics: [
          "Connecting and importing data sources",
          "Power Query for data transformation",
          "Data modeling fundamentals",
        ],
      },
      {
        title: "Visualizations",
        topics: [
          "Choosing the right chart types",
          "Interactive filters and slicers",
          "Designing clear, readable reports",
        ],
      },
      {
        title: "DAX Formulas",
        topics: [
          "Calculated columns and measures",
          "Time intelligence functions",
          "Common DAX patterns",
        ],
      },
      {
        title: "Publishing & Sharing",
        topics: [
          "Publishing to Power BI Service",
          "Setting up scheduled refresh",
          "Sharing dashboards with stakeholders",
        ],
      },
    ],
    reviews: [
      {
        name: "Deepak Chandran",
        role: "Finance Manager",
        rating: 5,
        comment: "My monthly reporting went from two days to two hours after this course.",
      },
      {
        name: "Anitha R",
        role: "Operations Analyst",
        rating: 5,
        comment: "The DAX module demystified formulas I'd been copy-pasting for years without understanding.",
      },
    ],
    tools: ["Power BI", "Power Query", "DAX", "Excel"],
    projects: ["Regional sales performance dashboard", "HR attrition analysis report", "Executive KPI dashboard"],
  
    coverImage: "/images/courses/power-bi.jpg",
  
    coverImageRatio: 1.2496,
  },
  {
    slug: "excel",
    title: "Excel",
    category: "Data & AI",
    description:
      "Master formulas, pivot tables, and dashboarding techniques that power everyday business analysis.",
    icon: FileSpreadsheet,
    level: "Beginner",
    gradient: "from-violet to-cyan",
    duration: "4 weeks",
    audience: "Professionals who want to level up everyday spreadsheet work",
    learn: [
      "Advanced formulas, lookups, and conditional logic",
      "Pivot tables and pivot charts for fast analysis",
      "Building simple dashboards inside Excel",
      "Automating repetitive tasks with basic macros",
    ],
    curriculum: [
      {
        title: "Excel Essentials",
        topics: [
          "Formulas and functions refresher",
          "Lookup functions: VLOOKUP and XLOOKUP",
          "Conditional formatting and data validation",
        ],
      },
      {
        title: "Data Analysis in Excel",
        topics: [
          "Pivot tables and pivot charts",
          "What-if analysis tools",
          "Sorting, filtering, and cleaning data",
        ],
      },
      {
        title: "Dashboards in Excel",
        topics: [
          "Building dashboard layouts",
          "Dynamic charts with slicers",
          "Design principles for clarity",
        ],
      },
      {
        title: "Automation Basics",
        topics: [
          "Introduction to macros",
          "Recording and editing simple macros",
          "Practical automation exercises",
        ],
      },
    ],
    reviews: [
      {
        name: "Preethi Ganesan",
        role: "HR Executive",
        rating: 5,
        comment: "I use pivot tables every single day now — this course paid for itself in the first week.",
      },
      {
        name: "Suresh Kumar",
        role: "Small Business Owner",
        rating: 5,
        comment: "Practical, no-fluff Excel training that directly improved how I track my business numbers.",
      },
    ],
    tools: ["Excel", "Power Query", "Pivot Tables", "Macros"],
    projects: ["Automated monthly expense report", "Inventory tracking dashboard", "Sales pipeline tracker"],
  
    coverImage: "/images/courses/excel.jpg",
  
    coverImageRatio: 1.3333,
  },

  // Web Development
  {
    slug: "web-development",
    title: "Web Development",
    category: "Web Development",
    description:
      "A complete introduction to building modern websites with HTML, CSS, JavaScript, and industry best practices.",
    icon: Globe,
    level: "Beginner",
    gradient: "from-cyan to-primary",
    duration: "8 weeks",
    audience: "Complete beginners who want to build their first websites",
    learn: [
      "HTML, CSS, and responsive layout fundamentals",
      "JavaScript basics for interactivity",
      "Version control with Git and deploying a live site",
      "A personal portfolio site built from scratch",
    ],
    curriculum: [
      {
        title: "HTML & CSS",
        topics: [
          "Semantic HTML structure",
          "CSS layout with Flexbox and Grid",
          "Responsive design basics",
        ],
      },
      {
        title: "JavaScript Fundamentals",
        topics: [
          "Variables, functions, and DOM manipulation",
          "Events and interactivity",
          "Working with APIs and fetch",
        ],
      },
      {
        title: "Modern Tooling",
        topics: [
          "Version control with Git and GitHub",
          "Package managers and build tools",
          "Browser dev tools for debugging",
        ],
      },
      {
        title: "Capstone Website",
        topics: [
          "Planning and building a portfolio site",
          "Deploying to a live domain",
          "Performance and accessibility basics",
        ],
      },
    ],
    reviews: [
      {
        name: "Yogesh Prabhu",
        role: "Career Starter",
        rating: 5,
        comment: "Went from knowing nothing about code to a live portfolio site in eight weeks.",
      },
      {
        name: "Nithya S",
        role: "Marketing Executive",
        rating: 5,
        comment: "Approachable and well-paced — I finally understand what my dev team is talking about.",
      },
    ],
    tools: ["HTML", "CSS", "JavaScript", "Git", "VS Code"],
    projects: ["Personal portfolio website", "Restaurant landing page", "Responsive business website"],
  
    coverImage: "/images/courses/web-development.jpg",
  
    coverImageRatio: 1.2496,
  },
  {
    slug: "frontend-development",
    title: "Frontend Development",
    category: "Web Development",
    description:
      "Craft responsive, accessible user interfaces with modern component-based frameworks and design systems.",
    icon: AppWindow,
    level: "Intermediate",
    gradient: "from-primary to-cyan",
    duration: "8 weeks",
    audience: "Beginners ready to specialize in building user interfaces",
    learn: [
      "Component-based UI development",
      "Responsive, accessible design systems",
      "State management and API integration",
      "A production-style frontend project for your portfolio",
    ],
    curriculum: [
      {
        title: "Component Thinking",
        topics: [
          "Breaking UIs into reusable components",
          "Props, state, and composition",
          "Component libraries and design systems",
        ],
      },
      {
        title: "Styling at Scale",
        topics: [
          "Utility-first CSS with Tailwind",
          "Responsive and accessible layouts",
          "Theming and dark mode patterns",
        ],
      },
      {
        title: "State & Data",
        topics: [
          "Client-side state management",
          "Fetching and caching API data",
          "Form handling and validation",
        ],
      },
      {
        title: "Production Frontend",
        topics: [
          "Performance optimization techniques",
          "Testing UI components",
          "Shipping a portfolio-ready project",
        ],
      },
    ],
    reviews: [
      {
        name: "Ashwin Menon",
        role: "Junior Developer",
        rating: 5,
        comment: "The design systems module changed how I think about building UIs entirely.",
      },
      {
        name: "Revathi K",
        role: "Bootcamp Graduate",
        rating: 5,
        comment: "Best explanation of state management I've come across — practical, not just theory.",
      },
    ],
    tools: ["React", "Tailwind CSS", "Git", "Figma", "VS Code"],
    projects: ["E-commerce product catalog UI", "Admin dashboard interface", "Component library for a design system"],
  
    coverImage: "/images/courses/frontend-development.jpg",
  
    coverImageRatio: 1.2899,
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    category: "Web Development",
    description:
      "Build secure, scalable APIs and server-side logic that power real production applications.",
    icon: Server,
    level: "Intermediate",
    gradient: "from-violet to-primary",
    duration: "8 weeks",
    audience: "Developers who want to build the server side of applications",
    learn: [
      "REST API design and authentication",
      "Working with databases and ORMs",
      "Error handling, logging, and testing",
      "Deploying a secure, production-ready API",
    ],
    curriculum: [
      {
        title: "API Design",
        topics: [
          "REST principles and conventions",
          "Request and response handling",
          "Authentication and authorization",
        ],
      },
      {
        title: "Databases",
        topics: [
          "Working with relational databases",
          "ORMs and query building",
          "Data modeling for applications",
        ],
      },
      {
        title: "Reliability",
        topics: [
          "Error handling and logging",
          "Input validation and security basics",
          "Writing tests for APIs",
        ],
      },
      {
        title: "Deployment",
        topics: [
          "Environment configuration",
          "Deploying to the cloud",
          "Monitoring a live API",
        ],
      },
    ],
    reviews: [
      {
        name: "Manoj Varma",
        role: "Full Stack Developer",
        rating: 5,
        comment: "Filled the gaps between 'it works on my machine' and an actually production-ready API.",
      },
      {
        name: "Swathi R",
        role: "CS Graduate",
        rating: 5,
        comment: "The security and validation module alone justified the course for me.",
      },
    ],
    tools: ["Node.js", "FastAPI", "PostgreSQL", "Postman", "Git"],
    projects: ["REST API for a task manager app", "Authentication service", "Inventory management API"],
  
    coverImage: "/images/courses/backend-development.jpg",
  
    coverImageRatio: 1.3333,
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    category: "Web Development",
    description:
      "Learn to build and ship complete applications end-to-end, from database to deployed user interface.",
    icon: Layers,
    level: "Advanced",
    gradient: "from-cyan to-violet",
    duration: "12 weeks",
    audience: "Developers ready to build and ship complete applications",
    learn: [
      "Connecting frontend, backend, and database layers",
      "Authentication, authorization, and role-based access",
      "CI/CD basics and deployment workflows",
      "A capstone full-stack app built end-to-end",
    ],
    curriculum: [
      {
        title: "Architecture Overview",
        topics: [
          "Frontend, backend, and database layers",
          "Choosing the right tech stack",
          "Planning an application from scratch",
        ],
      },
      {
        title: "Building the Backend",
        topics: [
          "APIs, authentication, and data models",
          "Connecting to a real database",
          "Role-based access control",
        ],
      },
      {
        title: "Building the Frontend",
        topics: [
          "Consuming APIs from the UI",
          "State management across the app",
          "Polishing the user experience",
        ],
      },
      {
        title: "Shipping the Product",
        topics: [
          "CI/CD basics",
          "Deploying a full-stack app",
          "Capstone project review and feedback",
        ],
      },
    ],
    reviews: [
      {
        name: "Vishal Kannan",
        role: "Aspiring Founder",
        rating: 5,
        comment: "Built my startup's MVP by the end of the course — genuinely end-to-end training.",
      },
      {
        name: "Pavithra M",
        role: "Software Developer",
        rating: 5,
        comment: "Bridges frontend and backend better than any course I've taken before.",
      },
    ],
    tools: ["React", "Node.js", "PostgreSQL", "Git", "Docker"],
    projects: ["Full-stack e-commerce platform", "Booking and reservation system", "Team collaboration tool"],
  
    coverImage: "/images/courses/full-stack-development.jpg",
  
    coverImageRatio: 1.5,
  },
  {
    slug: "react",
    title: "React",
    category: "Web Development",
    description:
      "Master component-driven UI development with React, hooks, and state management for production-grade apps.",
    icon: Code2,
    level: "Intermediate",
    gradient: "from-primary to-violet",
    duration: "6 weeks",
    audience: "Frontend developers who know HTML, CSS, and JavaScript basics",
    learn: [
      "Components, props, and hooks in depth",
      "State management patterns for real apps",
      "Working with APIs and asynchronous data",
      "Building and deploying a production React app",
    ],
    curriculum: [
      {
        title: "React Fundamentals",
        topics: [
          "JSX and component basics",
          "Props and component composition",
          "Handling events and forms",
        ],
      },
      {
        title: "Hooks Deep Dive",
        topics: [
          "useState and useEffect in depth",
          "Building custom hooks",
          "Performance hooks: useMemo and useCallback",
        ],
      },
      {
        title: "State Management",
        topics: [
          "Context API patterns",
          "Managing complex app state",
          "Working with third-party state libraries",
        ],
      },
      {
        title: "Production React",
        topics: [
          "Testing React components",
          "Code splitting and performance",
          "Deploying a production React app",
        ],
      },
    ],
    reviews: [
      {
        name: "Arjun Nair",
        role: "Frontend Developer",
        rating: 5,
        comment: "The hooks deep-dive module is the best I've seen — cleared up years of confusion.",
      },
      {
        name: "Keerthana V",
        role: "Junior Engineer",
        rating: 5,
        comment: "Practical, project-based, and directly applicable to my work within days.",
      },
    ],
    tools: ["React", "Tailwind CSS", "Git", "VS Code", "Vite"],
    projects: ["Task management app", "Weather dashboard with a live API", "E-commerce storefront UI"],
  
    coverImage: "/images/courses/react.jpg",
  
    coverImageRatio: 1.5,
  },
  {
    slug: "nextjs",
    title: "Next.js",
    category: "Web Development",
    description:
      "Build fast, SEO-friendly, full-stack React applications with routing, server rendering, and API routes.",
    icon: Rocket,
    level: "Advanced",
    gradient: "from-violet to-cyan",
    duration: "6 weeks",
    audience: "React developers ready to build full-stack, SEO-friendly apps",
    learn: [
      "App Router, routing, and layouts",
      "Server components, server actions, and data fetching",
      "SEO, performance, and Core Web Vitals optimization",
      "Deploying a full-stack Next.js application",
    ],
    curriculum: [
      {
        title: "App Router Basics",
        topics: [
          "File-based routing and layouts",
          "Server vs client components",
          "Navigation and dynamic routes",
        ],
      },
      {
        title: "Data & Rendering",
        topics: [
          "Data fetching patterns",
          "Server actions and mutations",
          "Static vs dynamic rendering",
        ],
      },
      {
        title: "Performance & SEO",
        topics: [
          "Image and font optimization",
          "Metadata and SEO best practices",
          "Core Web Vitals optimization",
        ],
      },
      {
        title: "Deployment",
        topics: [
          "Environment configuration",
          "Deploying a full-stack Next.js app",
          "Monitoring and analytics basics",
        ],
      },
    ],
    reviews: [
      {
        name: "Rahul Menon",
        role: "React Developer",
        rating: 5,
        comment: "Server actions finally made sense after this course — a genuine step up from plain React.",
      },
      {
        name: "Ishita Sharma",
        role: "Freelance Developer",
        rating: 5,
        comment: "I now build client sites in a fraction of the time thanks to the App Router module.",
      },
    ],
    tools: ["Next.js", "React", "Tailwind CSS", "Vercel", "Supabase"],
    projects: ["SEO-optimized marketing site", "Full-stack blog platform", "SaaS dashboard with authentication"],
  
    coverImage: "/images/courses/nextjs.jpg",
  
    coverImageRatio: 1.5,
  },

  // Mobile Development
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Mobile Development",
    description:
      "Learn the fundamentals of designing and building mobile apps for both iOS and Android from scratch.",
    icon: Smartphone,
    level: "Beginner",
    gradient: "from-cyan to-primary",
    duration: "8 weeks",
    audience: "Beginners who want to build their first mobile app",
    learn: [
      "Mobile UI/UX fundamentals for iOS and Android",
      "Core app architecture and navigation",
      "Working with device features and APIs",
      "Publishing your first app to the app stores",
    ],
    curriculum: [
      {
        title: "Mobile Fundamentals",
        topics: [
          "Mobile UI/UX principles",
          "Platform differences: iOS vs Android",
          "App architecture basics",
        ],
      },
      {
        title: "Building Screens",
        topics: [
          "Navigation and routing",
          "Forms and user input",
          "Working with lists and data",
        ],
      },
      {
        title: "Device Features",
        topics: [
          "Camera, location, and notifications",
          "Local storage and offline support",
          "Working with device permissions",
        ],
      },
      {
        title: "Launch Ready",
        topics: [
          "Testing on real devices",
          "App store submission process",
          "Post-launch monitoring basics",
        ],
      },
    ],
    reviews: [
      {
        name: "Vikram Das",
        role: "Aspiring App Developer",
        rating: 5,
        comment: "Took me from zero to a published app on the Play Store.",
      },
      {
        name: "Nandini R",
        role: "Design Student",
        rating: 5,
        comment: "Great balance of design thinking and actual implementation.",
      },
    ],
    tools: ["Figma", "React Native", "Android Studio", "Xcode"],
    projects: ["To-do list mobile app", "Local business directory app", "Simple fitness tracker app"],
  
    coverImage: "/images/courses/mobile-app-development.jpg",
  
    coverImageRatio: 1.5,
  },
  {
    slug: "react-native",
    title: "React Native",
    category: "Mobile Development",
    description:
      "Build cross-platform mobile apps with a single JavaScript codebase using React Native and modern tooling.",
    icon: AppWindow,
    level: "Intermediate",
    gradient: "from-primary to-cyan",
    duration: "8 weeks",
    audience: "Web developers moving into cross-platform mobile apps",
    learn: [
      "Cross-platform components and navigation",
      "Native device APIs and third-party integrations",
      "State management and offline-first patterns",
      "Shipping a real app to iOS and Android",
    ],
    curriculum: [
      {
        title: "React Native Basics",
        topics: [
          "Core components and styling",
          "Navigation between screens",
          "Handling platform differences",
        ],
      },
      {
        title: "Native Integrations",
        topics: [
          "Using native device APIs",
          "Third-party library integration",
          "Push notifications setup",
        ],
      },
      {
        title: "State & Data",
        topics: [
          "State management in mobile apps",
          "Offline-first data patterns",
          "API integration best practices",
        ],
      },
      {
        title: "Shipping the App",
        topics: [
          "Testing on iOS and Android",
          "Build and release process",
          "App store deployment",
        ],
      },
    ],
    reviews: [
      {
        name: "Farhan Ali",
        role: "Web Developer",
        rating: 5,
        comment: "My React knowledge transferred faster than I expected — great bridge course into mobile.",
      },
      {
        name: "Sneha Reddy",
        role: "Startup Developer",
        rating: 5,
        comment: "Shipped our company's first mobile app to both stores using exactly what I learned here.",
      },
    ],
    tools: ["React Native", "Expo", "Git", "VS Code"],
    projects: ["Cross-platform notes app", "Food delivery app UI", "Fitness tracking app"],
  
    coverImage: "/images/courses/react-native.jpg",
  
    coverImageRatio: 1.5,
  },
  {
    slug: "flutter",
    title: "Flutter",
    category: "Mobile Development",
    description:
      "Design beautiful, natively compiled mobile apps for iOS and Android from one Dart codebase.",
    icon: Waves,
    level: "Intermediate",
    gradient: "from-violet to-primary",
    duration: "8 weeks",
    audience: "Developers who want one codebase for iOS and Android",
    learn: [
      "Dart fundamentals and widget-based UI",
      "State management approaches in Flutter",
      "Working with APIs and local storage",
      "Building and publishing a complete Flutter app",
    ],
    curriculum: [
      {
        title: "Dart & Flutter Basics",
        topics: [
          "Dart language fundamentals",
          "Widget tree and layout basics",
          "Stateful vs stateless widgets",
        ],
      },
      {
        title: "Building UI",
        topics: [
          "Navigation and routing",
          "Custom widgets and theming",
          "Responsive layouts for multiple devices",
        ],
      },
      {
        title: "App Logic",
        topics: [
          "State management approaches",
          "Working with local storage",
          "Calling and consuming APIs",
        ],
      },
      {
        title: "Publishing",
        topics: [
          "Testing across platforms",
          "Build configuration for iOS and Android",
          "Publishing to app stores",
        ],
      },
    ],
    reviews: [
      {
        name: "Abhishek Rao",
        role: "Mobile Developer",
        rating: 5,
        comment: "One codebase, two app stores — exactly as promised, and well taught.",
      },
      {
        name: "Divyani Shah",
        role: "CS Student",
        rating: 5,
        comment: "Loved how the course balanced Dart fundamentals with real app-building practice.",
      },
    ],
    tools: ["Flutter", "Dart", "Android Studio", "Firebase"],
    projects: ["Habit tracker app", "Recipe sharing app", "Expense manager app"],
  
    coverImage: "/images/courses/flutter.jpg",
  
    coverImageRatio: 1.5,
  },

  // Growth
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Growth",
    description:
      "Learn SEO, social media, and performance marketing strategies to grow brands and generate real leads online.",
    icon: Megaphone,
    level: "Beginner",
    gradient: "from-cyan to-violet",
    duration: "5 weeks",
    audience: "Founders, marketers, and students entering digital marketing",
    learn: [
      "SEO fundamentals and on-page optimization",
      "Social media strategy and content planning",
      "Running Google and Meta ad campaigns",
      "Tracking performance and optimizing for conversions",
    ],
    curriculum: [
      {
        title: "SEO Fundamentals",
        topics: [
          "Keyword research basics",
          "On-page and technical SEO",
          "Content optimization strategies",
        ],
      },
      {
        title: "Social Media Marketing",
        topics: [
          "Platform-specific strategy",
          "Content planning and calendars",
          "Community engagement tactics",
        ],
      },
      {
        title: "Paid Advertising",
        topics: [
          "Google Ads fundamentals",
          "Meta Ads campaign setup",
          "Budgeting and bid strategies",
        ],
      },
      {
        title: "Analytics & Optimization",
        topics: [
          "Tracking conversions and goals",
          "Reading and interpreting campaign data",
          "Optimizing for better ROI",
        ],
      },
    ],
    reviews: [
      {
        name: "Gowtham S",
        role: "Small Business Owner",
        rating: 5,
        comment: "My ad spend finally converts to real leads instead of just impressions.",
      },
      {
        name: "Ramya Krishnan",
        role: "Marketing Executive",
        rating: 5,
        comment: "Practical, current, and focused on results rather than vanity metrics.",
      },
    ],
    tools: ["Google Ads", "Meta Ads Manager", "Google Analytics", "SEMrush"],
    projects: ["SEO audit for a live website", "30-day social media content calendar", "Google Ads campaign case study"],
  
    coverImage: "/images/courses/digital-marketing.jpg",
  
    coverImageRatio: 1.5,
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing",
    category: "Growth",
    description:
      "Get hands-on with cloud infrastructure, deployment, and scaling on modern platforms like AWS and Azure.",
    icon: Cloud,
    level: "Intermediate",
    gradient: "from-primary to-violet",
    duration: "6 weeks",
    audience: "Developers ready to deploy and scale real applications",
    learn: [
      "Core cloud concepts across AWS, Azure, and GCP",
      "Deploying and scaling applications in the cloud",
      "CI/CD pipelines for automated deployments",
      "Monitoring, cost management, and security basics",
    ],
    curriculum: [
      {
        title: "Cloud Fundamentals",
        topics: [
          "Core concepts across AWS, Azure, and GCP",
          "Compute, storage, and networking basics",
          "Choosing the right cloud services",
        ],
      },
      {
        title: "Deployment",
        topics: [
          "Deploying applications to the cloud",
          "Containers and basic orchestration",
          "Environment and configuration management",
        ],
      },
      {
        title: "Automation",
        topics: [
          "CI/CD pipeline fundamentals",
          "Infrastructure as code basics",
          "Automating routine cloud tasks",
        ],
      },
      {
        title: "Operations",
        topics: [
          "Monitoring and logging",
          "Cost management and optimization",
          "Cloud security fundamentals",
        ],
      },
    ],
    reviews: [
      {
        name: "Balaji Iyer",
        role: "DevOps Engineer",
        rating: 5,
        comment: "Practical, hands-on labs made cloud concepts stick in a way tutorials never did.",
      },
      {
        name: "Kavya Menon",
        role: "Backend Developer",
        rating: 5,
        comment: "The CI/CD module alone leveled up how our whole team ships code.",
      },
    ],
    tools: ["AWS", "Docker", "GitHub Actions", "Terraform"],
    projects: ["Deploying a containerized web app", "Setting up a CI/CD pipeline", "Auto-scaling infrastructure demo"],
  
    coverImage: "/images/courses/cloud-computing.jpg",
  
    coverImageRatio: 1.5,
  },
];

export const COURSE_CATEGORIES = Array.from(
  new Set(COURSES.map((course) => course.category)),
);
