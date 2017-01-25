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

function LoginBtn(props){
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn){
		return <button value="退出" onClick={props.onClick}>退出</button>;
	}
	return <button value="登录" onClick={props.onClick}>登录</button>;
}

function Err(props){
	if(!props.err){
		return null;
	}
	return <strong>错误</strong>
}

class LoginCtroll extends React.Component{
	constructor(props) {
	  super(props);
	  
	  this.state = {isLoggedIn: false};
	}

	clickLogin = () => {
		this.setState({
			isLoggedIn: true
		});
	}

	clickLogout = () => {
		this.setState({
			isLoggedIn: false
		});
	}

	render(){
		let button = <LoginBtn isLoggedIn={this.state.isLoggedIn} onClick={this.state.isLoggedIn?this.clickLogout:this.clickLogin} />;
		// if(this.state.isLoggedIn){
		// 	button =  <LoginBtn isLoggedIn={this.state.isLoggedIn} />;
		// }else{
		// 	button =  <button value="登录" onClick={this.clickLogin}>登录</button>;
		// }
		// console.log(button);
		return (
			// {button}
			<div>
			{button}
			<Greeting  isLoggedIn={this.state.isLoggedIn} />
			<Err err={false} />
			</div>
		)
		// return (
		// 	<LoginBtn isLoggedIn={this.state.isLoggedIn} onClick={this.state.isLoggedIn?this.clickLogout:this.clickLogin} />
		// );
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
	  <TestEvent />
	  <LoginCtroll />
  	</div>,
  document.getElementById('root')
);

