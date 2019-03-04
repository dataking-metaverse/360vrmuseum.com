import React from "react";
import Slider from "react-slick";

import type {Element} from "react";
import Slide from "./Slide";


type Props = {
    // children: Element,
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
                {[...(new Array(3))].map((_, index) => (
                    <Slide
                        key={index}
                        backgroundImage="https://placehold.it/1920x600"
                        title="Next-generation museum\n360 VRMuseum"
                        subtitle=''
                    />
                ))}
            </Slider>
        );
    }
}
