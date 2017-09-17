import { GET_TODOS, ADD_TODOS, DELETE_TODO_ITEM, SEARCH_BY_TITLE, SEARCH_BY_DATE } from '../constants';

const initialState = [];

export const todos = (state = initialState, action) => {
	switch(action.type) {
		case GET_TODOS:
			return action.todoItems;
		case ADD_TODOS:
			return [
				...state,
				{
				id: ++action.id, 
				title: action.newTodo.title, 
				description: action.newTodo.description, 
				created_at: action.date
				}
			];
		case DELETE_TODO_ITEM:
			return state.filter(item => item.id !== action.id);
		case SEARCH_BY_TITLE:
			return state.filter(item => item.title === action.searchTitle);
		case SEARCH_BY_DATE:
			return state.filter(item => item.created_at.substring(0,10) == action.searchDate);
		default: 
			return state;
	}
}