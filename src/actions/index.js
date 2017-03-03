import * as api from '../api/index';

let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: (nextTodoId++).toString(),
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

const receiveTodos = result => ({
    type: 'RECEIVE_TODOS',
    result
});

export const fetchTodos = () => api
    .fetchTodos('all')
    .then(todos => receiveTodos(todos));