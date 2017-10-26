let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');

let AppActions = {
    saveContact: function (contact) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_CONTACT,
            contact: contact
        });
    },

    receiveContacts: function (contacts) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECEIVE_CONTACTS,
            contacts: contacts
        });
    }
};

module.exports = AppActions;