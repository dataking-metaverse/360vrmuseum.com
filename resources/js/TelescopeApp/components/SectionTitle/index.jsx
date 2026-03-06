import React from "react";
import styled from "styled-components";
import * as R from "ramda";

const fontSize = R.path(['theme', 'sectionTitle', 'fontSize']);
const marginBottom = R.path(['theme', 'sectionTitle', 'marginBottom']);
const SectionTitle = styled.div`
    font-size: ${fontSize}rem;
    margin-bottom: ${marginBottom}rem;
    line-height: 1.5;
`;

export default SectionTitle;
