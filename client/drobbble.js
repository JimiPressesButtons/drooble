import React from 'react';
import {render} from 'react-dom';
import css from './styles/main.css';

import App from './components/App';
import Shot from './components/Shot';
import Gallery from './components/Gallery';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
	<Provider store={ store }>
		<Router history = {history}>
			<Route path="/" component={App}>
				<IndexRoute component={Gallery} />
				<Route path="/view/:postId" component={Shot}></Route>
			</Route>
		</Router>
	</Provider>
)


// let array = ['zero','one','two','three','four','five','six'];

// console.log(array.length);
// console.log(Math.max(array.length-3,1));
// console.log(array.splice());
// console.log(array.splice(Math.max(array.length-3,1)));


// console.log(array.splice(3,6));

render(router, document.getElementById('root'));