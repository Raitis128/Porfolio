import { ContactSection } from "./contact.styles";

import Icons from "../icons/icons.component";

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
      <Icons />
    </ContactSection>
  );
};

export default Contact;
