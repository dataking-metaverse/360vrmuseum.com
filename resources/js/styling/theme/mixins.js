export const flexMiddle: () => string = () => `
    display: flex;
    align-items: center;
`;

export const flexCenter: () => string = () => `
    display: flex;
    justify-content: center;
`;

export const flexBottom: () => string = () => `
    display: flex;
    justify-content: flex-end;
`;

export const flexLeft: () => string = () => `
    display: flex;
    justify-content: flex-start;
`;

export const flexRight: () => string = () => `
    display: flex;
    justify-content: flex-end;
`;

export const fill: () => string = () => `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
