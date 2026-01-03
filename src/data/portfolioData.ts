export const personalInfo = {
  name: "Abhishek Tomar",
  title: "Lead Machine Learning Engineer",
  tagline: "7+ Years Building & Scaling ML Systems End-to-End",
  location: "Bengaluru, BLR, INDIA",
  phone: "+918826085716",
  email: "tomar.abhishek840@gmail.com",
  linkedin: "https://linkedin.com/in/tomar840/",
  github: "https://github.com/tomar840",
  leetcode: "https://leetcode.com/tomar840",
  about: "Lead Machine Learning Engineer with 7+ years of experience building and scaling ML-driven systems end-to-end. I specialize in LLMs, NLP, and Generative AI, with a focus on security-focused applications. Passionate about designing scalable ML platforms and solving complex problems at the intersection of ML, systems, and product.",
};

export const workExperience = [
  {
    company: "Uber",
    position: "Senior Software Engineer - ML",
    dates: "Dec 2024 - Present",
    highlights: [
      {
        title: "Engineering Security with GenAI",
        description: "Working on solving engineering security challenges using Generative AI, building innovative solutions to enhance Uber's security infrastructure through machine learning and LLM-based approaches.",
        keywords: ["Generative AI", "Security", "LLM"],
      },
    ],
  },
  {
    company: "Observe.ai",
    position: "Lead Machine Learning Engineer",
    dates: "Dec 2024 - Oct 2025",
    highlights: [
      {
        title: "InsightVertex",
        description: "Led the development of a scalable RAG architecture, integrating robust vector search with a hybrid of SoTA open-source & commercial LLMs for precise semantic query processing and deriving actionable insights from unstructured contact center data. Drove adoption across 20+ clients by architecting for high-throughput, low-latency model serving, enabling proactive customer problem resolution.",
        keywords: ["RAG", "LLM", "Vector Search", "20+ Clients"],
      },
    ],
  },
  {
    company: "Soroco",
    position: "Senior Machine Learning Engineer",
    dates: "Nov 2023 - Dec 2024",
    highlights: [
      {
        title: "FlowGraphs",
        description: "Developed a key feature for team-based knowledge representation using NLP techniques by leveraging open-source Large Language Models (LLMs) like Mistral and Llama3. This involves fine-tuning these models using the QLoRA (peft) framework, leading to deployment across 50+ industry-leading companies and securing a million-dollar deal with a Fortune 500 company.",
        keywords: ["Mistral", "Llama3", "QLoRA", "peft"],
      },
      {
        title: "QueryHub",
        description: "Designed and implemented an advanced internal knowledge retrieval platform utilizing Retrieval-Augmented Generation (RAG), aimed at optimizing the search and access process within the company's expansive wikis. This system uses open-source models like Llama3 and Mistral, ANNOY for Approximate Nearest Neighbor (ANN) searches, and the Bert transformer for precise embeddings.",
        keywords: ["RAG", "Llama3", "ANNOY", "Bert"],
      },
      {
        title: "AutoEval",
        description: "Designed and implemented an evaluation pipeline for benchmarking the performance of diverse open-source Large Language Models (LLMs) against tailored use-case scenarios. This pipeline, deployed using docker, significantly reduced manual labor by hundreds of hours.",
        keywords: ["LLM", "Docker", "Evaluation"],
      },
    ],
  },
  {
    company: "Byjus",
    position: "Machine Learning Engineer",
    dates: "Feb 2021 - Oct 2023",
    highlights: [
      {
        title: "Byjus QnA Search",
        description: "Developed a robust, high-traffic question search system handling over 2 million req/day, integrating Similar Question and Auto Completion modules. Used ElasticSearch, Transformer(Bert), ANN for effective question suggestions and Learning-To-Rank model for result ranking. This module helps in generating ~$600k/month in revenue through sales leads.",
        keywords: ["ElasticSearch", "Bert", "2M req/day", "$600k/month"],
      },
      {
        title: "Universal Search Enhancement",
        description: "Developed universal search feature for Byjus app to fetch resources beyond just questions, utilizing the Bert Transformer for query intent recognition and entity extraction. Achieved an F1 score of 0.96, with Text SSR at 91% and Image SSR around 60% in production.",
        keywords: ["Bert", "F1: 0.96", "Docker"],
      },
      {
        title: "ByjuWizz",
        description: "Developed hyper-personalised products using Large Language Models (LLMs), specifically GPT4, with prompt engineering, Langchain, and Pinecone for premium users. Products include Teacher GPT for problem-solving guidance, Math GPT for step-by-step math solutions, and a textbook-specific doubt solver.",
        keywords: ["GPT-4", "Langchain", "Pinecone"],
      },
      {
        title: "ByjusLLM",
        description: "Evaluated and fine-tuned open-source Large Language Models (LLM) like LLaMA, LLaMA2, Falcon for applications in math reasoning and doubt-solving chatbots. The project involved fine-tuning LLMs using QLoRA and Peft framework. The LLaMA 13B model achieved an accuracy of 13% on GSM8k.",
        keywords: ["LLaMA", "QLoRA", "GSM8k"],
      },
      {
        title: "GAN based watermark removal",
        description: "Built a cGAN-based model for watermark removal from solution images, aiding Byjus DB data ingestion. Utilized OpenCV, U-Net with pre-trained ResNet-50, PatchCNN.",
        keywords: ["cGAN", "U-Net", "ResNet-50"],
      },
      {
        title: "Upper Body Detector",
        description: "Fine-tuned YOLOv5 for upper body object detection on annotated classroom data. This model is used for classroom engagement. Achieved mAP50-95 of 0.922 on YOLOv5l6.",
        keywords: ["YOLOv5", "mAP: 0.922"],
      },
    ],
  },
  {
    company: "Axtria",
    position: "Data Scientist",
    dates: "June 2018 - Feb 2021",
    highlights: [
      {
        title: "HCP Call Planning",
        description: "Developed a call assignment system for Health Care Practitioners across 28 countries, using unsupervised clustering and call grids for new drugs. Also managed client engagement and risk analysis.",
        keywords: ["Clustering", "28 Countries"],
      },
      {
        title: "Sales Forecasting",
        description: "Developed a model to forecast sales for a new drug, identifying the effect of promotions and key performance channels. Utilized regression for sales prediction and a neural network for channel impact analysis.",
        keywords: ["Regression", "Neural Network"],
      },
      {
        title: "Roster Integration Module",
        description: "Created a roster integration module for daily employee status tracking and event updates, using Talend for data integration and PostgreSQL for handling client input data quality and event creation.",
        keywords: ["Talend", "PostgreSQL"],
      },
    ],
  },
];

