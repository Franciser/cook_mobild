import * as types from "../constants/actionTypes"
const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.USERNAMEUPDATE:
            return { userName: action.data }
        default:
            return state
    }
}
