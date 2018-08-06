import {combineReducers} from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import {TodoActionProps} from "../components/Todo";

export type TodoState = {
    readonly todos: TodoActionProps[];
    readonly visibilityFilter: String
}

export default combineReducers<TodoState>({
    todos,
    visibilityFilter
});
