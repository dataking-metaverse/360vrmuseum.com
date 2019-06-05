import React from "react";

type Props = {  };

export default function Icon(props: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" {...props}>
            <g fill="none" fillRule="evenodd">
                <path d="M-9-9h39v39H-9z" />
                <g stroke="#979797" strokeWidth="2">
                    <circle cx="9.13" cy="9.13" r="8.13" />
                    <path strokeLinecap="round" d="M15.005 15.005l5.906 5.906" />
                </g>
            </g>
        </svg>
    );
};
