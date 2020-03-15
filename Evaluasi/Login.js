import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import  axios from 'axios';
import {Redirect} from 'react-router-dom'

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			username:'',
			password:'',
			cek: false
		}
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		},() =>console.log(this.state))
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		const data = {
			username: this.state.username,
			password: this.state.password
		}
		axios.post("https://penjualanapp-api.herokuapp.com/api/v1/auth/login",data)
		.then(res => {
			localStorage.setItem('api_token', res.data.data.token)
			this.props.history.push('/fetching')
		})
	}
	render(){
		if (localStorage.getItem('api_token')) {
			return <Redirect to='/fetching' />
		}
		return(
			<div className="flex-container">               
				<div class="row">
					<form class="col s12" onSubmit={this.handleSubmit}>
						<div class="row">
							<div class="input-field col s6">
								<input onChange={this.handleChange} name="username" id="icon_prefix" type="text" class="validate" />
									<label for="icon_prefix">UserName</label>
							</div>
						</div>
						<div className="row">
							<div class="input-field col s6">
								<input onChange={this.handleChange} name="password" id="icon_telephone" type="tel" class="validate" />
									<label for="icon_telephone">Password</label>
							</div>
						</div>
					<br />
					<button class="btn waves-effect waves-light" type="submit">Login</button>
					</form>
				</div>
			</div>
			)
	}
}

export default Login;