import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import {
    Root,
    Poster,
} from "./styled";

import type {Showcases, Showcase} from "../../types";
import {updateShowcase} from "../../redux/actionCreators";


type Props = {
    showcases: Showcases,
    activeShowcase: Showcase,
    updateShowcase: (showcase: Showcase) => void,
};

function hasSameMid(a: ?Showcase, b: ?Showcase): boolean {
    return a && b && typeof a.mid !== 'undefined' && a.mid === b.mid;
}

function ShowcasesGrid(props: Props) {
    const {activeShowcase, updateShowcase} = props;
    return (
        <Root>
            {props.showcases.map((showcase: Showcase, index: number) => (
                <Poster
                    key={index}
                    src={showcase.poster}
                    active={hasSameMid(showcase, activeShowcase)}
                    onClick={() => updateShowcase(showcase)}
                />
            ))}
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            activeShowcase: R.prop('showcase'),
        }),
        R.applySpec({updateShowcase})
    )
)(ShowcasesGrid);
