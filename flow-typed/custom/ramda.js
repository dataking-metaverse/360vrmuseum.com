
declare module ramda {
    declare function curryN<Args, Output>(
        length: number,
        fn: (...args: Args) => Output
    ): Function;
}
