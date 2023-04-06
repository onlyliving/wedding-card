import ScrollOut from "scroll-out";
import { useEffect } from "react";

import ContactSection from "./components/ContactSection";
import GallerySection from "./components/GallerySection";
import GuestBook from "./components/GuestBook";
import IntroSection from "./components/IntroSection";
import MainSection from "./components/MainSection";
import MapSection from "./components/MapSection";
import AccountSection from "./components/AccountSection";

export default () => {

    useEffect(() => {
        ScrollOut({
            threshold: .2,
            once: true
        });
    }, []);

    return (
        <div>
            <MainSection />
            <IntroSection />
            <ContactSection />
            <GallerySection />
            <MapSection />
            <AccountSection />
            <GuestBook />
        </div>
    )
};