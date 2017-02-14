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
		return (
			<div>
			{button}
			<Greeting  isLoggedIn={this.state.isLoggedIn} />
			<Err err={false} />
			</div>
		)
	}
}

let arr = [1,2,3,4,5];
let list = arr.map((number) => 
	<li key={number.toString()}>{number}</li>
);

function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}


function NumberList(obj){
	const numbers = obj.numbers;
	return (
		<ul>
			{numbers.map((number) =>
				<ListItem key={number.toString()} value={number} />

				)
			}
		</ul>
	);
}


class Form extends React.Component{
	constructor(props) {
		super(props);

		this.state = {inp:'' ,select:1, txt:'12'};
		this.submit = this.submit.bind(this);
		this.change = this.change.bind(this);
	}

	submit(){
		alert(this.state.value);
	}
	change(e){
		const target = e.target;
		this.setState({[target.name] : target.value});
	}
	
	render(){
		return (
			<form>
				<label>Name:<input type='text' name="inp" value={this.state.inp} onChange={this.change} /></label>
				<label>Name1:<textarea type='text' name="txt" value={this.state.txt} onChange={this.change} /></label>
				<label>选择:<select name="select" value={this.state.select} onChange={this.change} >
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select></label>
				<input type='submit' onSubmit={this.submit} />
			</form>
		)
	}
};


function BoillingVerdict(value){
	if(value > 100){
		return (
			<p>水开了</p>
		);
	}else{
		return (
			<p>水没开</p>
		);
	}
}

class TxtPanel extends React.Component{
	constructor(props) {
	  super(props);
	  this.kv = {
	  	c:'摄氏',
	  	f:'华氏'
	  }
	  this.change = this.change.bind(this);
	}

	change(e){
		this.props.onChange(e.target.value);
	}

	render(){
		return (
			<label>{this.kv[this.props.name]}
				<input value={this.props.value} onChange={this.change}/>
			</label>
		)
	}
}

function convertToC(v){
	return (v - 32) * 5 / 9;
}

function convertToF(v){
	return (v * 9 / 5) + 32;
}

function doConvert(v,fn){
	let num = parseFloat(v);
	if(isNaN(num)){
		return '';
	}

	let a = fn(v);

	return a;
}

class Caculate extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {value: '',scale: ''};

	  this.changeC = this.changeC.bind(this);
	  this.changeF = this.changeF.bind(this);
	}

	changeC(v){
		this.setState({scale:'c',value:v});
	}

	changeF(v){
		this.setState({scale:'f',value:v});
	}
	render(){
		let value = this.state.value;
		let valueC = this.state.scale === 'f' ? doConvert(value,convertToC) : value;
		let valueF = this.state.scale === 'c' ? doConvert(value,convertToF) : value;
		// console.log(this.state.scale  === 'f');

		// let valueC = 1;
		// let valueF = 2;

		return (
			<div>
				<TxtPanel name="c" value={valueC} onChange={this.changeC} />
				<TxtPanel name="f" value={valueF} onChange={this.changeF} />
				{BoillingVerdict(value)}
			</div>
		)
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
	  <ul>
	  	{list}
	  </ul>
	  <Form />
	  {NumberList({numbers:[1,2,3,4,5,6,7]})}

	  <Caculate />
  	</div>,
  document.getElementById('root')
);

