import React from "react";
import styled from "styled-components";

import SearchSupplier from "~/sideEffectComponents/SearchSupplier";
import useLangPath from "~/hooks/useLangPath";

type Props = {|  |};

const Root = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Input = styled(SearchSupplier.Input)`
    width: 20.3rem;
    line-height: 1;
    padding: 1.4rem 2.4rem;
    border: none;
    border-radius: .5rem;
`;

export default function SearchWidget(props: Props) {
    const searchText = useLangPath(['common', 'search']);
    return (
        <Root>
            <SearchSupplier>
                <Input placeholder={searchText} />
            </SearchSupplier>
        </Root>
    );
};
