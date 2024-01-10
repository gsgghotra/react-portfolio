import Project from '../components/Project/Project';

// List of Projects
import projects from '../assets/js/projectsList';

const Work = () => {
    return(
        <section className="container-fluid" id="work">
            <h2 className="w-auto p-3 fs-1 heading secondary-color" >Work</h2>
            <div className="container-fluid p-3 d-flex justify-content-center flex-nowrap">
                <div className="row">
                    {/* Can be looped if the projects are array of objects */}
                    {projects.map((project, index)=>{
                        return(
                            <Project 
                                key = {index}
                                name= {project.name}
                                tech= {project.tech}
                                description= {project.description}
                                link= {project.link}
                                type= {project.type}
                                image= {project.image}
                                ></Project>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )}
export default Work;