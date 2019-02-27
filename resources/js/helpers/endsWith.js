const endsWith = (str: string, endsWith: string) => {
    return str.substr(-endsWith.length) === endsWith ? str : str + endsWith;
};

export default endsWith;
