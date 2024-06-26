import HeroSection from "../components/landingPage/HeroSection";
import Nav from "../components/landingPage/NavbarLP";
import Benefit from "../components/landingPage/Benefits";
import Appscreen from "../components/landingPage/Appscreen";
import Testimoni from "../components/landingPage/Testimonis";
import Footer from "../components/landingPage/Footers";
export default function HomePage() {
    return (
        <div className='bg-base-170'>
            <Nav/>
            <HeroSection/>
            <Benefit/>
            <Appscreen/>
            <Testimoni/>
            <Footer/>
        </div>
    )
} 