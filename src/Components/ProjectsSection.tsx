import { projects } from "../consts";
import { Repository } from "./repository";

export function ProjectsSection() {
    return (
        <div id="projects" className="scroll-mb-30 pt-30  min-h-screen flex flex-col items-center bg-light-beige">

            <h1 className="font-bold text-5xl text-black text-center">
                Projects
            </h1>
            <div className="grid grid-cols-2 gap-10">
                {
                    projects.map((project) => {
                        return (
                            <div className="mt-10 bg-gray-100 border-0.5 border-gray-500 max-w-xl w-full shadow-lg rounded-lg p-6">
                                {project.inProgress ? (
                                    <div className="flex justify-between">
                                        <h2 className="text-xl font-bold">{project.title}</h2>
                                        <span className="text-orange-500">In Progress</span>
                                    </div>
                                ) : (
                                    <h2 className="text-xl font-bold">{project.title}</h2>
                                )}
                                <p className="text-gray-700 pt-5 pb-5">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                        {
                                            project.key_skiils.map((key_skill) => {
                                                return (
                                                    <p className="text-gray-900 text-sm bg-green-200 inline mr-3 rounded pl-2 pr-2 mb-5">{key_skill}</p>
                                                )
                                            })
                                        }
                                </div>

                                <Repository link={project.link}></Repository>
                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}