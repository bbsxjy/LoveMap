import * as constants from '../constants';

let nextTodoId: number = 0;

export interface AddToDo {
    type: constants.ADD_TODO
    id: number
    text: any
}

export interface SetVisibilityFilter {
    type: constants.SET_VISIBILITY_FILTER
    filter: any
}

export interface ToggleToDo {
    type: constants.TOGGLE_TODO
    id: any
}

export const VisibilityFilters = {
    SHOW_ALL: constants.SHOW_ALL,
    SHOW_COMPLETED: constants.SHOW_COMPLETED,
    SHOW_ACTIVE: constants.SHOW_ACTIVE
};

export function addTodo(context: any): AddToDo {
    return {
        type: constants.ADD_TODO,
        id: nextTodoId,
        text: context
    }
}

export function setVisibilityFilter(filter: any): SetVisibilityFilter {
    return {
        type: constants.SET_VISIBILITY_FILTER,
        filter: filter
    }
}

export function toggleTodo(id: any): ToggleToDo {
    return {
        type: constants.TOGGLE_TODO,
        id: id
    }
}