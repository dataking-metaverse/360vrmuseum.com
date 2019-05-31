import React from "react";
import Page from "../components/Page";

import type AbstractComponent from "react";

type Props = {

};

const page = (pageName: string) => (Component: AbstractComponent<Props>) => (props: Props) => (
    <Page pageName={pageName}>
        <Component {...props} />
    </Page>
);

export default page;
