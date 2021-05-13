import * as hindiStat from '../data/hindi.json'
import * as hindiText from './hindi'
import * as engStat from '../data/english.json'
import * as engText from './eng'
import store from "../redux/store";

function getText() {
    let text
    switch (store.getState().language) {
        case 'hindi':
            text = {text:hindiText, data:hindiStat}
            break
        case 'eng':
            text = {text:engText, data:engStat}
            break
        default:
            text = {text:engText, data:engStat}
    }
    return text
}

export default getText

