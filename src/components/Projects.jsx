import { projectMock } from "../projectMock/projects";

const ProjectCard = ({ projects: { title, src, description, github_link } }) => {

    return (

        <div className="flex flex-col items-center">

            <div className="card relative max-w-xs max-h-[445px] shadow-lg image-full">

                <figure>
                    <img className='w-full' src={src} alt={title} />
                </figure>

                <div className="card-body p-5 flex flex-col gap-2 flex-auto">

                    <h2 className=" text-lg font-semibold md:break-all">{title}</h2>

                    <p>{description}</p>

                    <div className="flex gap-2">

                        <a href={github_link} className="w-auto rounded-md p-2 transition-all hover:bg-[#5659FD] border-2 border-solid border-[#5659FD]">Github <i className="fa-brands fa-github"></i></a>
                        {/* <a href={github_link} className="w-auto rounded-md p-2 transition-all hover:bg-[#5659FD] border-2 border-solid border-[#5659FD]">Live preview <i className="fa-solid fa-cloud"></i></a> */}
                    </div>

                </div>
            </div>
        </div>


    );
}


const Projects = () => {
    return (
        <section id="projects" className="flex flex-col gap-10 justify-center sm:items-center h-full sm:h-screen my-10">

            <h1 className="text-3xl sm:text-[3rem] text-center underline decoration-[#5659FD]">Projetos</h1>

            <div className="flex flex-col-reverse md:flex-row gap-10">
                {projectMock.map(project => (
                    <ProjectCard key={project.title} projects={project} />
                ))}

            </div>

        </section>
    )
}

export default Projects;