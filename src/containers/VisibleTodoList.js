import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';
import TodoList from '../components/TodoList';
import {getVisibleTodos} from '../reducers/index';

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state)
});

const mapDispatchToProps = {
    onTodoClick: toggleTodo
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
