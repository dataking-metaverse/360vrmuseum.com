import styled from "styled-components";
import {media} from "styled-bootstrap-grid";

import {themeVar} from "../../../styling/theme/functions";

const Title = styled.div`
    color: ${themeVar('colors.basic.darkerPurple')};
    margin-bottom: 4rem;
    font-size: 3rem;
    font-weight: 700;
    
    ${media.md`
        font-size: 5rem;
    `}
    
`;

export default Title;
