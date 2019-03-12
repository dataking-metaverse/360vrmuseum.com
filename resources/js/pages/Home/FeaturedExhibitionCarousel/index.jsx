import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";
import {connect} from "react-redux";
import * as R from "ramda";

import MuseumTitle from "../../../components/MuseumTitle";
import Showcases from "../../../models/Showcases";
import {themeVar} from "../../../styling/theme/functions";
import Slide from "./Slide";


type Props = {

};

const Root = styled.div`
    background-color: #ededed;
`;

const arrowWidth = 2;
const arrowHeight = 3;
const arrowLineWidth = .2;
const ContainerCustom = styled.div`
    padding: 3.2rem 1.5rem;
    max-width: 130rem;
    margin: auto;
    background-color: #ededed;
    
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
};

function FeaturedExhibitionCarousel(props: Props) {
    const {exhibitions} = props;
    const [showcaseElements, setShowcaseElements] = useState([]);

    useEffect(() => {
        Showcases.get(exhibitions).then(R.pipe(
            Array.from,
            R.map(showcase => (
                <Slide
                    key={showcase.getAttribute('mid')}
                    href={`#${showcase.getAttribute('mid')}`}
                >
                    {React.createElement(showcase.generatePoster())}
                </Slide>
            )),
            setShowcaseElements
        ));
    }, []);

    return (
        <Root>
            <ContainerCustom>
                <MuseumTitle>국립박물관</MuseumTitle>
                <br />
                <Slider {...slickSettings}>
                    {showcaseElements}
                </Slider>
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
