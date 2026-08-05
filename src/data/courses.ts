import {
  AppWindow,
  BarChart3,
  Bot,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileSpreadsheet,
  Globe,
  Languages,
  Layers,
  LineChart,
  Megaphone,
  Network,
  PenTool,
  Rocket,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  TableProperties,
  Terminal,
  Waves,
  Workflow,
  ClipboardList,
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
          "The analyst vs. scientist vs. engineer distinction",
          "Core spreadsheet skills: pivot tables and lookups",
          "Descriptive statistics: mean, median, variance, distributions",
        ],
      },
      {
        title: "SQL for Analytics",
        topics: [
          "SELECT, JOIN, and GROUP BY fundamentals",
          "Window functions, CTEs, and subqueries",
          "Query performance basics on PostgreSQL/BigQuery",
        ],
      },
      {
        title: "Python for Data Analysis",
        topics: [
          "Data wrangling with pandas and NumPy",
          "Exploratory data analysis and data cleaning",
          "Visualization with matplotlib and seaborn",
        ],
      },
      {
        title: "Statistics & Experimentation",
        topics: [
          "Probability, distributions, and hypothesis testing",
          "Confidence intervals and A/B test design",
          "Correlation vs. causation",
        ],
      },
      {
        title: "Visualization & BI Tools",
        topics: [
          "Building interactive dashboards in Power BI",
          "DAX and calculated fields",
          "Data storytelling and choosing the right chart",
        ],
      },
      {
        title: "AI-Augmented Analytics",
        topics: [
          "Using AI to accelerate data cleaning and EDA",
          "LLM APIs for working with text data",
          "scikit-learn basics: regression, classification, clustering",
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
    tools: ["Python", "SQL (PostgreSQL/BigQuery)", "Power BI", "Excel", "Jupyter Notebook", "scikit-learn", "Claude / ChatGPT"],
    projects: [
      "Retail sales performance dashboard modeling a multi-table dataset with drill-down KPIs",
      "Customer churn analysis with EDA and a baseline classification model",
      "Marketing A/B test readout with a significance test and a ship/no-ship recommendation",
      "Support-ticket insight pipeline using an LLM API to classify topics and sentiment at scale",
      "Automated weekly report generator that drafts narrative summaries from fresh data",
    ],
  
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
        title: "Python, Math & SQL Foundations",
        topics: [
          "Linear algebra, probability, and descriptive statistics basics",
          "pandas and NumPy for data manipulation",
          "SQL joins, window functions, and CTEs on real schemas",
          "API ingestion and file-based data wrangling",
        ],
      },
      {
        title: "Statistics & Experimentation",
        topics: [
          "Probability distributions and hypothesis testing",
          "Confidence intervals and A/B test design",
          "Intro to Bayesian thinking",
          "Writing up experiment results and recommendations",
        ],
      },
      {
        title: "Data Visualization & Storytelling",
        topics: [
          "Charting with matplotlib and seaborn",
          "Dashboard design in Power BI or Tableau",
          "Choosing the right visualization for the question",
          "Structuring a data narrative for stakeholders",
        ],
      },
      {
        title: "Machine Learning Fundamentals",
        topics: [
          "Regression, classification, trees, and ensembles",
          "Cross-validation and feature engineering",
          "Building scikit-learn pipelines",
          "Comparing baseline vs. tuned model performance",
        ],
      },
      {
        title: "Deep Learning & Generative AI",
        topics: [
          "Neural network fundamentals, CNNs, and transformers",
          "Tokenization, embeddings, and Hugging Face basics",
          "Prompt engineering and retrieval-augmented generation",
          "Building LLM-powered tools and lightweight fine-tuning",
        ],
      },
      {
        title: "MLOps & Deployment",
        topics: [
          "Serving models with FastAPI or Flask",
          "Containerizing with Docker and basic CI/CD",
          "Model monitoring and drift detection",
          "Cloud deployment fundamentals",
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
    tools: ["Python", "SQL", "pandas & scikit-learn", "PyTorch", "Hugging Face", "LangChain", "Power BI / Tableau", "MLflow"],
    projects: [
      "Customer churn analysis with a baseline-to-tuned classification model and a precision/recall trade-off writeup",
      "Image classification web app built by training or fine-tuning a CNN and wrapping it in a small Flask app",
      "RAG document Q&A assistant that answers questions over a custom document set with citations",
      "Time-series demand forecasting comparing a classical statistical model against a gradient-boosted baseline",
      "Deployed model with monitoring, containerized and shipped with basic drift detection",
    ],
  
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
        title: "Foundations: Python, Math & Search",
        topics: [
          "Python and Git refresher for AI work",
          "Linear algebra and probability essentials",
          "Uninformed and informed search (BFS/DFS, A*)",
          "Adversarial search and constraint satisfaction problems",
        ],
      },
      {
        title: "Knowledge Representation & Logic",
        topics: [
          "Propositional and first-order logic",
          "Inference and resolution",
          "Semantic networks and ontologies",
          "Rule-based expert systems and knowledge graphs",
        ],
      },
      {
        title: "Machine Learning Fundamentals",
        topics: [
          "Supervised vs. unsupervised learning",
          "Regression, classification, and decision trees",
          "Model evaluation metrics",
          "End-to-end workflows with scikit-learn",
        ],
      },
      {
        title: "Neural Networks",
        topics: [
          "Perceptrons and activation functions",
          "Backpropagation from first principles",
          "Building feedforward networks in PyTorch",
          "Overfitting and regularization",
        ],
      },
      {
        title: "Generative AI, Computer Vision & Reinforcement Learning",
        topics: [
          "Transformer architecture and prompt engineering",
          "Embeddings, vector search, and retrieval-augmented generation",
          "CNNs for image classification",
          "Markov decision processes and Q-learning",
        ],
      },
      {
        title: "AI Ethics & Responsible AI",
        topics: [
          "Bias and fairness in models",
          "Explainability techniques (SHAP/LIME)",
          "AI safety, privacy, and governance basics",
          "Auditing a model for risk and mitigation",
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
    tools: ["Claude / ChatGPT", "GitHub Copilot", "Hugging Face", "LangChain / LlamaIndex", "Gymnasium (OpenAI Gym)", "Weights & Biases", "PyTorch", "scikit-learn"],
    projects: [
      "Campus pathfinding solver using A* compared against Dijkstra and breadth-first search",
      "Sudoku and N-Queens constraint-satisfaction solver with backtracking and forward checking",
      "Rule-based triage advisor built as a forward-chaining expert system",
      "Handwritten digit classifier with a small CNN and an interactive web demo",
      "RAG document Q&A assistant that answers questions with source citations",
    ],
  
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
        title: "Math, Statistics & Python Foundations",
        topics: [
          "Linear algebra and probability for ML",
          "NumPy and pandas for data handling",
          "Implementing linear regression from scratch",
          "scikit-learn basics",
        ],
      },
      {
        title: "Supervised Learning: Regression & Classification",
        topics: [
          "Linear and logistic regression",
          "K-nearest neighbors and decision trees",
          "Train/validation/test splits",
          "Evaluation metrics (F1, RMSE, MAE)",
        ],
      },
      {
        title: "Ensemble Methods & Hyperparameter Tuning",
        topics: [
          "Random forests and gradient boosting (XGBoost, LightGBM)",
          "Bagging vs. boosting",
          "Grid and Bayesian hyperparameter search",
          "k-fold cross-validation",
        ],
      },
      {
        title: "Unsupervised Learning & Feature Engineering",
        topics: [
          "Clustering (K-means, hierarchical, DBSCAN)",
          "Dimensionality reduction (PCA, t-SNE/UMAP)",
          "Encoding, scaling, and handling imbalanced data",
          "ROC curves and model calibration",
        ],
      },
      {
        title: "Model Interpretability & AutoML",
        topics: [
          "SHAP and LIME for explainability",
          "Partial dependence plots and model cards",
          "AutoML baselines (AutoGluon, H2O)",
          "Fairness and bias checks",
        ],
      },
      {
        title: "MLOps: Deployment & Monitoring",
        topics: [
          "Experiment tracking with MLflow / Weights & Biases",
          "Packaging models with FastAPI and Docker",
          "Drift detection and monitoring",
          "Dataset and model versioning",
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
    tools: ["scikit-learn", "XGBoost", "Optuna", "SHAP", "MLflow", "Weights & Biases", "FastAPI & Docker", "AutoGluon"],
    projects: [
      "Credit default risk classifier with SHAP-based explanations for each decision",
      "Customer churn early-warning system producing a ranked retention action list",
      "Retail demand forecasting comparing classical time-series models against gradient boosting",
      "Customer segmentation for marketing using clustering and dimensionality reduction",
      "Deployed, monitored ML model served as a containerized API with drift tracking",
    ],
  
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
        title: "Web Fundamentals & Tooling",
        topics: [
          "Git/GitHub workflow and command-line basics",
          "Semantic HTML5 and responsive layouts with Flexbox/Grid",
          "JavaScript ES6+, DOM events, and the Fetch API",
        ],
      },
      {
        title: "Frontend Development with React",
        topics: [
          "Components, JSX, and hooks (useState/useEffect)",
          "Client-side routing and controlled forms",
          "Consuming REST APIs from a single-page app",
        ],
      },
      {
        title: "Backend Development with Node.js & Express",
        topics: [
          "Express routing, middleware, and REST API design",
          "Request/response lifecycle and environment configuration",
          "Error handling and automated API testing",
        ],
      },
      {
        title: "Databases: SQL & NoSQL",
        topics: [
          "Relational schema design and SQL joins",
          "PostgreSQL with an ORM (Prisma/Sequelize)",
          "MongoDB and Mongoose for unstructured data",
          "Choosing between SQL and NoSQL, migrations and seeding",
        ],
      },
      {
        title: "Advanced Frontend, Testing & Performance",
        topics: [
          "Global state management (Context/Redux/Zustand)",
          "Code splitting, memoization, and performance profiling",
          "Unit and component testing (Jest/Vitest, React Testing Library)",
          "Accessibility audits",
        ],
      },
      {
        title: "API Security, AI-Assisted Development & Deployment",
        topics: [
          "Authentication and authorization (JWT, OAuth, sessions)",
          "Security fundamentals: password hashing, rate limiting, CORS, OWASP Top 10",
          "AI-assisted coding and code-review workflows",
          "Docker, CI/CD pipelines, and cloud deployment",
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
    tools: ["React", "Node.js & Express", "PostgreSQL", "MongoDB", "Docker", "GitHub Copilot", "Postman", "Git & GitHub"],
    projects: [
      "Multi-user task tracker with authentication, per-user data isolation, and full CRUD",
      "E-commerce storefront with cart, mock checkout, and order history",
      "Real-time multi-room chat app with typing indicators and reconnect handling",
      "Server-rendered blog platform with a GraphQL API and draft/publish workflow",
      "Recipe-sharing app with image upload, tagging, and AI-suggested tags",
    ],
  
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
        title: "Cross-Platform Mobile Fundamentals",
        topics: [
          "JavaScript/TypeScript essentials and React basics",
          "React Native project setup (Expo vs. bare workflow)",
          "Simulators, emulators, and device debugging",
          "Intro to native syntax (Kotlin & Swift basics)",
        ],
      },
      {
        title: "Mobile UI/UX & Design",
        topics: [
          "Human Interface Guidelines and Material Design principles",
          "Flexbox layout and core React Native components",
          "Styling, theming, and design tokens",
          "Mobile accessibility (screen readers, touch targets)",
        ],
      },
      {
        title: "State Management, Navigation & Data",
        topics: [
          "Global state with Context, Redux, or Zustand",
          "Stack, tab, and drawer navigation with deep linking",
          "Local storage (AsyncStorage, SQLite) and offline caching",
          "REST API integration and secure auth tokens",
        ],
      },
      {
        title: "Native Device Features & Performance",
        topics: [
          "Camera, media library, and GPS/maps integration",
          "Push notifications and biometric authentication",
          "List virtualization, render profiling, and bundle size",
          "Offline-first sync patterns and background tasks",
        ],
      },
      {
        title: "AI-Powered Mobile Features",
        topics: [
          "AI pair-programming for React Native development",
          "On-device machine learning (ML Kit / Core ML)",
          "LLM API integration for in-app chat and search",
          "Prompt design under mobile UX constraints",
        ],
      },
      {
        title: "Deployment & Release Automation",
        topics: [
          "App Store Connect and Google Play Console",
          "Code signing, provisioning profiles, and release automation",
          "CI/CD pipelines for mobile builds",
          "Over-the-air updates",
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
    tools: ["React Native", "TypeScript", "Expo & EAS", "Fastlane", "ML Kit / Core ML", "Sentry", "GitHub Copilot"],
    projects: [
      "Local-first habit tracker with streaks, reminders, and offline charts",
      "GPS-driven place finder with map clustering and photo check-ins",
      "Receipt scanner using on-device text recognition and LLM-based expense categorization",
      "Offline-first field inspection app with local queuing and background sync",
      "Fitness social feed app with real-time activity updates and push notifications",
    ],
  
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
        title: "Marketing Fundamentals & Strategy",
        topics: [
          "The marketing funnel (AIDA) and customer personas",
          "Positioning, messaging, and brand voice",
          "Core KPIs: CAC, LTV, ROAS",
        ],
      },
      {
        title: "Search Engine Optimization",
        topics: [
          "Keyword research and technical SEO audits",
          "On-page and local SEO",
          "Core Web Vitals and link-building basics",
        ],
      },
      {
        title: "Content Marketing & Copywriting",
        topics: [
          "Content strategy and editorial calendars",
          "Long-form blog writing and landing page copy",
          "Email copywriting and content repurposing",
        ],
      },
      {
        title: "Paid Social, Search Ads & Analytics",
        topics: [
          "Meta Ads Manager and Google Ads (Search & Display)",
          "Audience targeting, segmentation, and budget pacing",
          "GA4 setup, conversion tracking, and attribution models",
        ],
      },
      {
        title: "AI-Assisted Content & Automation",
        topics: [
          "Prompt engineering for marketing copy and AI image/video generation",
          "Brand-safe AI workflows and AI-generated A/B copy variants",
          "Marketing automation platforms: workflows, lead scoring, drip sequences",
        ],
      },
      {
        title: "Personalization & AI-Driven Targeting",
        topics: [
          "AI-driven audience and lookalike targeting",
          "Dynamic creative optimization and personalization at scale",
          "AI-assisted reporting, anomaly detection, and budget allocation",
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
    tools: ["Google Ads", "Meta Ads Manager", "GA4 & Looker Studio", "HubSpot", "SEMrush / Ahrefs", "Canva Magic Studio", "Claude / ChatGPT"],
    projects: [
      "Full-funnel product launch campaign across paid social and search with GA4 conversion tracking",
      "Local business SEO audit and turnaround tracking keyword rankings and traffic lift",
      "5-7 email lifecycle nurture sequence with behavior-based segmentation and triggers",
      "AI-generated ad creative test benchmarked against a human-made control",
      "Cross-channel marketing analytics dashboard with an automated weekly summary",
    ],
  
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
        title: "Linux, Networking & Cloud Fundamentals",
        topics: [
          "Linux command line, shell scripting, and file permissions",
          "TCP/IP, DNS, and SSH-based remote administration",
          "Core AWS and Azure services: compute, storage, and networking",
          "IAM roles, security groups, and least-privilege access design",
        ],
      },
      {
        title: "Infrastructure as Code with Terraform",
        topics: [
          "HCL syntax, providers, and reusable modules",
          "Remote state management and backends",
          "Variables, outputs, and workspaces",
          "Team workflows with Terraform Cloud/CLI and pull-request reviews",
        ],
      },
      {
        title: "Containers & Kubernetes",
        topics: [
          "Writing efficient multi-stage Dockerfiles and managing registries",
          "Pods, Deployments, Services, ConfigMaps, and Secrets",
          "Packaging applications with Helm charts",
          "Deploying to local and managed Kubernetes clusters",
        ],
      },
      {
        title: "CI/CD Pipeline Engineering",
        topics: [
          "Pipeline-as-code and build/test/deploy stages",
          "Artifact and container image versioning",
          "Promoting releases across dev, staging, and production",
          "Managing secrets safely inside pipelines",
        ],
      },
      {
        title: "Site Reliability & Observability",
        topics: [
          "Horizontal and vertical autoscaling strategies",
          "Metrics and dashboards with Prometheus and Grafana",
          "Defining SLIs/SLOs and writing incident runbooks",
          "Service mesh fundamentals",
        ],
      },
      {
        title: "AI-Assisted Operations, Cost & Security",
        topics: [
          "Using AI coding assistants to draft and review infrastructure code",
          "Anomaly detection and cost/rightsizing optimization across clouds",
          "Security scanning: SAST/DAST, container image, and secrets scanning",
          "Compliance baselines and vulnerability triage workflows",
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
    tools: ["Linux", "AWS & Azure", "Terraform", "Docker & Kubernetes", "GitHub Actions", "Prometheus & Grafana", "Snyk / Checkov"],
    projects: [
      "Multi-tier web app on AWS & Azure — provision a load-balanced web, app, and database tier from one Terraform codebase across two clouds",
      "Kubernetes microservices deployment — containerize a multi-service app and deploy it via Helm with rolling updates",
      "CI/CD pipeline with automated testing — build a pipeline that lints, tests, builds, and deploys to staging on every merge",
      "Observability stack with alerting — instrument a service with Prometheus/Grafana dashboards and page on SLO breach",
      "DevSecOps pipeline with security gates — add SAST, dependency, and container scanning that blocks merges on critical findings",
    ],
  
    coverImage: "/images/courses/cloud-computing.jpg",

    coverImageRatio: 1.5,
  },
  // Cybersecurity
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "Cybersecurity",
    description:
      "Go from networking and Linux fundamentals to penetration testing, incident response, and AI-assisted threat detection — everything you need to defend real systems.",
    icon: Shield,
    level: "Intermediate",
    gradient: "from-violet to-cyan",
    duration: "10 weeks",
    audience: "IT professionals and career switchers who want hands-on skills to defend networks and systems",
    learn: [
      "Networking, Linux, and security fundamentals",
      "Web application and network penetration testing",
      "SIEM-based threat detection with AI-assisted triage",
      "Incident response and digital forensics basics",
    ],
    curriculum: [
      {
        title: "Networking & Linux Foundations",
        topics: [
          "TCP/IP, the OSI model, and subnetting basics",
          "Linux filesystem, permissions, and command-line fluency",
          "DNS, common ports, and packet capture with Wireshark",
        ],
      },
      {
        title: "Security Fundamentals",
        topics: [
          "CIA triad and common attack vectors",
          "Symmetric/asymmetric cryptography and hashing",
          "Risk assessment and security policy basics",
        ],
      },
      {
        title: "Scripting & Web Application Security",
        topics: [
          "Bash/Python scripting for security tooling and log parsing",
          "OWASP Top 10: SQL injection, XSS, broken authentication",
          "Secure coding and vulnerability assessment with Burp Suite",
        ],
      },
      {
        title: "Network Defense & Threat Detection",
        topics: [
          "Firewall, IDS/IPS, and network segmentation design",
          "SIEM fundamentals and log correlation rules",
          "AI-assisted anomaly detection and threat hunting",
        ],
      },
      {
        title: "Penetration Testing & Incident Response",
        topics: [
          "Reconnaissance, OSINT, and exploitation with Metasploit",
          "Privilege escalation and password attacks",
          "Incident response lifecycle and digital forensics basics",
        ],
      },
      {
        title: "Cloud Security & Compliance",
        topics: [
          "Cloud security posture on AWS/Azure",
          "SOC2 and ISO 27001 fundamentals",
          "SOAR playbook automation for common alerts",
        ],
      },
    ],
    reviews: [
      {
        name: "Arvind Krishnan",
        role: "SOC Analyst",
        rating: 5,
        comment: "The pentest and SIEM labs were exactly what my job needed — I was applying the detection rules at work within weeks.",
      },
      {
        name: "Divya Nair",
        role: "IT Security Trainee",
        rating: 5,
        comment: "Went from barely knowing Linux to building a full incident response report. The hands-on labs made it real.",
      },
    ],
    tools: ["Wireshark", "Burp Suite", "Metasploit", "Splunk / Microsoft Sentinel", "Nessus / Qualys", "Claude / ChatGPT", "Prowler / ScoutSuite"],
    projects: [
      "Home network security lab with segmented firewall rules, VLANs, and an IDS",
      "Full OWASP Top 10 vulnerability assessment against a deliberately vulnerable web app",
      "SIEM detection lab combining correlation rules with an ML-based anomaly detector",
      "CTF-style capstone solving a structured set of recon-to-privilege-escalation machines",
      "Incident response case reconstructing a simulated breach from a memory/disk image",
    ],
  },
  // Data & AI (new)
  {
    slug: "deep-learning",
    title: "Deep Learning",
    category: "Data & AI",
    description:
      "Build a solid foundation in neural networks, then design, train, and deploy CNNs, sequence models, transformers, and generative architectures using PyTorch.",
    icon: Network,
    level: "Advanced",
    gradient: "from-cyan to-primary",
    duration: "10 weeks",
    audience: "Learners with Python and basic machine learning experience who want to build and deploy neural networks in PyTorch",
    learn: [
      "Neural network fundamentals: backpropagation, optimizers, and regularization in PyTorch",
      "Convolutional networks for image classification and transfer learning",
      "Sequence models and transformer architectures for text and vision tasks",
      "Training generative models (GANs, diffusion) and deploying models to production",
    ],
    curriculum: [
      {
        title: "Math & PyTorch Foundations",
        topics: [
          "Linear algebra and calculus for deep learning",
          "Tensors, autograd, and manual backpropagation",
          "Building models with PyTorch's nn.Module",
          "GPU/CPU device management",
        ],
      },
      {
        title: "Neural Network Fundamentals & Regularization",
        topics: [
          "Perceptrons, MLPs, and activation functions",
          "Loss functions and optimizers (SGD, Adam, RMSProp)",
          "Dropout, normalization, and early stopping",
          "Hyperparameter search and experiment tracking",
        ],
      },
      {
        title: "Convolutional Networks & Computer Vision",
        topics: [
          "Convolution and pooling operations",
          "Transfer learning with ResNet/EfficientNet",
          "Data augmentation for vision tasks",
          "Visualizing model predictions with Grad-CAM",
        ],
      },
      {
        title: "Sequence Models",
        topics: [
          "Vanilla RNNs and the vanishing-gradient problem",
          "LSTM and GRU gating mechanisms",
          "Sequence-to-sequence framing",
          "Padding, masking, and batching sequences",
        ],
      },
      {
        title: "Transformers & Generative Models",
        topics: [
          "Self- and multi-head attention",
          "Transformer and vision-transformer architectures",
          "Fine-tuning pretrained transformers",
          "GAN and diffusion model fundamentals",
        ],
      },
      {
        title: "Deploying & Scaling Deep Learning Models",
        topics: [
          "Model export to ONNX and quantization",
          "Serving models with TorchServe/TF Serving",
          "Distributed and multi-GPU training basics",
          "Latency, throughput, and model versioning",
        ],
      },
    ],
    reviews: [
      {
        name: "Arjun Mehta",
        role: "Machine Learning Engineer",
        rating: 5,
        comment: "The PyTorch-first approach made backpropagation finally click, and the transformer module set me up to fine-tune models confidently at work.",
      },
      {
        name: "Sneha Reddy",
        role: "Data Scientist",
        rating: 5,
        comment: "Going from CNNs to diffusion models in one course felt ambitious, but the project-based structure kept everything grounded and practical.",
      },
    ],
    tools: ["PyTorch", "Hugging Face Transformers", "Diffusers", "Weights & Biases", "ONNX Runtime", "TensorRT", "Ray Tune / Optuna", "GitHub Copilot"],
    projects: [
      "Image classifier built with transfer learning and wrapped in a web demo",
      "LSTM-based sequence forecaster benchmarked against a classical baseline",
      "Fine-tuned transformer classifier with attention-map visualizations",
      "Small diffusion or GAN image generator evaluated with an FID score",
      "Real-time object detection app using a quantized, ONNX-exported model",
    ],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    category: "Data & AI",
    description:
      "Learn to design, build, and operate production-grade data pipelines — from ingestion and warehousing to distributed batch processing, streaming, and cloud lakehouse platforms.",
    icon: Workflow,
    level: "Intermediate",
    gradient: "from-primary to-violet",
    duration: "12 weeks",
    audience: "Developers and analysts who want to design and operate reliable, production-grade data pipelines",
    learn: [
      "Building ELT/ETL pipelines with Python, SQL, and dbt",
      "Batch processing at scale with Spark and workflow orchestration with Airflow",
      "Streaming pipelines with Kafka and cloud data warehousing on Snowflake or BigQuery",
      "Using AI-assisted tooling for schema inference, anomaly detection, and pipeline documentation",
    ],
    curriculum: [
      {
        title: "Environment & Data Engineering Foundations",
        topics: [
          "Dev environment setup, Linux, and Git workflows",
          "Advanced SQL: window functions and CTEs",
          "API ingestion, pagination, and idempotent script design",
          "Working with Parquet, JSON, and CSV formats",
        ],
      },
      {
        title: "Data Modeling & Warehousing",
        topics: [
          "Star and snowflake schema design",
          "Dimensional modeling with facts and dimensions",
          "Slowly changing dimensions",
          "Building and testing dbt models",
        ],
      },
      {
        title: "ETL/ELT & Batch Processing with Spark",
        topics: [
          "Batch vs. streaming ETL patterns",
          "Incremental loads, CDC, and backfills",
          "PySpark DataFrame API and joins at scale",
          "Performance tuning: partitioning, shuffling, and caching",
        ],
      },
      {
        title: "Orchestration & Streaming",
        topics: [
          "Airflow DAG design, dependencies, and retries",
          "Scheduling, backfilling, and failure alerting",
          "Kafka producers, consumers, and consumer groups",
          "Spark Structured Streaming and windowed aggregations",
        ],
      },
      {
        title: "Cloud Platforms & Data Quality",
        topics: [
          "Snowflake, BigQuery, and Databricks lakehouse architecture",
          "Query optimization, partitioning, and cost control",
          "Data validation suites and freshness monitoring",
          "Anomaly detection and lineage tracking",
        ],
      },
      {
        title: "AI-Assisted Data Engineering",
        topics: [
          "Schema inference from raw files with an LLM",
          "AI-generated transformation code and SQL review",
          "Auto-generated pipeline documentation",
          "Guardrails for reviewing AI-generated code",
        ],
      },
    ],
    reviews: [
      {
        name: "Arvind Menon",
        role: "Data Engineer, Fintech Startup",
        rating: 5,
        comment: "The Spark and Airflow modules were exactly what I needed to move from writing scripts to building pipelines that actually run reliably in production.",
      },
      {
        name: "Sneha Kulkarni",
        role: "Analytics Engineer",
        rating: 5,
        comment: "Building the dbt star schema project end-to-end made dimensional modeling click in a way no tutorial ever had. The streaming module was tough but worth it.",
      },
    ],
    tools: ["Python", "SQL", "dbt", "Apache Spark", "Apache Airflow", "Apache Kafka", "Snowflake / BigQuery", "Great Expectations"],
    projects: [
      "E-commerce data warehouse with a dimensional star schema and a Type 2 slowly changing dimension, built in dbt",
      "Real-time clickstream pipeline streaming windowed session aggregates into a lakehouse table with Kafka and Spark",
      "Batch ELT pipeline with automated data-quality gates that halt on schema violations or null-rate spikes",
      "CDC replication pipeline capturing change events from Postgres and syncing them to a cloud warehouse in near real time",
      "Cost-optimized cloud warehouse migration with before/after query-latency and cost benchmarks",
    ],
  },
  {
    slug: "nlp",
    title: "Natural Language Processing",
    category: "Data & AI",
    description:
      "Learn to build language-understanding systems — from tokenization and classical NLP through transformer fine-tuning and retrieval-augmented LLM applications.",
    icon: Languages,
    level: "Intermediate",
    gradient: "from-violet to-primary",
    duration: "10 weeks",
    audience: "Developers with Python experience who want to specialize in building language-based AI systems",
    learn: [
      "Text preprocessing, tokenization, and core linguistics techniques like POS tagging and NER",
      "Classical NLP methods including TF-IDF, word embeddings, and sequence models",
      "Fine-tuning transformer models with Hugging Face for classification, NER, and QA",
      "Building and deploying retrieval-augmented LLM applications with vector search",
    ],
    curriculum: [
      {
        title: "Text Preprocessing & Linguistics Foundations",
        topics: [
          "String handling, regex, and Unicode normalization",
          "Word and subword tokenization",
          "POS tagging and named entity recognition",
          "Dependency and constituency parsing with spaCy",
        ],
      },
      {
        title: "Classical NLP & Word Representations",
        topics: [
          "Bag-of-words, n-grams, and TF-IDF",
          "word2vec and GloVe embeddings",
          "Cosine similarity for document comparison",
          "Building and comparing document classifiers",
        ],
      },
      {
        title: "Sequence Models & Evaluation",
        topics: [
          "RNN and LSTM fundamentals",
          "Sequence labeling and seq2seq architectures",
          "BLEU, ROUGE, and span-level evaluation metrics",
          "Confusion matrices and error analysis",
        ],
      },
      {
        title: "Transformers & Fine-Tuning",
        topics: [
          "Self-attention and positional encoding",
          "BERT and GPT-family architectures",
          "Fine-tuning for classification, NER, and QA with Hugging Face",
          "WordPiece and BPE tokenizers",
        ],
      },
      {
        title: "Building with LLMs",
        topics: [
          "Prompt engineering and few-shot prompting",
          "Embeddings and semantic search",
          "Retrieval-augmented generation and vector databases",
          "Serving NLP models with FastAPI and Docker",
        ],
      },
    ],
    reviews: [
      {
        name: "Divya Rajagopalan",
        role: "NLP Engineer",
        rating: 5,
        comment: "Going from TF-IDF to fine-tuning BERT and finally building a RAG assistant gave me a real sense of when each approach actually earns its complexity.",
      },
      {
        name: "Karthik Iyer",
        role: "Machine Learning Engineer",
        rating: 5,
        comment: "The linguistics fundamentals early on made the transformer material click much faster. The production NLP API project is now the centerpiece of my portfolio.",
      },
    ],
    tools: ["Python", "spaCy / NLTK", "Hugging Face Transformers", "PyTorch", "LangChain", "Vector databases (Pinecone / FAISS)", "FastAPI", "Weights & Biases"],
    projects: [
      "Resume and invoice information extraction using rule-based and statistical NER to pull structured fields from documents",
      "Support ticket triage and sentiment classifier comparing a TF-IDF baseline against a fine-tuned DistilBERT model",
      "Abstractive text summarization service fine-tuned on a domain-specific corpus and evaluated with ROUGE",
      "Semantic search and RAG assistant that answers questions over a custom document set with citations",
      "Production NLP API serving a fine-tuned classification model with monitoring and drift detection",
    ],
  },
  {
    slug: "rag-ai-automation",
    title: "RAG AI & Automation",
    category: "Data & AI",
    description:
      "Learn to build retrieval-augmented AI systems that ground large language models in real data, then automate business workflows around them end to end.",
    icon: Sparkles,
    level: "Intermediate",
    gradient: "from-cyan to-violet",
    duration: "10 weeks",
    audience: "Developers comfortable with Python who want to build production-grade AI search and automation systems",
    learn: [
      "Building retrieval pipelines with embeddings and vector databases",
      "Advanced retrieval techniques: hybrid search, re-ranking, and query rewriting",
      "Automating multi-step workflows that combine LLM calls with business systems",
      "Evaluating and deploying RAG systems with production-grade monitoring",
    ],
    curriculum: [
      {
        title: "LLM & API Foundations",
        topics: [
          "Calling LLM APIs with structured JSON output",
          "Managing tokens, context windows, and rate limits",
          "Environment and secrets management",
          "Python fundamentals for AI engineering",
        ],
      },
      {
        title: "Embeddings & Vector Search",
        topics: [
          "Embedding models and similarity metrics",
          "Working with Pinecone, Chroma, FAISS, and pgvector",
          "Index types: HNSW and IVF",
          "Benchmarking retrieval latency and accuracy",
        ],
      },
      {
        title: "Document Processing & Chunking",
        topics: [
          "Parsing PDFs, HTML, and scanned documents",
          "Fixed vs. semantic chunking strategies",
          "Metadata tagging and overlap tuning",
          "Table and image extraction",
        ],
      },
      {
        title: "Prompt Engineering for Grounded Answers",
        topics: [
          "System prompts for grounded, citation-backed answers",
          "Few-shot prompting and hallucination guardrails",
          "Context window budgeting",
          "Multi-turn retrieval conversations",
        ],
      },
      {
        title: "Advanced Retrieval & Automation",
        topics: [
          "Hybrid search combining BM25 and vector retrieval",
          "Cross-encoder re-ranking and query rewriting",
          "Building automation workflows with n8n and LangChain/LangGraph",
          "Tool-calling orchestration and error handling",
        ],
      },
      {
        title: "Evaluation & Production Deployment",
        topics: [
          "Scoring faithfulness, relevance, and precision with RAGAS",
          "Hallucination detection techniques",
          "Deploying with FastAPI and Docker",
          "Tracing, cost, and latency monitoring",
        ],
      },
    ],
    reviews: [
      {
        name: "Aditya Rao",
        role: "Backend Developer",
        rating: 5,
        comment: "I'd only used LLM APIs for basic chat before this. Building a hybrid search pipeline and actually measuring the precision gains changed how I think about retrieval.",
      },
      {
        name: "Sneha Kulkarni",
        role: "Data Scientist",
        rating: 5,
        comment: "The evaluation module was the highlight for me — learning to score groundedness with RAGAS instead of eyeballing answers made my work feel production-ready.",
      },
    ],
    tools: ["Claude / OpenAI API", "Pinecone / pgvector", "LangChain", "LlamaIndex", "n8n", "Cross-encoder rerankers", "RAGAS", "Langfuse / LangSmith"],
    projects: [
      "Internal knowledge-base assistant — a retrieval-augmented Q&A tool over company docs with source citations",
      "Hybrid search & re-ranking benchmark — compare vector-only search against a BM25 plus re-ranking pipeline",
      "Support-ticket triage automation — auto-classify tickets, retrieve relevant content, and draft replies for human review",
      "Low-hallucination compliance RAG — a citation-strict retrieval system with an explicit 'I don't know' fallback",
      "RAG evaluation harness — a repeatable test suite scoring faithfulness and relevance across model changes",
    ],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    category: "Data & AI",
    description:
      "Learn to design, orchestrate, and ship autonomous AI agents that plan, use tools, and collaborate with each other to complete multi-step tasks.",
    icon: Cpu,
    level: "Intermediate",
    gradient: "from-primary to-cyan",
    duration: "10 weeks",
    audience: "Python developers who want to move beyond single-prompt apps and build autonomous, multi-agent AI systems",
    learn: [
      "Building agents that reason, plan, and call tools using frameworks like LangChain and LlamaIndex",
      "Giving agents memory and persistent state across sessions",
      "Orchestrating multi-agent systems with supervisor/worker architectures",
      "Evaluating, guarding, and deploying agents safely in production",
    ],
    curriculum: [
      {
        title: "LLM & API Foundations for Agents",
        topics: [
          "REST/async API clients with typed request and response schemas",
          "Rate limiting and retry logic",
          "Transformers, tokens, and context windows",
          "System/user/assistant roles and structured output",
        ],
      },
      {
        title: "Prompt Engineering & Tool Use",
        topics: [
          "Few-shot and chain-of-thought prompting",
          "Designing function/tool schemas",
          "Tool selection, routing, and parallel calls",
          "Handling failed or malformed tool calls",
        ],
      },
      {
        title: "Memory & State Management",
        topics: [
          "Short-term vs. long-term memory design",
          "Vector stores for semantic recall",
          "Conversation summarization",
          "Session and state persistence",
        ],
      },
      {
        title: "Building Agents with Frameworks",
        topics: [
          "ReAct-style reasoning loops",
          "Agent abstractions in LangChain and LlamaIndex",
          "Planning vs. reactive agent design",
          "Agent tracing and debugging",
        ],
      },
      {
        title: "Multi-Agent Orchestration",
        topics: [
          "Supervisor/worker and peer-to-peer architectures",
          "Task decomposition and planning",
          "Agent-to-agent communication and handoffs",
          "Building with LangGraph, CrewAI, and AutoGen",
        ],
      },
      {
        title: "Evaluation, Guardrails & Deployment",
        topics: [
          "Building evaluation harnesses and benchmarks",
          "Hallucination and safety guardrails",
          "Human-in-the-loop approval gates",
          "Containerized deployment with observability",
        ],
      },
    ],
    reviews: [
      {
        name: "Karthik Iyer",
        role: "Software Engineer",
        rating: 5,
        comment: "Going from single-prompt scripts to a real multi-agent system with a supervisor and workers was the biggest jump in my skills this year.",
      },
      {
        name: "Meera Nair",
        role: "AI Engineer",
        rating: 5,
        comment: "The guardrails and human-in-the-loop module made me rethink my earlier agent projects entirely — safety design isn't an afterthought anymore.",
      },
    ],
    tools: ["Claude / OpenAI Agent APIs", "LangChain & LangGraph", "LlamaIndex", "CrewAI / AutoGen", "LangSmith / Langfuse", "Vector databases (Pinecone, Weaviate, pgvector)", "FastAPI & Docker"],
    projects: [
      "Research assistant agent — a ReAct-style agent that plans multi-step research and synthesizes cited summaries",
      "Support-ticket triage system — a two-agent pipeline that classifies and drafts responses, escalating edge cases to humans",
      "Agentic codebase Q&A tool — an agent that iteratively rewrites and re-runs retrieval queries over a real codebase",
      "Human-in-the-loop finance agent — an agent that proposes budget changes but requires explicit approval before acting",
      "Deployed & monitored production agent — ship a containerized agent behind an API with tracing and a cost/latency dashboard",
    ],
  },
  // Product & Design
  {
    slug: "product-management",
    title: "Product Management",
    category: "Product & Design",
    description:
      "Learn the end-to-end craft of product management — from user discovery and roadmapping to writing PRDs, reading metrics, and scoping AI-powered features responsibly.",
    icon: ClipboardList,
    level: "Beginner",
    gradient: "from-violet to-cyan",
    duration: "12 weeks",
    audience: "Aspiring and early-career product managers who want a structured, hands-on path into the role",
    learn: [
      "Core PM frameworks for discovery, prioritization, roadmapping, and PRD writing",
      "Metrics literacy: North Star metrics, funnel and cohort analysis, and SQL for product analytics",
      "AI product strategy — scoping ML-fit features, evaluation criteria, and responsible AI design",
      "AI-augmented workflows for experimentation, spec drafting, and stakeholder reporting",
    ],
    curriculum: [
      {
        title: "Product Fundamentals & Market Landscape",
        topics: ["Product lifecycle stages", "Market research methods", "Competitive landscape mapping", "Business model basics"],
      },
      {
        title: "User Research & Discovery",
        topics: ["Discovery interview design", "Jobs-to-be-done framing", "Survey design and sampling bias", "Synthesizing qualitative data"],
      },
      {
        title: "Roadmapping & Prioritization",
        topics: ["RICE scoring", "Kano model", "Now-Next-Later roadmaps", "Stakeholder alignment and trade-off communication"],
      },
      {
        title: "Metrics, Analytics & PRDs",
        topics: ["North Star metric selection", "Funnel, retention and cohort analysis", "SQL for product analytics", "Writing PRDs: scope, success metrics, and edge cases"],
      },
      {
        title: "AI Product Strategy",
        topics: ["Framing problems for ML fit", "Model capability and limitation literacy", "Evaluation metrics for AI features", "Responsible AI and build-vs-buy-vs-fine-tune decisions"],
      },
      {
        title: "AI-Augmented Experimentation & Reporting",
        topics: ["A/B test design and power analysis", "Statistical significance for product decisions", "AI-assisted spec drafting and feedback synthesis", "Executive-ready, AI-assisted stakeholder reporting"],
      },
    ],
    reviews: [
      {
        name: "Ananya Rajan",
        role: "Associate Product Manager",
        rating: 5,
        comment: "The RICE prioritization exercise and the discovery interviews were the turning point — I finally had a repeatable way to defend roadmap decisions to leadership.",
      },
      {
        name: "Karthik Iyer",
        role: "Product Manager, Fintech",
        rating: 5,
        comment: "Scoping and writing the PRD for an AI feature end-to-end, including the evaluation plan, is exactly the kind of work I now do every week on the job.",
      },
    ],
    tools: ["ChatGPT / Claude", "Perplexity AI", "Productboard", "Amplitude", "Mixpanel", "Dovetail", "Notion AI", "SQL"],
    projects: [
      "RICE-scored feature backlog with a Now-Next-Later roadmap slide",
      "User discovery report synthesized from real interview transcripts",
      "Metrics dashboard tracing a North Star metric to team-level inputs",
      "PRD and evaluation rubric for a new AI-powered feature",
      "A/B test brief with sample-size calculation and a ship/no-ship readout",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Product & Design",
    description:
      "Learn to research, design, and prototype real digital products in Figma, then extend your workflow with AI-assisted concepting, accessibility auditing, and design-to-code tools.",
    icon: PenTool,
    level: "Beginner",
    gradient: "from-cyan to-primary",
    duration: "12 weeks",
    audience: "Aspiring UI/UX designers who want a hands-on path from visual fundamentals to an AI-fluent design practice",
    learn: [
      "Visual design fundamentals: color, typography, grid systems, and hierarchy",
      "User research methods: interviews, personas, journey mapping, and synthesis",
      "Wireframing, clickable prototyping, and design systems in Figma",
      "AI-assisted concepting, accessibility auditing, and design-to-code workflows",
    ],
    curriculum: [
      {
        title: "Design Fundamentals",
        topics: ["Color theory and palettes", "Typography systems", "Grid and layout", "Visual hierarchy and Gestalt principles"],
      },
      {
        title: "UX Research Methods",
        topics: ["User interviews and personas", "Empathy mapping", "Journey mapping", "Affinity diagramming"],
      },
      {
        title: "Wireframing & Prototyping in Figma",
        topics: ["Low-fidelity wireframes", "Figma components and auto layout", "Clickable prototypes and user flows", "Design handoff basics"],
      },
      {
        title: "Interaction Design & Usability Heuristics",
        topics: ["Nielsen's usability heuristics", "Microinteractions", "Usability testing protocol", "Error states and feedback design"],
      },
      {
        title: "Design Systems & AI-Assisted Concepting",
        topics: ["Component libraries and design tokens", "AI-generated concept exploration", "AI-assisted research and transcript synthesis", "Prompt-to-mockup workflows"],
      },
      {
        title: "Accessibility & AI-Powered Prototyping",
        topics: ["WCAG 2.2 and AA compliance", "AI-assisted accessibility auditing", "Figma-to-code plugins", "AI-assisted front-end scaffolding"],
      },
    ],
    reviews: [
      {
        name: "Meera Krishnan",
        role: "UX Designer",
        rating: 5,
        comment: "Building a full clickable prototype and then running real usability tests on it gave me a portfolio piece that actually holds up in interviews.",
      },
      {
        name: "Rohan Deshpande",
        role: "Product Designer",
        rating: 5,
        comment: "Learning to pair Figma with AI accessibility auditing and design-to-code tools changed how fast I can take an idea from sketch to a working prototype.",
      },
    ],
    tools: ["Figma", "Figma AI", "Midjourney / DALL-E", "Stark", "Claude / ChatGPT", "Uizard", "Maze"],
    projects: [
      "End-to-end mobile banking flow redesign from wireframes to clickable prototype",
      "SaaS onboarding flow backed by real user interviews and AI-assisted synthesis",
      "Accessible e-commerce checkout rebuilt to meet WCAG 2.2 AA",
      "Documented design system and component library for a fictional startup",
      "Marketing landing page designed in Figma and shipped to code via an AI design-to-code tool",
    ],
  },
];

export const COURSE_CATEGORIES = Array.from(
  new Set(COURSES.map((course) => course.category)),
);
