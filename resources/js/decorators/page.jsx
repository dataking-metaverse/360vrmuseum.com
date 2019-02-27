import React from "react";
import Page from "../components/Page";

const page = Component => props => (
    <Page>
        <Component {...props} />
    </Page>
);

export default page;
