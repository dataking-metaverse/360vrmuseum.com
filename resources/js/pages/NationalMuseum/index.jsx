import React from "react";

import page from "~/decorators/page";
import MuseumsGrid from "./MuseumsGrid";

type Props = {|  |};

function NationalMuseum(props: Props) {
    return ( <MuseumsGrid /> );
}

export default page('national-museum')(NationalMuseum);
