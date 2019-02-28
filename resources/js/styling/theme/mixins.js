export const flexMiddle: () => string = () => `
    display: flex;
    align-items: center;
`;

export const flexCenter: () => string = () => `
    display: flex;
    justify-content: center;
`;

export const flexRight: () => string = () => `
    display: flex;
    justify-content: flex-end;
`;


const mixins = {
    flexMiddle,
    flexCenter,
    flexRight,
};

export default mixins;
