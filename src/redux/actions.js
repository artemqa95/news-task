import {MENU_CHANGE_LANGUAGE} from "./actionTypes";


export function changeLanguage(language) {
    return {
        type: MENU_CHANGE_LANGUAGE, payload:language
    }
}