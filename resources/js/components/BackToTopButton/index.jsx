import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {CSSTransition} from "react-transition-group";
import * as R from "ramda";
import {rgba} from "polished";


import {themeVar} from "../../styling/theme/functions";
import noSSR from "../../decorators/noSSR";


type Props = {
    portalId: string,
};

function atTop(): boolean {
    return window.document.documentElement.scrollTop === 0;
}

function scrollToTop() {
    requestScrollToTop(+(new Date()), (+(new Date())) + 800, window.document.documentElement.scrollTop);
}

// easeInOutQuint
const easing = function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t };

function requestScrollToTop(start, end, startedPosition) {
    const now = (+(new Date()));
    if (now > end) { window.scrollTo(0, 0); return; }
    window.requestAnimationFrame(() => requestScrollToTop(start, end, startedPosition));
    const currentTimePosition = easing((now - start) / (end - start));
    const currentPosition = startedPosition * (1 - currentTimePosition);
    window.scrollTo(0, currentPosition);
}

const buttonClassName = 'back-to-top-button';


const Root = styled.div`   
    position: fixed;
    bottom: 0;
    right: 7.5rem;
    width: 4.8rem;
    height: 3.5rem;
    border-radius: .4rem .4rem 0 0;
    background-color: ${rgba('#333', .9)};
    opacity: 0;
    z-index: 100000;
    cursor: pointer;
    transition: opacity .4s;
    
    &.${buttonClassName}-enter {
        z-index: 100000;
    }
        
    &.${buttonClassName}-enter, &.${buttonClassName}-enter-active, &.${buttonClassName}-enter-done {
        z-index: 100000;
        opacity: 1;
    }
    
    &.${buttonClassName}-exit, &.${buttonClassName}-exit-active {
        opacity: 0;
    }
    
    &.${buttonClassName}-exit-done {
        z-index: -1;
    }
    
    &:before, &:after {
        content: '';
        position: absolute;
        top: 40%;
        left: 50%;
        width: 30%;
        height: .2rem;
        background-color: ${themeVar('colors.basic.white')};
        transform-origin: 0% 0%;
    }
    
    &:before {
        transform: rotate(35deg);
    }
    
    &:after {
        transform: scaleX(-1) rotate(35deg);
    }
`;

function ButtonReal(props: {||}) {
    const [buttonShow, setButtonShow] = useState(false);
    const checkButtonShow = () => setButtonShow(!atTop());

    useEffect(() => {
        window.addEventListener('scroll', checkButtonShow);
        return () => window.removeEventListener('scroll', checkButtonShow);
    }, []);

    return (
        <CSSTransition
            in={buttonShow}
            timeout={400}
            delay={100}
            classNames={buttonClassName}
        >
            <Root onClick={scrollToTop} />
        </CSSTransition>
    );
}


function BackToTopButton(props: Props) {
    const {portalId} = props;
    return ReactDOM.createPortal((
        <ButtonReal />
    ), document.getElementById(portalId));
}

export default R.compose(
    noSSR
)(BackToTopButton);
