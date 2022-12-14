import React, {useContext} from "react";
import styled from "styled-components";

import {themeColor} from "../../../../styling/theme/functions";
import useLangPath from "../../../../hooks/useLangPath";
import AccountEditStateContext from "../AccountEditStateContext";

type Props = {|
    onSaveButtonClick: () => void,
|};

const Root = styled.div`
    position: relative;
    margin-bottom: 4.8rem;
`;

const Title = styled.div`
    display: inline-block;
`;

const buttonBorderBottom = themeColor('grayscale.600');
const Button = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    padding-bottom: .2rem;
    border-bottom: .2rem solid ${buttonBorderBottom};
    cursor: pointer;
`;

export default function AccountInformationHeader(props: Props) {
    const lang = useLangPath(['pages', 'my-account', 'accountInformation']);
    const [isEdit, setIsEdit] = useContext(AccountEditStateContext);

    const editButton = <Button onClick={() => setIsEdit(true)}>{lang.edit}</Button>;
    const saveButton = <Button onClick={props.onSaveButtonClick}>{lang.save}</Button>;
    return (
        <Root>
            <Title>{lang.title}</Title>
            {isEdit ? saveButton : editButton}
        </Root>
    );
}
