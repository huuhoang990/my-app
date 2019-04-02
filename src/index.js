import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Home from './pages/Home';
//import ProductDetail from './pages/ProductDetail';
//import Login from './pages/Login';
//import Register from './pages/Register';
//import NotFound from './pages/NotFound'
//import Login from './pages/Login';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './component/PrivateRoute'
import withLazy from './hoc/withLazy'

const Home = withLazy(() => import('./pages/Home'))
const Login = withLazy(() => import('./pages/Login'))
const Register = withLazy(() => import('./pages/Register'))
const NotFound = withLazy(() => import('./pages/NotFound'))
const ProductDetail = withLazy(() => import('./pages/ProductDetail'))

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<PrivateRoute path="/product/:id" component={ProductDetail} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route component={NotFound} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
