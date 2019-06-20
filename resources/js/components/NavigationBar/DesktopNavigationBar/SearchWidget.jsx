import React from "react";
import styled from "styled-components";

import SearchSupplier from "~/sideEffectComponents/SearchSupplier";
import useLangPath from "~/hooks/useLangPath";

type Props = {|  |};

const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
    background-color: #ffffff;
    padding-left: .6rem;
    padding-right: .6rem;
`;

const Icon = styled(SearchSupplier.Icon)`
    margin-left: .7rem;
    margin-right: .7rem;
`;

const Input = styled(SearchSupplier.Input)`
width: 16.3rem;
line-height: 1;
padding: 1.4rem 2.4rem;
border: none;
border-radius: .5rem;
background-color: transparent;
`;

export default function SearchWidget(props: Props) {
    const searchText = useLangPath(['common', 'search']);
    return (
            <Root>
                <SearchSupplier>
                    <Icon />
                    <Input placeholder={searchText} />
                </SearchSupplier>
            </Root>
    );
};
