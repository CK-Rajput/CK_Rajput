import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Folder,
} from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "AIML Engineer (Agentic AI & Automation)",
      company: "MapleCloud Technologies",
      location: "Noida, Uttar Pradesh",
      period: "Feb. 2025 – Present",
      achievements: [
        "Boosted real-time headcount object detection using Python, FastAPI, OpenCV, and YOLO-v8, Integrated with CCTV through RTSP for seamless and real-time analytics deployed with Docker for scalability and efficiency.",
        "Optimized AutoQuery Pro is an AI-powered, multi-agent tool enabling non-technical users to query 2 types of database NoSQL and SQL using NLP, manufactured with AI Agents(AutoGen), LangChain, LLMs, and FastAPI.",
        "Engineered an AI-powered Face Verification System for NIA, ensuring compliance with Indian data protection laws, real-time face recognition, suspect tracking, 60 CCTV feeds alert generation, retrospective search, and integration with law enforcement databases.",
        "Addressed 2 LMS operations (student queries & IT support) by creating an AI system that automatically resolves repetitive queries and improves response speed without manual workload.",
        "Extracted JSON data from APIs, structured it in Hadoop data lake, and Assembled an automated Power BI dynamic dashboard integrating 10+ KPIs for end-to-end infrastructure analytics and monitoring.",
        "Oversaw a Power BI dashboard based on the NMS application with 15 key performance indicators, enhancing infrastructure monitoring and enabling end-to-end analytics that helped the resolve 90% of alerts within SLA.",
      ],
    },
    {
      title: "Data Scientist- Executive (AI & ML Specialist)",
      company: "GYPRC PVT. LTD.",
      location: "New Delhi, India",
      period: "March 2023 – Feb 2025",
      achievements: [
        "Collaborated with cross-functional teams to define requirements, design models, and deliver impactful data-driven solutions using R, Python, Power BI, SQL, and Jupyter Notebook, Google Colab, and VS Code.",
        "Developed and executed a machine learning model to predict water quality and potability, leveraging EC, TOC, THMs, Hardness, and Turbidity parameters, using SciKit-Learn, for analysis or predicting. initiated the Application AWS (EC2) instance, monitored performance using AWS CloudWatch.",
        "Designed an innovative model for precise prediction of All India AQI levels from user-provided latitude and longitude, utilizing unstructured data within an API, using Python, Pandas, Harversine, Streamlit, and significantly enhancing nationwide strategic decision-making.",
        "Promoted an Automated File Retrieval System with OPENAI for embeddings, Pinecone, and Streamlit for semantic file search, optimizing the retrieval of the most relevant files.",
        "Erected an advanced detection system using YOLOv8 for real-time monitoring of safety equipment within production lines; resulted in identifying non-compliance issues in only three out of ten inspections per month on average.",
        "Applied advanced R programming expertise, successfully completing 15+ data analysis projects with superior visualization techniques ggplot2, dplyr, enhancing EDA processes, and delivering Decision Tree or Random Forest models with 88-92% accuracy for classification, regression, and probability predictions.",
        "Led and mentored a team of 7 data scientists/analysts, driving the execution of various Data Science (Proof of Concepts) projects and ensuring high performance and project success using AWS, Git.",
      ],
    },
    {
      title: "Data Scientist Trainee",
      company: "Intellipaat Software Solutions PVT. LTD.",
      location: "Remote (India)",
      period: "Aug. 2022 – March 2023",
      achievements: [
        "Developed real-time data extraction techniques, boosting efficiency by 25% and saving over 10+ hours per week.",
        "Engineered predictive models to reduce churn by 50-60 cases, achieving an 89% accuracy rate in churn prediction.",
        "Established retention strategies, decreasing churn by 500-600 cases and significantly improving customer retention.",
        "Created and maintained engaging interactive dashboards in Power BI using SQL Server, DAX, and Power Query; streamlined data analytics for 5 keys business units to facilitate informed decision-making across the organization.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master Computer Application (MCA)",
      institution: "MOHYAL INSTITUTE OF TECHNOLOGY",
      location: "New Delhi",
      period: "Jan. 2025 – Present",
    },
    {
      degree: "Bachelor's Degree",
      institution: "MAHARAJA SURAJMAL BRIJ UNIVERSITY",
      location: "Bayana, Rajasthan",
      period: "July 2019 – Aug. 2022",
    },
  ];

  const projects = [
    {
      title: "Finance Application",
      tech: "Python, FastAPI, React.js",
      description:
        "Overhauled a finance app using Python, FastAPI, and React.js to enhancing user experience, streamline data entry and boosting performance by 30%.",
      period: "June 2023 – July 2023",
    },
    {
      title: "LLM Q&A Chatbot",
      tech: "Python, LangChain, OpenAI, Streamlit",
      description:
        "Innovated and devised a LangChain Q&A Chatbot using Streamlit, OpenAI GPT-3.5-turbo, RAG, enhancing user interaction and information retrieval.",
      period: "Aug 2023 – Sept 2023",
    },
  ];

  const technicalSkills = {
    "Programming Languages": ["Python", "R", "SQL", "NoSQL", "Bash"],
    "AI/ML Frameworks": [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "SciKit-Learn",
      "XGBoost",
      "Deep Learning",
    ],
    "Computer Vision": ["YOLO-v8", "OpenCV", "Face Recognition", "RTSP", "OCR"],
    "NLP & LLMs": [
      "Transformers",
      "LangChain",
      "OpenAI",
      "Gemini AI",
      "BERT",
      "AI Agents",
      "Agentic AI",
      "Generative AI",
    ],
    "Data Analysis": [
      "NumPy",
      "Pandas",
      "Seaborn",
      "ggplot2",
      "dplyr",
      "Statistics",
      "Time Series Forecasting",
    ],
    "Cloud & Big Data": [
      "AWS",
      "Docker",
      "Hadoop",
      "Hive",
      "PySpark",
      "VectorDB",
      "MCP",
      "CI/CD",
      "Linux",
    ],
    Visualization: ["Power BI", "Tableau", "Streamlit"],
    Development: ["FastAPI", "React.js", "Git", "GitHub"],
  };

  const models = [
    "Linear Regression",
    "Logistic Regression",
    "Random Forest",
    "XGBoost",
    "YOLOv8",
    "Transformers (LLMs)",
    "OpenAI (LLMs)",
    "AWS BedRock",
    "Gemini (LLMs)",
    "AI Agents",
    "Face Recognition",
    "Grouped AutoGen",
    "OCR",
  ];

  const certifications = [
    "Agile Requirements Foundations",
    "Project Management Foundations",
    "Advanced Proficiency in KNIME",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="p-6 border-b border-gray-300/20">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          <a
            href="https://aayush758.s3.us-east-1.amazonaws.com/CK_RAJPUT_8890502275.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-4">
            CK RAJPUT
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-600 font-light tracking-wider mb-4">
            AIML Engineer & Data Scientist
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <span>+91-8890502275</span>
            <span>Chhotuchiitodiya@gmail.com</span>
            <a
              href="https://www.linkedin.com/in/ck-rajput-004190197/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ck-rajput"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience Section */}
            <section>
              <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-8 flex items-center gap-3">
                <Briefcase size={32} />
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-white/40 backdrop-blur-sm rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="font-heading text-xl text-gray-800 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right text-gray-600 text-sm mt-2 md:mt-0">
                        <div className="flex items-center gap-1 justify-end">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end mt-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2 font-body text-gray-700 text-sm leading-relaxed">
                      {exp.achievements.map((achievement, achieveIndex) => (
                        <li key={achieveIndex} className="flex gap-2">
                          <span className="text-gray-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-8 flex items-center gap-3">
                <Folder size={32} />
                Projects
              </h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white/40 backdrop-blur-sm rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="font-heading text-lg text-gray-800 mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm font-medium">
                          {project.tech}
                        </p>
                      </div>
                      <div className="text-right text-gray-600 text-sm mt-2 md:mt-0">
                        <div className="flex items-center gap-1 justify-end">
                          <Calendar size={14} />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="font-body text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>


          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <section>
              <h2 className="font-heading text-2xl text-gray-800 mb-6 flex items-center gap-2">
                <Award size={24} />
                Technical Skills
              </h2>
              <div className="space-y-4">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div
                    key={category}
                    className="bg-white/30 backdrop-blur-sm rounded-lg p-4"
                  >
                    <h3 className="font-medium text-gray-800 mb-3 text-sm">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-200/50 px-2 py-1 rounded text-xs text-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Models Built */}
            <section>
              <h2 className="font-heading text-2xl text-gray-800 mb-6">
                Models Built
              </h2>
              <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                <div className="flex flex-wrap gap-2">
                  {models.map((model) => (
                    <span
                      key={model}
                      className="bg-gray-200/50 px-2 py-1 rounded text-xs text-gray-600"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="font-heading text-2xl text-gray-800 mb-6">
                Certifications
              </h2>
              <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Soft Skills */}
            <section>
              <h2 className="font-heading text-2xl text-gray-800 mb-6">
                Soft Skills
              </h2>
              <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                <div className="space-y-2">
                  {[
                    "Communication",
                    "Leadership",
                    "Teamwork",
                    "Strong Stakeholder Management",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="font-heading text-2xl text-gray-800 mb-6 flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white/30 backdrop-blur-sm rounded-lg p-4 shadow-sm"
                  >
                    <div className="flex flex-col gap-2">
                      <div>
                        <h3 className="font-heading text-lg text-gray-800 mb-1 leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-600 text-sm">{edu.institution}</p>
                      </div>
                      <div className="text-gray-600 text-xs">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin size={12} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
