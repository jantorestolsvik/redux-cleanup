import React, { PropTypes } from 'react';

const initialState = {
    value: ""
};

export class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.validateAndSaveTodo = this.validateAndSaveTodo.bind(this);
    }

    validateAndSaveTodo = () => {
        const {addTodo} = this.props;
        if (!this.state.value.trim()) {
            return;
        }
        addTodo(this.state.value);
        this.setState(initialState);
    };

    render() {
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.validateAndSaveTodo();
                    }}
                >
                    <input onChange={e => this.setState({value: e.target.value})} value={this.state.value}/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};