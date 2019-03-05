import React from "react";

import Hero from "./sections/Hero";
import IntroEasy from "./sections/IntroEasy";
import IntroSharing from "./sections/IntroSharing";
import Appreciate from "./sections/Appreciate";
import Benefits from "./sections/Benefits";
import Discover from "./sections/Discover";
import ArtEducation from "./sections/ArtEducation";
import CulturalData from "./sections/CulturalData";
import PageLinks from "./sections/PageLinks";

export default class VRMuseum extends React.Component<{}> {
    render() {
        return (
            <React.Fragment>
                <Hero />
                <IntroEasy />
                <IntroSharing />
                <Appreciate />
                <Benefits />
                <Discover />
                <ArtEducation />
                <CulturalData />
                <PageLinks />
            </React.Fragment>
        );
    }
}
