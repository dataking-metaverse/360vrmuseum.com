import React from "react";
import Slider from "react-slick";


import gridTheme from "../../../../styling/gridTheme";
import {
    Root
} from "./styled";
import useSlides from "./useSlides";



const slickSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: gridTheme.breakpoints.lg - 1,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: gridTheme.breakpoints.md - 1,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: gridTheme.breakpoints.xs - 1,
            settings: {
                slidesToShow: 1,
            },
        }
    ]
};

export default function ViewHistorySlider(props: Props) {
    const slides = useSlides();
    return (
        <Root>
            <Slider {...slickSettings}>{slides}</Slider>
        </Root>
    );
};
