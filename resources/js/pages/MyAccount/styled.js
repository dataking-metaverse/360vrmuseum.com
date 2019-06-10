import styled from "styled-components";
import {media} from "styled-bootstrap-grid";


export const Root = styled.div`
    padding-top: 10.2rem;
    padding-bottom: 10.2rem;
`;

export const Row1 = styled.div`

  ${media.sm`
        display: table;
        width: 100%;
    
        > * {
            display: table-cell;
        }
  `}
`;

Row1.Col1 = styled.div`
    //

    ${media.sm`
        width: 39.6rem;
    `}
    
`;

Row1.Col2 = styled.div`
    //
    
    ${media.sm`
        padding-left: 5.4rem;
    `}
`;
