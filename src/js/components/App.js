let React = require('react');
let createReactClass = require('create-react-class');
let AppActions = require('../actions/AppActions');
let AppStore = require('../stores/AppStore');
let AddForm = require('./AddForm.js');

function getAppState(){
	return {
		contacts: AppStore.getContacts()
	}
}

let App = createReactClass({
	getInitialState: function() {
		return getAppState();
	},

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	componentWillUnMount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

    render: function() {
		console.log(this.state.contacts);
        return (
            <div>
                <AddForm />
            </div>
        )
    },

    _onChange: function() {
    	this.setState(getAppState());
    }
});

module.exports = App;
