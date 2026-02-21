import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-5 right-5 p-5">
            <div className="flex gap-6 text-gray-300">
            {/**top bar */}
            <a href="#home" className="no-underline hover:text-teal-500 transition">Home</a>
            <a href="#about" className="no-underline hover:text-teal-500 transition">About</a>
            <a href="#skills" className="no-underline hover:text-teal-500 transition">Skills</a>
            <a href="#services" className="no-underline hover:text-teal-500 transition">Services</a>
            <a href="#projects" className="no-underline hover:text-teal-500 transition">Projects</a>
            <a href="#contact" className="no-underline hover:text-teal-500 transition">Contact</a>
         </div>
        </nav>
        
    );
};

export default Navbar;