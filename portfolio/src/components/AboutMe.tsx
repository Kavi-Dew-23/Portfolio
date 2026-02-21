import  React  from 'react';

const AboutMe: React. FC = () => {
    return (
        <div>
            <p className="text-teal-700 mb-5">Hello, I'm</p>
            <h1 className="text-white text-6xl font-bold mb-5">Kavindya <span className="text-teal-700 text-gradient">Dewapura</span></h1>
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

            
        </div>
    );
};

export default AboutMe;