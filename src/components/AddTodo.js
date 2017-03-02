import React, { PropTypes } from 'react';
import { addTodo } from '../actions/index';

export const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
            >
                <input ref={node => { input = node; }}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired
};