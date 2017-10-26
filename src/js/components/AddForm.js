let React = require('react');
let createReactClass = require('create-react-class');
let AppActions = require('../actions/AppActions');
let AppStore = require('../stores/AppStore');

let AddForm = createReactClass({
    render: function() {
        return (
            <div className="well">
                <h3>Add Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" ref="name" className="form-control" placeholder="Contact Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="phone" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="email" ref="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <button type="submit" className="btn btn-success">Add</button>
                </form>
            </div>
        )
    },

    handleSubmit: function (e) {
        e.preventDefault();

        let contact = {
            name: this.refs.name.value.trim(),
            phone: this.refs.phone.value.trim(),
            email: this.refs.email.value.trim()
        };

        AppActions.saveContact(contact);
    }
});

module.exports = AddForm;
