import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top row */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* About Me section */}
          <Link
            to="/about"
            className="portfolio-section lg:w-5/12 flex-1"
            style={{
              backgroundImage:
                "url('https://aayush758.s3.us-east-1.amazonaws.com/LinkedIn_profile.png?v=1')",
              backgroundPosition: "center 15%",
            }}
          >
            <div className="portfolio-section-content">
              <div className="animate-glitch">
                <h2>About Me</h2>
              </div>
              <p>
                Hi, my name is CK Rajput. A results-driven AIML Engineer and
                Data Scientist with extensive experience in developing and
                deploying machine learning applications, computer vision
                systems, and AI-powered solutions across various domains.
              </p>
            </div>
          </Link>

          {/* Projects section */}
          <Link
            to="/projects"
            className="portfolio-section lg:w-7/12 flex-1"
            style={{
              backgroundImage: "url('https://aayush758.s3.us-east-1.amazonaws.com/Project.jpg?v=1')",
            }}
          >
            <div className="portfolio-section-content">
              <h2>Projects</h2>
              <p>
                Explore my portfolio of AI/ML projects including computer vision
                systems, NLP chatbots, predictive models, and enterprise
                solutions. Each project demonstrates my expertise in Python,
                machine learning, and modern AI technologies.
              </p>
            </div>
          </Link>
        </div>

        {/* Bottom row */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Resume section */}
          <Link
            to="/resume"
            className="portfolio-section lg:w-1/2 flex-1"
            style={{
              backgroundImage: "url('https://aayush758.s3.us-east-1.amazonaws.com/Resume_pic.png?v=1')",
            }}
          >
            <div className="portfolio-section-content">
              <h2>Resume</h2>
              <p>
                Check out my detailed professional experience, technical skills,
                and educational background. Download my resume to learn more
                about my journey in AI/ML engineering and data science.
              </p>
            </div>
          </Link>

          {/* Contact section */}
          <Link
            to="/contact"
            className="portfolio-section lg:w-1/2 flex-1"
            style={{
              backgroundImage: "url('https://aayush758.s3.us-east-1.amazonaws.com/contact.jpg?v=1')",
            }}
          >
            <div className="portfolio-section-content">
              <h2>Contact</h2>
              <p>
                Let's connect! I'm always interested in discussing new
                opportunities, collaborations, or innovative AI/ML projects.
                Feel free to reach out via email or phone.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
