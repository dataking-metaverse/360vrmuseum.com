import React from "react";

import page from "../../decorators/page";

import HeroCarousel from "./HeroCarousel";

type Props = {

};


@page
export default class Home extends React.PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <HeroCarousel />
            </React.Fragment>
        );
    }
}
