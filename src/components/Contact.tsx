
import '../css/Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className={"main-contact-container"} id='Contact'>
      <span>
        <h2>Contact</h2>
      </span>
      <div className={"links-container"}>
        <div className='contact-icon-links-container'>
          <MdOutlineEmail></MdOutlineEmail>
          <a href="mailto:Maryam008@hotmail.se" target="_blank"
            rel="noreferrer">
            Maryam008@hotmail.se
          </a>
        </div>
        <div className='contact-icon-links-container'>
          <FaPhoneAlt></FaPhoneAlt>
          <a href="https://whatsapp.com"
            target="_blank"
            rel="noreferrer">
            +46735169242
          </a>
        </div>
        <div className='contact-icon-links-container'>
          <FaGithub />
          <a
            href="https://github.com/maryam891"
            target="_blank"
            rel="noreferrer"

          >
            GitHub
          </a>
        </div>
        <div className='contact-icon-links-container'>
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/maryam-chaudhry-4ba258204/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
