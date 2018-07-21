import * as types from "../constants/actionTypes"
const initialState={isLogin:'unLogin'}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGINUPDATE:
            return {isLogin:action.data}
        default:
            return state
    }
}
