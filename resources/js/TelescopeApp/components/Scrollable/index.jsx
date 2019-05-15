import styled from "styled-components";
import * as R from "ramda";

const height = R.pipe(
    R.path(['theme', 'scrollable', 'height']),
    R.when(
        R.complement(Boolean),
        R.always('auto')
    )
);
const Scrollable = styled.div`
    position: relative;
    height: ${height}rem;
    overflow: auto;
`;

export default Scrollable;
