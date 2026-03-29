import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:gauravdogra2005june@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                gauravdogra2005june@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919805207357" data-cursor="disable">
                +91 98052 07357
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science and Engineering, Punjab Engineering
              College - 2023 to Present
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/GauravDograa"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/gauravv-dograa"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Gaurav Dogra</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
