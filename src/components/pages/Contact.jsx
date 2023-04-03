import { useContext } from "react"
import LanguageContext from "../../context/LanguageContext"
import GithubLogo from "../misc/logos/GithubLogo";
import MailLogo from "../misc/logos/MailLogo";
import PhoneLogo from "../misc/logos/PhoneLogo";
import LinkdinLogo from "../misc/logos/LinkedinLogo"
function Contact() {
  const {texts} = useContext(LanguageContext);
  return (
    <footer id="contact" className="contact-section" data-aos="fade-up" data-aos-once="true">
      <h3>{texts.contactTitle} </h3>
      <div className="socials">
      
        <a class="div1 contact-logo" href="https://www.linkedin.com/in/bryansandovalc/" target="_blank" rel="noopener noreferrer"><LinkdinLogo className="social-logo"/> </a>
        <a class="div2 contact-logo" href="https://github.com/bryancebreros" target="_blank" rel="noopener noreferrer"><GithubLogo className="social-logo"/> </a>
        <a class="div3 contact-logo" href="mailto:cebrerosbryan@gmail.com" target="_blank" rel="noopener noreferrer"><MailLogo className="social-logo"/> </a>
        <a class="div4 contact-logo"  href="https://wa.me/+526673515718" target="_blank" rel="noopener noreferrer"><PhoneLogo /></a>
      </div>
      
    </footer>
  )
}

export default Contact