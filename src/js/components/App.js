let React = require('react');
let createReactClass = require('create-react-class');
let AppActions = require('../actions/AppActions');
let AppStore = require('../stores/AppStore');
let AddForm = require('./AddForm.js');
let EditForm = require('./EditForm.js');
let ContactList = require('./ContactList.js');

function getAppState(){
	return {
		contacts: AppStore.getContacts(),
        contactToEdit: AppStore.getContactToEdit()
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
		if(this.state.contactToEdit === '') {
			var form = <AddForm />
		} else {
			var form = <EditForm contactToEdit={this.state.contactToEdit} />
		}

        return (
            <div>
				{form}
				<ContactList contacts={this.state.contacts} />
            </div>
        )
    },

    _onChange: function() {
    	this.setState(getAppState());
    }
});

module.exports = App;
