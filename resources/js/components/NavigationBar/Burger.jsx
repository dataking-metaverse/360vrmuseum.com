import React from "react";

type Props = {

};

export default function Burger(props: Props) {
    return (
        <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path
                fill="#ffffff"
                d='M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z'
            />
        </svg>
    );
}
