import { useContext } from "react"
import LanguageContext from "../../context/LanguageContext"
import aboutImage from "../../assets/images/bryan.jpg"
import TypescriptLogo from "../misc/logos/TypescriptLogo"
import AwsLogo from "../misc/logos/AwsLogo"
import BootstrapLogo from "../misc/logos/BootstrapLogo"
import JavascriptLogo from "../misc/logos/JavascriptLogo"
import MongoLogo from "../misc/logos/MongoLogo"
import MysqlLogo from "../misc/logos/MysqlLogo"
import ExpressLogo from "../misc/logos/ExpressLogo"
import NextLogo from "../misc/logos/NextLogo"
import NodeLogo from "../misc/logos/NodeLogo"
import ReactLogo from "../misc/logos/ReactLogo"

function About() {
  const {texts} = useContext(LanguageContext)
  return (
    <section id="about" className="about-section" data-aos="fade-up" data-aos-once="true">
      <h3 className="section-title">{texts.aboutTitle} </h3>
      <div className="about-content">
        <div className="about-text-wrapper">
          <p className="text">{texts.aboutP}</p>
          <p className="text">{texts.aboutP2}</p>
          <p className="text">{texts.aboutP3}</p>
        </div>
        
        <img src={aboutImage} alt="image of me" className="about-image"/>
      </div>
      <h4 className="section-title">
        {texts.aboutT}:
      </h4>
      <div class="parent">
        <div class="div1 tec-icon" data-aos="fade-up" data-aos-once="true"> <JavascriptLogo /> <p>JavaScript</p></div>
        <div class="div2 tec-icon" data-aos="fade-up" data-aos-once="true"><TypescriptLogo /><p>TypeScript</p> </div>
        <div class="div4 tec-icon" data-aos="fade-up" data-aos-once="true"><ReactLogo /><p>ReactJs</p></div>
        <div class="div3 tec-icon" data-aos="fade-up" data-aos-once="true"><BootstrapLogo /><p>Bootstrap</p></div>
        <div class="div4 tec-icon" data-aos="fade-up" data-aos-once="true"><ReactLogo /><p>ReactJs</p></div>
        <div class="div5 tec-icon" data-aos="fade-up" data-aos-once="true"><NodeLogo /> <p>NodeJs</p></div>
        <div class="div6 tec-icon" data-aos="fade-up" data-aos-once="true"><NextLogo /><p>NextJs</p></div>
        <div class="div7 tec-icon" data-aos="fade-up" data-aos-once="true"><ExpressLogo /><p>Express</p></div>
        <div class="div8 tec-icon" data-aos="fade-up" data-aos-once="true"><AwsLogo /><p></p></div>
        <div class="div9 tec-icon" data-aos="fade-up" data-aos-once="true"><MongoLogo /><p>MongoDB</p></div>
        <div class="div10 tec-icon" data-aos="fade-up" data-aos-once="true"><MysqlLogo /></div>
      </div>
    </section>
    
  )
}

export default About