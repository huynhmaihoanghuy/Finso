import { SET_TOP_HEADLINES, SET_TOP_HEADLINES_LOADING, SET_TOP_HEADLINES_KEYWORD } from "../actions/topHeadLine";

const initialState = {
    keyword: null,
    list: [],
    isLoading: true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_TOP_HEADLINES:
            return {
                ...state,
                list: action.payload
            }

        case SET_TOP_HEADLINES_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case SET_TOP_HEADLINES_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            }
        default:
            return state;
    }
}