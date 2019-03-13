import React from "react";


import type {ComponentType} from "react";

type Props = {
    open: boolean,
    component: ComponentType,
};

const Root = styled.div``;

export default function SlideComponent(props: Props) {
    return (
        <Root>
            todo
        </Root>
    );
}
