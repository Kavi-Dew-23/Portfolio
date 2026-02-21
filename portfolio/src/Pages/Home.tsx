import React from "react";
import Profile from "../components/Profile";

const Home: React.FC =() => {
    return(
        <section className="min-h-screen px-8 flex items-center justify-center">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
                <Profile/>
            </div>
        </section>
    )
}

export default Home;