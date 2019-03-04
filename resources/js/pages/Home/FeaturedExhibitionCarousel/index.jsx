import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";


type Props = {

};

const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
};

export default class FeaturedExhibitionCarousel extends React.Component<Props> {
    render() {
        return (
            <Slider {...slickSettings}>
                {[...(new Array(8))].map((_, index) => (
                    <Slide
                        key={index}
                        backgroundImage="https://placehold.it/300x200"
                    />
                ))}
            </Slider>
        );
    }
}
