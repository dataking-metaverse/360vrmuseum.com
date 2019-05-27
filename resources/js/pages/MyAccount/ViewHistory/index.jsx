import React from "react";
import Slider from "react-slick";

import useLangPath from "../../../hooks/useLangPath";
import Card from "../../../components/Card";


type Props = {

}

export default function ViewHistory(props: Props) {
    const lang = useLangPath(['pages', 'my-account', 'viewHistory']);
    return (
        <Card header={lang.title}>
            <ViewHistorySlider />
        </Card>
    );
}
