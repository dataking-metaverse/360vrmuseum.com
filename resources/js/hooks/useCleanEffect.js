import {useEffect} from "react";

export type HasUnmounted = () => boolean;

export type ComponentWillUnmount = (() => void) | void;

function useCleanEffect(componentDidMount: (status: Status) => ComponentWillUnmount, listen?: Array<any>) {
    listen = Array.isArray(listen) ? listen : [];

    useEffect(() => {
        let isUnmountedValue = false;
        const hasUnmounted: HasUnmounted = () => isUnmountedValue;
        const componentWillUnmount: ComponentWillUnmount = componentDidMount(hasUnmounted) || null;
        return () => {
            isUnmountedValue = true;
            typeof componentWillUnmount === 'function' && componentWillUnmount();
        };
    }, listen);
}

export default useCleanEffect;
