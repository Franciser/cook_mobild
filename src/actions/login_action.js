import * as types from "../constants/actionTypes"
export const update=(data)=>{
    return {
        type: types.LOGINUPDATE,
        data:data
    }
}