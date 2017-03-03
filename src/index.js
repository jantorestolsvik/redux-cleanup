import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './configureStore';
import {fetchTodos} from './api/index';
import {receiveTodos} from './actions/index';

const store = configureStore();

fetchTodos('all').then(todos =>
    store.dispatch(receiveTodos(todos))
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
