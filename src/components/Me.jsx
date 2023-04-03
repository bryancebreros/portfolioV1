import { useEffect, useContext } from "react";
import AOS from "aos"
import 'aos/dist/aos.css'
import ArrowDown from "./misc/ArrowDown";
import LanguageContext from "../context/LanguageContext";
function Me() {
  const {texts} = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <section className="hero-section" data-aos="zoom-in" data-aos-once="true">
        <div className="titles" >
            <h2 className="title" >Bryan Sandoval</h2>
            <h3 className="subtitle" >{texts.subt}</h3>
        </div>
        <p className="text me-text" >{texts.mainP}</p>
        <div className="contact-me">
          <p><i class="ri-mail-fill icon"></i> <a href="mailto:cebrerosbryan@gmail.com">cebrerosbryan@gmail.com</a></p>
          <p><i class="ri-phone-fill icon"></i><a href="tel:+526673515718">+52 6673515718</a></p>
        
        </div>
        <button className="about-btn" type="button"><a href="#about"> <ArrowDown /></a></button>
    </section>
  )
}

export default Me