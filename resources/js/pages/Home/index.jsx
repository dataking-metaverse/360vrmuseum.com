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
