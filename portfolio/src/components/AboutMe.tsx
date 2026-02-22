import  React  from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const AboutMe: React. FC = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
        <div>
            <p className="text-teal-700 mb-5">Hello, I'm</p>
            <h1 className="text-white text-6xl font-bold mb-5">Kavindya <span className="text-teal-700">Dewapura</span></h1>
            <h2 className="text-gray-500 text-2xl mb-4 text-opacity-40">Computer Engineer</h2>
            <p className="text-opacity-20 text-[#f1f5f9] text-justify text-xl mb-8">
                Fresh Computer Engineering graduate passionate to learn new technologies and willing to accept challenging opportunities.
                Seeking an opportunity to utilize technical and interpersonal skills while gaining more experience and adding value to the 
                organization.</p>

            {/** Two Buttons */}    
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <a href=""
                className="bg-teal-300 px-6 py-3 text-l rounded-xl font-semibold cursor-pointer opacity-70 hover:bg-teal-700">
                    View Portfolio
                    </a>
                <a href=""
                className="bg-transparent border border-teal-500 px-6 py-3 text-l text-teal-600 rounded-xl font-semibold cursor-pointer hover:bg-teal-700 hover:bg-opacity-20">
                    Get in Touch
                    </a>

            </div>

            {/**Social links */}
            <div className='flex justify-center lg:justify-start gap-6 mt-5'>
                <a href="https://github.com/Kavi-Dew-23"
                className="p-3 rounded-full bg-[#4d77db] bg-opacity-50 hover:bg-[#21C6B6] text-white/70 hover:bg-opacity-20 justify-center opacity-25 transition-colors duration-300">
                    <Github size={25}/>
                </a>
                <a href="www.linkedin.com/in/kavindyadewpura"
                className="p-3 rounded-full bg-[#4d77db] bg-opacity-50 hover:bg-[#21C6B6] text-white/70 hover:bg-opacity-20 justify-center opacity-25 transition-colors duration-300">
                    <Linkedin size={25}/>
                </a>
                <a href="https://github.com/Kavi-Dew-23"
                className="p-3 rounded-full bg-[#4d77db] bg-opacity-50 hover:bg-[#21C6B6] text-white/70 hover:bg-opacity-20 justify-center opacity-25 transition-colors duration-300">
                    <Mail size={25}/>
                </a>
            </div>
            {/**Scroll indicator */}
        <div className="flex items-center mt-10">
        <a href=""
        className="flex flex-col items-center gap-2 hover:text-[#21C6B6] text-gray-400">
            <span className="text-s">Scroll</span>
            <ArrowDown className="animate-bounce size-6"/>
        </a>
    </div>
        </div>
        
                
    </div>
    );
};

export default AboutMe;