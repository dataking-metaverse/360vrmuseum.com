import {media} from "styled-bootstrap-grid";

import {themeVar} from "../../../styling/theme/functions";
import faded from "../../../helpers/faded";

const Intro = faded('div')`
    color: ${themeVar('colors.grayscale.600')};
    font-size: 1.4rem;
    
    ${media.md`
        font-size: 1.8rem;
    `}
`;

export default Intro;
