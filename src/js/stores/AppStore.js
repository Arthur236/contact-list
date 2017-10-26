let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');
let AppAPI = require('../utils/appAPI');

let CHANGE_EVENT = 'change';

let _contacts = [];
let _contact_to_edit = '';

let AppStore = assign({}, EventEmitter.prototype, {
	getContacts: function () {
		return _contacts;
    },

    saveContact: function (contact) {
        _contacts.push(contact);
    },

	setContacts: function (contacts) {
		_contacts = contacts;
    },

	removeContact: function (contactId) {
		let index = _contacts.findIndex(x => x.id === contactId);
		_contacts.splice(index, 1);
    },

    setContactToEdit: function (contact) {
		_contact_to_edit = contact;
    },

    getContactToEdit: function () {
        return _contact_to_edit;
    },

	updateContact: function (contact) {
		for(i=0; i<_contacts.length; i++) {
			if(_contacts[i].id === contact.id) {
				_contacts.splice(i, 1);
				_contacts.push(contact);
			}
		}
    },

	addChangeListener: function(callback){
		this.on('change', callback);
	},

	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	let action = payload.action;

	switch(action.actionType){
		case AppConstants.SAVE_CONTACT:
			console.log("Saving contact");

			// Store save
			AppStore.saveContact(action.contact);

			// Save to API
			AppAPI.saveContact(action.contact);

			// Emit change
			AppStore.emit(CHANGE_EVENT);
			break;

        case AppConstants.RECEIVE_CONTACTS:
            console.log("Receiving contacts");

            // Store save
            AppStore.setContacts(action.contacts);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.REMOVE_CONTACT:
            console.log("Removing contact");

            // Store remove
            AppStore.removeContact(action.contactId);

            // API remove
			AppAPI.removeContact(action.contactId);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.EDIT_CONTACT:
            AppStore.setContactToEdit(action.contact);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.UPDATE_CONTACT:
            console.log("Updating contact");

            // Store update
            AppStore.updateContact(action.contact);

            // API update
            AppAPI.updateContact(action.contact);

            // Emit change
            AppStore.emit(CHANGE_EVENT);
            break;
	}

	return true;
});

module.exports = AppStore;