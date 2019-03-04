import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import type {Element} from "react";

type Props = {
    title: string,
    intro: string,
    html: ?boolean,
}

const Title = styled.div``;
const Intro = styled.div``;

const TitleAndIntro: (props: Props) => Element = R.ifElse(
    R.pathEq(['html'], true),
    props => (
        <React.Fragment>
            <Title dangerouslySetInnerHTML={{__html: props.title}} />
            <Intro dangerouslySetInnerHTML={{__html: props.intro}} />
        </React.Fragment>
    ),
    props => (
        <React.Fragment>
            <Title>{props.title}</Title>
            <Intro>{props.intro}</Intro>
        </React.Fragment>
    ),
);

export default TitleAndIntro;
