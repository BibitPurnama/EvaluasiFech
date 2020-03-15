import React from 'react';
import Feching from './Feching';
import Login from './Login';
import {Route,Switch} from 'react-router-dom';
import Router from './Login';
import './App.css'

function App(){
	return(
		<div>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/fetching" exact component={Feching} />
			</Switch>
		</div>
		)
}

export default App;