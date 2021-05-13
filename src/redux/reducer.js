import {MENU_CHANGE_LANGUAGE} from "./actionTypes";

const initialState = {
   language: 'eng'
}

const handlers = {
    DEFAULT: state => state,
    [MENU_CHANGE_LANGUAGE]: (state, action) => ({...state, language: action.payload})
}

const reducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}

export default reducer