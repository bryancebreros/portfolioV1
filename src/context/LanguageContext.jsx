import { createContext, useState } from "react";
const LanguageContext = createContext();
const initialLanguage = "en";
const translations = {
    en: {
        lang: "🇺🇸",
        nav1: "About",
        nav2: "Projects",
        nav3: "Contact",
        subt: "Fullstack Web Developer",
        mainP: "I'm a developer in never-ending learning and a Computer Systems Engineer. I have a passion for building incredible experiences through the web.",
        aboutTitle: "About Me",
        aboutP: "My name is Bryan, and I am a web developer based in México. I have always had a passion for technology and creating things, which led me to pursue a career in web development.",
        aboutP2: "In addition to my technical skills, I am a great communicator and a natural problem solver. I believe that clear communication is the key to any successful project.",
        aboutP3: "In my free time I compete in Smash Bros tournaments, I'm currently considered a top 15 player in my region.",
        aboutT: "Technologies",
        projectsTitle: "Featured Projects",
        projectDesc: "Web application connected to the PokeAPI, shows data for every pokemon from different generations.",
        projectDesc2: "Netflix-like application, displays korean pop music videos fetching the YouTube API.",
        projectDesc3: "Utilizes user's current location to find coffe stores nearby and show their information.",
        contactTitle: "Contact",
        

    },
    es: {
        lang: "🇲🇽",
        nav1: "Sobre Mí",
        nav2: "Proyectos",
        nav3: "Contacto",
        subt: "Desarrollador Web Fullstack",
        mainP: "Soy un desarrollador en constante aprendizaje e Ingeniero en Sistemas Computacionales. Mi pasión es construir increibles experiencias a través de la web.",
        aboutTitle: "Sobre Mí",
        aboutP: "Mi nombre es Bryan y soy un desarrollador web viviendo en México. Siempre me ha apasionado la tecnología y la creación de cosas desde cero, lo que me llevó a seguir una carrera en desarrollo web.",
        aboutP2: "Además de mis habilidades técnicas, soy un gran comunicador y un solucionador de problemas por naturaleza. Creo que una comunicación clara es la clave para cualquier proyecto exitoso.",
        aboutP3: "En mis tiempos libres compito en torneos de Smash Bros, actualmente soy considerado uno de los 15 mejores jugadores de mi región.",
        aboutT: "Tecnologías",
        projectsTitle: "Proyectos Destacados",
        projectDesc: "Aplicación web conectada con la PokeAPI, muestra información de cada Pokémon de diferentes generaciones.",
        projectDesc2: "Clon de Netflix, permite visualizar videos de pop coreano utilizando la API de YouTube.",
        projectDesc3: "Utilizando la localización actual del usuario, encuentra cafeterías cercanas y muestra su información.",
        contactTitle: "Contacto",

    }
}
const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] =useState(translations[language]);
    const [lever, setLever] = useState(false) 

    const handleLanguage = () => {
        setLever(!lever);
        if (language === 'en'){
            setLanguage('es');
            setTexts(translations.es);
        } else {
            setLanguage('en');
            setTexts(translations.en);
        }
    }
    const data = {texts, handleLanguage}

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export {LanguageProvider}

export default LanguageContext