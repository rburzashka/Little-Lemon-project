import Hero from "../components/home/Hero";
import Highlights from "../components/home/Highlights";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";

import '../sass/home.scss';

export default function Home ({responsive}) {
    return (
        <main id="main" className="home">
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About responsive={responsive}/>
        </main>
    );
}