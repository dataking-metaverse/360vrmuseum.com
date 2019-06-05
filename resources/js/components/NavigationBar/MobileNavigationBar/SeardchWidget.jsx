import React from "react";
import styled from "styled-components";

import useLangPath from "~/hooks/useLangPath";
import SearchSupplier, {Input as InputComponent} from "~/sideEffectComponents/SearchSupplier";
import {themeVar} from "~/styling/theme/functions";

type Props = {|  |};

const backgroundColor = themeVar('components.navigationBar.background');
const Root = styled.div`
    background-color: ${backgroundColor};
    padding: 0 3rem 2rem;
`;

const Input = styled(InputComponent)`
    width: 29.3rem;
    max-width: 100%;
    padding: .8rem .9rem;
    border-radius: .3rem;
    background-color: #585858;
    font-size: 1.5rem;
    line-height: normal;
    color: #ffffff;
    border: none;
`;

export default function SeardchWidget(props: Props) {
    const placeholder = useLangPath(['common', 'search']);
    return (
        <Root>
            <SearchSupplier>
                <Input placeholder={placeholder} />
            </SearchSupplier>
        </Root>
    );
};