export const education = [
  {
    institution: "IIT Delhi, India",
    degree: "M.Tech in Computer Technology",
    dates: "2016 - 2018",
    grade: "GPA: 7.75 / 10",
  },
  {
    institution: "BIET Jhansi",
    degree: "B.Tech in Electronics & Communication Engineering",
    dates: "2012 - 2016",
    grade: "GPA: 8.06 / 10",
  },
];

export const skills = {
  Programming: ["Python", "C++", "R", "SQL", "PostgreSQL", "Matlab"],
  "Machine Learning": [
    "PyTorch", "Keras", "Tensorflow", "NumPy", "SciPy", "Pandas",
    "ScikitLearn", "OpenCV", "PEFT (LoRA)", "ONNX", "Transformers (BERT)",
    "LLM", "FAISS", "PineCone"
  ],
  Backend: ["Flask", "AWS EC2", "AWS S3", "Docker", "Kubernetes", "Git", "Grafana"],
  Databases: ["MongoDB", "Redis", "Cassandra", "AWS DynamoDB", "MySQL", "PostgreSQL"],
};

export const certifications = [
  {
    name: "Fundamentals of Scalable Data Science (IBM)",
    date: "Oct 2019",
    description: "Course covers big data analysis using scalable machine learning techniques and introduces ApacheSpark for large-scale data processing",
  },
  {
    name: "Introduction to Deep Learning (HSE University)",
    date: "Aug 2022",
    description: "Course provides foundational knowledge on deep learning concepts, techniques, and their application in various fields",
  },
  {
    name: "Deep Generative Models (IISC Bengaluru)",
    date: "June 2023",
    description: "Course explores the mathematics and application of deep learning models designed to generate new data.",
    grade: "Grade: A+",
  },
];

export const projects = [
  {
    title: "Jigyasa.ai",
    description: "Developed a search assistant which is built on back of open source LLMs and search engine. Utilized Ollama for inference optimization.",
    link: "https://github.com/tomar840/Jigyasa.ai",
    skills: ["Python", "PyTorch", "LLM", "OLLAMA"],
  },
  {
    title: "MathLLM",
    description: "A novel LLM, based on Mistral-7B, SFT finetuned model, using QLoRA, on open-source + proprietary data. Improving Mistral accuracy on GSM8K by +22%.",
    link: "https://github.com/tomar840/MathLLM",
    skills: ["LLM", "Mistral", "QLoRA"],
  },
  {
    title: "Two-Stream Action Recognition",
    description: "Developed an advanced action recognition system using a convolutional two-stream network, processing spatial and temporal data from the UCF101 dataset. Achieved up to 99.01% accuracy on first 20 classes.",
    link: "https://github.com/tomar840/two-stream-fusion-for-action-recognition-in-videos",
    skills: ["Python", "PyTorch", "CNN", "OpenCV"],
  },
  {
    title: "Dominant Speaker Identification",
    description: "Built a classification model that identifies the dominant speaker in short videos using computer vision techniques. Used transfer learning on pre-trained CNN.",
    link: "https://github.com/tomar840/identification-of-the-dominant-speaker-in-short-videos",
    skills: ["Python", "PyTorch", "Transfer Learning"],
  },
];
