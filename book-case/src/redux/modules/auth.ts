import { LoginReqType, AuthState } from './../../types';
import { Action } from "redux";
import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import UserService from '../../services/UserService';
import TokenService from '../../services/TokenService';
import history from "../../history";



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
export const {login, logout} = createActions("LOGIN","LOGOUT",{prefix});

function* loginSaga(action:any){
    try{
        console.log("action ### ", action);
        yield put(pending());
        const token:string = yield call(UserService.login, action.payload);
        TokenService.set(token);
        yield put(success(token));
        history.push("/");
    }catch(error:any){
        yield put(fail(new Error(error?.response?.data?.error || "UNKOWN_ERROR")));
    }
}
function* logoutSaga(){
    try{
        yield put(pending());
        const token:string = yield select(state => state.auth.token);
        yield call(UserService.logout, token);
    }catch(error:any){
    }finally{
        TokenService.remove();
        yield put(success(null));
    }
}
export function* authSaga(){
    yield takeEvery(`${prefix}/LOGIN`, loginSaga);
    yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}

export default reducer;