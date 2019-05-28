import React from "react";
import Slider from "react-slick";
import * as R from "ramda";

import Showcase from "~/models/Showcase";
import useRoute from "~/hooks/useRoute";
import useAxios from "~/hooks/useAxios";

type Props = {|

|};

const mapSlides = R.map((showcase: Showcase) => (
    null
));

const makeSlides = R.ifElse(
    R.allPass([
        R.complement(R.isNil),
        R.all(R.is(Showcase)),
    ]),
    mapSlides,
    R.always(null)
);

const useSuggestions = R.pipe(
    R.always('api.my-account.view-suggestions'),
    useRoute,
    useAxios,
    R.nth<{}, Array<{}>>(0),
    makeSlides
);

export default function SuggestionsSlider(props: Props) {
    const suggestionsSlides = useSuggestions();
    return (
        <Slider>
            {suggestionsSlides}
        </Slider>
    );
};
