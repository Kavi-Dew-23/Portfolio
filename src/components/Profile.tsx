import React from "react";
import ProfilePhoto from "../assets/profilePhoto.svg";

const Profile: React. FC = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="relative flex items-center justify-center">

            {/** Glow circle */}
            <div className="absolute w-72 h-72 blur-3xl opacity-20 bg-teal-400  rounded-full animate-pulse"></div>

            {/**Outer circle */}
            <div className="absolute w-80 h-80 border-2 border-teal-600 rounded-full opacity-40"></div>
            <img 
                src={ProfilePhoto}
                alt="ProfilePhoto"
                className="relative w-72 h-72 object-cover rounded-full border-2 border-teal-800"/>
                
            </div>
            
        </div>
            
    );
};

export default Profile;