import React, {useRef} from "react";
import styled from "styled-components";
import * as R from "ramda";

type Props = {
    open: boolean,
};

const Root = styled.div`
    height: ${R.prop('height')};
`;

const Inner = styled.div`
    
`;

const refRect = (ref: Ref)

const useRefRect = () => {
    const ref = useRef(null);

};

export default function Collapsable(props: Props) {
    const [height, innerRef] = useRefRect();

    return (
        <Root>
            <Inner>

            </Inner>
        </Root>
    );
}
