import React, { PropTypes } from 'react';
import {} from './Todo.css';
import classnames from 'classnames';

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        className={classnames({
            'completed': completed
        })}
    >
        {text}
    </li>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
