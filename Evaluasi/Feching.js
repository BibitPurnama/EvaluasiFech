import React from 'react';
import axios from 'axios';

class Feching extends React.Component{
	constructor(){
		super();
		this.state = {
			data: []
		}
	}
	componentDidMount(){
		axios.get("https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F")
		.then(res=> {
			this.setState({
				data: res.data.items
			})
		})
	}
	handleRemove= ()=> {
		localStorage.removeItem("api_token")
		this.props.history.push("/")
	}
	render(){
		if(this.state.isLoading){
			return(
					<h1>Loading..</h1>
				)
		}
		return(
			<div>
			<ul>
				<li><button class="btn waves-effect waves-light right" onClick= {this.handleRemove}>LogOut</button></li>
			</ul>
				{this.state.data.map(data => {
					return(
						<div>
							<img className="image" src={data.thumbnail} /><br />
							<a className="btn waves-effect waves-light pink" href={data.link}>Click Here</a><br />
							<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">BP</i></a>
							{data.title}<br /> {data.pubDate} <br /> 
						</div>
					)
				})}
			</div>
		)
	}
}


export default Feching;