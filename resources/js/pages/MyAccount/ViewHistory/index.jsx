import React from "react";

import useLangPath from "../../../hooks/useLangPath";
import Card from "../../../components/Card";
import ViewHistorySlider from "./ViewHistorySlider";


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
