var React = require('react');
var createReactClass = require('create-react-class');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getAppState(){
	return {

	}
}

var App = createReactClass({
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
        return (
            <div>
                CONTACT LIST
            </div>
        )
    },

    _onChange: function() {
    	this.setState(getAppState());
    }
});

module.exports = App;
