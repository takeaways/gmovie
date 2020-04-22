import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import Home from '../Routers/Home';
import TV from '../Routers/TV';
import Search from '../Routers/Search';

export default () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/tv" component={TV} />
				<Route path="/search" component={Search} />
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	);
};
