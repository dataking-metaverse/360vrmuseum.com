import React, {useContext} from "react";
import styled from "styled-components";
import * as R from "ramda";

import AccountEditStateContext from "../AccountEditStateContext";
import {
    Root, Table, Cell,
} from "./styled";

type Props = {|
    title: string,
    name: string,
    value?: string,
    editable?: boolean,
    selectOptions: boolean,
|};

type SelectProps = {
    name: string,
    value: string,
    onChange: (event: Event) => void,
    selectOptions: {[string]: string},
};

type InputProps = {
    name: string,
    value: string,
    onChange: (event: Event) => void,
};

const backgroundColor = R.path(['theme', 'variables', 'colors', 'grayscale', '600']);
const color = R.path(['theme', 'variables', 'colors', 'basic', 'white']);


const mapSelectOptions = R.pipe(
    R.prop('selectOptions'),
    R.mapObjIndexed((title: string, value: string) => ( <option key={value} value={value}>{title}</option> )),
    R.values
);

const SelectRoot = styled.select`
    background-color: ${backgroundColor};
    font-size: inherit;
    letter-spacing: inherit;
    border: none;
    font-family: inherit;
    color: ${color};
    padding: .4rem 1.4rem;
    width: 100%;
`;
const Select = (props: SelectProps) => (
    <SelectRoot name={props.name} value={props.value} onChange={props.onChange}>
        {mapSelectOptions(props)}
    </SelectRoot>
);

const InputRoot = styled.input`
    background-color: ${backgroundColor};
    font-size: inherit;
    letter-spacing: inherit;
    border: none;
    font-family: inherit;
    color: ${color};
    padding: .4rem 1.4rem;
`;

const Input = (props: InputProps) => {
    return (<InputRoot type="text" {...props} />);
};

const _ = R.always;

export default function AccountInformationItem(props: Props) {
    const {editable, selectOptions} = props;
    const [isEdit] = useContext(AccountEditStateContext);
    const selectProps = R.pick(['name', 'value', 'onChange', 'selectOptions'])(props);
    const inputProps = R.pick(['name', 'value', 'onChange'])(props);
    const content = R.cond([
        [_(isEdit && selectOptions), _(<Select {...selectProps} />)],
        [_(isEdit && editable), _(<Input {...inputProps} />)],
        [_(selectOptions), _(selectOptions && selectOptions[props.value])],
        [R.T, _(props.value)],
    ])();
    return (
        <Root>
            <Table>
                <Cell style={{width: '7.1rem'}}>
                    {props.title}
                </Cell>
                <Cell>{content}</Cell>
            </Table>
        </Root>
    );
};

AccountInformationItem.defaultProps = {
    value: '',
};
