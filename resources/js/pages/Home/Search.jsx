import React from "react";
import styled from "styled-components";
import {Container, Col, Row} from "styled-bootstrap-grid";

import SearchBox from "../../components/SearchBox";


type Props = {||};


const Root = styled.div`
    background-color: #f4f4f4;
`;


function Search(props: Props) {
    return (
        <Root>
            <Container>
                <Row justifyContent="center">
                    <Col col={12} md={5}>
                        <SearchBox />
                    </Col>
                </Row>
                <br /><br />
            </Container>
        </Root>
    );
}

export default Search;
