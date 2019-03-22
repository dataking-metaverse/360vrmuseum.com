import React, {type AbstractComponent} from "react";
import Page from "../components/Page";
import {Helmet} from "react-helmet"

type Props = {

};

const page = pageName => (Component: AbstractComponent<Props>) => (props: Props) => (
    <Page pageName={pageName}>
        <Component {...props} />
    </Page>
);

export default page;
