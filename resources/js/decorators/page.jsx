import React, {type AbstractComponent} from "react";
import Page from "../components/Page";

type Props = {

};

const page = (Component: AbstractComponent<Props>) => (props: Props) => (
    <Page>
        <Component {...props} />
    </Page>
);

export default page;
