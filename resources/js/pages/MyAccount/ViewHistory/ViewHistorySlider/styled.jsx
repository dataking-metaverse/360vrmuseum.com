import styled from "styled-components";


const width = 4.8;
const widthHalf = width / 2;

export const Root = styled.div`
    display: block;
    padding-left: 6rem;
    padding-right: 6rem;
`;

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
            z-index: 1;
        }
        
        > .slick-prev {
            left: ${-width}rem;
        }
        
        > .slick-next {
            right: ${-width}rem;
        }
    }
`;

export const SlideWrapper = styled.div`
    
`;
