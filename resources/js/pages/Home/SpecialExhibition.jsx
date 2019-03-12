import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import * as R from "ramda";
import {Container, Row, Col} from "styled-bootstrap-grid";

import Showcases from "../../models/Showcases";


type Props = {
    showcases: Array<string>,
};


const Root = styled.div`
    
`;

function SpecialExhibition(props: Props) {
    const [showcasesCard, setShowcasesCard] = useState([]);
    useEffect(() => {
        Showcases.get(props.showcases).then(R.pipe(
            Array.from,
            R.map(showcase => (
                <Col key={showcase.getAttribute('mid')} lg={4}>
                    {React.createElement(showcase.generateCard())}
                </Col>
            )),
            setShowcasesCard
        ));
    }, []);
    return (
        <Root>
            <Container>
                <Row>
                    {showcasesCard}
                </Row>
            </Container>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            showcases: R.path(['config', 'pages', 'home', 'specialExhibition']),
        }),
        R.always({})
    )
)(SpecialExhibition);
