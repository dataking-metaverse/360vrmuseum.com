import styled from "styled-components";
import {themeVar} from "../../../../styling/theme/functions";


const width = 4.8;
const widthHalf = width / 2;

export const Root = styled.div`
    display: block;
    padding-left: 6rem;
    padding-right: 6rem;
`;

const arrowLeft = themeVar('arrowLeft');
const arrowRight = themeVar('arrowRight');
export const Inner = styled.div`
   position: relative;
    
    > .slick-slider {
        > .slick-arrow {
            position: absolute;
            top: 50%;
            width: ${width}rem;
            height: ${width}rem;
            margin-top: ${-widthHalf}rem;
            border: none;
            cursor: pointer;
            font-size: 0;
            background-color: transparent;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            z-index: 1;
        }
        
        > .slick-prev {
            left: ${-width}rem;
            background-image: url(${arrowLeft});
        }
        
        > .slick-next {
            right: ${-width}rem;
            background-image: url(${arrowRight});
        }
    }
`;

export const SlideWrapper = styled.div`
    
`;
