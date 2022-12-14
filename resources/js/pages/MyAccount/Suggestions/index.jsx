import React from "react";

import Card from "~/components/Card";
import useLangPath from "~/hooks/useLangPath";
import SuggestionsSlider from "./SuggestionsSlider";
import {
    Header
} from "./styled";

type Props = {|

|};

type Lang = {|
    title: string,
|};

export default function Suggestions(props: Props) {
    const lang: Lang = useLangPath(['pages', 'my-account', 'suggestions']);
    return (
        <Card header={<Header>{lang.title}</Header>}>
            <SuggestionsSlider />
        </Card>
    );
};
