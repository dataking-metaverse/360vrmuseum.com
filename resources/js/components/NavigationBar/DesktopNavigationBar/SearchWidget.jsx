import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import SearchSupplier from "~/sideEffectComponents/SearchSupplier";
import useLangPath from "~/hooks/useLangPath";
import useBooleanState from "../../../hooks/useBooleanState";

import type {Interpolation} from "styled-components";

type Props = {|  |};

type StyledPropActive = {
    active?: boolean,
};

const ifActiveElse = R.ifElse<[StyledPropActive], Interpolation, Interpolation>(R.prop<'active', StyledPropActive>('active'));

const rootColor: Interpolation = ifActiveElse(
    R.always('#ffffff'),
    R.always('transparent')
);
const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
    padding-left: .6rem;
    padding-right: .6rem;
    background-color: ${rootColor};
    transition: background-color .4s;
`;

const Icon = styled(SearchSupplier.Icon)`
    margin-left: .7rem;
    margin-right: .7rem;
    cursor: pointer;
`;

const inputWidth: Interpolation = ifActiveElse(
    R.always(16.3),
    R.always(0)
);
const inputPaddingX: Interpolation = ifActiveElse(
    R.always(2.4),
    R.always(0)
);
const Input = styled(SearchSupplier.Input)`
    width: ${inputWidth}rem;
    line-height: 1;
    border: none;
    border-radius: .5rem;
    background-color: transparent;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
    padding-left: ${inputPaddingX}rem;
    padding-right: ${inputPaddingX}rem;
    transition-property: width, padding-left, padding-right;
    transition-duration: .4s;
`;


const iconColor = R.ifElse(
    Boolean,
    R.always(undefined), // to use the components default value
    R.always('#ffffff')
);

export default function SearchWidget(props: Props) {
    const [active,,, toggleActive] = useBooleanState(false);
    const searchText = useLangPath(['common', 'search']);
    return (
            <Root active={active}>
                <SearchSupplier>
                    <Icon color={iconColor(active)} onClick={toggleActive} />
                    <Input active={active} placeholder={searchText} />
                </SearchSupplier>
            </Root>
    );
};
