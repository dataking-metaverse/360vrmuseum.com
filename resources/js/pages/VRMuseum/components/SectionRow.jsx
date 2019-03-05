import * as R from "ramda";
import smokeyBackground from "../../../decorators/smokeyBackground";
import styled from "styled-components";
import {Row} from "styled-bootstrap-grid";

const SectionRow = R.pipe(
    smokeyBackground,
    Component => styled(Component)`
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin-bottom: 14rem;
        min-height: 75rem;
`
)(Row);

export default SectionRow;
