import React, {useState} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import * as R from "ramda";


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
    opacity: 0;
`;

const Icon = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    background-image: url(${R.prop('backgroundImage')});
    display: ${({show}) => show ? 'initial' : 'none'};
`;


function Checkbox(props: Props) {
    const [checked, setChecked] = useState(false);
    return (
        <Root>
            <Input
                checked={checked}
                onChange={() => {
                    setChecked(!checked);
                }}
                type="checkbox"
            />
            <Icon show={checked} backgroundImage={props.checked} />
            <Icon show={!checked} backgroundImage={props.unchecked} />
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        checked: R.path(['assets', 'login', 'checked']),
        unchecked: R.path(['assets', 'login', 'unchecked']),
    }))
)(Checkbox);
