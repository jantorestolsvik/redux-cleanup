import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './configureStore';
import {fetchTodos} from './actions/index';

const store = configureStore();

store.dispatch(fetchTodos());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
