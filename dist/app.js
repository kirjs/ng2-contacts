/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _contacts = __webpack_require__(1);

	var _contacts2 = _interopRequireDefault(_contacts);

	var _contactDetails = __webpack_require__(3);

	var _contactDetails2 = _interopRequireDefault(_contactDetails);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultData = {
	  contacts: [{ name: 'One', lastContact: '2015-10-12' }, { name: 'Two', lastContact: '2015-10-13' }, { name: 'Three', lastContact: '2015-10-15' }, { name: 'Four', lastContact: '2015-10-16' }],
	  selectedContactIndex: 0
	};

	var data = JSON.parse(localStorage.getItem('contacts')) || defaultData;
	var config = new Baobab(data);

	var AppComponent = ng.Component({
	  directives: [_contacts2.default, _contactDetails2.default],
	  selector: 'my-app',
	  templateUrl: 'src/components/app/app.html'
	}).Class({
	  constructor: function constructor() {
	    this.config = config;
	    this.config.on('update', (function (update) {
	      localStorage.setItem('contacts', JSON.stringify(update.data.currentData));
	      this.processChange();
	    }).bind(this));
	    this.processChange();
	  },
	  processChange: function processChange() {
	    this.contacts = config.select('contacts');
	    this.selectedContactIndex = config.select('selectedContactIndex');
	  },
	  selectedContact: function selectedContact() {
	    var index = this.selectedContactIndex.get();
	    return this.contacts.select(index);
	  }
	});
	document.addEventListener('DOMContentLoaded', function () {
	  debugger;
	  ng.bootstrap(AppComponent);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _contact = __webpack_require__(2);

	var _contact2 = _interopRequireDefault(_contact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = ng.Component({
	  directives: [_contact2.default, ng.NgFor, ng.NgClass],
	  selector: 'kirjs-contacts',
	  properties: ['contacts', 'selectedContactIndex'],
	  templateUrl: 'src/components/contacts/contacts.html',
	  styleUrls: ['src/components/contacts/contacts.css']
	}).Class({
	  constructor: function constructor() {},
	  selectedContact: function selectedContact() {
	    var index = this.selectedContactIndex.get();
	    return this.contacts.select(index);
	  },
	  selectContact: function selectContact(contact) {
	    var index = contact.path[contact.path.length - 1];
	    this.selectedContactIndex.set(index);
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ng.Component({
	  selector: 'kirjs-contact',
	  properties: ['info'],
	  templateUrl: 'src/components/contact/contact.html',
	  styleUrls: ['src/components/contact/contact.css']
	}).Class({
	  constructor: function constructor() {},
	  selected: function selected() {}
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _autocomplete = __webpack_require__(4);

	var _autocomplete2 = _interopRequireDefault(_autocomplete);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = ng.Component({
	  selector: 'kirjs-contact-details',
	  properties: ['contact'],
	  directives: [_autocomplete2.default],
	  templateUrl: 'src/components/contact-details/contact-details.html',
	  styleUrls: ['src/components/contact-details/contact-details.css']
	}).Class({
	  updateContactName: function updateContactName($event) {
	    this.contact.set('name', $event.target.value);
	  },
	  constructor: function constructor() {}
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _suggestions = __webpack_require__(5);

	var _suggestions2 = _interopRequireDefault(_suggestions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = ng.Component({
	  selector: 'kirjs-autocomplete',
	  templateUrl: 'src/components/autocomplete/autocomplete.html',
	  directives: [ng.NgFor],
	  styleUrls: ['src/components/autocomplete/autocomplete.css']
	}).Class({
	  constructor: function constructor() {
	    this.selectedSuggestion = 0;
	  },

	  updateSuggestions: function updateSuggestions($event) {
	    this.suggestions = (0, _suggestions2.default)($event.target.value);

	    if ($event.keyCode === 40) {
	      this.selectedSuggestion++;
	    }

	    if ($event.keyCode === 38) {
	      this.selectedSuggestion = (this.suggestions.length + this.selectedSuggestion - 1) % this.suggestions.length;
	    }

	    if (this.selectedSuggestion >= this.suggestions.length) {
	      this.selectedSuggestion = 0;
	    }
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ambigify = ambigify;
	exports.match = match;

	exports.default = function (text) {
	  text = ambigify(text);
	  return match(text);
	};

	var possibleSuggestions = [{
	  matchers: ['met {{date}}', 'Meeting {{date}}'],
	  text: 'You met with {{person}}'
	}, {
	  matchers: ['met {{date}}', 'Meeting {{date}}'],
	  text: 'You met with {{person}}'
	}, {
	  matchers: ['met {{date}}', 'Meeting {{date}}'],
	  text: 'You met with {{person}}'
	}];

	var replacers = [{
	  matchers: [/\d\d[/-]\d\d/],
	  result: '{{date}}'
	}];

	function ambigify(text) {
	  return replacers.reduce(function (text, replacer) {
	    return replacer.matchers.reduce(function (text, matcher) {
	      console.log(text, matcher);
	      return text.replace(matcher, replacer.result);
	    }, text);
	  }, text);
	}

	function match(text) {
	  return possibleSuggestions.reduce(function (suggestions, suggestion) {
	    if (suggestion.matchers.some(function (matcher) {
	      return matcher.match(text);
	    })) {
	      suggestions.push(suggestion);
	    }
	    return suggestions;
	  }, []);
	}

/***/ }
/******/ ]);