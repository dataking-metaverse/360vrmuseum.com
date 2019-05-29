import React from "react";
import Slider from "react-slick";
import * as R from "ramda";

import gridTheme from "~/styling/gridTheme";
import {
    Root,
    Inner,
    SlideWrapper,
} from "./styled";
import useRoute from "~/hooks/useRoute";
import useAxios from "~/hooks/useAxios";
import useTheme from "~/hooks/useTheme";
import Showcase from "~/models/Showcase";

import type {ElementType} from "react";

type Props = {|

|};

const basicSlickSettings = {
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

const slidesToShow = {
    lg: 4,
    md: 2,
    xs: 1,
};

const useSlickSettings = function() {
    const theme = useTheme();
    // const {styledBootstrapGrid} = theme;

    const responsive = R.mapObjIndexed((value: number, key: string) => ({
        breakpoint: theme
    }))(slidesToShow);

    return R.pipe(
        R.identity
    )(basicSlickSettings);
};

const mapSlides: (showcase: ?Array<{}>) => Array<Node> = R.ifElse<Array<Showcase>, Array<ElementType>, null>(
    R.allPass([
        R.complement(R.isNil),
        Array.isArray,
    ]),
    R.addIndex(R.map)((showcaseObject: {}, index: number) => {
        const showcase = Showcase.constructByData(showcaseObject);
        const Poster = showcase.generatePosterLink();
        return <SlideWrapper key={index}><Poster /></SlideWrapper>;
    }),
    R.always<null>(null),
);

const useSlides = R.pipe(
    R.always('api.my-account.view-history'),
    useRoute,
    useAxios,
    R.prop('data'),
    mapSlides
);

export default function ViewHistorySlider(props: Props) {
    const slides = useSlides();
    const slickSettings = useSlickSettings();
    return (
        <Root>
            <Inner>
                <Slider {...slickSettings}>{slides}</Slider>
            </Inner>
        </Root>
    );
};
