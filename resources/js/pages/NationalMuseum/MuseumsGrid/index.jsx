import React from "react";
import {Container, Row, Col} from "styled-bootstrap-grid";
import * as R from "ramda";
import styled from "styled-components";

import MuseumGridItems from "./MuseumGridItems";


type Props = {

};

const Root = styled.div`
    background-color: #f2f2f2;
    padding-top: 10rem;
`;

const MuseumGridContainer = styled(Container)`
    
`;


function MuseumsGrid(props: Props) {


    return (
        <Root>
            <MuseumGridContainer>
                <Row>
                    <MuseumGridItems />
                </Row>
            </MuseumGridContainer>
        </Root>
    );
}

export default R.compose(
    R.identity
)(MuseumsGrid);
