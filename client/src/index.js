import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
	<Root store={store}/>,
  document.getElementById('root')
);
