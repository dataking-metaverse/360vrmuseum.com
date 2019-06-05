import {useState} from "react";
import * as R from "ramda";

type Setter = () => void;
type Type = [
    boolean,
    Setter,
    Setter,
    Setter,
];

export default function useBooleanState(defaultValue: boolean): Type {
    const [state, setState] = useState<boolean>(defaultValue);
    return [
        state,
        () => setState(true),
        () => setState(false),
        () => setState(R.not),
    ];
};
