let App = require('./components/App');
let React = require('react');
let ReactDOM = require('react-dom');
let AppAPI = require('./utils/appAPI');

AppAPI.getContacts();

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
