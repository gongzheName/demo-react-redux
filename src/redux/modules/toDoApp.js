
import {
	INPUT_CHANGED,
	ADD_ITEM,
	LIST_ITEM_CLICK,
	DELETE_LIST_ITEM
} from "../../actions/constants"

const initialState = {
	list: [{item: "test", done: false}],
	newToDo: ""
}

export default function reducer(state=initialState, action){
	switch (action.type){
		case INPUT_CHANGED:
			return Object.assign(
				{},
				state,
				{newToDo: action.value}
			);
			break;

		case ADD_ITEM:
			return Object.assign(
				{},
				state,
				{
					list: [
						...state.list,
						{item: state.newToDo, done: false}
					],
					newToDo: ""
				}
			);
			break;

		case LIST_ITEM_CLICK:
			return Object.assign(
				{},
				state,
				{
					list: [
						...state.list.slice(0, action.index),
						Object.assign(
							{},
							state.list[action.index],
							{
								done: !state.list[action.index].done
							}
						),
						...state.list.slice(action.index+1)
					]
				}
			);
			break;

		case DELETE_LIST_ITEM:
			return Object.assign(
				{},
				state,
				{
					list: [
						...state.list.slice(0, action.index),
						...state.list.slice(action.index+1)
					]
				}
			);
			break;

		default:
			return state
	}
}

