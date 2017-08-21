
/*
 * createStore: 初始化store
 * applyMiddleware: 中间件
 * combineReducers: 多个reducers合并为一个单一实体
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
/*
 * createLogger: 中间件(打印每个action后的数据走向)
 */
import {createLogger} from 'redux-logger'

import toDoApp from "./modules/toDoApp"

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore)

const reducer = combineReducers({
	toDoApp
})

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState)

export default configureStore

