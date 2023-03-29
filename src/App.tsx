import ScrollOut from "scroll-out";
// import Splitting from "splitting";
import { useEffect } from "react";

import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import GuestBook from "./components/GuestBook";
import IntroSection from "./components/IntroSection";
import MainSection from "./components/MainSection";
import MapSection from "./components/MapSection";

export default () => {

    useEffect(() => {
        // Splitting();
        ScrollOut({
            threshold: .2,
            once: true
            // targets: '[data-splitting]'
        });
    }, []);

    return (
        <div>
            <MainSection />
            <IntroSection />
            <ContactSection />
            <GallerySection />
            <MapSection />
            <GuestBook />
        </div>
    )
};