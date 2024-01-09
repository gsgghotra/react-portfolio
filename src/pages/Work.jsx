import Project from '../components/Project/Project';

// Import images
import project1 from '../assets/images/harmony.png';
const Work = () => {
    return(
        <section class="container-fluid" id="work">
            <h2 class="w-auto p-3 fs-1 heading secondary-color" >Work</h2>
            <div class="container-fluid p-3 d-flex justify-content-center flex-nowrap">
                <div class="row">
                    <Project 
                    name="HarmonyHeal - Music App"
                    tech="HTML, CSS, Bootstrap, JavaScript, Rest API (Spotify API)"
                    description="The ultimate music meditation app to enhance your well-being."
                    link="https://gsgghotra.github.io/HarmonyHeal/"
                    type="Group Project (Bootcamp)"
                    image={project1}
                    ></Project>
                </div>
            </div>
        </section>
    )}
export default Work;