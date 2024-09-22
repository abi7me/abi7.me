import { useState, useEffect } from "react";
import "./style.css";

const Portfolio = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    sections.forEach((sec) => {
      const offsetTop = sec.offsetTop - 150;
      const offsetHeight = sec.offsetHeight;
      const sectionId = sec.getAttribute("id");

      if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Anoj <span>Abishek</span>
        </a>
        <i
          className={`bx ${menuActive ? "bx-x" : "bx-menu"}`}
          id="menu-icon"
          onClick={handleMenuClick}
        ></i>

        <nav className={`navbar ${menuActive ? "active" : ""}`}>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
          {/* <a
            href="#experience"
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </a> */}
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
          >
            Services
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, It's <span>Abishek</span>
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>
          <p>
            I am a passionate web developer with a keen interest in AI/ML
            technologies and a strong foundation in UI/UX design. With hands-on
            experience in developing responsive, user-centric web applications,
            I bring a blend of technical skills and creative problem-solving to
            every project. My expertise spans across front-end and back-end
            development, and I’m always eager to explore new technologies,
            especially in the AI/ML domain. Beyond my technical pursuits, I am
            also a dedicated teacher of combined mathematics, where I apply my
            analytical thinking to help students grasp complex concepts with
            ease. This unique combination of skills allows me to approach
            challenges from both logical and creative perspectives, making me a
            versatile developer and educator.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/suthasegar-abishek-00b93628a">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/abi7me">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.instagram.com/abi7.me?igsh=MTUzeWM1cWp1bGRvYw%3D%3D&utm_source=qr">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://t.me/anoj7shek">
              <i className="bx bxl-telegram"></i>
            </a>
            <a href="https://wa.me/94757407420">
              <i className="bx bxs-phone-call"></i>
            </a>
            <a href="https://snapchat.com/t/EKLnJ9T2">
              <i className="bx bxl-snapchat"></i>
            </a>
          </div>
          <div className="btn-group">
            <a href="#" className="btn">
              Hire
            </a>
            <a href="#contact" className="btn">
              Contact
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src="/image.png" alt="Profile" />
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2007-2017</div>
            <div className="timeline-content">
              <h3>School</h3>
              <p>
                I completed my primary and secondary education at KM/TK/Komari
                M.M.T.M.V, where I studied from grade 1 to 11. During my time
                there, I developed a strong academic foundation and excelled in
                my O-level examinations, achieving 8As and 1B.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2018-2020</div>
            <div className="timeline-content">
              <h3>School</h3>
              <p>
                I pursued my A-level studies at KM/TK/Thambiluvil Central
                College, specializing in the Physical Science stream. I achieved
                an A in Combined Mathematics, a B in Chemistry, and a C in
                Physics, with a zScore of 1.52.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022-present</div>
            <div className="timeline-content">
              <h3>University</h3>
              <p>
                I was selected to pursue a BSc Hons in Artificial Intelligence
                at the University of Moratuwa, where I am currently studying.
                This course has deepened my understanding of AI technologies,
                and I am actively engaged in learning advanced concepts in
                machine learning, data science, and software development,
                preparing me for a future in AI-driven innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="heading">Skills</h2>
        <div className="skills-container">
          <div className="skill-box">
            <img
              src="/html.svg"
              alt="HTML icon"
              className="skill-icon"
            />
            <h4>HTML</h4>
          </div>
          <div className="skill-box">
            <img
              src="/css.svg"
              alt="CSS icon"
              className="skill-icon"
            />
            <h4>CSS</h4>
          </div>
          <div className="skill-box">
            <img
              src="/javascript.svg"
              alt="JavaScript icon"
              className="skill-icon"
            />
            <h4>JavaScript</h4>
          </div>
          <div className="skill-box">
            <img
              src="/typescript.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>TypeScript</h4>
          </div>
          <div className="skill-box">
            <img
              src="/react.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>React</h4>
          </div>
          <div className="skill-box">
            <img
              src="/c.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>C</h4>
          </div>
          <div className="skill-box">
            <img
              src="/node.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>NodeJS</h4>
          </div>
          <div className="skill-box">
            <img
              src="/express.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Express</h4>
          </div>
          <div className="skill-box">
            <img
              src="/tcss.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Tailwind</h4>
          </div>
          <div className="skill-box">
            <img
              src="/mongodb.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>MongoDB</h4>
          </div>
          <div className="skill-box">
            <img
              src="/mysql.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>MySQL</h4>
          </div>
          <div className="skill-box">
            <img
              src="/figma.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Figma</h4>
          </div>
          <div className="skill-box">
            <img
              src="/lr.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>LightRoom</h4>
          </div>
          <div className="skill-box">
            <img
              src="/sketchup.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>SketcUp</h4>
          </div>
          <div className="skill-box">
            <img
              src="/gimp.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Gimp</h4>
          </div>
          <div className="skill-box">
            <img
              src="/cc.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>ClipChamp</h4>
          </div>
          <div className="skill-box">
            <img
              src="/blender.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Blender</h4>
          </div>
          <div className="skill-box">
            <img
              src="/vs.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>VS code</h4>
          </div>
          <div className="skill-box">
            <img
              src="/webstorm.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>WebStorm</h4>
          </div>
          <div className="skill-box">
            <img
              src="/ij.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>IntelliJidea</h4>
          </div>
          <div className="skill-box">
            <img
              src="/github.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>GitHub</h4>
          </div>
          <div className="skill-box">
            <img
              src="/canva.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Canva</h4>
          </div>
          <div className="skill-box">
            <img
              src="/windows.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Windows</h4>
          </div>
          <div className="skill-box">
            <img
              src="/ubuntu.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Ubuntu</h4>
          </div>
          <div className="skill-box">
            <img
              src="/word.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Word</h4>
          </div>
          <div className="skill-box">
            <img
              src="/pp.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>PowerPoint</h4>
          </div>
          <div className="skill-box">
            <img
              src="/xl.svg"
              alt="React icon"
              className="skill-icon"
            />
            <h4>Excel</h4>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">Services</h2>
        <div className="services-container">
          <div className="service-box">
            <div className="service-info">
              <h4>Combined Mathematics Classes</h4>
              <p>
                I conduct Combined Mathematics classes for A-level students,
                helping them grasp complex concepts with ease.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>UI Design</h4>
              <p>
                I craft intuitive, visually appealing UI designs, ensuring
                seamless user experience across platforms.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Frontend Development</h4>
              <p>
                I specialize in building dynamic web applications using React,
                TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Backend Development</h4>
              <p>
                I build scalable server-side applications with Node.js, Express,
                and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form>
          <div className="input-group">
            <div className="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="input-group-2">
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn" />
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="social">
          <a href="https://www.linkedin.com/in/suthasegar-abishek-00b93628a">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/abi7me">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.instagram.com/abi7.me?igsh=MTUzeWM1cWp1bGRvYw%3D%3D&utm_source=qr">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://t.me/anoj7shek">
            <i className="bx bxl-telegram"></i>
          </a>
          <a href="https://wa.me/94757407420">
            <i className="bx bxs-phone-call"></i>
          </a>
          <a href="https://snapchat.com/t/EKLnJ9T2">
            <i className="bx bxl-snapchat"></i>
          </a>
        </div>
        <ul className="list">
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <p className="copyright">
          &copy; 2024 Your Company Name. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Portfolio;
