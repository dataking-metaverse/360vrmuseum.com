import React from "react";
import styled from "styled-components";

import HR from "~/TelescopeApp/components/HR";
import DatakingLogoBase from "~/TelescopeApp/components/DatakingLogo";


type Props = {|  |};

const SexyFooterLine = styled(HR.Black)`
    margin-bottom: 1.7rem;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

const DatakingLogo = styled(DatakingLogoBase)`
    width: 20.9rem;
    height: 3.3rem;
`;

const CopyrightStatement = styled.div`
    //
`;

export default function Footer(props: Props) {
    return (
        <React.Fragment>
            <SexyFooterLine />
            <Wrap>
                <DatakingLogo />
                <CopyrightStatement>
                    Copyright ©dataking.Inc 2019 All rights reserved.
                </CopyrightStatement>
            </Wrap>
        </React.Fragment>
    );
};
