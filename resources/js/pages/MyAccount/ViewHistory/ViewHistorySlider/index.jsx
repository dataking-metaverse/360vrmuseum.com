import React from "react";
import Slider from "react-slick";
import * as R from "ramda";

import gridTheme from "../../../../styling/gridTheme";
import {
    Root,
    Inner,
    SlideWrapper,
} from "./styled";
import useRoute from "../../../../hooks/useRoute";
import useAxios from "../../../../hooks/useAxios";
import Showcase from "../../../../models/Showcase";



const slickSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

const generateSlides: (showcase: ?Array<{}>) => Array<Node> = R.ifElse(
    R.complement(R.isNil),
    R.addIndex(R.map)((showcaseObject: {}, index: number) => {
        const showcase = Showcase.constructByData(showcaseObject);
        const Poster = showcase.generatePosterLink();
        return <SlideWrapper key={index}><Poster /></SlideWrapper>;
    }),
    R.always(null),
);

export default function ViewHistorySlider(props: Props) {
    // TODO : udpate it to be the real history
    const historyRoute = useRoute('api.my-account.view-history');
    const [viewHistory] = useAxios(historyRoute);
    if (!Array.isArray(viewHistory)) { return null; }
    const slides = generateSlides([...viewHistory, ...viewHistory, ...viewHistory, ...viewHistory, ...viewHistory, ...viewHistory]);
    return (
        <Root>
            <Inner>
                <Slider {...slickSettings}>{slides}</Slider>
            </Inner>
        </Root>
    );
};
