export const flexMiddle: () => string = () => `
    display: flex;
    align-items: center;
`;

export const flexRight: () => string = () => `
    display: flex;
    justify-content: flex-end;
`;


const mixins = {
    flexMiddle,
    flexRight,
};

export default mixins;
