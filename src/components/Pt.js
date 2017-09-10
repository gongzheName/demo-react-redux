import React from "react"
import PropTypes from "prop-types"

class Pt extends React.Component{
	render(){
		const children = this.props.children
		return(
			<div>
				{children}
			</div>
		)
	}
}

/*类型检查在赋值之后*/
/*Pt.propTypes = {
	children: PropTypes.number.isRequired
}*/
Pt.defaultProps = {
	children: 1234567
}

export default Pt

