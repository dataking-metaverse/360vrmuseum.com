import React from "react";
import Slider from "react-slick";
import * as R from "ramda";

import {
    Root,
    Inner,
    SlideWrapper,
    EmptyMessage,
} from "./styled";
import useRoute from "~/hooks/useRoute";
import useAxios from "~/hooks/useAxios";
import useTheme from "~/hooks/useTheme";
import useLangPath from "~/hooks/useLangPath";
import Showcase from "~/models/Showcase";

import type {ElementType} from "react";

type Props = {|

|};

const slidesToShow = 4;
const slidesToShowResponsive = {
    lg: 4,
    md: 2,
    xs: 1,
};

const basicSlickSettings = {
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
};

const minusOne = R.subtract(R.__, 1);

const useSlickSettings = function() {
    const {styledBootstrapGrid} = useTheme();

    const responsive = R.o(
        R.values,
        R.mapObjIndexed((value: number, key: string) => ({
            breakpoint: minusOne(styledBootstrapGrid.breakpoints[key]),
            settings: {
                slidesToShow: value,
            },
        }))
    )(slidesToShowResponsive);

    return R.pipe(
        R.assoc('responsive', responsive)
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
    const lang = useLangPath(['pages', 'my-account', 'suggestions']);
    const showSlides = R.allPass([
        Array.isArray,
        R.complement(R.isEmpty)
    ])([]);
    // ])(slides);
    return (
        <Root>
            <Inner>
                {showSlides ? <Slider {...slickSettings}>{slides}</Slider> : <EmptyMessage>{lang.empty}</EmptyMessage>}
            </Inner>
        </Root>
    );
};
