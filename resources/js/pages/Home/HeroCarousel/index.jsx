import React from "react";
import Slider from "react-slick";

import type {Element} from "react";


type Props = {
    children: Element,
};


const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default class HeroCarousel extends React.Component<Props> {
    render() {
        return (
            <Slider {...slickSettings}>

            </Slider>
        );
    }
}
