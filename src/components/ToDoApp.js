import React from "react"

import List from "./List"
import Input from "./Input"

class ToDoApp extends React.Component {

	render() {
		let that = this
		// console.log(this.props)
		return(

			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<div className="panel panel-default">
						<div className="panel-body">
							<h1> My To Do App</h1>
							<hr/>
							<Input
								value={that.props.toDoApp.newToDo}
								onChange={that.props.inputChange}
								onSubmit={that.props.addItem}
							/>
							/*list goes here*/
							<List
								onDelteListItem={that.props.deleteListItem}
								onListItemClick={that.props.listItemClick}
								listItems={this.props.toDoApp.list}
							/>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ToDoApp






