import React from "react";
import NoSSR from "../components/NoSSR";

const noSSR = Component => props => (
    <NoSSR>
        <Component {...props} />
    </NoSSR>
);

export default noSSR;
