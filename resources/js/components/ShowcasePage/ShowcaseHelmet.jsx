import React, {useContext} from "react";

import Showcase from "../../models/Showcase";
import CustomHelmet from "../CustomHelmet";
import ShowcaseContext from "./ShowcaseContext";


export default function ShowcaseHelmet(props: Props) {
    const showcase = useContext(ShowcaseContext);
    if (!(showcase instanceof Showcase)) { return null; }
    return (
        <CustomHelmet title={`${showcase.getAttribute('kor_title')} | ${showcase.getAttribute('eng_title')}`} />
    );
}
