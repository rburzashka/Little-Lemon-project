import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";

import '../sass/home.scss';

export default function Home () {
    return (
        <main id="home" className="site-main">
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About />
        </main>
    );
}