import styled from "styled-components";
import {media} from "styled-bootstrap-grid";

const ShowcaseStatement = styled.div`
    color: #7a7a7a;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    
    
    ${media.md`
        text-align: right;
    `}
`;

export default ShowcaseStatement;
