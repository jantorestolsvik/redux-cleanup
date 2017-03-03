import { createStore, applyMiddleware } from 'redux';
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

export const configureStore = () => createStore(todoApp, applyMiddleware(...middleware));
export default configureStore;