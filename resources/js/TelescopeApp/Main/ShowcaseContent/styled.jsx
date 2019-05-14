import styled from "styled-components";
import * as R from "ramda";

import {topBorder} from "../../styling/mixins";

const headerHeight = R.path(['theme', 'header', 'height']);
const headerMarginBottom = R.path(['theme', 'header', 'marginBottom']);
const marginTop = R.comparator(R.add, [headerHeight, headerMarginBottom]);
export const Root = styled.div`
    ${topBorder}
    margin-top: ${marginTop};
`;
