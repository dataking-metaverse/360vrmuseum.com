import {useState} from "react";
import * as R from "ramda";

type CallbackFunc = (state: Boolean) => void;
type Callback = ?CallbackFunc;
type Setter = (callback: Callback) => void;
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
        callback => setState(true, callback),
        callback => setState(false, callback),
        callback => setState(R.not, callback),
    ];
};
