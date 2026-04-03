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
                href="https://www.linkedin.com/in/dilip-kumar-a1506611a/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — dilip-kumar-a1506611a
              </a>
            </p>
            <p>
              <a
                href="mailto:gdesigner.dk@gmail.com"
                data-cursor="disable"
              >
                gdesigner.dk@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.behance.net/dilipkumar_3010"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Behance — dilipkumar_3010
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bachelor of Art, CSJM University Kanpur — 2013–2015
            </p>
            <p>
              Diploma in Printing & Publishing, Arena Multimedia, New Delhi
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/dilip-kumar-a1506611a/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.behance.net/dilipkumar_3010"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Behance <MdArrowOutward />
            </a>
            <a
              href="mailto:gdesigner.dk@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio of <br /> <span>Dilip Kumar</span>
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
