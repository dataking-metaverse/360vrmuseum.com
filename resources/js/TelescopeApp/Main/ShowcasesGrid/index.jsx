import React from "react";

import {
    Root,
    Poster,
} from "./styled";

import {emptyShowcase as emptyShowcaseAction, updateShowcase as updateShowcaseAction} from "../../redux/actionCreators";
import useReduxAction from "../../hooks/useReduxAction";
import useShowcase from "../../hooks/useShowcase";

import type {Showcases, Showcase} from "../../types";


type Props = {
    showcases: Showcases,
    activeShowcase: Showcase,
    updateShowcase: (showcase: Showcase) => void,
};

function hasSameMid(a: ?Showcase, b: ?Showcase): boolean {
    return Boolean(a) && Boolean(b) && typeof a.mid !== 'undefined' && a.mid === b.mid;
}

export default function ShowcasesGrid(props: Props) {
    const activeShowcase = useShowcase();
    const updateShowcase = useReduxAction(updateShowcaseAction);
    const emptyShowcase = useReduxAction(emptyShowcaseAction);
    return (
        <Root>
            {props.showcases.map((showcase: Showcase, index: number) => (
                <Poster
                    key={index}
                    src={showcase.poster}
                    active={hasSameMid(showcase, activeShowcase)}
                    onClick={() => {
                        if (hasSameMid(showcase, activeShowcase)) { emptyShowcase(); }
                        else { updateShowcase(showcase); }
                    }}
                />
            ))}
        </Root>
    );
}
