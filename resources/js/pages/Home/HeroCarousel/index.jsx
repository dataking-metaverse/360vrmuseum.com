import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {connect} from "react-redux";
import * as R from "ramda";

import Slide from "./Slide";

import type {Element, Node} from "react";
import type ResponsiveImage from "../../../types/ResponsiveImage";
import {themeVar} from "../../../styling/theme/functions";


type SlidesTextType = {
    title: string,
    subtitle: string,
    link: string,
};

type SlideType = SlidesTextType & ResponsiveImage;

type Props = {
    slides: Array<SlidesTextType>,
    slidesPhotos: Array<ResponsiveImage>,
};

const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
};


const arrowWidth = 8;
const Root = styled.div`
    > .slick-slider {
        //
        
        > .slick-arrow {
            display: none !important; // !!!!!
            position: absolute;
            top: 50%;
            font-size: 0;
            width: ${arrowWidth}rem;
            height: ${arrowWidth}rem;
            margin-top: -${arrowWidth / 2}rem;
            border: none;
            background-color: rgba(0,0,0,.3);
            z-index: 1;
            outline: none !important; // use of !important : to avoid overrings when event are applied
            cursor: pointer;
            transition: background-color .4s;
            
            &:hover {
                background-color: rgba(0,0,0,.6);
            }
            
            &:before, &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 2rem;
                height: 2px;
                margin-top: -1px;
                margin-left: -1rem;
                background-color: ${themeVar('colors.basic.white')};
            }
        
            &:before {
                transform: rotate(45deg);
            }
            
            &:after {
                transform: rotate(-45deg);
            }
        }
        
        > .slick-prev {
            //
            
            &:before, &:after {
                transform-origin: 0 50%;
            }
        }
        
        > .slick-next {
            right: 0;
            
            &:before, &:after {
                transform-origin: 100% 50%;
            }
        }
        
        &:hover > .slick-arrow {
            display: block !important;
        }
    }
`;

function renderSlide(slideItems: Array<SlideType>, activeSlide: number): Array<Node> {
    return slideItems.map((slide, index) => (
        <Slide
            key={index}
            image={R.pick(['src', 'srcSet'], slide)}
            title={slide.title}
            subtitle={slide.subtitle}
            active={activeSlide === index}
        />
    ));
}

function HeroCarousel(props: Props) {
    const {slides, slidesPhotos} = props;
    const [activeSlide, updateActiveSlide] = useState(null);
    const slideItems = R.apply(R.zipWith(R.mergeLeft))([slides, slidesPhotos]);

    useEffect(() => {
        window.setTimeout(() => updateActiveSlide(0), 400);
    }, [true]);

    return (
        <Root>
            <Slider
                {...slickSettings}
                afterChange={updateActiveSlide}
            >
                {renderSlide(slideItems, activeSlide)}
            </Slider>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            slides: R.path(['lang', 'pages', 'home', 'heroCarousel', 'slides']),
            slidesPhotos: R.path(['assets', 'home', 'heroImageSlides']),
        }),
        R.always({})
    ),
)(HeroCarousel);
