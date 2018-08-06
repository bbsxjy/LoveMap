import {connect} from "react-redux";
import * as Action from "../actions";
import {toggleTodo, VisibilityFilters} from "../actions";
import {Todo, TodoList} from "../components/TodoList";
import {TodoActionProps} from "../components/Todo";
import {Dispatch} from "redux"
import {TodoState} from "../reducers";

export function getVisibleTodos(todos: TodoActionProps[], filter: String) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
}

export function mapStateToProps({todos, visibilityFilter}: TodoState) {
    return {
        todos: getVisibleTodos(todos, visibilityFilter)
    }
}

export function mapDispatchToProps(dispatch: Dispatch<Action.ToggleToDo>) {
    return {
        toggleTodo: (id: Todo) => dispatch(toggleTodo(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
