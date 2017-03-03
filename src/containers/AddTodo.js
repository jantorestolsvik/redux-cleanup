import {AddTodo} from '../components/AddTodo';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

export default connect(
    null,
    {addTodo}
)(AddTodo);
