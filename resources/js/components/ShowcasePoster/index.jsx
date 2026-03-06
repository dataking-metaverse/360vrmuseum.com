import React, {useState, useRef} from "react";
import styled from "styled-components";
import * as R from "ramda";

import Showcase from "~/models/Showcase";
import ShowcaseThumbnail from "../ShowcaseThumbnail";
import useIntersectionObserver from "~/hooks/useIntersectionObserver";

type Props = {
    showcase: Showcase,
};

const ratio: number = 1.5;
const ratioPercentage: number = 100 * ratio;

const Root = styled.div`
    position: relative;
    display: block;
    background-color: #e0e0e0;
    background-image: ${R.ifElse(R.prop('background'), R.pipe(R.prop('background'), (bg) => `url(${bg})`), R.always('none'))};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    transition: background-image 0.5s ease-in-out;
    
    &:before {
        content: '';
        position: relative;
        display: block;
        padding-top: ${ratioPercentage}%;
    }
`;

export default function ShowcasePoster(props: Props) {
    const {showcase} = props;
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useIntersectionObserver(ref, () => {
        setIsVisible(true);
    });

    const poster = showcase.getAttribute('poster');

    // 1. case when there is actually a poster
    if (typeof poster === 'string') { 
        return ( <Root ref={ref} background={isVisible ? poster : null} /> ); 
    }

    // 2. case when there is no poster, but image thumbnail
    return ( <ShowcaseThumbnail ratio={ratio} showcase={showcase} /> );

};
