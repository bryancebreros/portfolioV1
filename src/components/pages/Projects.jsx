import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ExternalLink from "../../components/misc/logos/ExternalLink"
import Wheein from "../../wheein.jpg"
import PhonePoke from "../../assets/images/pokefinder-phone.jpg"
import PhoneCoffee from "../../assets/images/coffeeshops-phone.jpg"
import PhoneKflix from "../../assets/images/kflix-phone.jpg"

function Projects() {
  const {texts} = useContext(LanguageContext)
  return (
    <section id="projects" className="projects-section" data-aos="fade-right" data-aos-once="true">
      <h3 className="projects-title section-title">{texts.projectsTitle} </h3>
      <div className="phone-images-container">
        <h4 className="phone-project-title">Pokéfinder</h4>
        <p className="phone-project-desc">{texts.projectDesc}</p>
        <a href="https://pokefinder-ochre.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img className="phone-image" src={PhonePoke} width={300} />
      </a>
      
      
        <h4 className="phone-project-title">K-FLIX</h4>
        <p className="phone-project-desc">{texts.projectDesc2}</p>
        <a href="https://pokefinder-ochre.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img className="phone-image" src={PhoneCoffee} width={300} />
      </a>
      
      
        <h4 className="phone-project-title">Coffee Stores</h4>
        <p className="phone-project-desc">{texts.projectDesc3}</p>
        <a href="https://pokefinder-ochre.vercel.app/" target="_blank" rel="noopener noreferrer">
        <img className="phone-image" src={PhoneKflix} width={300} />
      </a>
        
      </div>

      <div className="images-container">
      
        <article className="project-item pokefinder" data-aos="fade-right" data-aos-once="true" >
          
          <div className="project-info">
            <h3 className="project-title"><a href="https://pokefinder-ochre.vercel.app/" target="_blank" rel="noopener noreferrer">Pokefinder <ExternalLink /></a></h3>
            <p class="item_description">{texts.projectDesc}</p>
          </div>
        </article>
        
        
        
      </div>
      <div className="images-container">
        <article className="project-item kflix" data-aos="fade-left" data-aos-once="true" >
          
          <div className="project-info">
            <h3 className="project-title"><a href="https://kflix-delta.vercel.app/" target="_blank" rel="noopener noreferrer">K-FLIX <ExternalLink /></a></h3>
            <p class="item_description">{texts.projectDesc2}</p>
          </div>
        </article>
      </div>

      <div className="images-container">
        <article className="project-item coffee" data-aos="fade-right" data-aos-once="true">
          
          <div className="project-info">
            <h3 className="project-title"><a href="https://coffee-shops-rho.vercel.app/" target="_blank" rel="noopener noreferrer">Coffeeshops <ExternalLink /></a></h3>
            <p class="item_description">{texts.projectDesc3}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects