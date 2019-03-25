import React, {type AbstractComponent} from "react";
import Page from "../components/Page";

type Props = {

};

const page = pageName => (Component: AbstractComponent<Props>) => (props: Props) => (
    <Page pageName={pageName}>
        <Component {...props} />
    </Page>
);

export default page;
