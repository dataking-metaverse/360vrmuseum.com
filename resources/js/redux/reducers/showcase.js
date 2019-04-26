import {
    LAST_COMMIT_SUBMITTED_TIME_UPDATE,
} from "../actionTypes";


export const lastCommentSubmittedTime = (state = null, action) => {
    if (action.type === LAST_COMMIT_SUBMITTED_TIME_UPDATE) { return new Date(); }
    return state;
};
