import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import Button from "../../../components/Button";
import FadeInComponent from "../../../components/FadeInComponent";


type Props = {|
    text: {|
        toMainPage: string,
        toContactPage: string,
    |},
|};

const Root = styled(Container)`
    text-align: center;
    margin-bottom: 10rem;
`;

const Spacer = styled.span`
    //

    &:before {
        content: ' ';
        display: inline-block;
        font-size: 1rem;
        width: 3rem;
    }
`;

function PageLinks(props: Props) {
    const {text} = props;
    return (
        <Root>
            {/** this transition should delay for a bit more to be locking good **/}
            <FadeInComponent delay={1000}>
                <div>
                    <Button type="primary">{text.toMainPage}</Button>
                    <Spacer>&nbsp;</Spacer>
                    <Button type="secondary">{text.toContactPage}</Button>
                </div>
            </FadeInComponent>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'pageLinks']),
    })),
)(PageLinks);
