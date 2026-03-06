import styled from "styled-components";

import {themeColor} from "../../../../styling/theme/functions";

const rootBorderColor = themeColor('grayscale.300');
export const Root = styled.div`
    position: relative;
    margin-bottom: 4.6rem;
    border-bottom: .2rem solid ${rootBorderColor};
`;

export const Table = styled.div`
    position: relative;
    display: table;
    width: 100%;
`;

export const Cell = styled.div`
    display: table-cell;
`;
