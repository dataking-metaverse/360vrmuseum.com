import React from "react";
import {Row, Col} from "styled-bootstrap-grid";

import useLangPath from "~/hooks/useLangPath";
import Showcase from "~/models/Showcase";
import {
    Root,
    Title,
    Subtitle,
    Details,
    Link,
} from "./styled";

type Props = {|
    showcase: Showcase,
|};

export default function ShowcaseSearchResult(props: Props) {
    const {showcase} = props;
    const text = useLangPath(['pages', 'search']);
    const {
        eng_title: englishTitle,
        kor_title: koreanTitle,
        date,
    } = showcase.toObject();

    const Component = showcase.generatePosterCard();

    return <Component />;

    return (
        <Root>
            <Title>{koreanTitle}</Title>
            <Subtitle>{englishTitle} | {koreanTitle}</Subtitle>
            <br /><br />
            <Details>
                <Row>
                    <Col col={10}>
                        {date} | {'TODO'}
                    </Col>
                    <Col col={2} className="text-right">
                        <Link to={showcase.route()}>{text.readMore} &raquo;</Link>&nbsp;&nbsp;
                    </Col>
                </Row>
            </Details>
        </Root>
    );
}
