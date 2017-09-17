import jsonData from '../api/Todo-items.json';
import { GET_TODOS, ADD_TODOS, DELETE_TODO_ITEM, SEARCH_BY_TITLE, SEARCH_BY_DATE } from '../constants';

export const getTodos = () => {
	return {
		type: GET_TODOS,
		todoItems: jsonData
	}
}

export const addTodos = (newTodo, id, date) => {
	return {
		type: ADD_TODOS,
		newTodo,
		id,
		date
	}
}

export const deleteTodoItem = (id) => {
	return {
		type: DELETE_TODO_ITEM,
		id
	}
}

export const searchByTitle = (searchTitle) => {
	return {
		type: SEARCH_BY_TITLE,
		searchTitle
	}
}

export const searchByDate = (searchDate) => {
	return {
		type: SEARCH_BY_DATE,
		searchDate
	}
}