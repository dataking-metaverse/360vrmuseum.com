function ary<I, T>(fn: (a: I) => T): (...rest: Array<I>) => T {
    return (...rest) => fn(rest[0]);
}

export default ary;
