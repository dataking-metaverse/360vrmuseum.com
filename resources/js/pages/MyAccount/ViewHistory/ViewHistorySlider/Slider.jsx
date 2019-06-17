import * as R from "ramda";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";

import useTheme from "~/hooks/useTheme";
import {themeVar} from "~/styling/theme/functions";


type Props = {|
    children: Array<ElementType>,
|};


const gutter = 3;
const gutterHalf = gutter / 2;

const lgWidth = 4.8;
const lgWidthHalf = lgWidth / 2;

const width = lgWidth / 2;
const widthHalf = width / 2;

const sizeToPercentage = R.divide(100);

const arrowLeft = themeVar('arrowLeft');
const arrowRight = themeVar('arrowRight');

const Root = styled.div`
    position: relative;
    margin-left: ${-gutterHalf}rem;
    margin-right: ${-gutterHalf}rem;
    padding-left: 3rem;
    padding-right: 3rem;
    
    ${media.lg`
        padding-left: 6rem;
        padding-right: 6rem;
    `}
`;

const Inner = styled.div`
    position: relative;
    white-space: nowrap;
    overflow: hidden;
`;

const Slidable = styled.div`
    position: relative;
    white-space: nowrap;
    transition: left .4s;
`;

const Slide = styled.div`
    display: inline-block;
    width: ${R.prop('percentage')}%;
    overflow: hidden;
`;

const PrevButton = styled.div`
    position: absolute;
    top: 50%;
    width: ${width}rem;
    height: ${width}rem;
    margin-top: ${-widthHalf}rem;
    border: none;
    cursor: pointer;
    font-size: 0;
    background-image: url(${arrowLeft});
    background-color: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    z-index: 1;
    left: 0;
    
    ${media.lg`
        width: ${lgWidth}rem;
        height: ${lgWidth}rem;
        margin-top: ${-lgWidthHalf}rem;
    `}
    
`;

const NextButton = styled(PrevButton)`
    left: initial;
    background-image: url(${arrowRight});
    right: 0;
`;


const useBreakpoints = R.pipe(
    useTheme,
    R.path(['styledBootstrapGrid', 'breakpoints'])
);


export default function Slider(props: Props) {
    const {children} = props;
    const [size, setSize] = useState(4);
    const [index, setIndex] = useState(0);
    const breakpoints = useBreakpoints();
    const percentage = sizeToPercentage(size);
    const length = children.length;
    const indexMax = length - size;
    const content = React.Children.map(children, (element, index) => <Slide key={index} percentage={percentage}>{element}</Slide>);

    function onWindowResize() {
        const width = window.innerWidth;
        if (width >= breakpoints.xl) { size !== 4 && setSize(4); }
        else if (width >= breakpoints.lg) { size !== 2 && setSize(2); }
        else if (width >= breakpoints.md) { size !== 3 && setSize(3); }
        else if (width >= breakpoints.sm) { size !== 2 && setSize(2); }
        else { size !== 1 && setSize(1); }
    }

    useEffect(() => {
        onWindowResize();
        window.addEventListener('resize', onWindowResize);
        return () => window.removeEventListener('resize', onWindowResize);
    }, []);

    function goPrev() { index > 0 && setIndex(R.dec); }
    function goNext() { index < indexMax && setIndex(R.inc); }

    return (
        <>
            <PrevButton onClick={goPrev} />
            <NextButton onClick={goNext} />
            <Root>
                <Inner>
                    <Slidable style={{ left: ((-index / size) * 100) + '%' }}>{content}</Slidable>
                </Inner>
            </Root>
        </>
    );
};
