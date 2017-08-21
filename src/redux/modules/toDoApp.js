const INPUT_CHANGED = "demo-react-redux/toDoApp/INPUT_CHANGED"
const ADD_ITEM = "demo-react-redux/toDoApp/ADD_ITEM"
const LIST_ITEM_CLICK = "demo-react-redux/toDoApp/LIST_ITEM_CLICK"
const DELETE_LIST_ITEM = "demo-react-redux/toDoApp/DELETE_LIST_ITEM"

export function inputChange(value){
	//console.log(value)
	return {
		type: INPUT_CHANGED,
		value
	}
}
export function addItem(){
	return {
		type: ADD_ITEM
	}
}
export function listItemClick(index){
	return {
		type: LIST_ITEM_CLICK,
		index
	}
}
export function deleteListItem(index){
	return {
		type: DELETE_LIST_ITEM,
		index
	}
}

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

