import { createActions, handleActions } from "redux-actions";

interface AuthState { //export 제거하면 나는 오류 확인 및 블로깅
    token : string | null;
    loading: boolean;
    error: Error | null;
}


const initialState:AuthState = {
    token : null,
    loading:false,
    error: null
}

const prefix = "book-case/auth";

export const {pending, success, fail} = createActions("PENDING", "SUCCESS", "FAIL", {prefix});

const reducer = handleActions<AuthState, string>({
    PENDING: (state) => ({
        ...state,
        loading: true,
        error: null
    }),
    SUCCESS: (state, action) => ({
        token: action.payload,
        loading: false,
        error: null
    }),
    FAIL: (state, action:any) => ({
        ...state,
        loading: false,
        error: action.payload
    })
},initialState, {prefix});


//saga
export function* authSaga(){
    
}

export default reducer;