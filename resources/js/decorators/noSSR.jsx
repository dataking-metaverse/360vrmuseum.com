import React from "react";
import NoSSR from "../components/NoSSR";

export default const noSSR = Component => props => (
    <NoSSR>
        <Component {...props} />
    </NoSSR>
);
