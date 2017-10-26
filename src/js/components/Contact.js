let React = require('react');
let createReactClass = require('create-react-class');
let AppActions = require('../actions/AppActions');
let AppStore = require('../stores/AppStore');

let Contact = createReactClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.phone}</td>
                <td>{this.props.contact.email}</td>
                <td>
                    <a href="#" className="btn btn-default" onClick={this.handleEdit}>Edit</a>&nbsp;
                    <a href="#" className="btn btn-danger" onClick={this.handleRemove.bind(this, this.props.contact.id)}>Remove</a>
                </td>
            </tr>
        )
    },

    handleRemove: function (i, j) {
        AppActions.removeContact(i);
    }
});

module.exports = Contact;
