import React from "react";
import Slider from "react-slick";
import * as R from "ramda";

import Showcase from "~/models/Showcase";
import useRoute from "~/hooks/useRoute";
import useAxios from "~/hooks/useAxios";
import useTheme from "~/hooks/useTheme";
import {
    Root,
    Inner,
    SlideWrap,
} from "./styled";
import gridTheme from "../../../../styling/gridTheme";

type Props = {|

|};

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

const mapSlides = R.addIndex(R.map)((showcaseObject, index: number) => {
    const Slide = Showcase.constructByData(showcaseObject).generateThumbnail();
    return <SlideWrap data-king="jjj" key={index}><Slide /></SlideWrap>
});

const makeSlides = R.ifElse(
    R.allPass([
        R.complement(R.isNil),
        // R.all(R.is(Showcase)),
    ]),
    mapSlides,
    R.always(null)
);

const useSuggestions = R.pipe(
    R.always('api.my-account.view-suggestions'),
    useRoute,
    useAxios,
    R.prop('data'),
    R.tap(console.log),
    makeSlides
);

export default function SuggestionsSlider(props: Props) {
    const suggestionsSlides = useSuggestions();
    return (
        <Root>
            <Inner>
                <Slider {...slickSettings}>{suggestionsSlides}</Slider>
            </Inner>
        </Root>

    );
};
