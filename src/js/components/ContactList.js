let React = require('react');
let createReactClass = require('create-react-class');
let AppActions = require('../actions/AppActions');
let AppStore = require('../stores/AppStore');
let Contact = require('./Contact.js');

let ContactList = createReactClass({
    render: function() {
        return (
            <div>
                <h3>Contacts</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map(function (contact, index) {
                                return(
                                    <Contact contact={contact} key={index} />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    },

});

module.exports = ContactList;
