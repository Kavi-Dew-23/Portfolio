import  React  from 'react';

const AboutMe: React. FC = () => {
    return (
        <div>
            <p className="text-teal-700 mb-5">Hello, I'm</p>
            <h1 className="text-white text-6xl font-bold mb-5">Kavindya <span className="text-teal-700 text-gradient">Dewapura</span></h1>
            <h2 className="text-gray-500 text-2xl mb-4 text-opacity-40">Computer Engineer</h2>
            <p className="text-opacity-20 text-[#f1f5f9] text-justify text-xl">
                Fresh Computer Engineering graduate passionate to learn new technologies and willing to accept challenging opportunities.
                Seeking an opportunity to utilize technical and interpersonal skills while gaining more experience and adding value to the 
                organization.</p>
        </div>
    );
};

export default AboutMe;