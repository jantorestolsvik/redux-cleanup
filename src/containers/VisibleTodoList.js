import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';
import TodoList from '../components/TodoList';
import {getVisibleTodos} from '../reducers/index';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state)
});

const bindActionCreators = (actionCreators, dispatch) => {
    return Object.keys(actionCreators).reduce((newActionCreators, key) => {
        newActionCreators[key] = (...args) => {
            dispatch(actionCreators[key](...args));
        };
        return newActionCreators;
    }, {});
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onTodoClick: toggleTodo
}, dispatch);

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
