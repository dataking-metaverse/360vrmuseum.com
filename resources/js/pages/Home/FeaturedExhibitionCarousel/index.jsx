import React, {useState, useContext} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {connect} from "react-redux";
import * as R from "ramda";

import useCleanEffect from "../../../hooks/useCleanEffect";
import ModelsContext from "../../../contexts/ModelsContext";
import MuseumTitle from "../../../components/MuseumTitle";
import {themeVar} from "../../../styling/theme/functions";
import Slide from "./Slide";
import HomeContainer from "../HomeContainer";
import gridTheme from "../../../styling/gridTheme";


type Props = {

};

const Root = styled.div`
    background-color: #ededed;
`;

const arrowWidth = 2;
const arrowHeight = 3;
const arrowLineWidth = .2;
const ContainerCustom = styled(HomeContainer)`
    background-color: #ededed;
`;

const SliderWrapper = styled.div`
    margin-left: -${R.prop('padding')};
    margin-right: -${R.prop('padding')};
    
    > .slick-slider {
        //

        > .slick-arrow {
            position: absolute;
            top: 50%;
            width: ${arrowWidth}rem;
            height: ${arrowHeight}rem;
            margin-top: -${arrowWidth / 2}rem;
            background-color: transparent;
            border: none;
            font-size: 0;
            z-index: 1;
            cursor: pointer;
            
            &:before, &:after {
                content: '';
                position: absolute;
                left: 0;
                width: ${arrowLineWidth}rem;
                height: 50%;
                transform-origin-x: 0%;
                background-color: ${themeVar('colors.basic.white')};
            }
            
            &:before {
                top: 0;
                border-top-left-radius: ${arrowLineWidth / 2}rem;
                border-top-right-radius: ${arrowLineWidth / 2}rem;
                transform-origin-y: 100%;
                transform: rotate(45deg);
            }
            
            &:after {
                bottom: 0;
                border-bottom-left-radius: ${arrowLineWidth / 2}rem;
                border-bottom-right-radius: ${arrowLineWidth / 2}rem;
                transform-origin-y: 0%;
                transform: rotate(-45deg);
            }
        }
        
        > .slick-prev {
            left: 2rem;
        }
        
        > .slick-next {
            right: 2rem;
            transform: rotate(180deg);
        }
    }
`;

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

const slidePadding = '.85rem';

function FeaturedExhibitionCarousel(props: Props) {
    const {text, exhibitions} = props;
    const [showcaseElements, setShowcaseElements] = useState([]);
    const {Showcases} = useContext(ModelsContext);

    useCleanEffect(hasUnmounted => {
        Showcases.get(exhibitions).then(R.pipe(
            Array.from,
            R.map(showcase => (
                <Slide
                    key={showcase.getAttribute('mid')}
                    padding={slidePadding}
                >
                    {React.createElement(showcase.generatePosterLink({fullWidth: true}))}
                </Slide>
            )),
            R.when(
                R.complement(hasUnmounted),
                setShowcaseElements
            )
        ));
    }, []);

    return (
        <Root>
            <ContainerCustom>
                <MuseumTitle>{text.title}</MuseumTitle>
                <br /><br />
                <SliderWrapper padding={slidePadding}>
                    <Slider {...slickSettings}>
                        {showcaseElements}
                    </Slider>
                </SliderWrapper>
            </ContainerCustom>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'home', 'nationalMuseum', 'text']),
            exhibitions: R.path(['config', 'pages', 'home', 'featuredExhbitionCarousel']),
        }),
        R.always({})
    )
)(FeaturedExhibitionCarousel);
