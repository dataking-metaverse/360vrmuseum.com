import styled from "styled-components";
import * as R from "ramda";

const half = R.divide(R.__, 2);

const gutterWidth = R.path(['theme', 'showcasesGrid', 'gutterWidth']);
const gutterWidthHalf = R.pipe(gutterWidth, half);

export const Root = styled.div`
    margin-left: -${gutterWidthHalf}rem;
    margin-right: -${gutterWidthHalf}rem;
    overflow: hidden;
`;
