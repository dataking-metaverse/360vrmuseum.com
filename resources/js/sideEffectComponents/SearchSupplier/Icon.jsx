import React from "react";

type Props = {
    color: string,
};

export default function Icon(props: Props) {
    const {color, ...restProps} = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" {...restProps}>
            <g fill="none" fillRule="evenodd">
                <path d="M-9-9h39v39H-9z" />
                <g stroke={color} strokeWidth="2">
                    <circle cx="9.13" cy="9.13" r="8.13" />
                    <path strokeLinecap="round" d="M15.005 15.005l5.906 5.906" />
                </g>
            </g>
        </svg>
    );
};

Icon.defaultProps = {
    color: '#979797',
};
