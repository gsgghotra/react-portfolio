import placeholder from '../../assets/images/placeholder.svg'

const AboutMe = () => {
    return(
        // About me Section
        <>
            <section className="container-fluid " id="aboutMe">
                <h2 className="w-auto p-3 fs-1 heading primary-color" >About Me</h2>
                <p className="p-3 w-75 m-auto">Hi, I'm Gurjeet, a Software Engineer specialising in utilising agile methodologies to solve complex problems. With a focus on crafting seamless user experiences and adeptly navigating large data sets, expertise lies in collaborating with cross-functional teams to deliver high-quality solutions. I'm recently completed a Front-end web development Bootcamp, expanding my skills in JavaScript, React, CSS, HTML, Node.js, git, and GitHub tools. I'm passionate about creativity and collaboration, which defines my approach. This portfolio showcases my dedication through personal, academic and bootcamp projects, demonstrating my evolving skills. Feel free to explore and ask questions about my work, experiences, or goals. Let's connect and bring your web development aspirations to life.</p>
            </section>
            <section className="container-fluid text-white p-10" id="myExperience">
            <div className="flex flex-col items-center justify-center space-y-6 w-75 m-auto">
                <h2 className="w-auto p-3 fs-1 heading text-white">Experience</h2>
                <p className="text-center max-w-2xl">
                Over the years, I've had the opportunity to work on a wide range of interesting and challenging projects.
                Here's a brief overview of my professional experience.
                </p>
                <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="outer-divImage">
                        <img
                            className="image-circle"
                            alt="Company Logo"
                            src={placeholder}
                        />
                    </div>
                    <div>
                    <h3 className="text-2xl font-semibold">Sofware Engineer</h3>
                    <p className="text-sm text-gray-400">Freelance - June 2022 - Present</p>
                    <p className="text-sm">
                    Provided software applications that is built to help small businesses with their day to day tasks.
                    </p>
                    </div>
                </div>
                {/* <div className="flex items-center space-x-4">
                    <div className="outer-divImage">
                        <img
                            className="image-circle"
                            alt="Company Logo"
                            src={placeholder}
                        />
                        </div>
                    <div>
                    <h3 className="text-2xl font-semibold">Intern</h3>
                    <p className="text-sm text-gray-400">Startup Inc. - Aug 2017 - Dec 2019</p>
                    <p className="text-sm">
                        Developed full-stack web solutions with a focus on responsive design and cross-browser compatibility.
                        Worked extensively with JavaScript, MongoDB, and Express.js.
                    </p>
                    </div>
                </div> */}
                </div>
            </div>
            </section>
        </>
)}

export default AboutMe;