import { SAVE_USER_LOCAL_STORAGE, GET_USER_LOCAL_STORAGE, USER_STORAGE_NAME, USER_LOGOUT } from "../actions/user";

const initialState = {
    username: null,
    password: null,
    name: null,
    email: null,
    phone: null,
    address: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SAVE_USER_LOCAL_STORAGE:
            const userSave = action.payload;
            localStorage.setItem(USER_STORAGE_NAME, JSON.stringify(userSave));

            return {
                ...state,
                ...userSave
            }

        case GET_USER_LOCAL_STORAGE:
            const user = localStorage.getItem(USER_STORAGE_NAME);
            if (!user) return state;

            return {
                ...state,
                ...JSON.parse(user)
            }

        case USER_LOGOUT:
            localStorage.removeItem(USER_STORAGE_NAME);

            return {
                ...state,
                ...initialState
            }    

        default:
            return state;
    }
}