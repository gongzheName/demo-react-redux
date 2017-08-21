import React from "react"

const Input = ({value, onChange, onSubmit}) => {
	//console.log({value, onChange, onSubmit});
	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<label htmlFor="listInput">Email Address</label>
				<input value={value} onChange={onChange}
					type="text" className="form-control"
					id="listItemInput" placeholder="Add new todo" />
				<button className="btn btn-primary">
					Add Item
				</button>
			</div>
		</form>
	)
}

export default Input









