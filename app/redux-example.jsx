var redux = require('redux');


console.log('startin redux example');
var reducer = (state = { name: 'Anonymous' }, action) => {
	return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);