import React from "react";

import ShowcaseMenu from "./ShowcaseMenu";
import ShowcaseContent from "./ShowcaseContent";
import ImageLightBox from "./ImageLightBox";
import {
    Root,
    Container,
} from "./styled";


type Props = {|

|};

export default function Main(props: Props) {
    return (
        <Root>
            <Container>
                <ShowcaseMenu />
                <ShowcaseContent />
                <ImageLightBox />
            </Container>
        </Root>
    );
};
