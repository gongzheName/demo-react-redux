import React from "react"
import ReactDOM from "react-dom"

function BoilingVerdict(props){
	if(props.celisus>=100){
		return <p>The water would boil</p>
	}else{
		return <p>The water would not boil</p>
	}
}


class App extends React.component{
	render(){
		return(
			<div>123</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("app"))









