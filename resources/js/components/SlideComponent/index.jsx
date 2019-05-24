import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import type {Node} from "react";

type Props = {
    open: boolean,
    children: Node,
};

type State = {
    wrapperHeight: ?number | void,
};

const Root = styled.div`
    transition: height .4s;
    overflow: hidden;
`;

const Wrapper = styled.div`
`;



export default class SlideComponent extends React.Component<Props, State> {

    wrapperRef = React.createRef();

    hasUnmounted = false;

    state: State = {
        wrapperHeight: null,
    };

    componentDidMount() {
        this.checkWrapperHeight();
    }

    componentWillUnmount() {
        this.hasUnmounted = true;
    }

    restProps: () => {} = R.pipe(
        R.always(this),
        R.prop('props'),
        R.omit(['children'])
    );

    checkWrapperHeight = () => {
        if (this.hasUnmounted) { return; }

        this.setState(prevState => {
            const node: ?Element = this.wrapperRef.current;
            if (!node) { return {}; }
            const newHeight = node.getBoundingClientRect().height;
            return prevState.wrapperHeight !== newHeight ? { wrapperHeight: newHeight } : {};
        });
    };

    getStyle() {
        return {height: this.props.open ? this.state.wrapperHeight : 0};
    }

    render() {
        return (
            <Root {...this.restProps()} style={this.getStyle()}>
                <Wrapper ref={this.wrapperRef}>
                    {this.props.children}
                </Wrapper>
            </Root>
        );
    }
}
