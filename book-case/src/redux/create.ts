import { applyMiddleware, legacy_createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./modules/reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./modules/rootSaga";

const create = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);
    return store;
}

export default create;