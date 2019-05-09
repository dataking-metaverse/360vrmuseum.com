import React from "react";
import {Container, Row, Col} from "styled-bootstrap-grid";
import styled from "styled-components";

import MuseumGridItems from "./MuseumGridItems";


type Props = {

};

const Root = styled.div`
    background-color: #f2f2f2;
    padding-top: 10rem;
`;

function MuseumsGrid(props: Props) {
    return (
        <Root>
            <Container>
                <Row justifyContent="center">
                    <MuseumGridItems />
                </Row>
            </Container>
        </Root>
    );
}

export default MuseumsGrid;
