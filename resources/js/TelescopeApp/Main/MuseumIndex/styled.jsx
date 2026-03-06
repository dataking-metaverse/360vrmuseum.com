import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import half from "../../functions/half";

const gutterWidth = R.path<string, number>(['theme', 'showcasesGrid', 'gutterWidth']);
const gutterWidthHalf = R.pipe<[{}], number, number>(gutterWidth, half);

export const Root = styled.div`
    margin-left: -${gutterWidthHalf}rem;
    margin-right: -${gutterWidthHalf}rem;
`;
