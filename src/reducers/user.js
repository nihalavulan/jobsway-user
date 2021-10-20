import { SIGNIN,SIGNUP,LOGOUT} from "../constants/actionTypes"

export default  (state = {authData : null},action) => {
    switch (action.type) {
        case SIGNUP:
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data}
        case SIGNIN:
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state,authData:action?.data}
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state
    }
}