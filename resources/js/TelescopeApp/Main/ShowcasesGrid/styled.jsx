import styled from "styled-components";
import * as R from "ramda";

import half from "../../functions/half";

const gutterWidth = R.path(['theme', 'showcasesGrid', 'gutterWidth']);
const gutterWidthHalf = R.pipe(gutterWidth, half);

export const Root = styled.div`
    margin-left: -${gutterWidthHalf}rem;
    margin-right: -${gutterWidthHalf}rem;
    overflow: hidden;
`;
