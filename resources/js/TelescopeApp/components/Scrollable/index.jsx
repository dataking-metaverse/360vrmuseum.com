import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import type {Ref, Node} from "react";

type Props = {|
    children: Node,
|};

const height = R.pipe(
    R.path(['theme', 'scrollable', 'height']),
    R.when(
        R.complement(Boolean),
        R.always('auto')
    )
);
const Root = styled.div`
    position: relative;
    height: ${height}rem;
    overflow: auto;
`;

export default class Scrollable extends React.Component<Props> {

    rootRef = React.createRef();

    jumpToTop = R.pipe(
        R.always(this),
        R.path(['rootRef', 'current']),
        R.when(
            R.is(Element),
            el => el.scrollTop = 0 // !!! side effect performed here
        )
    );

    render() {
        return (
            <Root ref={this.rootRef}>
                {this.props.children}
            </Root>
        );
    }
};
