import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import * as R from "ramda";


function changeBox(a) {
    console.log('1')
}

type Props = {
    checked: string,
    unchecked: string,
    onChange: () => void,
};


const Root = styled.span`
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 1;
    background-color: rgba(0,0,0,.2);
`;

const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    z-index: 1;
    opacity: .2;
`;

const Icon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${R.prop('backgroundImage')});
`;

const Yes = styled(Icon)`
    &.disabled {
        display: none;
    }
`;

const No = styled(Icon)`
    &.disabled {
        display: none;
    }
`;


function Checkbox(props: Props) {
    return (
        <Root>
            <Input onChange={props.onChange} type="checkbox" />
            <Yes backgroundImage={props.checked} />
            <No backgroundImage={props.unchecked} />
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        checked: R.path(['assets', 'login', 'checked']),
        unchecked: R.path(['assets', 'login', 'unchecked']),
    }))
)(Checkbox);