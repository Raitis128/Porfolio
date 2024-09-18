import { ContactSection, ContactIcons } from "./contact.styles";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact me</h2>
      <a href="mailto:raitisiziks@gmail.com">
        <button className="button">Email</button>
      </a>
      <p>
        My inbox is always open - so if you want to work together on something
        don&apos;t be afraid to say hi.
      </p>
      <ContactIcons>
        <a href="https://www.linkedin.com/in/raitis128/" target="_blank">
          <i className="fa-brands fa-linkedin fa-4x linkedin"></i>
        </a>
        <a href="https://www.instagram.com/raitis128/" target="_blank">
          <i className="fa-brands fa-instagram fa-4x instagram"></i>
        </a>
        <a href="https://github.com/Raitis128" target="_blank">
          <i className="fa-brands fa-github fa-4x github"></i>
        </a>
      </ContactIcons>
    </ContactSection>
  );
};

export default Contact;
