import { Calendar, GraduationCap } from "lucide-react";
import type React from "react";

const Introduction: React. FC = () => {
    return(
        <section id="introduction" className="w-full py-20 px-20">
                {/**Seperate into 2 sections */}
                <div>
                <h1 className="text-white text-6xl font-bold mb-5">About <span className="text-teal-700">Me</span> </h1>

                {/**Horizontal line */}
                <div className="w-48 h-2 mb-12 bg-gradient-to-r from-teal-700 to-transparent"></div>

                    {/**left section Bio */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <p className="text-xl text-justify mb-6 leading-relaxed font-medium text-opacity-70 text-[#5e7d9c]">
                            I am a fresh graduate from the Department of Electrical and Information Engineering
                            specialized in Computer Engineering, Faculty of Engineering, University of Ruhuna.
                        </p>
                        <p className="text-xl text-justify mb-6 leading-relaxed font-medium text-opacity-70 text-[#5e7d9c]">
                            Completed a 6-month Software Engineering internship at Rinstrum (Pvt) Ltd, located in  
                            Negombo, Sri Lanka. There, I have successfully transitioned an existing PHP-based system to C# and  
                            deployed a Production Dashboard web application, gaining hands-on experience with .NET, Blazor, and  
                            Agile development practices. 
                        </p>
                        <p className="text-xl text-justify mb-6 leading-relaxed font-medium text-opacity-70 text-[#5e7d9c]">
                            Passionate to learn new technologies and willing to accept challenging opportunities.
                            Seeking an opportunity to utilize technical and interpersonal skills while gaining more experience and 
                            adding value to the organization.
                        </p>
                    </div> 

                    {/**right section cards */}
                    <div className="flex flex-col gap-6">
                     {/**Education card */}
                    <div className="self-start bg-[#1e2738] border border-[#1e2738] transition-all duration-300 
                    hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]  
                    rounded-xl p-8 hover:-translate-y-3">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-teal-900 opacity-90 text-[#2dd4bf] hover:bg-opacity-10 justify-center">
                                <GraduationCap size={32}/>
                            </div> 

                            <div className="flex flex-col">
                            <h1 className="text-[#e1f0f9] font-semibold text-xl mb-3">Education</h1>
                            <p className="text-[#e1f0f9] font-medium text-lg mb-1">Computer Engineering</p>
                            <p className="text-opacity-70 text-[#5e7d9c] text-lg">
                                Department of Electrical and Information Engineering Specialized in Computer Engineering, 
                                Faculty of Engineering,
                                University of Ruhuna
                            </p>
                            <div className="flex items-center text-[#2dd4bf] mt-4"> 
                            <Calendar/>
                            <span className="font-medium ml-5">Graduation: 2026</span>
                            </div>
                            
                            </div>
                            
                        </div>
                        
                    </div>

                    {/**Work Experience card */}
                        <div className="self-start bg-[#1e2738] border border-[#1e2738] transition-all duration-300 
                     hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]  
                     rounded-xl p-8 hover:-translate-y-3 mt-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-teal-900 opacity-90 text-[#2dd4bf] hover:bg-opacity-10 justify-center">
                                <GraduationCap size={32}/>
                            </div> 

                            <div className="flex flex-col">
                            <h1 className="text-[#e1f0f9] font-semibold text-xl mb-3">Work Experience</h1>
                            <p className="text-[#e1f0f9] font-medium text-lg mb-1">Software Engineer - Intern</p>
                            <p className="text-opacity-70 text-[#5e7d9c] text-lg">
                                Rinstrum (Pvt) Ltd
                            </p>
                            <div className="flex items-center text-[#2dd4bf] mt-4"> 
                            <Calendar/>
                            <span className="font-medium ml-5">July 2024 - January 2025</span>
                            
                            </div>
                            <li className="text-opacity-70 text-[#5e7d9c] font-semibold text-lg mt-2 text-justify">
                                Developed and modernized a production monitoring dashboard by migrating PHP based system to a C#/ .NET Platform. 
                            </li>
                            <ul className="text-opacity-50 text-[#6484a3] font-semibold">
                                Technologies Used:  PHP, YiiFramework, HTML, CSS, JavaScript, .NET, C#
                            </ul>
                            <li className="text-opacity-70 text-[#5e7d9c] font-semibold text-lg mt-2 text-justify">
                                Developed a web based stock code search application that connects with the live company database and 
                                give user the stock code, description and log description for the validate stock code
                            </li>
                            <ul className="text-opacity-50 text-[#6484a3] font-semibold">
                                Technologies Used:  PHP, YiiFramework, SQL, CSS, C#, Blazor, .NET, HTML, JavaScript
                            </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                    </div>
                    

                    </div>
                       
                   
                    
                    
                </div>
        </section>
        
    )
}

export default Introduction;