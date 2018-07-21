import * as types from "../constants/actionTypes"

const initialState = { showSearchPanel:false }
let showSearchPanel_reducer = (state = initialState, action) => {
    if (action === undefined) { return state }
    switch (action.type) {
        case types.SHOWSEARCHPANEL:
            return { showSearchPanel:true}
        case types.HIDDENSEARCHPANEL:
            return { showSearchPanel:false}
        default:
            return state
    }
}

export default showSearchPanel_reducer;