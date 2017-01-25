import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


function Test(props){
	function handleClick(e){
		e.preventDefault();
		console.log('I am clicked');
	};
	return (<div onClick={handleClick}>{props.name} 你好啊</div>);
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

class TestEvent extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {'on' : true};
	}

	handleClick = ()=>{
		this.setState(prevState =>({
			on: !prevState.on
		}));
	}

	render(){
		return (
			<div onClick={this.handleClick}>{this.state.on ? '开' : '关'}</div>
		)
	}
}

function UserGreeting(){
	return (<h1>用户，你好！</h1>);
}

function GuestGreeting(){
	return (<h1>访客，你好！</h1>);
}

function Greeting(props){
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting />;
	}
	return <GuestGreeting />;
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
	  <TestEvent />
	  <Greeting isLoggedIn={false} />
  	</div>,
  document.getElementById('root')
);

