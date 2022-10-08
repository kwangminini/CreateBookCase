import { applyMiddleware, legacy_createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./modules/reducer";

const create = () => {
    const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware()));

    return store;
}

export default create;