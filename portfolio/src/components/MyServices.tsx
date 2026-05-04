import { Code2, Palette } from 'lucide-react';
import  React  from 'react';

const MyServices: React. FC = () => {
    const serviceCategories = [
        {
            title: "UI/ UX Design",
            icon: Palette,
            services:"Creating visually appealing and user-friendly interfaces using Figma, transforming ideas into seamless digital experiences. From initial wireframes to high-fidelity prototypes, I focus on delivering user-centered designs that improves usability and overall user satisfaction.",
            features: ["Wireframe working and prototyping", "User Research", "Design Systems", "Responsive Designs"]
        },
        {
            title: "Software Development",
            icon: Code2,
            services: "Full-stack development expertise in building robust web applications. Specializing in modern tech stacks including .NET, React, PHP, C#, TypeScript and cloud-based systems.",
        }

    ]
    return(
        <section id="myServices" className="w-full py-20 px-20 bg-[#1e2738] bg-opacity-10">
            <h1 className="text-white text-6xl font-bold mb-5">My <span className="text-teal-700">Services</span> </h1>
            
            {/**Horizontal line */}
            <div className="w-48 h-2 mb-12 bg-gradient-to-r from-teal-700 to-transparent"></div>
            
            {/**Grid of cards */}
            <div className="grid md:grid-cols-2 gap-8">
                {serviceCategories.map((category,index) => (
                    <div
                    key={index}
                    className="bg-[#1e2738] border border-[#1e2738] transition-all duration-300 
                    hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]  
                    rounded-xl p-8 mt-6">
                        {/**title of the card */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-lg bg-teal-900 opacity-90 text-[#2dd4bf] justify-center hover:bg-teal-600 transition-colors">
                                <category.icon size={32} />
                            </div>
                            <h1 className="text-[#e1f0f9] font-semibold text-xl mb-3">
                                {category.title}
                            </h1>
                        </div>

                        {/**Content in the card */}
                        <p className="text-[#5e7d9c] mb-6 leading-relaxed text-xl text-opacity-80">
                            {category.services}
                        </p>

                        {/**Bullets feature points */}
                        <ul className="grid grid-cols-2 gap-2">
                            {category.features.map((feature) => (
                                <li
                                key={feature}
                                className="flex items-center gap-2 text-base text-[#5e7d9c]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-700"/>
                                        {feature}
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
        </section>
    )

}
export default MyServices;