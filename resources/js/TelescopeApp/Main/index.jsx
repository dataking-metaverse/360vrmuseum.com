import React from "react";

import ShowcaseMenu from "./ShowcaseMenu"
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
            </Container>
        </Root>
    );
};
