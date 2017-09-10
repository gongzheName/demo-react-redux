/*
 *connect: fn 调用两次(mapStateToProps, mapDispatchToProps && state和dispatch传入组件)
 *dispatch: redux中执行操作时, 需要调用dispatch函数并传递action来调用reducer
 */
import {connect} from "react-redux"

import ToDoApp from "../components/ToDoApp"
import {
	inputChange,
	addItem,
	listItemClick,
	deleteListItem
} from "../actions/index"

function mapStateToProps(state){
	//console.log(state)
	return {
		toDoApp: state.toDoApp
	}
}

function mapDispatchToProps(dispatch){
	return {
		inputChange: (value) => dispatch(inputChange(value)),
		addItem: (e) => dispatch(addItem(e)),
		listItemClick: (index) => dispatch(listItemClick(index)),
		deleteListItem: (index) => dispatch(deleteListItem(index))
	}
}





export default connect(mapStateToProps, mapDispatchToProps)(ToDoApp)