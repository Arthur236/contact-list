let firebase = require('firebase');
let AppActions = require('../actions/AppActions');

let config = {
    apiKey: "AIzaSyBJbJmKQlIOXStmw6hQ8pQVKpSRXc8GErg",
    authDomain: "contact-list-56328.firebaseapp.com",
    databaseURL: "https://contact-list-56328.firebaseio.com",
    projectId: "contact-list-56328",
    storageBucket: "contact-list-56328.appspot.com",
    messagingSenderId: "647270985648"
};
let fire = firebase.initializeApp(config);

module.exports = {
    saveContact: function (contact) {
        fire.database().ref('contacts').push({
            contact: contact
        });
    },
    
    getContacts: function () {
        let contactsRef = fire.database().ref('contacts').orderByKey();
        contactsRef.once("value", function (snapshot) {
            let contacts = [];

            snapshot.forEach(function (childSnapshot) {
                let contact = {
                    id: childSnapshot.key,
                    name: childSnapshot.val().contact.name,
                    phone: childSnapshot.val().contact.phone,
                    email: childSnapshot.val().contact.email,
                };

                contacts.push(contact);
                AppActions.receiveContacts(contacts);
            });
        });
    }
};
