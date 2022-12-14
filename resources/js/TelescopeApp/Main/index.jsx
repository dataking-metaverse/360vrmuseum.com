import React from "react";

import ShowcaseMenu from "./ShowcaseMenu";
import ShowcaseContent from "./ShowcaseContent";
import ImageLightBox from "./ImageLightBox";
import {
    Root,
} from "./styled";


type Props = {|

|};

export default function Main(props: Props) {
    return (
        <Root>
            <ShowcaseMenu />
            <ShowcaseContent />
            <ImageLightBox />
        </Root>
    );
};
