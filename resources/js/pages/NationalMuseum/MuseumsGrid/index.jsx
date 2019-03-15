import React from "react";
import {Container, Row, Col} from "styled-bootstrap-grid";
import * as R from "ramda";

import MuseumGridItems from "./MuseumGridItems";


type Props = {

};


function MuseumsGrid(props: Props) {


    return (
        <Container>
            <Row>
                <MuseumGridItems />
            </Row>
        </Container>
    );
}

export default R.compose(
    R.identity
)(MuseumsGrid);
