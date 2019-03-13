import React from "react";

import page from "../../decorators/page";

import HeroCarousel from "./HeroCarousel";
import FeaturedExhibitionCarousel from "./FeaturedExhibitionCarousel";
import SpecialExhibition from "./SpecialExhibition";
import SearchBox from "../../components/SearchBox";
type Props = {

};


@page
export default class Home extends React.PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <HeroCarousel />
                {/*<FeaturedExhibitionCarousel />*/}
                {/*<SpecialExhibition />*/}
                <SearchBox />
            </React.Fragment>
        );
    }
}
