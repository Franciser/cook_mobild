import { combineReducers } from "redux"
import showSearchPanel_reducer from "./showSearchPanel_reducer"
import showLoginPanel_reducer from "./showLoginPanel_reducer"
import login_reducer from "./login_reducer"
import userName_reducer from "./userName_reducer"
export default combineReducers({
    showSearchPanel_reducer,
    showLoginPanel_reducer,
    login_reducer,
    userName_reducer,
})