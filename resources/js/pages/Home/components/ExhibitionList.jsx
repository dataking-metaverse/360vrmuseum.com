import React, {useState, useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";
import {Row, Col} from "styled-bootstrap-grid";

import useCleanEffect from "../../../hooks/useCleanEffect";
import ModelsContext from "../../../contexts/ModelsContext";
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
    const {Showcases} = useContext(ModelsContext);

    useCleanEffect(hasUnmounted => {
        Showcases.get(showcases).then(R.pipe(
            R.invoker(0, 'sortDateDesc'),
            Array.from,
            R.map(showcase => (
                <Col key={showcase.getAttribute('mid')} lg={4} className="mb-5">
                    {React.createElement(showcase.generateCard())}
                </Col>
            )),
            R.when(
                R.complement(hasUnmounted),
                setShowcasesCard
            )
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
