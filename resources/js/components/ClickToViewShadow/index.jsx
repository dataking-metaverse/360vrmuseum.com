import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import useLangPath from "~/hooks/useLangPath";


type Props = {|
    zIndex?: number,
    text?: text,
|};

const text = R.ifElse(
    R.has('text'),
    R.prop('text'),
    R.always('바로보기'),
);

const zIndex = R.ifElse(
    R.has('zIndex'),
    R.prop('zIndex'),
    R.always(1),
);

const ClickToViewShadowStyled = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${zIndex};
    background-color: rgba(27,27,27,0);
    transition: background-color .4s;

    &:hover {
        background-color: rgba(27,27,27,.6);
    }
    
    &:before {
        content: '${text}';
        color: #ffffff;
        opacity: 0;
    }
    
    &:hover:before {
        opacity: 1;
    }
`;

export default function ClickToViewShadow(props: Props) {
    const text = useLangPath(['common', 'quickView']);
    return (
        <ClickToViewShadowStyled text={text} {...props} />
    );
};
