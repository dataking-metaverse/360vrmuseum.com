import React, {useState, useRef} from "react";
import styled from "styled-components";
import * as R from "ramda";

import Showcase from "~/models/Showcase";
import {Image as ImageStyled, QuickView} from "./styled";
import useLangPath from "~/hooks/useLangPath";
import useIntersectionObserver from "~/hooks/useIntersectionObserver";

import type {Type} from "./index";

type Props = {|
    showcase: Showcase,
    type: Type,
|};


const makeImageMap = R.applySpec({
    thumbnail: R.path(['props', 'thumbnail']),
    poster: R.invoker(0, 'getPoster'),
});

const Thumbnail = ImageStyled;

const Poster = styled(ImageStyled)`
    background-position: 50% 0%;
    
    &:before {
        padding-top: 100%;
    }
`;

const componentMap = {
    thumbnail: Thumbnail,
    poster: Poster,
};

export default function Image(props: Props) {
    const {showcase, type} = props;
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();
    
    useIntersectionObserver(ref, () => {
        setIsVisible(true);
    });

    const imageMap = makeImageMap(showcase);
    const image = isVisible ? imageMap[type] : null;
    const showcaseRoute = showcase.route();
    const quickView = useLangPath(['common', 'quickView']);
    const Component = componentMap[type];
    
    return (
        <Component ref={ref} image={image}>
            <QuickView to={showcaseRoute}>{quickView}</QuickView>
        </Component>
    );
};
