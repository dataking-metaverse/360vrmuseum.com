import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import * as R from "ramda";
import {Row, Col} from "styled-bootstrap-grid";

import Showcases from "../../../models/Showcases";
import MuseumTitle from "../../../components/MuseumTitle";
import HomeContainer from "../HomeContainer";


type Props = {
    showcases: Array<string>,
};

const Root = styled(HomeContainer)`
    background-color: #f4f4f4;
`;


function ExhibitionList(props: Props) {
    const {title, showcases} = props;
    const [showcasesCard, setShowcasesCard] = useState([]);
    useEffect(() => {
        Showcases.get(showcases).then(R.pipe(
            Array.from,
            R.map(showcase => (
                <Col key={showcase.getAttribute('mid')} lg={4} className="mb-5">
                    {React.createElement(showcase.generateCard())}
                </Col>
            )),
            setShowcasesCard
        ));
    }, []);
    return (
        <Root>
            <MuseumTitle>{title}</MuseumTitle>
            <br /><br />
            <Row>
                {showcasesCard}
            </Row>
        </Root>
    );
}

export default R.compose(
    R.identity
)(ExhibitionList);
