import React from "react";

import page from "../../decorators/page";
import MuseumsGrid from "./MuseumsGrid";

@page('national-museum')
export default class NationalMuseum extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MuseumsGrid />
            </React.Fragment>
        );
    }
}
