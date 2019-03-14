import React from "react";

import page from "../../decorators/page";
import MuseumsGrid from "./MuseumsGrid";

@page
export default class NationalMuseum extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MuseumsGrid />
            </React.Fragment>
        );
    }
}
