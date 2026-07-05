import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingBlobs from "./components/FloatingBlobs";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <FloatingBlobs />
            <Navbar />
            <Hero />
            <Services />
            <Gallery />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;