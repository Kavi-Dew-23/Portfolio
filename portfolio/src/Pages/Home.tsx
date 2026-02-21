import React from "react";
import Profile from "../components/Profile";
import AboutMe from "../components/AboutMe";

const Home: React.FC =() => {
    return(
        <section className="min-h-screen px-8 flex items-center justify-center">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-2 items-center">
                <Profile/>
                <AboutMe/>
            </div>
        </section>
    )
}

export default Home;