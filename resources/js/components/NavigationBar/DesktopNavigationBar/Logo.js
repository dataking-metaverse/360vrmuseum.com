import React from "react";

import {
    LogoLink,
} from "./styled";

type LogoProps = {
    to: string,
    logo: string,
};

export default function Logo(props: LogoProps) {
    return (
        <LogoLink to={props.to}>
            {props.logo}
        </LogoLink>
    );
};
