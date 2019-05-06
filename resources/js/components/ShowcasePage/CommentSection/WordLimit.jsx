import React from "react";
import styled from "styled-components";
import * as R from "ramda";

const color = R.ifElse(
    R.complement(R.prop('invalid')),
    R.always('#666'),
    R.path(['theme', 'variables', 'colors', 'basic', 'red'])
);

const WordLimit = styled.div`
    font-size: 1.2rem;
    color: ${color};
    padding-top: .6rem;
    padding-bottom: .6rem;
    text-align: right;
`;

export default WordLimit;
