// Import images
import harmony from '../images/harmony.png';
import iphones from '../images/iphones.png';
import weather from '../images/weather.png';
import smartHome from '../images/smartHome.png';
import workDay from '../images/workday.png';
import codingTest from '../images/codingtest.png';
import mobiles from '../images/mobiles.png';
import scents from '../images/scents.png';
import sneakerStreets from '../images/sneakerStreets.png'

// Add or remove projects here
const projects = [
    {
        name: "SneakerStreets",
        tech: "ReactJs, JavaScript, React Redux, NodeJs, NPM, Vite, Bootstrap, Tailwind",
        description: "An innovative eCommerce platform dedicated to providing sneaker enthusiasts",
        link: "https://sneakerstreets.netlify.app/",
        type: "Group Project (Bootcamp)",
        image: sneakerStreets,
        github: "https://github.com/gsgghotra/SneakerStreets"
    },
    {
        name: "HarmonyHeal - Music App",
        tech: "HTML, CSS, Bootstrap, JavaScript, Rest API (Spotify API)",
        description: "The ultimate music meditation app to enhance your well-being.",
        link: "https://gsgghotra.github.io/HarmonyHeal/",
        type: "Group Project (Bootcamp)",
        image: harmony,
        github: "https://github.com/gsgghotra/HarmonyHeal"
    },
    {
        name: "Price Comparison Web App",
        tech: "HTML, CSS, JavaScript, Vue.js, RESTful API, MySQL, Java, Maven",
        description: "A real-time iPhone price comparison web app",
        link: "https://bit.ly/pricescrape",
        type: "Bootcamp Project",
        image: iphones,
        github: "https://github.com/gsgghotra/iPhones-price-finder"
    },
    {
        name: "Weather Dashboard",
        tech: "HTML, CSS, JavaScript, jQuery, Bootstrap, REST API",
        description: "A weather dashboard that shows the current weather for the searched city.",
        link: "https://gsgghotra.github.io/Weather-Forecast-Dashboard/",
        type: "Bootcamp Project",
        image: weather,
        github: "https://github.com/gsgghotra/Weather-Forecast-Dashboard"
    },
    {
        name: "Work Day Scheduler",
        tech: "HTML, CSS, Bootstrap, JavaScript, jQuery",
        description: "A simple calendar application for saving notes for each hour of the day.",
        link: "https://gsgghotra.github.io/Work-Day-Scheduler/",
        type: "Bootcamp Project",
        image: workDay,
        github:"https://github.com/gsgghotra/Work-Day-Scheduler"
    },
    // {
    //     name: "Timed Coding Quiz",
    //     tech: "JavaScript, HTML, CSS",
    //     description: "Test your JavaScript knowledge with Timed Coding Quiz.",
    //     link: "https://gsgghotra.github.io/timed-coding-quiz/",
    //     type: "Bootcamp Project",
    //     image: codingTest,
    //     github: "https://github.com/gsgghotra/timed-coding-quiz"
    // },
    {
        name: "SmartHome Dashboard",
        tech: "HTML, CSS, ReactJS, JavaScript, jQuery, Bootstrap, REST API",
        description: "The SmartHome-Dashboard on tablet screens offers ultimate convenience.",
        link: "https://github.com/gsgghotra/SmartHome-Dashboard",
        type: "Solo Project (Experimental)",
        image: smartHome,
        github:"https://github.com/gsgghotra/SmartHome-Dashboard"
    },
    {
        name: "Mobile Store",
        tech: "HTML, CSS, JavaScript",
        description: "Website for a local store to display phone contract deals",
        link: "https://gsgghotra.github.io/Tru-Say-Phones/",
        type: "Academic Project",
        image: mobiles,
        github: "https://github.com/gsgghotra/Tru-Say-Phones"
    },
    {
        name: "Perfumes wholesale",
        tech: "HTML, CSS, JavaScript",
        description: "Website for a local warehouse to display perfume prices.",
        link: "https://gsgghotra.github.io/perfumes_wholesale/",
        type: "Academic Project",
        image: scents,
        github: "https://github.com/gsgghotra/perfumes_wholesale"
    }
]

export default projects;