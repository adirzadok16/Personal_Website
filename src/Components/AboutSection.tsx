import { professionalAttributes, skills } from "../consts";

export const AboutSection = () => {
    return (
        <div id="about" className="scroll-mb-30   pt-30 min-h-screen flex flex-col items-center">

            {/* Education */}

            <h1 className="font-bold text-5xl text-black text-center">
                Background & Skills
            </h1>

            <h4 className="mt-10 text-gray-500 font-bold text-2xl text-center">
                Education
            </h4>

            <div className="mt-10 flex flex-col items-start bg-gray-100 border-0.5 border-gray-500 max-w-xl w-full shadow-lg rounded-lg p-6">
                <div className='flex justify-between items-center w-full'>
                    <h2 className="text-xl font-bold">B.Sc. in Software Engineering</h2>
                    <p className='text-l bg-green-200 '>2021–2025</p>
                </div>
                <p className='text-green-700 font-bold'>Afeka Academic College of Engineering</p>
                <p className="bg-green-200 rounded">GPA: 86</p>
            </div>
            {/* Technical Skills */}

            <h4 className="mt-10 text-gray-500 font-bold text-2xl text-center">
                Technical Skills
            </h4>
            <div className="mt-10 flex flex-col items-start bg-gray-100 max-w-6xl w-full shadow-lg rounded-lg p-6">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {skills.map((skill) => (
                        <div key={skill.category} className="border border-gray-500 rounded-lg p-4 flex flex-col">
                            <p className="text-black text-sm font-bold pb-3">{skill.category}</p>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <p key={item} className="text-gray-900 text-sm bg-green-200 rounded px-2 py-1">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Military Service */}
            <h4 className="mt-10 text-gray-500 font-bold text-2xl text-center">
                Military Service
            </h4>

            <div className="mt-10 flex flex-col items-start bg-gray-100 border-0.5 border-gray-500 max-w-xl w-full shadow-lg rounded-lg p-6">
                <div className=" bg =border-1 border-gray-500 rounded-lg p-2">
                    <div className='flex justify-between items-center w-full'>
                        <h2 className="text-xl font-bold">Sayeret Givaty</h2>
                        <p className='text-l bg-green-200'>11/2016-07/2019</p>
                    </div>
                    <p className='text-gray-700 text-md font-bold mt-2'>Combatant/Commander</p>
                    <p className="">Served as a Combat Medic and Team Commander, demonstrating leadership, responsibility, and decision-making in high-pressure environments.</p>
                </div>
            </div>


            {/* Professional Attributes */}

            <h4 className="mt-10 text-gray-500 font-bold text-2xl text-center ">
                Professional Attributes
            </h4>
            <div className="grid grid-cols-2 gap-10 mt-10 bg-gray-100 border-0.5 border-gray-500 max-w-4xl w-full shadow-lg rounded-lg p-6">
                {
                    professionalAttributes.map((item) => {
                        return (
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 text-green-600 flex-shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                <p className="pl-3">{item}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}