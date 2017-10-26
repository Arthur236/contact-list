let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign')
let AppAPI = require('../utils/appAPI');

let CHANGE_EVENT = 'change';

let _items = [];

let AppStore = assign({}, EventEmitter.prototype, {
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
		
	}

	return true;
});

module.exports = AppStore;