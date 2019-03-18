import React from "react";
import styled from "styled-components";
import {Container as BootstrapContainer, Col, Row} from "styled-bootstrap-grid";

import SearchBox from "../../components/SearchBox";


type Props = {||};


const Container = styled(BootstrapContainer)`
    background-color: #f4f4f4;
`;


function Search(props: Props) {
    return (
        <Container>
            <Row justifyContent="center">
                <Col col={12} md={5}>
                    <SearchBox />
                </Col>
            </Row>
            <br /><br />
        </Container>
    );
}

export default Search;
