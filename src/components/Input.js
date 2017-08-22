import React from "react"

const Input = ({value, onChange, onSubmit}) => {
	return (
		<div>
			<div className="form-group">
				<label htmlFor="listInput">Email Address</label>
				<input value={value} onChange={onChange}
					type="text" className="form-control"
					id="listItemInput" placeholder="Add new todo" />
				<button
					onClick={onSubmit}
					className="btn btn-primary"
				>
					Add Item
				</button>
			</div>
		</div>
	)
}

export default Input









