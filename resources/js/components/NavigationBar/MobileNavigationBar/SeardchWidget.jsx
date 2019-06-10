import React from "react";
import styled from "styled-components";

import useLangPath from "~/hooks/useLangPath";
import SearchSupplier from "~/sideEffectComponents/SearchSupplier";
import {themeVar} from "~/styling/theme/functions";

type Props = {|
    onSubmitFinished: (event: Event) => void,
|};

const backgroundColor = themeVar('components.navigationBar.background');
const Root = styled.div`
    background-color: ${backgroundColor};
    padding: .2rem 3rem 2rem;
`;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
    background-color: #585858;
    padding-left: .6rem;
    padding-right: .6rem;
`;

const Icon = styled(SearchSupplier.Icon)`
    margin-left: .7rem;
    margin-right: .7rem;
`;

const Input = styled(SearchSupplier.Input)`
    width: 29.3rem;
    max-width: 100%;
    padding: .8rem .9rem;
    background-color: transparent;
    font-size: 1.5rem;
    line-height: normal;
    color: #ffffff;
    border: none;
    flex-grow: 1;
`;

export default function SeardchWidget(props: Props) {
    const placeholder = useLangPath(['common', 'search']);
    return (
        <Root>
            <SearchSupplier onSubmitFinished={props.onSubmitFinished}>
                <Flex>
                    <Icon />
                    <Input placeholder={placeholder} />
                </Flex>
            </SearchSupplier>
        </Root>
    );
};
