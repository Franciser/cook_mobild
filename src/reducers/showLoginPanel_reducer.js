import * as types from "../constants/actionTypes"

const initialState = { showLoginPanel:false }
let showLoginPanel_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.SHOWLOGINPANEL:
            return { showLoginPanel:true}
        case types.HIDDENLOGINPANEL:
            return { showLoginPanel:false}
        default:
            return state
    }
}

export default showLoginPanel_reducer;