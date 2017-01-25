import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


function Test(props){
	return (<div>{props.name} 你好啊</div>);
}

class Clock extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {date: new Date()};
	}

	componentDidMount(){
		this.timerId = setInterval(() => {
			this.click();
		},1000);
	}

	componentWillUnmount(){
		clearInterval(this.timerId);
	}

	render (){
		return (
			<section>
			<div>{this.props.name}</div>
			<div>{this.state.date.toLocaleTimeString()}</div>
			</section>
		)
	}

	click(){
		this.setState({
			date: new Date()
		});
	}
} 


ReactDOM.render(
	<div>
	  <App >
	  </App>

	  <Test name="ylw" />
	  <Test name="yang" />
	  <Test name="wen" />
	  <Test name="liang" />
	  <Clock name="clock"/>
  	</div>,
  document.getElementById('root')
);

