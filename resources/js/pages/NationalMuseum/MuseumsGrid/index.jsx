import React from "react";
import {Container, Row, Col} from "styled-bootstrap-grid";

type Props = {

};

function MuseumsGrid(props: Props) {
    return (
        <Container>
            <Row>
                {museumGridItems}
            </Row>
        </Container>
    )
}

export default R.compose(
    R.identity
)(MuseumsGrid);
