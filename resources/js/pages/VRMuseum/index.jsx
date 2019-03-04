import React from "react";

import Hero from "./Hero";
import IntroEasy from "./IntroEasy";
import IntroSharing from "./IntroSharing";

export default class VRMuseum extends React.Component<{}> {
    render() {
        return (
            <React.Fragment>
                <Hero />
                <IntroEasy />
                <IntroSharing />
            </React.Fragment>
        );
    }
}
