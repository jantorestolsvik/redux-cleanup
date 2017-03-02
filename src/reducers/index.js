import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export const getVisibleTodos = (state) => fromTodos.getVisibleTodos(state.todos, state.visibilityFilter);

export default todoApp;
