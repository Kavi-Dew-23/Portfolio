import { Bot, CodeIcon, Database, MonitorCloud, MonitorCog, Wrench } from "lucide-react";
import type React from "react";

const Skills: React. FC = () => {
    const SkillsCategories = [
        {
            title: "Programming Languages",
            icon: CodeIcon,
            skills: ["C#", "TypeScript", "PHP", "Java", "Python", "JavaScript"]
        },

        {
            title: "Frameworks and Technologies",
            icon: Wrench,
            skills: [".NET", "React.js", "Node.js", "Blazor", "Flutter", "Yii Framework"]
        },

        {
            title: "Database",
            icon: Database,
            skills: ["MySQL", "Firebase", "MongoDB"]
        },

        {
            title: "Cloud and Devops",
            icon: MonitorCloud,
            skills: ["AWS", "Docker"]
        },

        {
            title: "Operating Systems",
            icon: MonitorCog,
            skills: ["Windows", "Linux"]
        },
        
        {
            title: "AI and Machine Learning",
            icon: Bot,
            skills: ["Tensorflow", "Transformers", "NLP", "LLM", "Hugging Face", "Prompt Engineering"]
        }
    ]


    return (
        <section id="skills" className="w-full py-20 px-20">
            <div>
            <h1 className="text-white text-6xl font-bold mb-5">
                My <span className="text-teal-700">Skills</span> 
            </h1>
            
            {/**Horizontal line */}
            <div className="w-48 h-2 mb-12 bg-gradient-to-r from-teal-700 to-transparent"></div>

            {/**Grid for Caeds*/}
            <div className="grid md:grid-cols-2 gap-8">
                {SkillsCategories.map((category, index) => (
                    <div
                    key={index}
                    className="bg-[#1e2738] border border-[#1e2738] transition-all duration-300 
                    hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]  
                    rounded-xl p-8 mt-6">
                        {/**title of the card */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-lg bg-teal-900 opacity-90 text-[#2dd4bf] justify-center">
                                <category.icon size={32} />
                            </div>
                            <h1 className="text-[#e1f0f9] font-semibold text-xl mb-3">
                                {category.title}
                            </h1>
                        </div>

                        {/**Skills in the card */}
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, i) => (
                                <span 
                                key={i}
                                className="px-4 py-3 bg-[#181f2e] bg-opacity-80 text-white border-none rounded-lg">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
                

            </div>

            </div>

        </section>
    );
};

export default Skills;