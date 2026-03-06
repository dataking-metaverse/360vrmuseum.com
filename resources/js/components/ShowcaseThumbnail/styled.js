import styled from "styled-components";
import {Link} from "react-router-dom";
import {themeMixin, themeVar} from "../../styling/theme/functions";
import * as R from "ramda";

export const Text = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.6rem 1.83rem;
    z-index: 1;
`;

export const PureLink = styled(Link)`
    position: relative;
    display: block;
    color: ${themeVar('colors.basic.white')};
    border-radius: .4rem;
    overflow: hidden;
    
    ${Text} {
        transition: color .4s;
        transition-delay: 0s !important;
    }
    
    &:hover, &:visited, &:focus {
        color: ${themeVar('colors.basic.white')};
    }
    
    &:hover ${Text} {
        color: transparent !important;
    }
`;

export const Image = styled.div`
    ${themeMixin('fill')}
    background-color: #e0e0e0;
    background-image: ${R.ifElse(R.prop('src'), R.pipe(R.prop('src'), (src) => `url(${src})`), R.always('none'))};
    background-size: cover;
    background-position: 50% 50%;
    transition: background-image 0.5s ease-in-out;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-image: linear-gradient(rgba(68, 68, 68, 0), rgb(68, 68, 68));
    }

    &:hover:after {
        opacity: 0;
    }
`;

const ElipsesText = styled.div`
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const MainTitle = styled(ElipsesText)`
    font-size: 1.7rem;
    margin-bottom: .4em;
`;

export const Subtitle = styled(ElipsesText)`
    font-size: 1.2rem;
`;
