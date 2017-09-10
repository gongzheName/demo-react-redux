import axios from "axios"

import {
	INPUT_CHANGED,
	ADD_ITEM,
	LIST_ITEM_CLICK,
	DELETE_LIST_ITEM
} from "./constants"

/*
 * 输入操作
 * value: 每次输入框变化后的值
 */
export function inputChange(value){
	value = value._targetInst._hostNode.value
	return {
		type: INPUT_CHANGED,
		value
	}
}

/*
 * 新增待办事项
 */
export function addItem(e){
	var resD = {}
	axios.get("http://localhost:8086/save/saveToDo").then(res => {
		console.log(res)
		resD.data = res.data
	})
	e.preventDefault()
	return {
		type: ADD_ITEM,
		test: resD.data
	}
}

/*
 * 待办事项是否已完成
 * index: 当前点击事项在数组中的下表
 */
export function listItemClick(index){
	return {
		type: LIST_ITEM_CLICK,
		index
	}
}

/*
 * 删除待办事项
 * index: 当前点击事项在数组中的下表
 */
export function deleteListItem(index){
	return {
		type: DELETE_LIST_ITEM,
		index
	}
}