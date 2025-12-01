import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="p-6 border-b border-gray-300/20 bg-white/30 backdrop-blur-sm sticky top-0 z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-gray-800 mb-4">
            CK RAJPUT
          </h1>
          <p className="font-body text-xl md:text-2xl text-gray-600 font-light tracking-wider">
            AIML Engineer & Data Scientist
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91-8890502275</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>Chhotuchiitodiya@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>New Delhi, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/ck-rajput-004190197/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://github.com/ck-rajput"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <GithubIcon size={24} />
            </a>
          </div>
        </div>

        {/* About Content */}
        {/* About Content - Top Row */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-6">
              About Me
            </h2>
            <div className="space-y-4 font-body text-gray-700 leading-relaxed">
              <p>
                I am a passionate AIML Engineer and Data Scientist with
                extensive experience in developing and deploying cutting-edge
                machine learning applications. Currently working at MapleCloud
                Technologies, I specialize in computer vision, natural language
                processing, and AI-powered enterprise solutions.
              </p>
              <p>
                My expertise spans across Python, FastAPI, machine learning
                frameworks like Langchain, LangGraph, AutoGen, TensorFlow and PyTorch, and cloud platforms
                including AWS. I have successfully led teams and delivered
                impactful projects in object detection, face recognition
                systems, and automated analytics platforms.
              </p>
              <p>
                I am committed to leveraging AI and machine learning to solve
                real-world problems and drive innovation across various
                industries. My approach combines technical excellence with
                strategic thinking to deliver solutions that create meaningful
                business value.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            {/* Personal Image */}
            <div className="mb-8">
              <img
                src="https://aayush758.s3.us-east-1.amazonaws.com/LinkedIn_profile.png?v=1"
                alt="CK Rajput - AIML Engineer"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row - Current Role & Core Competencies */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-gray-800 mb-6">
              Current Role
            </h2>
            <div className="bg-white/60 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/50">
              <h3 className="font-heading text-xl text-gray-800 mb-2">
                AIML Engineer (Agentic AI & Automation)
              </h3>
              <p className="text-gray-600 mb-4">
                MapleCloud Technologies • Feb. 2025 – Present
              </p>
              <ul className="space-y-3 font-body text-gray-700 text-sm leading-relaxed">
                <li>
                  • Developed real-time object detection with YOLO-v8, FastAPI, and Docker for seamless CCTV analytics.
                </li>
                <li>
                  • Built AutoQuery Pro, a multi-agent NLP tool (AutoGen, LangChain) for querying SQL/NoSQL databases.
                </li>
                <li>
                  • Engineered a real-time Face Verification System for NIA with suspect tracking across 60 CCTV feeds.
                </li>
                <li>
                  • Automated LMS support queries with AI, improving response speed and reducing manual workload.
                </li>
                <li>
                  • Implemented a Hadoop data lake and Power BI dashboards with 10+ KPIs for infrastructure analytics.
                </li>
                <li>
                  • Designed an NMS Power BI dashboard with 15 KPIs, resolving 90% of alerts within SLA.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-gray-800 mb-4">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "NLP & Transformers",
                "Generative AI",
                "Agentic AI",
                "Python & R",
                "FastAPI & Streamlit",
                "TensorFlow & PyTorch",
                "SQL & NoSQL",
                "Big Data (Hadoop, Spark)",
                "Cloud Computing (AWS)",
                "Docker & CI/CD",
                "Power BI & Tableau",
                "Data Analytics",
                "Team Leadership",
                "LLMs (OpenAI, Gemini, Others)",
                "MLOps (MLFlow, Git, GitHub)",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/60 backdrop-blur-sm rounded-md px-3 py-2 text-center text-sm font-medium text-gray-700 border border-white/50 shadow-sm hover:shadow-md transition-all hover:bg-white/80 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
