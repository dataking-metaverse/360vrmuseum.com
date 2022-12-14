import React, {useState, useEffect, useContext} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {connect} from "react-redux";
import * as R from "ramda";

import useCleanEffect from "../../../hooks/useCleanEffect";
import Slide from "./Slide";

import type {Node} from "react";
import type {ResponsiveImage} from "../../../types";
import {themeVar} from "../../../styling/theme/functions";
import ModelsContext from "../../../contexts/ModelsContext";


type SlidesTextType = {
    title: string,
    subtitle: string,
    link: string,
    path: string,
};

type SlideType = SlidesTextType & ResponsiveImage;

type Props = {
    slides: Array<SlidesTextType>,
    slidesPhotos: Array<ResponsiveImage>,
    slidesMids: Array<string>,
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

const mergeArray = R.apply(R.zipWith(R.mergeLeft));

function renderSlide(slideItems: Array<SlideType>, activeSlide: number): Array<Node> {
    return slideItems.map((slide, index) => (
        <Slide
            key={index}
            index={index}
            image={R.pick(['src', 'srcSet'], slide)}
            title={slide.title}
            subtitle={slide.subtitle}
            active={activeSlide === index}
            path={slide.path}
        />
    ));
}

function HeroCarousel(props: Props) {
    const {slides, slidesPhotos, slidesMids} = props;
    const {Showcase} = useContext(ModelsContext);
    const [activeSlide, updateActiveSlide] = useState(null);
    const slideRoutes = R.map(R.pipe(
        Showcase.routeByMid,
        R.assoc('path', R.__, {})
    ))(slidesMids);
    const slideText = mergeArray([slides, slidesPhotos]);
    const slideItems = mergeArray([slideText, slideRoutes]);

    // initializing only
    useCleanEffect(hasUnmounted => {
        window.setTimeout(() => !hasUnmounted() && updateActiveSlide(0), 400);
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
            slidesMids: R.path(['config', 'pages', 'home', 'heroCarousel', 'showcases']),
        }),
        R.always({})
    ),
)(HeroCarousel);
