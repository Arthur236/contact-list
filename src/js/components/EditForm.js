let React = require('react');
let createReactClass = require('create-react-class');
let AppActions = require('../actions/AppActions');
let AppStore = require('../stores/AppStore');

let EditForm = createReactClass({
    render: function() {
        return (
            <div className="well">
                <h3>Edit Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" ref="name" onChange={this.handleChange.bind(this, 'name')} value={this.props.contactToEdit.name} className="form-control" placeholder="Contact Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" ref="phone" onChange={this.handleChange.bind(this, 'phone')} value={this.props.contactToEdit.phone} className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                        <input type="email" ref="email" onChange={this.handleChange.bind(this, 'email')} value={this.props.contactToEdit.email} className="form-control" placeholder="Email Address" />
                    </div>
                    <button type="submit" className="btn btn-success">Edit</button>
                </form>
            </div>
        )
    },

    handleChange: function (fieldName, event) {
        let newState = event.target.value;
        let selected = this.state.selected;
        selected.name = newState;
        this.setState({selected: selected});
    },

    handleSubmit: function (e) {
        e.preventDefault();

        let contact = {
            id: this.props.contactToEdit.id,
            name: this.refs.name.value.trim(),
            phone: this.refs.phone.value.trim(),
            email: this.refs.email.value.trim()
        };

        AppActions.updateContact(contact);
    }
});

module.exports = EditForm;
