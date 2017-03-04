import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers/index';

const middleware = [
    ({dispatch, getState}) => next => action => {
        if (typeof action.then === "function") {
            return action.then((finishedAction) => {
                dispatch(finishedAction);
            });
        }
        return next(action);
    },
    ({getState}) => next => action => {
        console.group(action.type);
        console.log("skal dispatche", getState());
        console.log("action", action);
        let returnValue = next(action);
        console.log("har dispatchet", getState());
        console.groupEnd(action.type);
        return returnValue;
    }
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

export const configureStore = () => createStore(todoApp, enhancer);
export default configureStore;