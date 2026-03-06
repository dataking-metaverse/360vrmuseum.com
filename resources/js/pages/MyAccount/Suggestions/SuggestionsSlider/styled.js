import styled from "styled-components";
import {media} from "styled-bootstrap-grid";
import * as R from "ramda";
import {themeVar} from "../../../../styling/theme/functions";


const lgWidth = 4.8;
const lgWidthHalf = lgWidth / 2;

const width = lgWidth / 2;
const widthHalf = width / 2;

const paddingX = R.always(6);
export const Root = styled.div`
    position: relative;
    
    ${media.sm`
        padding-left: ${paddingX}rem;
        padding-right: ${paddingX}rem;
    `}
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
            
            ${media.lg`
                width: ${lgWidth}rem;
                height: ${lgWidth}rem;
                margin-top: ${-lgWidthHalf}rem;
            `}
        }
        
        > .slick-prev {
            left: ${-width}rem;
            background-image: url(${arrowLeft});
            
            ${media.lg`
                left: ${-lgWidth}rem;
            `}
        }
        
        > .slick-next {
            right: ${-width}rem;
            background-image: url(${arrowRight});
            
            ${media.lg`
                right: ${-lgWidth}rem;
            `}
        }
    }
`;

const gutterWidth = R.path(['theme', 'styledBootstrapGrid', 'container', 'padding']);
const padding = R.pipe<number, number>(gutterWidth, R.divide(R.__, 2));
export const SlideWrap = styled.div`
    padding: ${padding}px;
`;

