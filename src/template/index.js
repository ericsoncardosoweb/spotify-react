import _ from 'lodash';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';

import './../styles/main.scss'; // Global Style 

// Templates
import PublicLayout from './public';
 
// Routes
import publicRoutes from './../routes/publicRoutes';

// Scenes
import NotFound from './../scenes/not-found'; //Página de Erro 404

// User State
import { UserActions } from './../scenes/user/actions'; 

const history = createBrowserHistory();


class Template extends Component {

	constructor(props) {
		super(props);
		this.userActions = new UserActions(this.props.dispatch);
	 }

	componentWillMount() {
		this.userActions.verify();
	}

	render() {
		const user = this.props.user;
		
		const publicRoute = _.map(publicRoutes, (route, key) => {
			const { component, path } = route;
			return (
				<Route
					exact
					path={path}
					key={key}
					render={(route) => <PublicLayout component={component} route={route} user={user} />}
				/>
			)
		})
		
		return (
			<Router history={history}>
				<Switch>
					{ publicRoute }
					<Route component={ NotFound } />
				</Switch>
			</Router> 
		);
	}
}

function mapStateToProps(state, props) { return { user: state } }
function mapDispatchToProps(dispatch) { return { dispatch }; }

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Template);