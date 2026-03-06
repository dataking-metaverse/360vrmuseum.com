import React from "react";

import page from "../../decorators/page";
import HeroCarousel from "./HeroCarousel";
import FeaturedExhibitionCarousel from "./FeaturedExhibitionCarousel";
import SpecialExhibition from "./SpecialExhibition";
import PermanentExhibition from "./PermanentExhibition";
import Search from "./Search";

type Props = {

};

@page("home")
export default class Home extends React.PureComponent<Props> {
    componentDidMount() {
        // Reset scroll to top
        window.scrollTo(0, 0);
        
        // Manual scroll restoration to prevent jumping issues with infinite scroll
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }

    componentWillUnmount() {
        // Restore default scroll restoration behavior when leaving home page
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'auto';
        }
    }

    render() {
        return (
            <React.Fragment>
                <HeroCarousel />
                <FeaturedExhibitionCarousel />
                <SpecialExhibition />
                <PermanentExhibition />
                <Search />
            </React.Fragment>
        );
    }
}
