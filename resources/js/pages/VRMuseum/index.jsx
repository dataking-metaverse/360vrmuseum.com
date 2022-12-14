import React from "react";

import page from "../../decorators/page";
import FadeComponent from "../../components/FadeComponent";
import Hero from "./sections/Hero";
import IntroEasy from "./sections/IntroEasy";
import IntroSharing from "./sections/IntroSharing";
import Appreciate from "./sections/Appreciate";
import Benefits from "./sections/Benefits";
import Discover from "./sections/Discover";
import ArtEducation from "./sections/ArtEducation";
import CulturalData from "./sections/CulturalData";
import PageLinks from "./sections/PageLinks";

@page('vrmuseum')
export default class VRMuseum extends React.Component<{}> {
    render() {
        return (
            <React.Fragment>
                <FadeComponent.Context.Provider value={{duration: 200}}>
                    <Hero />
                    <IntroEasy />
                    <IntroSharing />
                    <Appreciate />
                    <Benefits />
                    <Discover />
                    <ArtEducation />
                    <CulturalData />
                    <PageLinks />
                </FadeComponent.Context.Provider>
            </React.Fragment>
        );
    }
}
