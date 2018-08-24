import * as ActionType from '../actions/ActionType';

const initialState = {
    foods: [],
    user: {},
    partialState: {},
    visible: false,
    success: {},
    isSearch: false
}

export const food = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ON_SUCCESS:
            return {
                ...state,
                foods: action.payload,
                isSearch: false
            }
        case ActionType.ON_SIGNUP:
            return {
                ...state,
                books: action.payload
            }
        case ActionType.OPEN_DRAWER:
            return {
                ...state,
                visible: !state.visible
            }
        case ActionType.IS_SAVED:
            return {
                ...state,
                success: action.payload.success,
            }
        case ActionType.RESET_SEARCH:
            return {
                ...state,
                foods: [],
                isSearch: true
            }
        case ActionType.ON_SIGN_IN:
            return {
                ...state,
                user: action.user
            }
        case ActionType.SIGN_OUT:
            return initialState;
        default:
            return state;
    }
}
