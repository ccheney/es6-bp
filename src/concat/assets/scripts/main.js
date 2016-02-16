this["JST"] = this["JST"] || {};

this["JST"]["templates/precompile/modals/GenericModal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content js-modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close js-modal-reject\">×</button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n            </div>\n            <div class=\"modal-body\">\n                "
    + alias4(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default js-modal-reject\">"
    + alias4(((helper = (helper = helpers.rejectBtn || (depth0 != null ? depth0.rejectBtn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rejectBtn","hash":{},"data":data}) : helper)))
    + "</button>\n                <button type=\"button\" class=\"btn btn-primary js-modal-accept\">"
    + alias4(((helper = (helper = helpers.acceptBtn || (depth0 != null ? depth0.acceptBtn : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"acceptBtn","hash":{},"data":data}) : helper)))
    + "</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _structurejsDisplayStage = require('structurejs/display/Stage');

var _structurejsDisplayStage2 = _interopRequireDefault(_structurejsDisplayStage);

var _controllersModalController = require('./controllers/ModalController');

var _controllersModalController2 = _interopRequireDefault(_controllersModalController);

var _viewsModalsGenericModal = require('./views/modals/GenericModal');

var _viewsModalsGenericModal2 = _interopRequireDefault(_viewsModalsGenericModal);

/**
 * TODO: YUIDoc_comment
 *
 * @class App
 * @extends Stage
 * @constructor
 **/

var App = (function (_Stage) {
    _inherits(App, _Stage);

    function App() {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
    }

    /**
     * @overridden Stage.create
     */

    _createClass(App, [{
        key: 'create',
        value: function create() {
            _get(Object.getPrototypeOf(App.prototype), 'create', this).call(this);

            _controllersModalController2['default'].setView(this);

            var tempModal = new _viewsModalsGenericModal2['default']('templates/precompile/modals/GenericModal', {
                title: 'Modal Title',
                content: 'Modal Content',
                rejectBtn: 'Cancel',
                acceptBtn: 'Accept'
            });

            _controllersModalController2['default'].addModal(tempModal);
        }
    }]);

    return App;
})(_structurejsDisplayStage2['default']);

exports['default'] = App;
module.exports = exports['default'];

},{"./controllers/ModalController":3,"./views/modals/GenericModal":8,"structurejs/display/Stage":14}],2:[function(require,module,exports){
/**
 * A constant list of keyboard codes.
 *
 * @class KeyCode
 * @constructor
 **/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyCode = (function () {
  _createClass(KeyCode, null, [{
    key: "TAB",

    /**
     * TODO: YUIDoc_comment
     *
     * @property TAB
     * @type {number}
     * @static
     */
    value: 9,

    /**
     * TODO: YUIDoc_comment
     *
     * @property ENTER
     * @type {number}
     * @static
     */
    enumerable: true
  }, {
    key: "ENTER",
    value: 13,

    /**
     * TODO: YUIDoc_comment
     *
     * @property HOME
     * @type {number}
     * @static
     */
    enumerable: true
  }, {
    key: "HOME",
    value: 35,

    /**
     * TODO: YUIDoc_comment
     *
     * @property END
     * @type {number}
     * @static
     */
    enumerable: true
  }, {
    key: "END",
    value: 36,

    /**
     * TODO: YUIDoc_comment
     *
     * @property LEFT_ARROW
     * @type {number}
     * @static
     */
    enumerable: true
  }, {
    key: "LEFT_ARROW",
    value: 37,

    /**
     * TODO: YUIDoc_comment
     *
     * @property UP_ARROW
     * @type {number}
     * @static
     */
    enumerable: true
  }, {
    key: "UP_ARROW",
    value: 38,

    /**
     * TODO: YUIDoc_comment
     *
     * @property RIGHT_ARROW
     * @type {number}
     * @static
     */
    enumerable: true
  }, {
    key: "RIGHT_ARROW",
    value: 39,

    /**
     * TODO: YUIDoc_comment
     *
     * @property DOWN_ARROW
     * @type {number}
     * @static
     */
    enumerable: true
  }, {
    key: "DOWN_ARROW",
    value: 40,

    /**
     * TODO: YUIDoc_comment
     *
     * @property ESCAPE_KEY
     * @type {number}
     * @static
     */
    enumerable: true
  }, {
    key: "ESCAPE_KEY",
    value: 27,
    enumerable: true
  }]);

  function KeyCode() {
    _classCallCheck(this, KeyCode);
  }

  return KeyCode;
})();

exports["default"] = KeyCode;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _structurejsEventEventBroker = require('structurejs/event/EventBroker');

var _structurejsEventEventBroker2 = _interopRequireDefault(_structurejsEventEventBroker);

var _constantsKeyCode = require('../constants/KeyCode');

var _constantsKeyCode2 = _interopRequireDefault(_constantsKeyCode);

var _viewsModalsGenericModal = require('../views/modals/GenericModal');

var _viewsModalsGenericModal2 = _interopRequireDefault(_viewsModalsGenericModal);

var _eventsModalEvent = require('../events/ModalEvent');

var _eventsModalEvent2 = _interopRequireDefault(_eventsModalEvent);

/**
 * Singleton Class to manage modals.
 *
 * @class ModalController
 * @extends EventDispatcher
 * @constructor
 **/

var ModalController = (function () {
    _createClass(ModalController, null, [{
        key: '_view',

        /**
         * Holds a reference to a view that the modal will be added to.
         * The {{#crossLink "App"}}{{/crossLink}} $element is the HTML body element.
         *
         * @property _view
         * @type {App}
         * @private
         */
        value: null,

        /**
         * Holds a reference to the current modal being displayed.
         *
         * @property _currentModal
         * @type {BaseModal}
         * @private
         */
        enumerable: true
    }, {
        key: '_currentModal',
        value: null,

        /**
         * Determines if a modal is up or not.
         *
         * @property isModalActive
         * @type {boolean}
         * @public
         */
        enumerable: true
    }, {
        key: 'isModalActive',
        value: false,
        enumerable: true
    }, {
        key: 'isEnabled',
        value: false,
        enumerable: true
    }]);

    function ModalController() {
        _classCallCheck(this, ModalController);
    }

    /**
     * @overridden EventDispatcher.enable
     */

    _createClass(ModalController, null, [{
        key: 'enable',
        value: function enable() {
            if (ModalController.isEnabled === true) {
                return;
            }

            ModalController._view.$element.addEventListener('click', '.js-modalTrigger', ModalController._createModal, ModalController);
            ModalController._view.$element.addEventListener('keydown', ModalController._onEscPress, ModalController);

            _structurejsEventEventBroker2['default'].addEventListener(_eventsModalEvent2['default'].REMOVE, ModalController._onCloseModal, ModalController);

            ModalController.isEnabled = true;
        }

        /**
         * @overridden EventDispatcher.disable
         */
    }, {
        key: 'disable',
        value: function disable() {
            if (ModalController.isEnabled === false) {
                return;
            }

            ModalController._view.$element.removeEventListener('click', '.js-modalTrigger', ModalController._createModal, ModalController);
            ModalController._view.$element.removeEventListener('keydown', ModalController._onEscPress, ModalController);

            _structurejsEventEventBroker2['default'].removeEventListener(_eventsModalEvent2['default'].REMOVE, ModalController._onCloseModal, ModalController);

            ModalController.isEnabled = false;
        }

        //////////////////////////////////////////////////////////////////////////////////
        // HELPER METHOD
        //////////////////////////////////////////////////////////////////////////////////

        /**
         * Allows a view to be set so this controller knows what view to add the modal to.
         * The view needs to be set before any other interaction with this controller.
         *
         * @method setView
         * @param view {App}
         * @public
         */
    }, {
        key: 'setView',
        value: function setView(view) {
            if (ModalController._view !== null) {
                ModalController.disable();
            }

            ModalController._view = view;

            ModalController.enable();
        }

        /**
         * Adds a modal to correct view. Also remove the current modal if one is active.
         *
         * @method addModal
         * @param modal {DOMElement}
         * @public
         */
    }, {
        key: 'addModal',
        value: function addModal(modal) {
            if (ModalController._currentModal !== null) {
                ModalController._removeModal();
            }

            ModalController._currentModal = modal;
            ModalController._view.addChildAt(ModalController._currentModal, 0);
            ModalController.isModalActive = true;

            // Prevents the browser from scrolling. Used when there is a scroll area in the modal.
            if (ModalController._currentModal.allowPageScroll === false) {
                ModalController._view.$element.addClass('u-noScrolling');
            }
        }

        /**
         * Removes the current modal from the DOM.
         *
         * @method _removeModal
         * @private
         */
    }, {
        key: '_removeModal',
        value: function _removeModal() {
            ModalController._view.removeChild(ModalController._currentModal);

            ModalController._currentModal = null;
            ModalController.isModalActive = false;

            ModalController._view.$element.removeClass('u-noScrolling');
        }

        /**
         * When the esc key is press it will close the modal unless the modal tells the controller not to
         * by the {{#crossLink "BaseModal/forceInteraction:property"}}{{/crossLink}} property.
         *
         * @method _onEscPress
         * @private
         */
    }, {
        key: '_onEscPress',
        value: function _onEscPress(event) {
            if (event.keyCode === _constantsKeyCode2['default'].ESCAPE_KEY && ModalController._currentModal.forceInteraction === false) {
                ModalController._removeModal();
            }
        }

        /**
         * On the global dispatching of the ModalEvent.{{#crossLink "ModalEvent/REMOVE:event"}}{{/crossLink}}
         * event this method will remove the modal from the display view.
         *
         * @method _onCloseModal
         * @param event {BaseEvent}
         * @private
         */
    }, {
        key: '_onCloseModal',
        value: function _onCloseModal(event) {
            ModalController._removeModal();
        }

        /**
         * When one of the '.js-modalTrigger' modal trigger buttons is clicked this method will get the template and data
         * from the button. It will create a GenericModal then pass it to the modal controller to display it.
         *
         * @method _createModal
         * @private
         */
    }, {
        key: '_createModal',
        value: function _createModal(event) {
            var template = event.target.getAttribute('data-modal-template');
            var data = event.target.getAttribute('data-modal-data');
            data = JSON.parse(data);

            var modal = new _viewsModalsGenericModal2['default'](template, data);

            ModalController.addModal(modal);
        }
    }]);

    return ModalController;
})();

exports['default'] = ModalController;
module.exports = exports['default'];

},{"../constants/KeyCode":2,"../events/ModalEvent":4,"../views/modals/GenericModal":8,"structurejs/event/EventBroker":16}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _structurejsEventBaseEvent = require('structurejs/event/BaseEvent');

var _structurejsEventBaseEvent2 = _interopRequireDefault(_structurejsEventBaseEvent);

/**
 * This event class is meant to manage all event types for all modals within the site.
 *
 * @class ModalEvent
 * @extends BaseEvent
 * @constructor
 **/

var ModalEvent = (function (_BaseEvent) {
  _inherits(ModalEvent, _BaseEvent);

  _createClass(ModalEvent, null, [{
    key: 'REMOVE',

    /**
     * Event to be dispatched when a modal needs to be closed.
     *
     * @event REMOVE
     * @type {string}
     * @static
     */
    value: 'ModalEvent.remove',

    /**
     * Event to be dispatched when a button in the modal is click to cancel something.
     *
     * @event REJECT
     * @type {string}
     * @static
     */
    enumerable: true
  }, {
    key: 'REJECT',
    value: 'ModalEvent.reject',

    /**
     * Event to be dispatched when a button in the modal is click to confirm something.
     *
     * @event ACCEPT
     * @type {string}
     * @static
     */
    enumerable: true
  }, {
    key: 'ACCEPT',
    value: 'ModalEvent.accept',
    enumerable: true
  }]);

  function ModalEvent(type, bubbles, cancelable, data) {
    _classCallCheck(this, ModalEvent);

    _get(Object.getPrototypeOf(ModalEvent.prototype), 'constructor', this).call(this, type, bubbles, cancelable, data);
  }

  return ModalEvent;
})(_structurejsEventBaseEvent2['default']);

exports['default'] = ModalEvent;
module.exports = exports['default'];

},{"structurejs/event/BaseEvent":15}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _utilsHandlebarHelpers = require('./utils/HandlebarHelpers');

var _utilsHandlebarHelpers2 = _interopRequireDefault(_utilsHandlebarHelpers);

_utilsHandlebarHelpers2['default'].init();

window.app = new _App2['default']();
window.app.appendTo('body'); // Need to specify what area our code has control over.
// The App.js class extends Stage which has the appendTo method.

},{"./App":1,"./utils/HandlebarHelpers":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _structurejsUtilStringUtil = require('structurejs/util/StringUtil');

var _structurejsUtilStringUtil2 = _interopRequireDefault(_structurejsUtilStringUtil);

/**
 * Hamburger helpers, makes a great meal
 *
 * @class HandlebarsHelpers
 * @constructor
 **/

var HandlebarsHelpers = (function () {
    function HandlebarsHelpers() {
        _classCallCheck(this, HandlebarsHelpers);
    }

    _createClass(HandlebarsHelpers, null, [{
        key: 'init',
        value: function init() {

            /**
             * Outputs raw json
             *
             * @param object {any}
             * @return Handlebars
             */
            Handlebars.registerHelper('toJSON', JSON.stringify);

            /**
             * Removes spaces and sets string to lowercase
             *
             * @param object {any}
             * @return Handlebars
             */
            Handlebars.registerHelper('lowerCaseAndConcat', function (object) {
                return new Handlebars.SafeString(object.replace(/\s+/g, '').toLowerCase());
            });

            /**
             * Removes spaces and sets string to lowercase
             *
             * @param object {any}
             * @return Handlebars
             */
            Handlebars.registerHelper('truncate', function (string) {
                return new Handlebars.SafeString(_structurejsUtilStringUtil2['default'].truncate(string, 100, '&hellip;'));
            });

            /**
             * Compares two values
             *
             * @param object {any}
             * @return Handlebars
             */
            Handlebars.registerHelper('compare', function (lvalue, rvalue, options) {

                if (arguments.length < 3) {
                    throw new Error('Handlerbars Helper "compare" needs 2 parameters');
                }

                var operator = options.hash.operator || '==';
                var operators = {
                    '==': function _(l, r) {
                        return l == r;
                    },
                    '===': function _(l, r) {
                        return l === r;
                    },
                    '!=': function _(l, r) {
                        return l != r;
                    },
                    '<': function _(l, r) {
                        return l < r;
                    },
                    '>': function _(l, r) {
                        return l > r;
                    },
                    '<=': function _(l, r) {
                        return l <= r;
                    },
                    '>=': function _(l, r) {
                        return l >= r;
                    },
                    'typeof': function _typeof(l, r) {
                        return typeof l == r;
                    }
                };

                if (!operators[operator]) {
                    throw new Error('Handlerbars Helper "compare" doesn\'t know the operator ' + operator);
                }

                var result = operators[operator](lvalue, rvalue);

                if (result) {
                    return options.fn(this);
                } else {
                    return options.inverse(this);
                }
            });

            /**
             * Outputs the data context
             *
             * @param optionalValue {any}
             */
            Handlebars.registerHelper('debug', function (optionalValue) {
                console.log('////////////');
                console.log(this);
                console.log('////////////');

                if (optionalValue) {
                    console.log('++++++++++++++');
                    console.log('optionalValue: ', optionalValue);
                    console.log('++++++++++++++');
                }
            });

            /**
             * Sets the 'selected' property on the select option(s) when the value is passed in.
             *
             * @method selectHelper
             * @example
             *      // selectValue = '69'
             *      // selectValue = '69,70,71'
             *      <select>
             *          {{#selectHelper selectValue}}
             *              <option value="Completed">Completed</option>
             *              <option value="OverDue">OverDue</option>
             *              <option value="SentToPayer">SentToPayer</option>
             *              <option value="None">None</option>
             *          {{/selectHelper}}
             *      </select>
             */
            Handlebars.registerHelper('selectHelper', function (selected, options) {
                var html = options.fn(this);

                if (selected) {
                    var values = String(selected).split(',');
                    var _length = values.length;

                    for (var i = 0; i < _length; i++) {
                        html = html.replace(new RegExp(' value=\"' + values[i] + '\"'), '$& selected="selected"');
                    }
                }

                return html;
            });
        }
    }]);

    return HandlebarsHelpers;
})();

exports['default'] = HandlebarsHelpers;
module.exports = exports['default'];

},{"structurejs/util/StringUtil":20}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _structurejsDisplayDOMElement = require('structurejs/display/DOMElement');

var _structurejsDisplayDOMElement2 = _interopRequireDefault(_structurejsDisplayDOMElement);

var _structurejsEventEventBroker = require('structurejs/event/EventBroker');

var _structurejsEventEventBroker2 = _interopRequireDefault(_structurejsEventEventBroker);

var _eventsModalEvent = require('../../events/ModalEvent');

var _eventsModalEvent2 = _interopRequireDefault(_eventsModalEvent);

/**
 * This is the base class for all modals.
 * All modals should extend this class.
 *
 * @class BaseModal
 * @extends DOMElement
 * @constructor
 **/

var BaseModal = (function (_DOMElement) {
  _inherits(BaseModal, _DOMElement);

  function BaseModal(template, data) {
    _classCallCheck(this, BaseModal);

    _get(Object.getPrototypeOf(BaseModal.prototype), 'constructor', this).call(this, template, data);

    this._$modalContent = null;
    this._$modalUnderlay = null;
    this.forceInteraction = false;
    this.allowPageScroll = true;
    this.modalData = null;
    this.modalData = data;
  }

  /**
   * @overridden DOMElement.create
   */

  _createClass(BaseModal, [{
    key: 'create',
    value: function create(template, data) {
      _get(Object.getPrototypeOf(BaseModal.prototype), 'create', this).call(this, template, data);

      this._$modalContent = this.$element.find('.js-modal-content');
      this._$modalUnderlay = this.$element.find('.js-modal-underlay');
    }

    /**
     * @overridden DOMElement.enable
     */
  }, {
    key: 'enable',
    value: function enable() {
      if (this.isEnabled === true) {
        return this;
      }

      this._$modalUnderlay.addEventListener('click', this._onClickModalUnderlay, this);
      this._$modalContent.addEventListener('click', '.js-modal-reject', this._onRejectModal, this);
      this._$modalContent.addEventListener('click', '.js-modal-accept', this._onAcceptModal, this);

      return _get(Object.getPrototypeOf(BaseModal.prototype), 'enable', this).call(this);
    }

    /**
     * @overridden DOMElement.disable
     */
  }, {
    key: 'disable',
    value: function disable() {
      if (this.isEnabled === false) {
        return this;
      }

      this._$modalUnderlay.removeEventListener('click', this._onClickModalUnderlay, this);
      this._$modalContent.removeEventListener('click', '.js-modal-reject', this._onRejectModal, this);
      this._$modalContent.removeEventListener('click', '.js-modal-accept', this._onAcceptModal, this);

      return _get(Object.getPrototypeOf(BaseModal.prototype), 'disable', this).call(this);
    }

    //////////////////////////////////////////////////////////////////////////////////
    // HELPER METHOD
    //////////////////////////////////////////////////////////////////////////////////

    /**
     * Dispatches a global {{#crossLink "ModalEvent"}}{{/crossLink}}.{{#crossLink "ModalEvent/REMOVE:event"}}{{/crossLink}} event so the {{#crossLink "ModalController"}}{{/crossLink}} can remove this modal.
     *
     * @method close
     * @public
     */
  }, {
    key: 'close',
    value: function close() {
      _structurejsEventEventBroker2['default'].dispatchEvent(_eventsModalEvent2['default'].REMOVE);
    }

    //////////////////////////////////////////////////////////////////////////////////
    // EVENT HANDLERS
    //////////////////////////////////////////////////////////////////////////////////

    /**
     * This method will be called when a rejected button (js-modal-reject) is clicked in the modal.
     * Override this method to add or change the functionality.
     * Dispatches the {{#crossLink "ModalEvent"}}{{/crossLink}}.{{#crossLink "ModalEvent/REJECT:event"}}{{/crossLink}} event.
     *
     * @method _onRejectModal
     * @param event {JQueryEventObject}
     * @protected
     */
  }, {
    key: '_onRejectModal',
    value: function _onRejectModal(event) {
      event.preventDefault();

      this.dispatchEvent(_eventsModalEvent2['default'].REJECT, this.modalData);

      this.close();
    }

    /**
     * This method will be called when a accepted button (js-modal-accept) is clicked in the modal.
     * Override this method to add or change the functionality.
     * Dispatches the {{#crossLink "ModalEvent"}}{{/crossLink}}.{{#crossLink "ModalEvent/ACCEPT:event"}}{{/crossLink}} event.
     *
     * @method _onAcceptModal
     * @param event {JQueryEventObject}
     * @protected
     */
  }, {
    key: '_onAcceptModal',
    value: function _onAcceptModal(event) {
      event.preventDefault();

      this.dispatchEvent(_eventsModalEvent2['default'].ACCEPT, this.modalData);

      this.close();
    }

    /**
     * If the modal background is clicked on this method is called to close the modal.
     * This method will not close the modal if the {{#crossLink "BaseModal/forceInteraction:property"}}{{/crossLink}} property is true.
     *
     * @method _onClickModalUnderlay
     * @param event {JQueryEventObject}
     * @protected
     */
  }, {
    key: '_onClickModalUnderlay',
    value: function _onClickModalUnderlay(event) {
      event.preventDefault();

      if (this.forceInteraction === false) {
        this.close();
      }
    }
  }]);

  return BaseModal;
})(_structurejsDisplayDOMElement2['default']);

exports['default'] = BaseModal;
module.exports = exports['default'];

/**
 * Holds a reference to the modal container so we can stop event
 * bubbling to the body through the DOM.
 *
 * @property _$modalContent
 * @type {jQuery}
 * @protected
 */

/**
 * Holds a reference to the modal's sneeze guard/background
 *
 * @property _$modalUnderlay
 * @type {jQuery}
 * @public
 */

/**
 * If this value is set to true the user cannot click outside of the modal or
 * click the ESC key to close the modal. The user must click one of the buttons
 * in the modal.
 *
 * @property forceInteraction
 * @type {boolean}
 * @public
 */

/**
 * If this value is set to false the page/body will not scroll.
 * Set this property to false in the class that extends this {{#crossLink "BaseModal"}}{{/crossLink}} class
 * if there is any scrollable content in the modal.
 *
 * @property allowPageScroll
 * @type {boolean}
 * @public
 */

/**
 * A reference to the data that was passed into the constructor of the modal.
 * This data object will also be dispatched with the ModalEvent.{{#crossLink "ModalEvent/ACCEPT:event"}}{{/crossLink}} and
 * {{#crossLink "ModalEvent/REJECT:event"}}{{/crossLink}}.
 *
 * @property modalData
 * @type {any}
 * @public
 */

},{"../../events/ModalEvent":4,"structurejs/display/DOMElement":11,"structurejs/event/EventBroker":16}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _BaseModal2 = require('./BaseModal');

var _BaseModal3 = _interopRequireDefault(_BaseModal2);

/**
 * This generic modal allows a template and data to be passed in to render a modal.
 * It is meant for modals that are display only and has no extra logic except closing itself.
 * Checkout the BaseModal to see what extra functionality this class inherits.
 *
 * @class GenericModal
 * @extends BaseModal
 * @constructor
 **/

var GenericModal = (function (_BaseModal) {
  _inherits(GenericModal, _BaseModal);

  function GenericModal(template) {
    var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, GenericModal);

    _get(Object.getPrototypeOf(GenericModal.prototype), 'constructor', this).call(this, template, data);

    /**
     * @overridden BaseModal.allowPageScroll
     */
    this.allowPageScroll = data.allowPageScroll === void 0 ? this.allowPageScroll : data.allowPageScroll;
  }

  return GenericModal;
})(_BaseModal3['default']);

exports['default'] = GenericModal;
module.exports = exports['default'];

},{"./BaseModal":7}],9:[function(require,module,exports){
'use strict';

(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './util/Util'], factory);
    }
})(function (require, exports) {
    ///<reference path='_declare/jquery.d.ts'/>
    ///<reference path='_declare/handlebars.d.ts'/>
    ///<reference path='_declare/greensock.d.ts'/>
    ///<reference path='_declare/jquery.eventListener.d.ts'/>
    ///<reference path='_declare/log.d.ts'/>
    var Util_1 = require('./util/Util');
    /**
     * The {{#crossLink "BaseObject"}}{{/crossLink}} class is an abstract class that provides common properties and functionality for all StructureJS classes.
     *
     * @class BaseObject
     * @module StructureJS
     * @submodule core
     * @requires Util
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     */
    var BaseObject = (function () {
        function BaseObject() {
            /**
             * The sjsId (StructureJS ID) is a unique identifier automatically assigned to most StructureJS objects upon instantiation.
             *
             * @property sjsId
             * @type {int}
             * @default null
             * @writeOnce
             * @readOnly
             * @public
             */
            this.sjsId = null;
            this.sjsId = Util_1['default'].uniqueId();
        }
        /**
         * Returns the fully qualified class name of an object.
         *
         * @method getQualifiedClassName
         * @returns {string} Returns the class name.
         * @public
         * @example
         *     let someClass = new SomeClass();
         *     someClass.getQualifiedClassName();
         *
         *     // SomeClass
         */
        BaseObject.prototype.getQualifiedClassName = function () {
            return Util_1['default'].getName(this);
        };
        /**
         * The purpose of the destroy method is to make an object ready for garbage collection. This
         * should be thought of as a one way function. Once destroy is called no further methods should be
         * called on the object or properties accessed. It is the responsibility of those who implement this
         * function to stop all running Timers, all running Sounds, and take any other steps necessary to make an
         * object eligible for garbage collection.
         *
         * By default the destroy method will null out all properties of the class automatically. You should call destroy
         * on other objects before calling the super.
         *
         * @method destroy
         * @return {void}
         * @public
         * @example
         *     destroy() {
         *          this.disable();
         *
         *          this._childInstance.destroy();
         *
         *          super.destroy();
         *     }
         */
        BaseObject.prototype.destroy = function () {
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    this[key] = null;
                }
            }
        };
        return BaseObject;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports['default'] = BaseObject;
});

},{"./util/Util":22}],10:[function(require,module,exports){
'use strict';

var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './BaseObject'], factory);
    }
})(function (require, exports) {
    var BaseObject_1 = require('./BaseObject');
    /**
     * The {{#crossLink "ObjectManager"}}{{/crossLink}} class is an abstract class that provides enabling and disabling functionality for most StructureJS classes.
     *
     * @class ObjectManager
     * @module StructureJS
     * @extends BaseObject
     * @submodule core
     * @requires Extend
     * @requires BaseObject
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     */
    var ObjectManager = (function (_super) {
        __extends(ObjectManager, _super);
        function ObjectManager() {
            _super.call(this);
            /**
             * The isEnabled property is used to keep track of the enabled state of the object.
             *
             * @property isEnabled
             * @type {boolean}
             * @default false
             * @public
             */
            this.isEnabled = false;
        }
        /**
         * The enable method is responsible for enabling object.
         * After this method is called it will trigger the {{#crossLink "ObjectManager/onEnabled:method"}}{{/crossLink}} method.
         *
         * @method enable
         * @public
         * @chainable
         * @example
         *     enable() {
         *          if (this.isEnabled === true) { return; }
         *
         *          this._childInstance.addEventListener(BaseEvent.CHANGE, this.handlerMethod, this);
         *          this._childInstance.enable();
         *
         *          super.enable();
         *     }
         *
         *      // Example on how to enable a view.
         *      this._childInstance.enable();
         */
        ObjectManager.prototype.enable = function () {
            if (this.isEnabled === true) {
                return this;
            }
            this.isEnabled = true;
            this.onEnabled();
            return this;
        };
        /**
         * This method is automatically called after the enable method is called on the object.
         * The enable method is responsible for enabling event listeners and/or children of the containing objects.
         *
         * @method onEnabled
         * @public
         * @chainable
         * @example
         *     onEnabled() {
         *          this._childInstance.addEventListener(BaseEvent.CHANGE, this.handlerMethod, this);
         *          this._childInstance.enable();
         *     }
         */
        ObjectManager.prototype.onEnabled = function () {
            return this;
        };
        /**
         * The disable method is responsible for disabling the object.
         * After this method is called it will trigger the {{#crossLink "ObjectManager/onDisabled:method"}}{{/crossLink}} method.
         *
         * @method disable
         * @public
         * @chainable
         * @example
         *      disable() {
         *          if (this.isEnabled === false) { return; }
         *
         *          this._childInstance.removeEventListener(BaseEvent.CHANGE, this.handlerMethod, this);
         *          this._childInstance.disable();
         *
         *          super.disable();
         *      }
         *
         *      // Example on how to disable a view.
         *      this._childInstance.disable();
         */
        ObjectManager.prototype.disable = function () {
            if (this.isEnabled === false) {
                return this;
            }
            this.isEnabled = false;
            this.onDisabled();
            return this;
        };
        /**
         * This method is automatically called after the disable method is called on the object.
         * The onDisabled method is responsible for disabling event listeners and/or children of the containing objects.
         *
         * @method onDisabled
         * @public
         * @chainable
         * @example
         *     onDisabled() {
         *          this._childInstance.removeEventListener(BaseEvent.CHANGE, this.handlerMethod, this);
         *          this._childInstance.disable();
         *     }
         */
        ObjectManager.prototype.onDisabled = function () {
            return this;
        };
        return ObjectManager;
    })(BaseObject_1['default']);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports['default'] = ObjectManager;
});

},{"./BaseObject":9}],11:[function(require,module,exports){
'use strict';

var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './DisplayObjectContainer', '../event/BaseEvent', '../util/TemplateFactory', '../util/ComponentFactory', '../plugin/jquery.eventListener'], factory);
    }
})(function (require, exports) {
    var DisplayObjectContainer_1 = require('./DisplayObjectContainer');
    var BaseEvent_1 = require('../event/BaseEvent');
    var TemplateFactory_1 = require('../util/TemplateFactory');
    var ComponentFactory_1 = require('../util/ComponentFactory');
    var jquery_eventListener_1 = require('../plugin/jquery.eventListener');
    /**
     * The {{#crossLink "DOMElement"}}{{/crossLink}} class is the base view class for all objects that can be placed into the HTML DOM.
     *
     * @class DOMElement
     * @param type [any=null] Either a jQuery object or JavaScript template string reference you want to use as the view. Check out the examples below.
     * @param params [any=null] Any data you would like to pass into the jQuery element or template that is being created.
     * @extends DisplayObjectContainer
     * @module StructureJS
     * @submodule view
     * @requires Extend
     * @requires DisplayObjectContainer
     * @requires BaseEvent
     * @requires TemplateFactory
     * @requires ComponentFactory
     * @requires jQuery
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     * @example
     *     // Example: Using DOMElement without extending it.
     *     let aLink = new DOMElement('a', {text: 'Google', href: 'http://www.google.com', 'class': 'externalLink'});
     *     this.addChild(aLink);
     *
     *     // Example: A view passing in a jQuery object.
     *     let view = new CustomView($('.selector'));
     *     this.addChild(view);
     *
     *     // Example: A view extending DOMElement while passing in a jQuery object.
     *     class ClassName extends DOMElement {
     *
     *          constructor($element) {
     *              super($element);
     *          }
     *
     *          create() {
     *              super.create();
     *
     *              // Create and add your child objects to this parent class.
     *          }
     *
     *          enable() {
     *              if (this.isEnabled === true) { return; }
     *
     *              // Enable the child objects and add any event listeners.
     *
     *              super.enable();
     *          }
     *
     *          disable() {
     *              if (this.isEnabled === false) { return; }
     *
     *              // Disable the child objects and remove any event listeners.
     *
     *              super.disable();
     *          }
     *
     *          layout() {
     *              // Layout or update the child objects in this parent class.
     *          }
     *
     *          destroy() {
     *              this.disable();
     *
     *              // Destroy the child objects and references in this parent class to prevent memory leaks.
     *
     *              super.destroy();
     *          }
     *
     *     }
     *
     *     // Example: A view extending DOMElement with a precompiled JavaScript template reference passed in.
     *     class ClassName extends DOMElement {
     *
     *          constructor() {
     *              _super();
     *          }
     *
     *          create() {
     *              super.create('templates/home/homeTemplate', {data: 'some data'});
     *
     *              // Create and add your child objects to this parent class.
     *          }
     *
     *          enable() {
     *              if (this.isEnabled === true) { return; }
     *
     *              // Enable the child objects and add any event listeners.
     *
     *              super.enable();
     *          }
     *
     *          disable() {
     *              if (this.isEnabled === false) { return; }
     *
     *              // Disable the child objects and remove any event listeners.
     *
     *              super.disable();
     *          }
     *
     *          layout() {
     *              // Layout or update the child objects in this parent class.
     *          }
     *
     *          destroy() {
     *              this.disable();
     *
     *              // Destroy the child objects and references in this parent class to prepare for garbage collection.
     *
     *              super.destroy();
     *          }
     *
     *     }
     */
    var DOMElement = (function (_super) {
        __extends(DOMElement, _super);
        function DOMElement(type, params) {
            if (type === void 0) {
                type = null;
            }
            if (params === void 0) {
                params = null;
            }
            _super.call(this);
            /**
             * Tracks number of times an element's width has been checked
             * in order to determine if the element has been added
             * to the DOM.
             *
             * @property checkCount
             * @type {number}
             * @public
             */
            this.checkCount = 0;
            /**
             * A cached reference to the DOM Element
             *
             * @property element
             * @type {HTMLElement}
             * @default null
             * @public
             */
            this.element = null;
            /**
             * A cached reference to the jQuery DOM element
             *
             * @property $element
             * @type {JQuery}
             * @default null
             * @public
             */
            this.$element = null;
            /**
             * If a jQuery object was passed into the constructor this will be set as true and
             * this class will not try to add the view to the DOM since it already exists.
             *
             * @property _isReference
             * @type {boolean}
             * @protected
             */
            this._isReference = false;
            /**
             * Holds onto the value passed into the constructor.
             *
             * @property _type
             * @type {string}
             * @default null
             * @protected
             */
            this._type = null;
            /**
             * Holds onto the value passed into the constructor.
             *
             * @property _params
             * @type {any}
             * @default null
             * @protected
             */
            this._params = null;
            if (type instanceof jquery_eventListener_1['default']) {
                this.$element = type;
                this.element = this.$element[0];
                this._isReference = true;
            } else if (type) {
                this._type = type;
                this._params = params;
            }
        }
        /**
         * The create function is intended to provide a consistent place for the creation and adding
         * of children to the view. It will automatically be called the first time that the view is added
         * to another DisplayObjectContainer. It is critical that all subclasses call the super for this function in
         * their overridden methods.
         *
         * This method gets called once when the child view is added to another view. If the child view is removed
         * and added to another view the create method will not be called again.
         *
         * @method create
         * @param type [string=div] The HTML tag you want to create or the id/class selector of the template or the pre-compiled path to a template.
         * @param params [any=null] Any data you would like to pass into the jQuery element or template that is being created.
         * @returns {any} Returns an instance of itself.
         * @public
         * @chainable
         * @example
         *     // EXAMPLE 1: By default your view class will be a div element:
         *     create() {
         *          super.create();
         *
         *          this._childInstance = new DOMElement();
         *          this.addChild(this._childInstance);
         *     }
         *
         *     // EXAMPLE 2: But lets say you wanted the view to be a ul element:
         *     create() {
         *          super.create('ul');
         *     }
         *
         *     // Then you could nest other elements inside this base view/element.
         *     create() {
         *          super.create('ul', {id: 'myId', 'class': 'myClass anotherClass'});
         *
         *          let li = new DOMElement('li', {text: 'Robert is cool'});
         *          this.addChild(li);
         *     }
         *
         *     // EXAMPLE 3: So that's cool but what if you wanted a block of html to be your view. Let's say you had the below
         *     // inline Handlebar template in your html file.
         *     <script id="todoTemplate" type="text/template">
         *          <div id="htmlTemplate" class="js-todo">
         *              <div id="input-wrapper">
         *                  <input type="text" class="list-input" placeholder="{{ data.text }}">
         *                  <input type="button" class="list-item-submit" value="Add">
         *              </div>
         *          </div>
         *     </script>
         *
         *     // You would just pass in the id or class selector of the template which in this case is "#todoTemplate".
         *     // There is a second optional argument where you can pass data for the Handlebar template to use.
         *     create() {
         *          super.create('#todoTemplate', { data: this.viewData });
         *
         *     }
         *
         *     // EXAMPLE 4: Or maybe you're using grunt-contrib-handlebars, or similar, to precompile hbs templates
         *     create() {
         *          super.create('templates/HomeTemplate', {data: "some data"});
         *
         *     }
         */
        DOMElement.prototype.create = function (type, params) {
            if (type === void 0) {
                type = 'div';
            }
            if (params === void 0) {
                params = null;
            }
            // Use the data passed into the constructor first else use the arguments from create.
            type = this._type || type;
            params = this._params || params;
            if (this.isCreated === true) {
                throw new Error('[' + this.getQualifiedClassName() + '] You cannot call the create method manually. It is only called once automatically during the view lifecycle and should only be called once.');
            }
            if (this.$element == null) {
                var html_1 = TemplateFactory_1['default'].create(type, params);
                if (html_1) {
                    this.$element = jquery_eventListener_1['default'](html_1);
                } else {
                    this.$element = jquery_eventListener_1['default']("<" + type + "/>", params);
                }
            }
            this.element = this.$element[0];
            this.width = this.$element.width();
            this.height = this.$element.height();
            this.setSize(this.width, this.height);
            return this;
        };
        /**
         * @overridden DisplayObjectContainer.addChild
         * @method addChild
         * @param child {DOMElement} The DOMElement instance to add as a child of this object instance.
         * @returns {any} Returns an instance of itself.
         * @chainable
         * @example
         *     this.addChild(domElementInstance);
         */
        DOMElement.prototype.addChild = function (child) {
            if (this.$element == null) {
                throw new Error('[' + this.getQualifiedClassName() + '] You cannot use the addChild method if the parent object is not added to the DOM.');
            }
            _super.prototype.addChild.call(this, child);
            // If an empty jQuery object is passed into the constructor then don't run the code below.
            if (child._isReference === true && child.$element.length === 0) {
                return this;
            }
            if (child.isCreated === false) {
                child.create(); // Render the item before adding to the DOM
                child.isCreated = true;
            }
            // If the child object is not a reference of a jQuery object in the DOM then append it.
            if (child._isReference === false) {
                this.$element.append(child.$element);
            }
            this._onAddedToDom(child);
            return this;
        };
        /**
         * Adds the sjsId to the DOM element so we can know what what Class object the HTMLElement belongs too.
         *
         * @method _addClientSideId
         * @param child {DOMElement} The DOMElement instance to add the sjsId too.
         * @protected
         */
        DOMElement.prototype._addClientSideId = function (child) {
            var type = child.$element.attr('data-sjs-type');
            var id = child.$element.attr('data-sjs-id');
            if (type === void 0) {
                // Make them array's so the join method will work.
                type = [child.getQualifiedClassName()];
                id = [child.sjsId];
            } else {
                // Split them so we can push/add the new values.
                type = type.split(',');
                id = id.split(',');
                type.push(child.getQualifiedClassName());
                id.push(child.sjsId);
            }
            // Updated list of id's and types
            child.$element.attr('data-sjs-id', id.join(','));
            child.$element.attr('data-sjs-type', type.join(','));
        };
        /**
         * Removes the sjsId and class type from the HTMLElement.
         *
         * @method _removeClientSideId
         * @param child {DOMElement} The DOMElement instance to add the sjsId too.
         * @protected
         * @return {boolean}
         */
        DOMElement.prototype._removeClientSideId = function (child) {
            var type = child.$element.attr('data-sjs-type');
            var id = child.$element.attr('data-sjs-id');
            // Split them so we can remove the child sjsId and type.
            var typeList = type.split(',');
            var idList = id.split(',').map(Number); // Convert each item into a number.
            var index = idList.indexOf(child.sjsId);
            if (index > -1) {
                // Remove the id and type from the array.
                typeList.splice(index, 1);
                idList.splice(index, 1);
                // Updated list of id's and types
                child.$element.attr('data-sjs-type', typeList.join(','));
                child.$element.attr('data-sjs-id', idList.join(','));
            }
            return idList.length === 0;
        };
        /**
         * Called when the child object is added to the DOM.
         * The method will call {{#crossLink "DOMElement/layout:method"}}{{/crossLink}} and dispatch the BaseEvent.ADDED_TO_STAGE event.
         *
         * @method _onAddedToDom
         * @protected
         */
        DOMElement.prototype._onAddedToDom = function (child) {
            var _this = this;
            child.checkCount++;
            if (child.$element.width() === 0 && child.checkCount < 5) {
                setTimeout(function () {
                    _this._onAddedToDom(child);
                }, 100);
                return;
            }
            this._addClientSideId(child);
            child.width = child.$element.width();
            child.height = child.$element.height();
            child.setSize(child.width, child.height);
            child.enable();
            child.layout();
            child.dispatchEvent(new BaseEvent_1['default'](BaseEvent_1['default'].ADDED_TO_STAGE));
        };
        /**
         * @overridden DisplayObjectContainer.addChildAt
         */
        DOMElement.prototype.addChildAt = function (child, index) {
            var children = this.$element.children();
            var length = children.length;
            // If an empty jQuery object is passed into the constructor then don't run the code below.
            if (child._isReference === true && child.$element.length === 0) {
                return this;
            }
            if (index < 0 || index >= length) {
                // If the index passed in is less than 0 and greater than the total number of children then place the item at the end.
                this.addChild(child);
            } else {
                // Else get the child in the children array by the index passed in and place the item before that child.
                if (child.isCreated === false) {
                    child.create(); // Render the item before adding to the DOM
                    child.isCreated = true;
                }
                // Adds the child at a specific index but also will remove the child from another parent object if one exists.
                if (child.parent) {
                    child.parent.removeChild(child, false);
                }
                this.children.splice(index, 0, child);
                this.numChildren = this.children.length;
                child.parent = this;
                // Adds the child before any child already added in the DOM.
                jquery_eventListener_1['default'](children.get(index)).before(child.$element);
                this._onAddedToDom(child);
            }
            return this;
        };
        /**
         * @overridden DisplayObjectContainer.swapChildren
         */
        DOMElement.prototype.swapChildren = function (child1, child2) {
            var child1Index = child1.$element.index();
            var child2Index = child2.$element.index();
            this.addChildAt(child1, child2Index);
            this.addChildAt(child2, child1Index);
            return this;
        };
        /**
         * @overridden DisplayObjectContainer.getChildAt
         */
        DOMElement.prototype.getChildAt = function (index) {
            return _super.prototype.getChildAt.call(this, index);
        };
        /**
         * Returns a DOMElement object with the first found DOM element by the passed in selector.
         *
         * @method getChild
         * @param selector {string} DOM id name, DOM class name or a DOM tag name.
         * @returns {DOMElement}
         * @public
         */
        DOMElement.prototype.getChild = function (selector) {
            // Get the first match from the selector passed in.
            var jQueryElement = this.$element.find(selector).first();
            if (jQueryElement.length === 0) {
                throw new TypeError('[' + this.getQualifiedClassName() + '] getChild(' + selector + ') Cannot find DOM $element');
            }
            // Check to see if the element has a sjsId value and is a child of this parent object.
            var sjsId = parseInt(jQueryElement.attr('data-sjs-id'));
            var domElement = this.getChildByCid(sjsId);
            // Creates a DOMElement from the jQueryElement.
            if (domElement == null) {
                // Create a new DOMElement and assign the jQuery element to it.
                domElement = new DOMElement();
                domElement.$element = jQueryElement;
                this._addClientSideId(domElement);
                domElement.element = jQueryElement[0];
                domElement.isCreated = true;
                // Added to the super addChild method because we don't need to append the element to the DOM.
                // At this point it already exists and we are just getting a reference to the DOM element.
                _super.prototype.addChild.call(this, domElement);
            }
            return domElement;
        };
        /**
         * Gets all the HTML elements children of this object.
         *
         * @method getChildren
         * @param [selector] {string} You can pass in any type of jQuery selector. If there is no selector passed in it will get all the children of this parent element.
         * @returns {Array.<DOMElement>} Returns a list of DOMElement's. It will grab all children HTML DOM elements of this object and will create a DOMElement for each DOM child.
         * If the 'data-sjs-id' property exists is on an HTML element a DOMElement will not be created for that element because it will be assumed it already exists as a DOMElement.
         * @public
         */
        DOMElement.prototype.getChildren = function (selector) {
            if (selector === void 0) {
                selector = '';
            }
            //TODO: Make sure the index of the children added is the same as the what is in the actual DOM.
            var $child;
            var domElement;
            var $list = this.$element.children(selector);
            var listLength = $list.length;
            for (var i_1 = 0; i_1 < listLength; i_1++) {
                $child = $list.eq(i_1);
                // If the jQuery element already has sjsId data property then it must be an existing DisplayObjectContainer (DOMElement) in the children array.
                if ($child.attr('data-sjs-id') === void 0) {
                    domElement = new DOMElement();
                    domElement.$element = $child;
                    this._addClientSideId(domElement);
                    domElement.element = $child.get(0);
                    domElement.isCreated = true;
                    // Added to the super addChild method because we don't need to append the element to the DOM.
                    // At this point it already exists and we are just getting a reference to the DOM element.
                    _super.prototype.addChild.call(this, domElement);
                }
            }
            return this.children;
        };
        /**
         * Removes the specified child object instance from the child list of the parent object instance.
         * The parent property of the removed child is set to null and the object is garbage collected if there are no other references
         * to the child. The index positions of any objects above the child in the parent object are decreased by 1.
         *
         * @method removeChild
         * @param child {DOMElement} The DisplayObjectContainer instance to remove.
         * @returns {any} Returns an instance of itself.
         * @override
         * @public
         * @chainable
         */
        DOMElement.prototype.removeChild = function (child, destroy) {
            if (destroy === void 0) {
                destroy = true;
            }
            var remove = this._removeClientSideId(child);
            child.disable();
            // Checks if destroy was called before removeChild so it doesn't error.
            if (remove === true && child.$element != null) {
                child.$element.unbind();
                child.$element.remove();
            }
            if (destroy === true) {
                child.destroy();
            }
            _super.prototype.removeChild.call(this, child);
            return this;
        };
        /**
         * Removes the child display object instance that exists at the specified index.
         *
         * @method removeChildAt
         * @param index {int} The index position of the child object.
         * @public
         * @chainable
         */
        DOMElement.prototype.removeChildAt = function (index, destroy) {
            if (destroy === void 0) {
                destroy = true;
            }
            this.removeChild(this.getChildAt(index), destroy);
            return this;
        };
        /**
         * Removes all child object instances from the child list of the parent object instance.
         * The parent property of the removed children is set to null and the objects are garbage collected if no other
         * references to the children exist.
         *
         * @method removeChildren
         * @returns {DOMElement} Returns an instance of itself.
         * @override
         * @public
         * @chainable
         */
        DOMElement.prototype.removeChildren = function (destroy) {
            if (destroy === void 0) {
                destroy = true;
            }
            while (this.children.length > 0) {
                this.removeChild(this.children.pop(), destroy);
            }
            this.$element.empty();
            return this;
        };
        /**
         * @overridden DisplayObjectContainer.destroy
         */
        DOMElement.prototype.destroy = function () {
            // Note: we can't just call destroy to remove the HTMLElement because there could be other views managing the same HTMLElement.
            /*if (this.$element != null) {
                 this.$element.unbind();
                 this.$element.remove();
             }*/
            _super.prototype.destroy.call(this);
        };
        /**
         * A way to instantiate view classes by found html selectors.
         *
         * Example: It will find all children elements of the {{#crossLink "DOMElement/$element:property"}}{{/crossLink}} property with the 'js-shareEmail' selector.
         * If any selectors are found the EmailShareComponent class will be instantiated and pass the found jQuery element into the contructor.
         *
         * @method createComponents
         * @param componentList (Array.<{ selector: string; component: DOMElement }>
         * @return {Array.<DOMElement>} Returns all the items created from this createComponents method.
         * @public
         * @chainable
         * @example
         *      create() {
         *          super.create();
         *
         *          this.createComponents([
         *              {selector: '.js-shareEmail', component: EmailShareComponent},
         *              {selector: '.js-pagination', component: PaginationComponent},
         *              {selector: '.js-carousel', component: CarouselComponent}
         *          ]);
         *      }
         */
        DOMElement.prototype.createComponents = function (componentList) {
            var list;
            var createdChildren = [];
            var length = componentList.length;
            var obj;
            for (var i_2 = 0; i_2 < length; i_2++) {
                obj = componentList[i_2];
                list = ComponentFactory_1['default'].create(this.$element.find(obj.selector), obj.component, this);
                createdChildren = createdChildren.concat(list);
            }
            return createdChildren;
        };
        return DOMElement;
    })(DisplayObjectContainer_1['default']);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports['default'] = DOMElement;
});

},{"../event/BaseEvent":15,"../plugin/jquery.eventListener":18,"../util/ComponentFactory":19,"../util/TemplateFactory":21,"./DisplayObjectContainer":13}],12:[function(require,module,exports){
'use strict';

var __extends = undefined && undefined.__extends || function (d, b) {
  for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    var v = factory(require, exports);if (v !== undefined) module.exports = v;
  } else if (typeof define === 'function' && define.amd) {
    define(["require", "exports", '../event/EventDispatcher'], factory);
  }
})(function (require, exports) {
  var EventDispatcher_1 = require('../event/EventDispatcher');
  /**
   * The {{#crossLink "DisplayObject"}}{{/crossLink}} class is the base class for all objects that can be placed on the display list.
   *
   * @class DisplayObject
   * @extends EventDispatcher
   * @module StructureJS
   * @submodule view
   * @requires Extend
   * @requires EventDispatcher
   * @constructor
   * @author Robert S. (www.codeBelt.com)
   */
  var DisplayObject = (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
      _super.call(this);
      /**
       * The Stage of the display object.
       *
       * @property stage
       * @type {any}
       * @public
       */
      this.stage = null;
      /**
       * The CanvasRenderingContext2D interface provides the 2D rendering context for the drawing surface of a canvas element.
       * This property is only used with the canvas specific display objects.
       *
       * @property ctx
       * @type {CanvasRenderingContext2D}
       * @public
       */
      this.ctx = null;
      /**
       * A property providing access to the x position.
       *
       * @property x
       * @type {number}
       * @default 0
       * @public
       */
      this.x = 0;
      /**
       * A property providing access to the y position.
       *
       * @property y
       * @type {number}
       * @default 0
       * @public
       */
      this.y = 0;
      /**
       * Indicates the width of the display object, in pixels.
       *
       * @property width
       * @type {number}
       * @default 0
       * @public
       */
      this.width = 0;
      /**
       * Indicates the height of the display object, in pixels.
       *
       * @property height
       * @type {number}
       * @default 0
       * @public
       */
      this.height = 0;
      /**
       * A property providing access to the unscaledWidth.
       *
       * @property unscaledWidth
       * @type {number}
       * @default 100
       * @public
       */
      this.unscaledWidth = 100;
      /**
       * A property providing access to the unscaledHeight.
       *
       * @property unscaledHeight
       * @type {number}
       * @default 100
       * @public
       */
      this.unscaledHeight = 100;
      /**
       * Indicates the horizontal scale (percentage) of the object as applied from the registration point.
       *
       * @property scaleX
       * @type {number}
       * @public
       */
      this.scaleX = 1;
      /**
       * Indicates the vertical scale (percentage) of an object as applied from the registration point of the object.
       *
       * @property scaleY
       * @type {number}
       * @public
       */
      this.scaleY = 1;
      /**
       * Indicates the rotation of the DisplayObject instance, in degrees, from its original orientation.
       *
       * @property rotation
       * @type {number}
       * @public
       */
      this.rotation = 0;
      /**
       * Indicates the alpha transparency value of the object specified.
       *
       * @property alpha
       * @type {number}
       * @public
       */
      this.alpha = 1;
      /**
       * Whether or not the display object is visible.
       *
       * @property visible
       * @type {boolean}
       * @public
       */
      this.visible = true;
      /**
       * Specifies whether this object receives mouse
       *
       * @property mouseEnabled
       * @type {boolean}
       * @public
       */
      this.mouseEnabled = false;
      /**
       * A Boolean value that indicates whether the pointing hand (hand cursor) appears when the pointer rolls over a display object.
       *
       * @property useHandCursor
       * @type {boolean}
       * @public
       */
      this.useHandCursor = false;
      /**
       * The isCreated property is used to keep track if it is the first time this DisplayObject is created.
       *
       * @property isCreated
       * @type {boolean}
       * @default false
       * @public
       */
      this.isCreated = false;
      /**
       * Indicates the instance name of the DisplayObject.
       *
       * @property name
       * @type {string}
       * @public
       */
      this.name = null;
    }
    /**
     * The create function is intended to provide a consistent place for the creation or initializing the view.
     * It will automatically be called the first time that the view is added to a DisplayObjectContainer.
     * It is critical that all subclasses call the super for this function in their overridden methods.
     *
     * @method create
     * @returns {DisplayObject} Returns an instance of itself.
     * @public
     * @chainable
     */
    DisplayObject.prototype.create = function () {
      this.isCreated = true;
      return this;
    };
    /**
     * The layout method provides a common function to handle updating objects in the view.
     *
     * @method layout
     * @returns {DisplayObject} Returns an instance of itself.
     * @public
     * @chainable
     */
    DisplayObject.prototype.layout = function () {
      return this;
    };
    /**
     * The setSize method sets the bounds within which the containing DisplayObject would like that component to lay itself out.
     *
     * @param unscaledWidth {number} The width within which the component should lay itself out.
     * @param unscaledHeight {number} The height within which the component should lay itself out.
     * @returns {DisplayObject} Returns an instance of itself.
     * @public
     * @chainable
     */
    DisplayObject.prototype.setSize = function (unscaledWidth, unscaledHeight) {
      this.unscaledWidth = unscaledWidth;
      this.unscaledHeight = unscaledHeight;
      return this;
    };
    DisplayObject.prototype._readerStart = function () {
      this.ctx.save();
    };
    DisplayObject.prototype.renderCanvas = function () {
      if (this.ctx === null || this.alpha <= 0 || this.visible === false) return false;
      this._readerStart();
      this.ctx.globalAlpha = this.alpha;
      this.layout();
      this._renderEnd();
    };
    DisplayObject.prototype._renderEnd = function () {
      this.ctx.restore();
    };
    return DisplayObject;
  })(EventDispatcher_1['default']);
  Object.defineProperty(exports, "__esModule", { value: true });
  exports['default'] = DisplayObject;
});

},{"../event/EventDispatcher":17}],13:[function(require,module,exports){
'use strict';

var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './DisplayObject'], factory);
    }
})(function (require, exports) {
    var DisplayObject_1 = require('./DisplayObject');
    /**
     * The {{#crossLink "DisplayObjectContainer"}}{{/crossLink}} class is the base class for all objects that can be placed on the display list.
     *
     * @class DisplayObjectContainer
     * @extends DisplayObject
     * @module StructureJS
     * @submodule view
     * @requires Extend
     * @requires DisplayObject
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     */
    var DisplayObjectContainer = (function (_super) {
        __extends(DisplayObjectContainer, _super);
        function DisplayObjectContainer() {
            _super.call(this);
            /**
             * Returns the number of children of this object.
             *
             * @property numChildren
             * @type {int}
             * @default 0
             * @readOnly
             * @public
             */
            this.numChildren = 0;
            /**
             * A reference to the child DisplayObject instances to this parent object instance.
             *
             * @property children
             * @type {Array.<DisplayObject>}
             * @readOnly
             * @public
             */
            this.children = [];
            /**
             * Determines whether or not the children of the object are mouse enabled.
             *
             * @property mouseChildren
             * @type {boolean}
             * @public
             */
            this.mouseChildren = false;
        }
        /**
         * Adds a child DisplayObject instance to this parent object instance. The child is added to the front (top) of all other
         * children in this parent object instance. (To add a child to a specific index position, use the addChildAt() method.)
         *
         * If you add a child object that already has a different parent, the object is removed from the child
         * list of the other parent object.
         *
         * @method addChild
         * @param child {DisplayObject} The DisplayObject instance to add as a child of this DisplayObjectContainer instance.
         * @returns {DisplayObjectContainer} Returns an instance of itself.
         * @public
         * @chainable
         */
        DisplayObjectContainer.prototype.addChild = function (child) {
            //If the child being passed in already has a parent then remove the reference from there.
            if (child.parent) {
                child.parent.removeChild(child);
            }
            this.children.push(child);
            this.numChildren = this.children.length;
            child.parent = this;
            return this;
        };
        /**
         * Adds a child DisplayObject instance to this DisplayObjectContainerContainer instance.
         * The child is added at the index position specified. An index of 0 represents the back
         * (bottom) of the display list for this DisplayObjectContainerContainer object.
         *
         * @method addChildAt
         * @param child {DisplayObject} The DisplayObject instance to add as a child of this object instance.
         * @param index {int} The index position to which the child is added. If you specify a currently occupied index position, the child object that exists at that position and all higher positions are moved up one position in the child list.
         * @returns {DisplayObjectContainer} Returns an instance of itself.
         * @public
         * @chainable
         */
        DisplayObjectContainer.prototype.addChildAt = function (child, index) {
            //If the child being passed in already has a parent then remove the reference from there.
            if (child.parent) {
                child.parent.removeChild(child);
            }
            this.children.splice(index, 0, child);
            this.numChildren = this.children.length;
            child.parent = this;
            return this;
        };
        /**
         * Removes the specified child object instance from the child list of the parent object instance.
         * The parent property of the removed child is set to null , and the object is garbage collected if no other references
         * to the child exist. The index positions of any objects above the child in the parent object are decreased by 1.
         *
         * @method removeChild
         * @param child {DisplayObject} The DisplayObject instance to remove.
         * @returns {DisplayObjectContainer} Returns an instance of itself.
         * @public
         * @chainable
         */
        DisplayObjectContainer.prototype.removeChild = function (child) {
            var index = this.getChildIndex(child);
            if (index !== -1) {
                // Removes the child object from the parent.
                this.children.splice(index, 1);
            }
            this.numChildren = this.children.length;
            child.parent = null;
            return this;
        };
        /**
         * Removes all child DisplayObject instances from the child list of the DisplayObjectContainerContainer instance.
         * The parent property of the removed children is set to null , and the objects are garbage collected if
         * no other references to the children exist.
         *
         * @method removeChildren
         * @returns {DisplayObjectContainer} Returns an instance of itself.
         * @public
         * @chainable
         */
        DisplayObjectContainer.prototype.removeChildren = function () {
            while (this.children.length > 0) {
                this.removeChild(this.children.pop());
            }
            return this;
        };
        /**
         * Swaps two DisplayObject's with each other.
         *
         * @method swapChildren
         * @param child1 {DisplayObject} The DisplayObject instance to be swap.
         * @param child2 {DisplayObject} The DisplayObject instance to be swap.
         * @returns {DisplayObjectContainer} Returns an instance of itself.
         * @public
         * @chainable
         */
        DisplayObjectContainer.prototype.swapChildren = function (child1, child2) {
            var child1Index = this.getChildIndex(child1);
            var child2Index = this.getChildIndex(child2);
            this.addChildAt(child1, child2Index);
            this.addChildAt(child2, child1Index);
        };
        /**
         * Swaps child objects at the two specified index positions in the child list. All other child objects in the display object container remain in the same index positions.
         *
         * @method swapChildrenAt
         * @param index1 {int} The index position of the first child object.
         * @param index2 {int} The index position of the second child object.
         * @returns {DisplayObjectContainer} Returns an instance of itself.
         * @public
         * @chainable
         */
        DisplayObjectContainer.prototype.swapChildrenAt = function (index1, index2) {
            if (index1 < 0 || index1 < 0 || index1 >= this.numChildren || index2 >= this.numChildren) {
                throw new TypeError('[' + this.getQualifiedClassName() + '] index value(s) cannot be out of bounds. index1 value is ' + index1 + ' index2 value is ' + index2);
            }
            var child1 = this.getChildAt(index1);
            var child2 = this.getChildAt(index2);
            this.swapChildren(child1, child2);
            return this;
        };
        /**
         * Returns the index position of a child DisplayObject instance.
         *
         * @method getChildIndex
         * @param child {DisplayObject} The DisplayObject instance to identify.
         * @returns {int} The index position of the child display object to identify.
         * @public
         */
        DisplayObjectContainer.prototype.getChildIndex = function (child) {
            return this.children.indexOf(child);
        };
        /**
         * Determines whether the specified display object is a child of the DisplayObject instance or the instance itself. The search includes the entire display list including this DisplayObject instance.
         *
         * @method contains
         * @param child {DisplayObject} The child object to test.
         * @returns {boolean}  true if the child object is a child of the DisplayObject or the container itself; otherwise false.
         * @public
         */
        DisplayObjectContainer.prototype.contains = function (child) {
            return this.children.indexOf(child) >= 0;
        };
        /**
         * Returns the child display object instance that exists at the specified index.
         *
         * @method getChildAt
         * @param index {int} The index position of the child object.
         * @returns {DisplayObject} The child display object at the specified index position.
         */
        DisplayObjectContainer.prototype.getChildAt = function (index) {
            return this.children[index];
        };
        /**
         * Gets a DisplayObject by its sjsId.
         *
         * @method getChildByCid
         * @param sjsId {number}
         * @returns {DisplayObject|null}
         * @override
         * @public
         */
        DisplayObjectContainer.prototype.getChildByCid = function (sjsId) {
            var child = null;
            for (var i_1 = this.numChildren - 1; i_1 >= 0; i_1--) {
                if (this.children[i_1].sjsId == sjsId) {
                    child = this.children[i_1];
                    break;
                }
            }
            return child;
        };
        return DisplayObjectContainer;
    })(DisplayObject_1['default']);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports['default'] = DisplayObjectContainer;
});

},{"./DisplayObject":12}],14:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './DOMElement'], factory);
    }
})(function (require, exports) {
    var DOMElement_1 = require('./DOMElement');
    /**
     * The {{#crossLink "Stage"}}{{/crossLink}} class should be extended by your main application or root class.
     *
     * @class Stage
     * @extends DOMElement
     * @module StructureJS
     * @submodule view
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     * @requires Extend
     * @requires DOMElement
     * @requires jQuery
     * @example
     *     // This example illustrates how to setup your main application or root class when extending the {{#crossLink "Stage"}}{{/crossLink}} class.
     *         class MainClass extends Stage {
     *
     *             constructor() {
     *                 super();
     *             }
     *
     *             create() {
     *                 super.create();
     *
     *                 // Create and add your child objects to this parent class.
     *             }
     *
     *             enable() {
     *                 if (this.isEnabled === true) { return; };
     *
     *                 // Enable the child objects and add any event listeners.
     *
     *                 super.enable();
     *             }
     *
     *             disable() {
     *                 if (this.isEnabled === false) { return; };
     *
     *                 // Disable the child objects and remove any event listeners.
     *
     *                 super.disable();
     *             }
     *
     *             layout() {
     *                 // Layout or update the child objects in this parent class.
     *             }
     *
     *             destroy() {
     *                 this.disable();
     *
     *                 // Destroy the child objects and references in this parent class to prepare for garbage collection.
     *
     *                 super.destroy();
     *             }
     *
     *         }
     *
     *
     * <b>Instantiation Example</b><br>
     * This example illustrates how to instantiate your main application or root class.
     *
     *      let app = new MainClass();
     *      app.appendTo('body');
     *
     */
    var Stage = (function (_super) {
        __extends(Stage, _super);
        function Stage() {
            _super.call(this);
        }
        /**
         * The selected HTML element where the child elements will be created. This method starts the lifecycle of the application.
         *
         * @method appendTo
         * @param type {any} A string value where your application will be appended. This can be an element id (#some-id), element class (.some-class) or a element tag (body).
         * @param [enabled=true] {boolean} Sets the enabled state of the object.
         * @chainable
         */
        Stage.prototype.appendTo = function (type, enabled) {
            if (enabled === void 0) { enabled = true; }
            this.$element = (type instanceof jQuery) ? type : jQuery(type);
            this._addClientSideId(this);
            if (this.isCreated === false) {
                this.create();
                this.isCreated = true;
                if (enabled === false) {
                    this.disable();
                }
                else {
                    this.enable();
                }
                this.layout();
            }
            return this;
        };
        return Stage;
    })(DOMElement_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Stage;
});

},{"./DOMElement":11}],15:[function(require,module,exports){
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../BaseObject'], factory);
    }
})(function (require, exports) {
    var BaseObject_1 = require('../BaseObject');
    /**
     * The {{#crossLink "BaseEvent"}}{{/crossLink}} class is used as the base class for the creation of Event objects, which are passed as parameters to event listeners when an event occurs.
     *
     * The properties of the {{#crossLink "BaseEvent"}}{{/crossLink}} class carry basic information about an event, such as the event's type or whether the event's default behavior can be canceled.
     *
     * For many events, such as the events represented by the Event class constants, this basic information is sufficient. Other events, however, may require more
     * detailed information.
     * @class BaseEvent
     * @extends BaseObject
     * @param type {string} The type of event. The type is case-sensitive.
     * @param [bubbles=false] {boolean} Indicates whether an event is a bubbling event. If the event can bubble, this value is true; otherwise it is false.
     * Note: With event-bubbling you can let one Event subsequently call on every ancestor ({{#crossLink "EventDispatcher/parent:property"}}{{/crossLink}})
     * (containers of containers of etc.) of the {{#crossLink "DisplayObjectContainer"}}{{/crossLink}} that originally dispatched the Event, all the way up to the surface ({{#crossLink "Stage"}}{{/crossLink}}). Any classes that do not have a parent cannot bubble.
     * @param [cancelable=false] {boolean} Indicates whether the behavior associated with the event can be prevented. If the behavior can be canceled, this value is true; otherwise it is false.
     * @param [data=null] {any} Use to pass any type of data with the event.
     * @module StructureJS
     * @submodule event
     * @requires Extend
     * @requires BaseObject
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     * @example
     *     // Example: how to create a custom event by extending BaseEvent.
     *
     *     class CountryEvent extends BaseEvent {
     *
     *          CHANGE_COUNTRY = 'CountryEvent.changeCountry';
     *
     *          constructor(type, bubbles = false, cancelable = false, data = null) {
     *              super(type, bubbles, cancelable, data);
     *
     *              this.countryName = null;
     *          }
     *      }
     *
     *     // Example: how to use the custom event.
     *     let event = new CountryEvent(CountryEvent.CHANGE_COUNTRY);
     *     event.countryName = 'Canada';
     *     this.dispatchEvent(event);
     */
    var BaseEvent = (function (_super) {
        __extends(BaseEvent, _super);
        function BaseEvent(type, bubbles, cancelable, data) {
            if (bubbles === void 0) { bubbles = false; }
            if (cancelable === void 0) { cancelable = false; }
            if (data === void 0) { data = null; }
            _super.call(this);
            /**
             * The type of event.
             *
             * @property type
             * @type {string}
             * @default null
             * @public
             * @readOnly
             */
            this.type = null;
            /**
             * A reference to the object that originally dispatched the event.
             *
             * @property target
             * @type {any}
             * @default null
             * @public
             * @readOnly
             */
            this.target = null;
            /**
             * The currentTarget property always points to the {{#crossLink "DisplayObjectContainer"}}{{/crossLink}} that the event is currently processing (i.e. bubbling at).
             *
             * @property currentTarget
             * @type {any}
             * @default null
             * @public
             * @readOnly
             */
            this.currentTarget = null;
            /**
             * Used to pass any type of data with the event.
             *
             * @property data
             * @type {any}
             * @public
             * @default null
             */
            this.data = null;
            /**
             * Indicates whether an event is a bubbling event.
             *
             * @property bubbles
             * @type {boolean}
             * @public
             * @default false
             */
            this.bubbles = false;
            /**
             * Indicates whether the behavior associated with the event can be prevented.
             *
             * @property cancelable
             * @type {boolean}
             * @public
             * @default false
             */
            this.cancelable = false;
            /**
             * Indicates if the {{#crossLink "BaseEvent/stopPropagation:method"}}{{/crossLink}} was called on the event object.
             *
             * @property isPropagationStopped
             * @type {boolean}
             * @default false
             * @public
             * @readOnly
             */
            this.isPropagationStopped = false;
            /**
             * Indicates if the {{#crossLink "BaseEvent/stopImmediatePropagation:method"}}{{/crossLink}} was called on the event object.
             *
             * @property isImmediatePropagationStopped
             * @type {boolean}
             * @default false
             * @public
             * @readOnly
             */
            this.isImmediatePropagationStopped = false;
            this.type = type;
            this.bubbles = bubbles;
            this.cancelable = cancelable;
            this.data = data;
        }
        /**
         * Prevents processing of any event listeners in nodes subsequent to the current node in the event flow.
         * This method does not affect any event listeners in the current node (currentTarget). In contrast,
         * the {{#crossLink "BaseEvent/stopImmediatePropagation:method"}}{{/crossLink}} method prevents processing
         * of event listeners in both the current node and subsequent nodes. Additional calls to this method have no effect.
         *
         * @method stopPropagation
         * @public
         * @example
         *     event.stopPropagation();
         */
        BaseEvent.prototype.stopPropagation = function () {
            this.isPropagationStopped = true;
        };
        /**
         * Prevents processing of any event listeners in the current node and any subsequent nodes in the event flow.
         * This method takes effect immediately, and it affects event listeners in the current node. In contrast,
         * the {{#crossLink "BaseEvent/stopPropagation:method"}}{{/crossLink}} method doesn't take effect until
         * all the event listeners in the current node finish processing.
         *
         * @method stopImmediatePropagation
         * @public
         * @example
         *     event.stopImmediatePropagation();
         */
        BaseEvent.prototype.stopImmediatePropagation = function () {
            this.stopPropagation();
            this.isImmediatePropagationStopped = true;
        };
        /**
         * Duplicates an instance of an BaseEvent subclass.
         *
         * Returns a new BaseEvent object that is a copy of the original instance of the BaseEvent object.
         *
         * The new BaseEvent object includes all the properties of the original.
         *
         * @method clone
         * @returns {BaseEvent}
         * @public
         * @example
         *     let cloneOfEvent = event.clone();
         */
        BaseEvent.prototype.clone = function () {
            var clonedBaseModel = new this.constructor(this.type, this.bubbles, this.cancelable, this.data);
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    clonedBaseModel[key] = this[key];
                }
            }
            return clonedBaseModel;
        };
        /**
         * The BaseEvent.ACTIVATE constant defines the value of the type property of an activate event object.
         *
         * @event ACTIVATE
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.ACTIVATE = 'BaseEvent.activate';
        /**
         * The BaseEvent.ADDED constant defines the value of the type property of an added event object.
         *
         * @event ADDED
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.ADDED = 'BaseEvent.added';
        /**
         * The BaseEvent.ADDED_TO_STAGE constant defines the value of the type property of an addedToStage event object.
         *
         * @event ADDED_TO_STAGE
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.ADDED_TO_STAGE = 'BaseEvent.addedToStage';
        /**
         * The BaseEvent.CANCEL constant defines the value of the type property of a cancel event object.
         *
         * @event CANCEL
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.CANCEL = 'BaseEvent.cancel';
        /**
         * The BaseEvent.CHANGE constant defines the value of the type property of a change event object.
         *
         * @event CHANGE
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.CHANGE = 'BaseEvent.change';
        /**
         * The BaseEvent.CLEAR constant defines the value of the type property of a clear event object.
         *
         * @event CLEAR
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.CLEAR = 'BaseEvent.clear';
        /**
         * The BaseEvent.CLOSE constant defines the value of the type property of a close event object.
         *
         * @event CLOSE
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.CLOSE = 'BaseEvent.close';
        /**
         * The BaseEvent.CLOSING constant defines the value of the type property of a closing event object.
         *
         * @event CLOSING
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.CLOSING = 'BaseEvent.closing';
        /**
         * The BaseEvent.COMPLETE constant defines the value of the type property of a complete event object.
         *
         * @event COMPLETE
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.COMPLETE = 'BaseEvent.complete';
        /**
         * The BaseEvent.CONNECT constant defines the value of the type property of a connect event object.
         *
         * @event CONNECT
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.CONNECT = 'BaseEvent.connect';
        /**
         * Defines the value of the type property of a copy event object.
         *
         * @event COPY
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.COPY = 'BaseEvent.copy';
        /**
         * Defines the value of the type property of a cut event object.
         *
         * @event CUT
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.CUT = 'BaseEvent.cut';
        /**
         * The BaseEvent.DEACTIVATE constant defines the value of the type property of a deactivate event object.
         *
         * @event DEACTIVATE
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.DEACTIVATE = 'BaseEvent.deactivate';
        /**
         * The BaseEvent.DISPLAYING constant defines the value of the type property of a displaying event object.
         *
         * @event DISPLAYING
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.DISPLAYING = 'BaseEvent.displaying';
        /**
         * The BaseEvent.ENTER_FRAME constant defines the value of the type property of an enterFrame event object.
         *
         * @event ENTER_FRAME
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.ENTER_FRAME = 'BaseEvent.enterFrame';
        /**
         * The BaseEvent.EXIT_FRAME constant defines the value of the type property of an exitFrame event object.
         *
         * @event EXIT_FRAME
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.EXIT_FRAME = 'BaseEvent.exitFrame';
        /**
         * The BaseEvent.EXITING constant defines the value of the type property of an exiting event object.
         *
         * @event EXITING
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.EXITING = 'BaseEvent.exiting';
        /**
         * The BaseEvent.FULL_SCREEN constant defines the value of the type property of a fullScreen event object.
         *
         * @event FULLSCREEN
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.FULLSCREEN = 'BaseEvent.fullScreen';
        /**
         * The BaseEvent.INIT constant defines the value of the type property of an init event object.
         *
         * @event INIT
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.INIT = 'BaseEvent.init';
        /**
         * The BaseEvent.NETWORK_CHANGE constant defines the value of the type property of a networkChange event object.
         *
         * @event NETWORK_CHANGE
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.NETWORK_CHANGE = 'BaseEvent.networkChange';
        /**
         * The BaseEvent.OPEN constant defines the value of the type property of an open event object.
         *
         * @event OPEN
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.OPEN = 'BaseEvent.open';
        /**
         * The BaseEvent.PASTE constant defines the value of the type property of a paste event object.
         *
         * @event PASTE
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.PASTE = 'BaseEvent.paste';
        /**
         * The BaseEvent.PREPARING constant defines the value of the type property of a preparing event object.
         *
         * @event PREPARING
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.PREPARING = 'BaseEvent.preparing';
        /**
         * The BaseEvent.REMOVED constant defines the value of the type property of a removed event object.
         *
         * @event REMOVED
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.REMOVED = 'BaseEvent.removed';
        /**
         * The BaseEvent.RENDER constant defines the value of the type property of a render event object.
         *
         * @event RENDER
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.RENDER = 'BaseEvent.render';
        /**
         * The BaseEvent.RESIZE constant defines the value of the type property of a resize event object.
         *
         * @event RESIZE
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.RESIZE = 'BaseEvent.resize';
        /**
         * The BaseEvent.SELECTED constant defines the value of the type property of a selected event object.
         *
         * @event SELECTED
         * @type {string}
         * @public
         * @static
         */
        BaseEvent.SELECTED = 'BaseEvent.selected';
        return BaseEvent;
    })(BaseObject_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = BaseEvent;
});

},{"../BaseObject":9}],16:[function(require,module,exports){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './EventDispatcher', './BaseEvent'], factory);
    }
})(function (require, exports) {
    var EventDispatcher_1 = require('./EventDispatcher');
    var BaseEvent_1 = require('./BaseEvent');
    /**
     * EventBroker is a simple publish and subscribe static class that you can use to fire and receive notifications.
     * Loosely coupled event handling, the subscriber does not know the publisher. Both of them only need to know the event type.
     *
     * @class EventBroker
     * @module StructureJS
     * @submodule event
     * @requires EventDispatcher
     * @requires BaseEvent
     * @static
     * @author Robert S. (www.codeBelt.com)
     */
    var EventBroker = (function () {
        function EventBroker() {
            throw new Error('[EventBroker] Do not instantiate the EventBroker class because it is a static class.');
        }
        /**
         * Registers an event listener object with an EventBroker object so that the listener receives notification of an event.
         *
         * @method addEventListener
         * @param type {String} The type of event.
         * @param callback {Function} The listener function that processes the event. The callback function will receive a {{#crossLink "BaseEvent"}}{{/crossLink}} object or custom event that extends the {{#crossLink "BaseEvent"}}{{/crossLink}} class.
         * @param scope {any} The scope of the callback function.
         * @param [priority=0] {int} Influences the order in which the listeners are called. Listeners with lower priorities are called after ones with higher priorities.
         * @static
         * @public
         * @example
         *     EventBroker.addEventListener('change', this._handlerMethod, this);
         *     // Example of using a constant event type.
         *     EventBroker.addEventListener(BaseEvent.CHANGE, this._handlerMethod, this);
         *
         *     // The event passed to the method will always be a BaseEvent object.
         *     _handlerMethod(event) {
         *          console.log(event.data);
         *     }
         */
        EventBroker.addEventListener = function (type, callback, scope, priority) {
            if (priority === void 0) { priority = 0; }
            EventBroker._eventDispatcher.addEventListener(type, callback, scope, priority);
        };
        /**
         * Registers an event listener object once with an EventDispatcher object so the listener will receive the notification of an event.
         *
         * @method addEventListenerOnce
         * @param type {String} The type of event.
         * @param callback {Function} The listener function that processes the event. The callback function will receive a {{#crossLink "BaseEvent"}}{{/crossLink}} object or custom event that extends the {{#crossLink "BaseEvent"}}{{/crossLink}} class.
         * @param scope {any} The scope of the callback function.
         * @param [priority=0] {int} Influences the order in which the listeners are called. Listeners with lower priorities are called after ones with higher priorities.
         * @static
         * @public
         * @example
         *     EventBroker.addEventListenerOnce('change', this._handlerMethod, this);
         *     // Example of using a constant event type.
         *     EventBroker.addEventListenerOnce(BaseEvent.CHANGE, this._handlerMethod, this);
         *
         *     // The event passed to the method will always be a BaseEvent object.
         *     _handlerMethod(event) {
         *          console.log(event.data);
         *     }
         */
        EventBroker.addEventListenerOnce = function (type, callback, scope, priority) {
            if (priority === void 0) { priority = 0; }
            EventBroker._eventDispatcher.addEventListenerOnce(type, callback, scope, priority);
        };
        /**
         * Removes a specified listener from the EventBroker object.
         *
         * @method removeEventListener
         * @param type {String} The type of event.
         * @param callback {Function} The callback function to be removed.
         * @param scope {any} The scope of the callback function to be removed.
         * @static
         * @public
         * @example
         *     EventBroker.removeEventListener('change', this._handlerMethod, this);
         *
         *     EventBroker.removeEventListener(BaseEvent.CHANGE, this._handlerMethod, this);
         */
        EventBroker.removeEventListener = function (type, callback, scope) {
            EventBroker._eventDispatcher.removeEventListener(type, callback, scope);
        };
        /**
         * A way to listen for multiple events.
         *
         * If only listening for one event use {{#crossLink "EventBroker/addEventListener:method"}}{{/crossLink}}.
         *
         * @method waitFor
         * @param eventTypes {Array<string>} A list of event types you are waiting for.
         * @param callback {Function} The callback function that will be triggered when all event types are
         * @param scope {any} The scope of the callback function.
         * @static
         * @public
         * @example
         *     EventBroker.waitFor(['someEvent', 'anotherEvent', CustomEvent.CHANGE], this._handlerMethod, this);
         *
         *     _handlerMethod(events) {
         *          // An array of the event objects you waited for.
         *     }
         */
        EventBroker.waitFor = function (eventTypes, callback, scope) {
            EventBroker._waitForList.push({
                eventTypes: eventTypes,
                callback: callback,
                callbackScope: scope,
                events: [],
                once: false
            });
        };
        /**
         * A way to listen for multiple events. Once all events all are triggered this listener will be removed.
         *
         * If only listening for one event use {{#crossLink "EventBroker/addEventListenerOnce:method"}}{{/crossLink}}.
         *
         * @method waitForOnce
         * @param eventTypes {Array<string>} A list of event types you are waiting for.
         * @param callback {Function} The callback function that will be triggered when all event types are
         * @param scope {any} The scope of the callback function.
         * @static
         * @public
         * @example
         *     EventBroker.waitForOnce(['someEvent', 'anotherEvent', CustomEvent.CHANGE], this._handlerMethod, this);
         *
         *     _handlerMethod(events) {
         *          // An array of the event objects you waited for.
         *     }
         */
        EventBroker.waitForOnce = function (eventTypes, callback, scope) {
            EventBroker._waitForList.push({
                eventTypes: eventTypes,
                callback: callback,
                callbackScope: scope,
                events: [],
                once: true
            });
        };
        /**
         * A way to listen for multiple events. Once all events all are triggered it will no longer
         *
         * @method removeWaitFor
         * @param eventTypes {Array<string>} A list of event types you are waiting for.
         * @param callback {Function} The callback function that will be triggered when all event types are
         * @param scope {any} The scope of the callback function.
         * @static
         * @public
         * @example
         *     EventBroker.removeWaitFor(['someEvent', 'anotherEvent', CustomEvent.CHANGE], this._handlerMethod, this);
         */
        EventBroker.removeWaitFor = function (eventTypes, callback, scope) {
            var waitForObject;
            for (var i_1 = EventBroker._waitForList.length - 1; i_1 >= 0; i_1--) {
                waitForObject = EventBroker._waitForList[i_1];
                if (waitForObject.eventTypes.toString() === eventTypes.toString() && waitForObject.callback === callback && waitForObject.callbackScope === scope) {
                    EventBroker._waitForList.splice(i_1, 1);
                }
            }
        };
        /**
         * Dispatches an event within the EventBroker object.
         *
         * @method dispatchEvent
         * @param event {string|BaseEvent} The Event object or event type string you want to dispatch.
         * @param [data=null] {any} The optional data you want to send with the event. Do not use this parameter if you are passing in a {{#crossLink "BaseEvent"}}{{/crossLink}}.
         * @param [scope=null] {any} You can optionally pass in the target of the object that dispatched the global event. Since {{#crossLink "EventBroker"}}{{/crossLink}}
         * @static
         * @public
         * @example
         *      EventBroker.dispatchEvent('change');
         *
         *      // Example: Sending data with the event.
         *      EventBroker.dispatchEvent('change', {some: 'data'});
         *
         *      // Example: Sending a BaseEvent or custom event object.
         *      let event = new BaseEvent(BaseEvent.CHANGE);
         *      event.data = {some: 'data'};
         *      EventBroker.dispatchEvent(event);
         */
        EventBroker.dispatchEvent = function (type, data, scope) {
            if (data === void 0) { data = null; }
            if (scope === void 0) { scope = EventBroker; }
            var event = type;
            if (typeof event === 'string') {
                event = new BaseEvent_1.default(type, false, false, data);
            }
            event.target = scope;
            event.currentTarget = scope;
            EventBroker._eventDispatcher.dispatchEvent(event);
            EventBroker._dispatchWaitFor(event);
        };
        /**
         * Helper method to dispatch events on the waitForObject objects.
         *
         * @method _dispatchWaitFor
         * @static
         * @private
         */
        EventBroker._dispatchWaitFor = function (event) {
            var waitForObject;
            var eventTypeIndex;
            for (var i_2 = EventBroker._waitForList.length - 1; i_2 >= 0; i_2--) {
                waitForObject = EventBroker._waitForList[i_2];
                eventTypeIndex = waitForObject.eventTypes.indexOf(event.type);
                if (eventTypeIndex > -1) {
                    waitForObject.events[eventTypeIndex] = event;
                }
                if (waitForObject.eventTypes.length === Object.keys(waitForObject.events).length) {
                    waitForObject.callback.call(waitForObject.scope, waitForObject.events);
                    waitForObject.events = [];
                    // If the once value is true we want to remove the listener right after this callback was called.
                    if (waitForObject.once === true) {
                        EventBroker._waitForList.splice(i_2, 1);
                    }
                }
            }
        };
        /**
         * Check if EventBroker has a specific event listener already added.
         *
         * @method hasEventListener
         * @param type {String} The type of event.
         * @param callback {Function} The listener method to call.
         * @param scope {any} The scope of the listener object.
         * @return {boolean}
         * @static
         * @public
         * @example
         *      EventBroker.hasEventListener(BaseEvent.CHANGE, this._handlerMethod, this);
         */
        EventBroker.hasEventListener = function (type, callback, scope) {
            return EventBroker._eventDispatcher.hasEventListener(type, callback, scope);
        };
        /**
         * Generates a string output of event listeners for a given object.
         *
         * @method getEventListeners
         * @return {string}
         * @static
         * @public
         * @example
         *      EventBroker.getEventListeners();
         *
         *      // [ClassName] is listen for 'BaseEvent.change' event.
         */
        EventBroker.getEventListeners = function () {
            return EventBroker._eventDispatcher.getEventListeners();
        };
        /**
         * A reference to the EventDispatcher object.
         *
         * @property _eventDispatcher
         * @type {EventDispatcher}
         * @private
         * @static
         */
        EventBroker._eventDispatcher = new EventDispatcher_1.default();
        /**
         * A list of wait for objects.
         *
         * @property _waitForList
         * @type {Array<{eventTypes:Array<string>, callback:Function, callbackScope:any, events:Array<any>, once:boolean}>}
         * @private
         * @static
         */
        EventBroker._waitForList = [];
        return EventBroker;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = EventBroker;
});

},{"./BaseEvent":15,"./EventDispatcher":17}],17:[function(require,module,exports){
'use strict';

var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../ObjectManager', './BaseEvent'], factory);
    }
})(function (require, exports) {
    var ObjectManager_1 = require('../ObjectManager');
    var BaseEvent_1 = require('./BaseEvent');
    /**
     * EventDispatcher is the base class for all classes that dispatch events. It is the base class for the {{#crossLink "DisplayObjectContainer"}}{{/crossLink}} class.
     * EventDispatcher provides methods for managing prioritized queues of event listeners and dispatching events.
     *
     * @class EventDispatcher
     * @extends ObjectManager
     * @module StructureJS
     * @submodule event
     * @requires Extend
     * @requires ObjectManager
     * @requires BaseEvent
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     * @example
     *      // Another way to use the EventDispatcher.
     *      let eventDispatcher = new EventDispatcher();
     *      eventDispatcher.addEventListener('change', this._handlerMethod, this);
     *      eventDispatcher.dispatchEvent('change');
     */
    var EventDispatcher = (function (_super) {
        __extends(EventDispatcher, _super);
        function EventDispatcher() {
            _super.call(this);
            /**
             * Holds a reference to added listeners.
             *
             * @property _listeners
             * @type {Array.<any>}
             * @protected
             */
            this._listeners = null;
            /**
             * Indicates the object that contains a child object. Uses the parent property
             * to specify a relative path to display objects that are above the current display object in the display
             * list hierarchy and helps facilitate event bubbling.
             *
             * @property parent
             * @type {any}
             * @public
             */
            this.parent = null;
            this._listeners = [];
        }
        /**
         * Registers an event listener object with an EventDispatcher object so the listener receives notification of an event.
         *
         * @method addEventListener
         * @param type {String} The type of event.
         * @param callback {Function} The listener function that processes the event. This function must accept an Event object as its only parameter and must return nothing, as this example shows. @example function(event:Event):void
         * @param scope {any} Binds the scope to a particular object (scope is basically what "this" refers to in your function). This can be very useful in JavaScript because scope isn't generally maintained.
         * @param [priority=0] {int} Influences the order in which the listeners are called. Listeners with lower priorities are called after ones with higher priorities.
         * @public
         * @chainable
         * @example
         *      this.addEventListener(BaseEvent.CHANGE, this._handlerMethod, this);
         *
         *      _handlerMethod(event) {
         *          console.log(event.target + " sent the event.");
         *          console.log(event.type, event.data);
         *      }
         */
        EventDispatcher.prototype.addEventListener = function (type, callback, scope, priority) {
            if (priority === void 0) {
                priority = 0;
            }
            // Get the list of event listeners by the associated type value that is passed in.
            var list = this._listeners[type];
            if (list == null) {
                // If a list of event listeners do not exist for the type value passed in then create a new empty array.
                this._listeners[type] = list = [];
            }
            var index = 0;
            var listener;
            var i = list.length;
            while (--i > -1) {
                listener = list[i];
                if (listener.callback === callback && listener.scope === scope) {
                    // If the same callback and scope are found then remove it and add the current one below.
                    list.splice(i, 1);
                } else if (index === 0 && listener.priority < priority) {
                    index = i + 1;
                }
            }
            // Add the event listener to the list array at the index value.
            list.splice(index, 0, { callback: callback, scope: scope, priority: priority, once: false });
            return this;
        };
        /**
         * Registers an event listener object once with an EventDispatcher object so the listener will receive the notification of an event.
         *
         * @method addEventListenerOnce
         * @param type {String} The type of event.
         * @param callback {Function} The listener function that processes the event. This function must accept an Event object as its only parameter and must return nothing, as this example shows. @example function(event:Event):void
         * @param scope {any} Binds the scope to a particular object (scope is basically what "this" refers to in your function). This can be very useful in JavaScript because scope isn't generally maintained.
         * @param [priority=0] {int} Influences the order in which the listeners are called. Listeners with lower priorities are called after ones with higher priorities.
         * @public
         * @chainable
         * @example
         *      this.addEventListenerOnce(BaseEvent.CHANGE, this._handlerMethod, this);
         *
         *      _handlerMethod(event) {
         *          console.log(event.target + " sent the event.");
         *          console.log(event.type, event.data);
         *      }
         */
        EventDispatcher.prototype.addEventListenerOnce = function (type, callback, scope, priority) {
            if (priority === void 0) {
                priority = 0;
            }
            // Add the event listener the normal way.
            this.addEventListener(type, callback, scope, priority);
            // Get the event listeners we just added.
            var list = this._listeners[type];
            var listener = list[0];
            // Change the value to true so it will be remove after dispatchEvent is called.
            listener.once = true;
            return this;
        };
        /**
         * Removes a specified listener from the EventDispatcher object.
         *
         * @method removeEventListener
         * @param type {String} The type of event.
         * @param callback {Function} The listener object to remove.
         * @param scope {any} The scope of the listener object to be removed.
         * @hide This was added because it was needed for the {{#crossLink "EventBroker"}}{{/crossLink}} class. To keep things consistent this parameter is required.
         * @public
         * @chainable
         * @example
         *      this.removeEventListener(BaseEvent.CHANGE, this._handlerMethod, this);
         */
        EventDispatcher.prototype.removeEventListener = function (type, callback, scope) {
            // Get the list of event listeners by the associated type value that is passed in.
            var list = this._listeners[type];
            if (list !== void 0) {
                var i_1 = list.length;
                while (--i_1 > -1) {
                    // If the callback and scope are the same then remove the event listener.
                    if (list[i_1].callback === callback && list[i_1].scope === scope) {
                        list.splice(i_1, 1);
                        break;
                    }
                }
            }
            return this;
        };
        /**
         * <p>Dispatches an event into the event flow. The event target is the EventDispatcher object upon which the dispatchEvent() method is called.</p>
         *
         * @method dispatchEvent
         * @param event {string|BaseEvent} The Event object or event type string you want to dispatch. You can create custom events, the only requirement is all events must extend {{#crossLink "BaseEvent"}}{{/crossLink}}.
         * @param [data=null] {any} The optional data you want to send with the event. Do not use this parameter if you are passing in a {{#crossLink "BaseEvent"}}{{/crossLink}}.
         * @public
         * @chainable
         * @example
         *      this.dispatchEvent('change');
         *
         *      // Example: Sending data with the event:
         *      this.dispatchEvent('change', {some: 'data'});
         *
         *      // Example: With an event object
         *      // (event type, bubbling set to true, cancelable set to true and passing data) :
         *      let event = new BaseEvent(BaseEvent.CHANGE, true, true, {some: 'data'});
         *      this.dispatchEvent(event);
         *
         *      // Here is a common inline event object being dispatched:
         *      this.dispatchEvent(new BaseEvent(BaseEvent.CHANGE));
         */
        EventDispatcher.prototype.dispatchEvent = function (type, data) {
            if (data === void 0) {
                data = null;
            }
            var event = type;
            if (typeof event === 'string') {
                event = new BaseEvent_1['default'](type, false, true, data);
            }
            // If target is null then set it to the object that dispatched the event.
            if (event.target == null) {
                event.target = this;
                event.currentTarget = this;
            }
            // Get the list of event listener by the associated type value.
            var list = this._listeners[event.type];
            if (list !== void 0) {
                var i_2 = list.length;
                var listener;
                while (--i_2 > -1) {
                    // If cancelable and isImmediatePropagationStopped are true then break out of the while loop.
                    if (event.cancelable === true && event.isImmediatePropagationStopped === true) {
                        break;
                    }
                    listener = list[i_2];
                    listener.callback.call(listener.scope, event);
                    // If the once value is true we want to remove the listener right after this callback was called.
                    if (listener.once === true) {
                        this.removeEventListener(event.type, listener.callback, listener.scope);
                    }
                }
            }
            //Dispatches up the chain of classes that have a parent.
            if (this.parent != null && event.bubbles === true) {
                // If cancelable and isPropagationStopped are true then don't dispatch the event on the parent object.
                if (event.cancelable === true && event.isPropagationStopped === true) {
                    return this;
                }
                // Assign the current object that is currently processing the event (i.e. event bubbling at).
                event.currentTarget = this;
                // Pass the event to the parent (event bubbling).
                this.parent.dispatchEvent(event);
            }
            return this;
        };
        /**
         * Check if an object has a specific event listener already added.
         *
         * @method hasEventListener
         * @param type {String} The type of event.
         * @param callback {Function} The listener method to call.
         * @param scope {any} The scope of the listener object.
         * @return {boolean}
         * @public
         * @example
         *      this.hasEventListener(BaseEvent.CHANGE, this._handlerMethod, this);
         */
        EventDispatcher.prototype.hasEventListener = function (type, callback, scope) {
            if (this._listeners[type] !== void 0) {
                var listener;
                var numOfCallbacks = this._listeners[type].length;
                for (var i_3 = 0; i_3 < numOfCallbacks; i_3++) {
                    listener = this._listeners[type][i_3];
                    if (listener.callback === callback && listener.scope === scope) {
                        return true;
                    }
                }
            }
            return false;
        };
        /**
         * Generates a string output of event listeners for a given object.
         *
         * @method getEventListeners
         * @return {string}
         * @public
         * @example
         *      this.getEventListeners();
         *
         *      // [ClassName] is listening for the 'BaseEvent.change' event.
         */
        EventDispatcher.prototype.getEventListeners = function () {
            var str = '';
            var numOfCallbacks;
            var listener;
            for (var type in this._listeners) {
                numOfCallbacks = this._listeners[type].length;
                for (var i_4 = 0; i_4 < numOfCallbacks; i_4++) {
                    listener = this._listeners[type][i_4];
                    if (listener.scope && typeof listener.scope.getQualifiedClassName === 'function') {
                        str += '[' + listener.scope.getQualifiedClassName() + ']';
                    } else {
                        str += '[Unknown]';
                    }
                    str += " is listen for '" + type + "' event.\n";
                }
            }
            return str;
        };
        /**
         * @overridden BaseObject.destroy
         */
        EventDispatcher.prototype.destroy = function () {
            this.disable();
            _super.prototype.destroy.call(this);
        };
        return EventDispatcher;
    })(ObjectManager_1['default']);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports['default'] = EventDispatcher;
});

},{"../ObjectManager":10,"./BaseEvent":15}],18:[function(require,module,exports){
(function (global){
'use strict';

(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'jquery'], factory);
    }
})(function (require, exports) {
    var $ = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);
    var $eventListener = $;
    /**
     * A bind polyfill for browsers that don't support the bind method.
     */
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (oThis) {
            if (typeof this !== 'function') {
                // closest thing possible to the ECMAScript 5 internal IsCallable function
                throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
            }
            var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function fNOP() {},
                fBound = function fBound() {
                return fToBind.apply(this instanceof fNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
            };
            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();
            return fBound;
        };
    }
    /**
     * Generates a hash string from the string being passed in. In this case it is a function that is casted as string value.
     *
     * @param str
     * @returns {String}
     */
    var hashCode = function hashCode(str) {
        str = String(str);
        // http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
        var character;
        var hash = null;
        var strLength = str.length;
        if (strLength == 0) return hash;
        for (var i_1 = 0; i_1 < strLength; i_1++) {
            character = str.charCodeAt(i_1);
            hash = (hash << 5) - hash + character;
            hash = hash & hash; // Convert to 32bit integer
        }
        return String(Math.abs(hash));
    };
    /**
     * The jQuery addEventListener plugin
     */
    $eventListener.fn.addEventListener = function (type, selector, data, callback, scope) {
        var _callback;
        var _scope;
        var _handler;
        switch (arguments.length) {
            case 3:
                _callback = selector;
                _scope = data;
                _scope._handlerMap = _scope._handlerMap || {};
                _handler = _scope._handlerMap[hashCode(_callback)] = _callback.bind(_scope);
                this.on(type, _handler);
                break;
            case 4:
                _callback = data;
                _scope = callback;
                _scope._handlerMap = _scope._handlerMap || {};
                _handler = _scope._handlerMap[hashCode(_callback)] = _callback.bind(_scope);
                this.on(type, selector, _handler);
                break;
            case 5:
                _callback = callback;
                _scope = scope;
                _scope._handlerMap = _scope._handlerMap || {};
                _handler = _scope._handlerMap[hashCode(_callback)] = _callback.bind(_scope);
                this.on(type, selector, data, _handler);
                break;
            default:
                throw new Error('jQuery addEventListener plugin requires at least 3 arguments.');
        }
        return this;
    };
    /**
     * The jQuery removeEventListener plugin
     */
    $eventListener.fn.removeEventListener = function (type, selector, callback, scope) {
        var _callback;
        var _scope;
        var _handler;
        switch (arguments.length) {
            case 3:
                _callback = selector;
                _scope = callback;
                _scope._handlerMap = _scope._handlerMap || {};
                _handler = _scope._handlerMap[hashCode(_callback)];
                this.off(type, _handler);
                _scope._handlerMap[hashCode(_callback)] = null;
                break;
            case 4:
                _callback = callback;
                _scope = scope;
                _scope._handlerMap = _scope._handlerMap || {};
                _handler = _scope._handlerMap[hashCode(_callback)];
                this.off(type, selector, _handler);
                _scope._handlerMap[hashCode(_callback)] = null;
                break;
            default:
                throw new Error('jQuery removeEventListener plugin requires at least 3 arguments.');
        }
        return this;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports['default'] = $eventListener;
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],19:[function(require,module,exports){
'use strict';

(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", '../util/Util'], factory);
    }
})(function (require, exports) {
    var Util_1 = require('../util/Util');
    /**
     * A helper class to create multiple instances of the same Component Class from jQuery object that has one or more elements in it.
     *
     * @class ComponentFactory
     * @module StructureJS
     * @submodule util
     * @author Robert S. (www.codeBelt.com)
     * @static
     */
    var ComponentFactory = (function () {
        function ComponentFactory() {
            throw new Error('[ComponentFactory] Do not instantiate the ComponentFactory class because it is a static class.');
        }
        /**
         * Takes a jQuery object that has one or more elements in it and passes a single jQuery element into the constructor of the class that is also being passed in.
         *
         * @method create
         * @param $element {jQuery} One or more jQuery referenced DOM elements.
         * @param ComponentClass {any} The class that you want instantiated.
         * @param [scope=null] {DisplayObjectContainer} This scope (parent object) is needed to instantiate the component/view with the use of the {{#crossLink "DisplayObjectContainer/addChild:method"}}{{/crossLink}} method.
         * @return {Array.<any>} Returns a list of instantiated components/views so you can manage them within the Class that created them.
         * @public
         * @static
         * @example
         *      ComponentFactory.create($('.js-list'), SomeClass, this);
         */
        ComponentFactory.create = function ($elements, ComponentClass, scope) {
            if (scope === void 0) {
                scope = null;
            }
            var list = [];
            var component;
            var $element;
            var length = $elements.length;
            var types;
            var componentName;
            for (var i_1 = 0; i_1 < length; i_1++) {
                $element = $elements.eq(i_1);
                types = $element.attr('data-sjs-type');
                if (types === void 0) {
                    // Create the component if there is not a 'data-sjs-type' attribute on the element.
                    component = ComponentFactory._createComponent($element, ComponentClass, scope);
                    list.push(component);
                } else {
                    // Else if there is already a 'data-sjs-type' attribute then get the type(s).
                    types = types.split(',');
                    componentName = Util_1['default'].getName(ComponentClass);
                    // Only create the component if the component type does not already exist.
                    if (types.indexOf(componentName) === -1) {
                        component = ComponentFactory._createComponent($element, ComponentClass, scope);
                        list.push(component);
                    }
                }
            }
            return list;
        };
        /**
         * Helper method to create the component.
         *
         * @method _createComponent
         * @private
         */
        ComponentFactory._createComponent = function ($element, ComponentClass, scope) {
            var component = new ComponentClass($element);
            // If the class object has the sjsId property then I am assuming it is an instance of the DisplayObject class.
            if (scope !== null && component.hasOwnProperty('sjsId') === true) {
                scope.addChild(component);
            }
            return component;
        };
        return ComponentFactory;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports['default'] = ComponentFactory;
});

},{"../util/Util":22}],20:[function(require,module,exports){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    /**
     * The StringUtil...
     *
     * @class StringUtil
     * @module StructureJS
     * @submodule util
     * @author Robert S. (www.codeBelt.com)
     * @static
     */
    var StringUtil = (function () {
        function StringUtil() {
            throw new Error('[StringUtil] Do not instantiate the StringUtil class because it is a static class.');
        }
        /**
         * Gets the extension name off the string being passed in.
         *
         * @method getExtension
         * @param filename {string}
         * @param withDot {boolean} If you want the period to be included in the extension name.
         * @returns {string}
         * @public
         * @static
         * @example
         *      StringUtil.getExtension('file.exe');
         *      // 'exe'
         *
         *      StringUtil.getExtension('file.exe', true);
         *      // '.exe'
         */
        StringUtil.getExtension = function (filename, withDot) {
            if (withDot === void 0) { withDot = false; }
            var num = (withDot === true) ? 0 : 1;
            return filename.slice(filename.lastIndexOf('.') + num, filename.length);
        };
        /**
         * Converts a string to a sentence case string.
         *
         * @method toSentence
         * @param str {string}
         * @param [separator] {string} Can be any string you want to use as a separator.
         * @returns {string}
         * @public
         * @static
         * @example
         *      StringUtil.toSentence("liveDown_by-the.River");
         *      // 'live down by the river'
         *
         *      StringUtil.toSentence("liveDown_by-the.River", '-');
         *      // 'live-down-by-the-river'
         *
         *      StringUtil.toSentence("liveDown_by-the.River", '_');
         *      // 'live_down_by_the_river'
         *
         *      StringUtil.toSentence("liveDown_by-the.River", '/');
         *      // 'live/down/by/the/river'
         */
        StringUtil.toSentence = function (str, separator) {
            if (separator === void 0) { separator = ' '; }
            return String(str)
                .replace(/(\d)/g, '$1 ')
                .replace(/([a-z](?=[A-Z]))/g, '$1 ')
                .replace(/[^a-zA-Z0-9 ]/g, ' ')
                .replace(/\s{2,}/g, ' ')
                .replace(/^ | $/g, '')
                .toLowerCase()
                .replace(/\s+/g, separator);
        };
        /**
         * Converts a string to a camel case string.
         *
         * @method toCamelCase
         * @param str {string}
         * @returns {string}
         * @public
         * @static
         * @example
         *      StringUtil.toCamelCase("liveDown_by-the.River");
         *      // 'liveDownByTheRiver'
         */
        StringUtil.toCamelCase = function (str) {
            return StringUtil.toSentence(str)
                .replace(/ (\w)/g, function (_, $1) {
                return $1.toUpperCase();
            });
        };
        /**
         * Converts a hyphen string to a pascal case string.
         *
         * @method toPascalCase
         * @param str {string}
         * @returns {string}
         * @public
         * @static
         * @example
         *      StringUtil.toPascalCase("liveDown_by-the.River");
         *      // 'LiveDownByTheRiver'
         */
        StringUtil.toPascalCase = function (str) {
            return StringUtil.toCamelCase(str)
                .replace(/^[a-zA-Z]/, function (a, b, c) {
                return a.toUpperCase();
            });
        };
        /**
         * Converts a string to a constant case string.
         *
         * @method toConstantCase
         * @param str {string}
         * @returns {string}
         * @public
         * @static
         * @example
         *      StringUtil.toConstantCase("liveDown_by-the.River");
         *      // 'LIVE_DOWN_BY_THE_RIVER'
         */
        StringUtil.toConstantCase = function (str) {
            return StringUtil.toSentence(str, '_')
                .toUpperCase();
        };
        /**
         * Creates a universally unique identifier.
         *
         * @method createUUID
         * @returns {string}
         * @public
         * @static
         * @example
         *      StringUtil.createUUID();
         *      // 'a95d7134-3342-4001-bcea-cc0371b70dec'
         */
        StringUtil.createUUID = function () {
            var uuid = ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0;
                var v = (c == 'x') ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            return uuid;
        };
        /**
         * Converts a query string to an object.
         *
         * @method queryStringToObject
         * @param queryString {string}
         * @param [useParseFloat=false] {boolean} If true converts strings to numbers.
         * @returns {Object|Null}
         * @public
         * @static
         * @example
         *      StringUtil.queryStringToObject('?name=Robert&age=23&gender=male');
         *      // {name: 'Robert', age: '23', gender: 'male'}
         *
         *      StringUtil.queryStringToObject('?name=Robert&age=23&gender=male', true);
         *      // {name: 'Robert', age: 23, gender: 'male'}
         */
        StringUtil.queryStringToObject = function (queryString, useParseFloat) {
            if (useParseFloat === void 0) { useParseFloat = false; }
            var params = {};
            var temp = null;
            var str = queryString.substring(queryString.indexOf('?') + 1);
            if (str === '') {
                return null;
            }
            // Split into key/value pairs
            var queries = str.split('&');
            // Convert the array of strings into an object
            var len = queries.length;
            for (var i_1 = 0; i_1 < len; i_1++) {
                temp = queries[i_1].split('=');
                params[temp[0]] = (useParseFloat === true && isNaN(parseFloat(temp[1])) === false) ? parseFloat(temp[1]) : temp[1];
            }
            return params;
        };
        /**
         * Remove all whitespace from the string passed in.
         *
         * @method removeAllWhitespace
         * @param str {string}
         * @returns {string}
         * @public
         * @static
         * @example
         *      let str = '   a b    c d e f g ';
         *      StringUtil.removeAllWhitespace(str);
         *      // 'abcdefg'
         */
        StringUtil.removeAllWhitespace = function (str) {
            return str.replace(/\s+/g, '');
        };
        /**
         * Remove leading and trailing whitespace.
         *
         * @method removeLeadingTrailingWhitespace
         * @param str {string}
         * @returns {string}
         * @public
         * @static
         * @example
         *      let str = '   a b    c d e f g ';
         *      StringUtil.removeLeadingTrailingWhitespace(str);
         *      // 'a b    c d e f g'
         */
        StringUtil.removeLeadingTrailingWhitespace = function (str) {
            return str.replace(/(^\s+|\s+$)/g, '');
        };
        /**
         *
         * @method truncate
         * @param text {string}
         * @param length {int}
         * @param indicator {string}
         * @returns {string}
         * @public
         * @static
         * @example
         *      StringUtil.truncate('Robert is cool and he likes bruschetta.', 14));
         *      // 'Robert is cool...'
         *
         *      StringUtil.truncate('Robert is cool and he likes bruschetta.', 14, '!!!'));
         *      // 'Robert is cool!!!'
         */
        StringUtil.truncate = function (text, length, indicator) {
            if (indicator === void 0) { indicator = '...'; }
            if (text.length <= length) {
                return text;
            }
            else {
                return text.substr(0, length) + indicator;
            }
        };
        /**
         * Replaces each format item in a specified string with the text equivalent of a corresponding object's value.
         *
         * @method format
         * @returns {string}
         * @param str {string}
         * @param ...rest {Array.<any>}
         * @public
         * @static
         * @example
         *      StringUtil.format('Robert is {0}. Very {0} and {1}!', 'cool', 'smart');
         *      // 'Robert is cool. Very cool and smart!'
         */
        StringUtil.format = function (str) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            var length = rest.length;
            var value = str;
            for (var i_2 = 0; i_2 < length; i_2++) {
                var reg = new RegExp('\\{' + i_2 + '\\}', 'gm');
                value = value.replace(reg, rest[i_2]);
            }
            return value;
        };
        /**
         * Updates a value in the query string by its key name.
         *
         * @method paramReplace
         * @param queryString
         * @param name
         * @param value
         * @returns {string|void}
         * @example
         *      StringUtil.paramReplace('?name=Robert&age=23&gender=male', 'gender', 'female');
         *      // '?name=Robert&age=23&gender=female'
         */
        StringUtil.paramReplace = function (queryString, name, value) {
            // Find the param with regex
            // Grab the first character in the returned string (should be ? or &)
            // Replace our href string with our new value, passing on the name and delimiter
            var re = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var delimiter = re.exec(queryString)[0].charAt(0);
            return queryString.replace(re, delimiter + name + '=' + value);
        };
        return StringUtil;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = StringUtil;
});

},{}],21:[function(require,module,exports){
'use strict';

(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './StringUtil'], factory);
    }
})(function (require, exports) {
    var StringUtil_1 = require('./StringUtil');
    /**
     * A helper class to provide a convenient and consistent way to render templates.
     *
     * @class TemplateFactory
     * @module StructureJS
     * @submodule util
     * @requires StringUtil
     * @requires Handlebars
     * @author Robert S. (www.codeBelt.com)
     * @static
     */
    var TemplateFactory = (function () {
        function TemplateFactory() {
            throw new Error('[TemplateFactory] Do not instantiate the TemplateFactory class because it is a static class.');
        }
        /**
         * Creates a template.
         *
         * @method create
         * @param templatePath {any}
         * @param [data=any]
         * @returns {string}
         * @public
         * @static
         * @example
         *      TemplateFactory.create('templateName', {some: 'data'});
         */
        TemplateFactory.create = function (templatePath, data) {
            if (data === void 0) {
                data = null;
            }
            //Checks the first character to see if it is a '.' or '#'.
            var regex = /^([.#])(.+)/;
            var template = null;
            var isFunctionTemplate = typeof templatePath === 'function';
            var isClassOrIdName = regex.test(templatePath);
            if (isFunctionTemplate) {
                template = templatePath(data);
            } else if (isClassOrIdName) {
                // Remove pound sign from the id name.
                templatePath = templatePath.substring(1);
                var htmlString = document.getElementById(templatePath).innerHTML;
                htmlString = StringUtil_1['default'].removeLeadingTrailingWhitespace(htmlString);
                if (TemplateFactory.templateEngine == TemplateFactory.UNDERSCORE) {
                    // Underscore Template:
                    var templateMethod = window['_'].template(htmlString);
                    template = templateMethod(data);
                } else {
                    // Handlebars Template
                    var templateMethod = Handlebars.compile(htmlString);
                    template = templateMethod(data);
                }
            } else {
                var templateObj = window[TemplateFactory.templateNamespace];
                if (!templateObj) {
                    // Returns null because the template namespace is not found.
                    return null;
                }
                var templateFunction = templateObj[templatePath];
                if (templateFunction) {
                    // The templatePath gets a function storage in the associative array.
                    // We call the function by passing in the data as the argument.
                    template = templateFunction(data);
                }
            }
            return template;
        };
        /**
         * A constant value for using Underscore or Lodash templates.
         *
         * @property UNDERSCORE
         * @type {string}
         * @public
         * @final
         * @static
         */
        TemplateFactory.UNDERSCORE = 'underscore';
        /**
         * A constant value for using Handlebars templates. This is the default template engine.
         *
         * @property HANDLEBARS
         * @type {string}
         * @public
         * @final
         * @static
         */
        TemplateFactory.HANDLEBARS = 'handlebars';
        /**
         * Sets the template engine type for this TemplateFactory class. The default is TemplateFactory.HANDLEBARS
         *
         * @property templateEngine
         * @type {string}
         * @default TemplateFactory.HANDLEBARS
         * @public
         * @static
         */
        TemplateFactory.templateEngine = TemplateFactory.HANDLEBARS;
        /**
         * The global namespace for pre-compiled templates.
         *
         * @property templateNamespace
         * @type {string}
         * @default 'JST'
         * @public
         * @static
         */
        TemplateFactory.templateNamespace = 'JST';
        return TemplateFactory;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports['default'] = TemplateFactory;
});

},{"./StringUtil":20}],22:[function(require,module,exports){
'use strict';

(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    /**
     * A Utility class that has several static methods to assist in development.
     *
     * @class Util
     * @module StructureJS
     * @submodule util
     * @author Robert S. (www.codeBelt.com)
     * @static
     */
    var Util = (function () {
        function Util() {
            throw new Error('[Util] Do not instantiate the Util class because it is a static class.');
        }
        /**
         * Generates a unique ID. If a prefix is passed in, the value will be appended to it.
         *
         * @method uniqueId
         * @param [prefix] {string} The string value used for the prefix.
         * @returns {init|string} Returns the unique identifier.
         * @public
         * @static
         * @example
         *      let property = Util.uniqueId();
         *      // 1
         *
         *      let property = Util.uniqueId('prefixName_');
         *      // prefixName_1
         */
        Util.uniqueId = function (prefix) {
            if (prefix === void 0) {
                prefix = null;
            }
            var id = ++Util._idCounter;
            if (prefix != null) {
                return String(prefix + id);
            } else {
                return id;
            }
        };
        /**
         * Removes a list of properties from an object.
         *
         * @method deletePropertyFromObject
         * @param object {Object} The object you want to remove properties from.
         * @param value {string|Array.<string>} A property name or an array of property names you want to remove from the object.
         * @returns {any} Returns the object passed in without the removed the properties.
         * @public
         * @static
         * @example
         *      let obj = { name: 'Robert', gender: 'male', phone: '555-555-5555' }
         *
         *      Util.deletePropertyFromObject(obj, ['phone', 'gender']);
         *
         *      // { name: 'Robert' }
         */
        Util.deletePropertyFromObject = function (object, value) {
            // If properties is not an array then make it an array object.
            var list = value instanceof Array ? value : [value];
            // Loop through the object properties.
            for (var key in object) {
                // If the key is a property and not function.
                if (object.hasOwnProperty(key)) {
                    var value_1 = object[key];
                    // If the property is an Array.
                    if (value_1 instanceof Array) {
                        // Loop through the Array and call the Util.deletePropertyFromObject method on each object in the array.
                        var array = value_1;
                        for (var index in array) {
                            // Recursive function call.
                            Util.deletePropertyFromObject(array[index], list);
                        }
                    } else if (value_1 instanceof Object) {
                        Util.deletePropertyFromObject(value_1, list);
                    } else {
                        // Loop through the list of property name.
                        for (var listIndex in list) {
                            // If the key(property name) equals the property name in the list array.
                            if (key === list[listIndex]) {
                                // Delete the property from the object.
                                delete object[key];
                            }
                        }
                    }
                }
            }
            return object;
        };
        /**
         * Renames a property name on an object.
         *
         * @method renamePropertyOnObject
         * @param object {Object} The object you want to rename properties from.
         * @param oldName {string}
         * @param newName {string}
         * @returns {any} Returns the object passed in renamed properties.
         * @public
         * @static
         * @example
         *      let obj = { name: 'Robert', gender: 'male', phone: '555-555-5555' }
         *
         *      Util.renamePropertyOnObject(obj, 'gender', 'sex');
         *
         *      // { name: 'Robert', sex: 'male', phone: '555-555-5555' }
         */
        Util.renamePropertyOnObject = function (object, oldName, newName) {
            // Check for the old property name to avoid a ReferenceError in strict mode.
            if (object.hasOwnProperty(oldName)) {
                object[newName] = object[oldName];
                delete object[oldName];
            }
            return object;
        };
        /**
         * Makes a clone of an object.
         *
         * @method clone
         * @param obj {Object} The object you to clone.
         * @returns {any} Returns a clone object of the one passed in.
         * @public
         * @static
         * @example
         *      let cloneOfObject = Util.clone(obj);
         */
        Util.clone = function (obj) {
            //other scripts: http://davidwalsh.name/javascript-clone
            //http://oranlooney.com/functional-javascript/
            //http://oranlooney.com/deep-copy-javascript/
            // Handle the 3 simple types, and null or undefined
            if (null == obj || 'object' != typeof obj) {
                return obj;
            }
            // Handle Date
            if (obj instanceof Date) {
                var date = new Date();
                date.setTime(obj.getTime());
                return date;
            }
            // Handle Array
            if (obj instanceof Array) {
                var array = [];
                for (var i_1 = 0, len = obj.length; i_1 < len; i_1++) {
                    array[i_1] = Util.clone(obj[i_1]);
                }
                return array;
            }
            // Handle Object
            if (obj instanceof Object) {
                var copy = {};
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) {
                        copy[attr] = Util.clone(obj[attr]);
                    }
                }
                return copy;
            }
            throw new Error("[Util] Unable to copy obj! Its type isn't supported.");
        };
        /**
         * Converts a string or number to a boolean.
         *
         * @method toBoolean
         * @param strNum {string|number}
         * @returns {boolean}
         * @public
         * @static
         * @example
         *      Util.toBoolean("TRUE");
         *      // true
         *
         *      Util.toBoolean(0);
         *      // false
         *
         *      Util.toBoolean(undefined);
         *      // false
         */
        Util.toBoolean = function (strNum) {
            var value = typeof strNum === 'string' ? strNum.toLowerCase() : strNum;
            return value > 0 || value == 'true' || value == 'yes';
        };
        /**
         * Returns the name of the function/object passed in.
         *
         * @method getName
         * @param classObject {any}
         * @returns {string} Returns the name of the function or object.
         * @static
         * @example
         *      let someClass = new SomeClass();
         *      Util.getName(someClass);            // 'SomeClass'
         *
         *      Util.getName(function Test(){});    // 'Test'
         *      Util.getName(function (){});        // 'anonymous'
         */
        Util.getName = function (classObject) {
            var type = typeof classObject;
            var value;
            var funcNameRegex = /function ([^\(]+)/;
            if (type === 'object') {
                // Gets the name of the object.
                var results = classObject.constructor.toString().match(funcNameRegex);
                value = results[1];
            } else {
                // This else code is mainly for Internet Explore.
                var isFunction = type === 'function';
                // TODO: figure out how to explain this
                var name_1 = isFunction && (classObject.name && ['', classObject.name] || classObject.toString().match(funcNameRegex));
                if (isFunction === false) {
                    value = type;
                } else if (name_1 && name_1[1]) {
                    value = name_1[1];
                } else {
                    value = 'anonymous';
                }
            }
            return value;
        };
        /**
         * Creates and returns a new debounced version of the passed function which will postpone its execution until after
         * wait milliseconds have elapsed since the last time it was invoked.
         *
         * @method debounce
         * @param callback {Function} The function that should be executed.
         * @param wait {number} Milliseconds to elapsed before invoking the callback.
         * @param immediate {boolean} Pass true for the immediate parameter to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double-clicks on a "submit" button from firing a second time.
         * @param callbackScope {any} The scope of the callback function that should be executed.
         * @public
         * @static
         * @example
         *      Util.debounce(this._onBreakpointChange, 250, false, this);
         */
        Util.debounce = function (callback, wait, immediate, callbackScope) {
            var timeout;
            var result;
            var debounced = function debounced() {
                var args = arguments;
                function delayed() {
                    if (immediate == false) {
                        result = callback.apply(callbackScope, args);
                    }
                    timeout = null;
                }
                if (timeout) {
                    clearTimeout(timeout);
                } else if (immediate === true) {
                    result = callback.apply(callbackScope, args);
                }
                timeout = setTimeout(delayed, wait);
                return result;
            };
            debounced.cancel = function () {
                clearTimeout(timeout);
            };
            return debounced;
        };
        /**
         * TODO: YUIDoc_comment
         *
         * @method applyMixins
         * @param derivedCtor {any}
         * @param baseCtors {any}
         * @public
         * @static
         * @example
         *
                class Flies {
                    fly() {
                        alert('Is it a bird? Is it a plane?');
                    }
                }
                     class Climbs {
                    climb() {
                        alert('My spider-sense is tingling.');
                    }
                }
                     class HorseflyWoman implements Climbs, Flies {
                    climb: () => void;
                    fly: () => void;
                }
                     Util.applyMixins(HorseflyWoman, [Climbs, Flies]);
         */
        Util.applyMixins = function (derivedCtor, baseCtors) {
            baseCtors.forEach(function (baseCtor) {
                Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                });
            });
        };
        /**
         * Returns a new array with duplicates removed.
         *
         * @method unique
         * @param list {Array.<any>} The array you want to use to generate the unique array.
         * @return {Array<any>} Returns a new array list of unique items.
         * @protected
         */
        Util.unique = function (list) {
            var uniqueList = list.reduce(function (previousValue, currentValue) {
                if (previousValue.indexOf(currentValue) === -1) {
                    previousValue.push(currentValue);
                }
                return previousValue;
            }, []);
            return uniqueList;
        };
        /**
         * Keeps track of the count for the uniqueId method.
         *
         * @property _idCounter
         * @type {int}
         * @private
         * @static
         */
        Util._idCounter = 0;
        return Util;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports['default'] = Util;
});

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcnNhdmlhbi9TaXRlcy9lczYtYnAvc3JjL2Fzc2V0cy9zY3JpcHRzL0FwcC5qcyIsIi9Vc2Vycy9yc2F2aWFuL1NpdGVzL2VzNi1icC9zcmMvYXNzZXRzL3NjcmlwdHMvY29uc3RhbnRzL0tleUNvZGUuanMiLCIvVXNlcnMvcnNhdmlhbi9TaXRlcy9lczYtYnAvc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbnRyb2xsZXJzL01vZGFsQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9yc2F2aWFuL1NpdGVzL2VzNi1icC9zcmMvYXNzZXRzL3NjcmlwdHMvZXZlbnRzL01vZGFsRXZlbnQuanMiLCIvVXNlcnMvcnNhdmlhbi9TaXRlcy9lczYtYnAvc3JjL2Fzc2V0cy9zY3JpcHRzL21haW4uanMiLCIvVXNlcnMvcnNhdmlhbi9TaXRlcy9lczYtYnAvc3JjL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL0hhbmRsZWJhckhlbHBlcnMuanMiLCIvVXNlcnMvcnNhdmlhbi9TaXRlcy9lczYtYnAvc3JjL2Fzc2V0cy9zY3JpcHRzL3ZpZXdzL21vZGFscy9CYXNlTW9kYWwuanMiLCIvVXNlcnMvcnNhdmlhbi9TaXRlcy9lczYtYnAvc3JjL2Fzc2V0cy9zY3JpcHRzL3ZpZXdzL21vZGFscy9HZW5lcmljTW9kYWwuanMiLCIvVXNlcnMvcnNhdmlhbi9TaXRlcy9lczYtYnAvc3JjL2Fzc2V0cy92ZW5kb3Ivc3RydWN0dXJlanMvanMvQmFzZU9iamVjdC5qcyIsIi9Vc2Vycy9yc2F2aWFuL1NpdGVzL2VzNi1icC9zcmMvYXNzZXRzL3ZlbmRvci9zdHJ1Y3R1cmVqcy9qcy9PYmplY3RNYW5hZ2VyLmpzIiwiL1VzZXJzL3JzYXZpYW4vU2l0ZXMvZXM2LWJwL3NyYy9hc3NldHMvdmVuZG9yL3N0cnVjdHVyZWpzL2pzL2Rpc3BsYXkvRE9NRWxlbWVudC5qcyIsIi9Vc2Vycy9yc2F2aWFuL1NpdGVzL2VzNi1icC9zcmMvYXNzZXRzL3ZlbmRvci9zdHJ1Y3R1cmVqcy9qcy9kaXNwbGF5L0Rpc3BsYXlPYmplY3QuanMiLCIvVXNlcnMvcnNhdmlhbi9TaXRlcy9lczYtYnAvc3JjL2Fzc2V0cy92ZW5kb3Ivc3RydWN0dXJlanMvanMvZGlzcGxheS9EaXNwbGF5T2JqZWN0Q29udGFpbmVyLmpzIiwic3JjL2Fzc2V0cy92ZW5kb3Ivc3RydWN0dXJlanMvanMvZGlzcGxheS9TdGFnZS5qcyIsInNyYy9hc3NldHMvdmVuZG9yL3N0cnVjdHVyZWpzL2pzL2V2ZW50L0Jhc2VFdmVudC5qcyIsInNyYy9hc3NldHMvdmVuZG9yL3N0cnVjdHVyZWpzL2pzL2V2ZW50L0V2ZW50QnJva2VyLmpzIiwiL1VzZXJzL3JzYXZpYW4vU2l0ZXMvZXM2LWJwL3NyYy9hc3NldHMvdmVuZG9yL3N0cnVjdHVyZWpzL2pzL2V2ZW50L0V2ZW50RGlzcGF0Y2hlci5qcyIsIi9Vc2Vycy9yc2F2aWFuL1NpdGVzL2VzNi1icC9zcmMvYXNzZXRzL3ZlbmRvci9zdHJ1Y3R1cmVqcy9qcy9wbHVnaW4vanF1ZXJ5LmV2ZW50TGlzdGVuZXIuanMiLCIvVXNlcnMvcnNhdmlhbi9TaXRlcy9lczYtYnAvc3JjL2Fzc2V0cy92ZW5kb3Ivc3RydWN0dXJlanMvanMvdXRpbC9Db21wb25lbnRGYWN0b3J5LmpzIiwic3JjL2Fzc2V0cy92ZW5kb3Ivc3RydWN0dXJlanMvanMvdXRpbC9TdHJpbmdVdGlsLmpzIiwiL1VzZXJzL3JzYXZpYW4vU2l0ZXMvZXM2LWJwL3NyYy9hc3NldHMvdmVuZG9yL3N0cnVjdHVyZWpzL2pzL3V0aWwvVGVtcGxhdGVGYWN0b3J5LmpzIiwiL1VzZXJzL3JzYXZpYW4vU2l0ZXMvZXM2LWJwL3NyYy9hc3NldHMvdmVuZG9yL3N0cnVjdHVyZWpzL2pzL3V0aWwvVXRpbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNDQWtCLDJCQUEyQjs7OzswQ0FFakIsK0JBQStCOzs7O3VDQUNsQyw2QkFBNkI7Ozs7Ozs7Ozs7OztJQVNoRCxHQUFHO2NBQUgsR0FBRzs7QUFFTSxhQUZULEdBQUcsR0FFUzs4QkFGWixHQUFHOztBQUdELG1DQUhGLEdBQUcsNkNBR087S0FDWDs7Ozs7O2lCQUpDLEdBQUc7O2VBU0Msa0JBQUc7QUFDTCx1Q0FWRixHQUFHLHdDQVVjOztBQUVmLG9EQUFnQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRTlCLGdCQUFNLFNBQVMsR0FBRyx5Q0FBaUIsMENBQTBDLEVBQUU7QUFDM0UscUJBQUssRUFBRSxhQUFhO0FBQ3BCLHVCQUFPLEVBQUUsZUFBZTtBQUN4Qix5QkFBUyxFQUFFLFFBQVE7QUFDbkIseUJBQVMsRUFBRSxRQUFRO2FBQ3RCLENBQUMsQ0FBQzs7QUFFSCxvREFBZ0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDOzs7V0F0QkMsR0FBRzs7O3FCQTBCTSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hDWixPQUFPO2VBQVAsT0FBTzs7Ozs7Ozs7OztXQVNJLENBQUM7Ozs7Ozs7Ozs7OztXQVNDLEVBQUU7Ozs7Ozs7Ozs7OztXQVNILEVBQUU7Ozs7Ozs7Ozs7OztXQVNILEVBQUU7Ozs7Ozs7Ozs7OztXQVNLLEVBQUU7Ozs7Ozs7Ozs7OztXQVNKLEVBQUU7Ozs7Ozs7Ozs7OztXQVNDLEVBQUU7Ozs7Ozs7Ozs7OztXQVNILEVBQUU7Ozs7Ozs7Ozs7OztXQVNGLEVBQUU7Ozs7QUFFWCxXQW5GVCxPQUFPLEdBbUZLOzBCQW5GWixPQUFPO0dBb0ZSOztTQXBGQyxPQUFPOzs7cUJBd0ZFLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7MkNDOUZFLCtCQUErQjs7OztnQ0FDbkMsc0JBQXNCOzs7O3VDQUNqQiw4QkFBOEI7Ozs7Z0NBQ2hDLHNCQUFzQjs7Ozs7Ozs7Ozs7O0lBU3ZDLGVBQWU7aUJBQWYsZUFBZTs7Ozs7Ozs7Ozs7ZUFVRixJQUFJOzs7Ozs7Ozs7Ozs7ZUFTSSxJQUFJOzs7Ozs7Ozs7Ozs7ZUFTSixLQUFLOzs7O2VBRVQsS0FBSzs7OztBQUViLGFBaENULGVBQWUsR0FnQ0g7OEJBaENaLGVBQWU7S0FpQ2hCOzs7Ozs7aUJBakNDLGVBQWU7O2VBc0NKLGtCQUFHO0FBQ1osZ0JBQUksZUFBZSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7QUFBRSx1QkFBTzthQUFFOztBQUVuRCwyQkFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDNUgsMkJBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDOztBQUV6RyxxREFBWSxnQkFBZ0IsQ0FBQyw4QkFBVyxNQUFNLEVBQUUsZUFBZSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMsQ0FBQzs7QUFFaEcsMkJBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3BDOzs7Ozs7O2VBS2EsbUJBQUc7QUFDYixnQkFBSSxlQUFlLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtBQUFFLHVCQUFPO2FBQUU7O0FBRXBELDJCQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztBQUMvSCwyQkFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7O0FBRTVHLHFEQUFZLG1CQUFtQixDQUFDLDhCQUFXLE1BQU0sRUFBRSxlQUFlLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDOztBQUVuRywyQkFBZSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDckM7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFjYSxpQkFBQyxJQUFJLEVBQUU7QUFDakIsZ0JBQUksZUFBZSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7QUFDaEMsK0JBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM3Qjs7QUFFRCwyQkFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRTdCLDJCQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDNUI7Ozs7Ozs7Ozs7O2VBU2Msa0JBQUMsS0FBSyxFQUFFO0FBQ25CLGdCQUFJLGVBQWUsQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO0FBQ3hDLCtCQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDbEM7O0FBRUQsMkJBQWUsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0FBQ3RDLDJCQUFlLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25FLDJCQUFlLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs7O0FBR3JDLGdCQUFJLGVBQWUsQ0FBQyxhQUFhLENBQUMsZUFBZSxLQUFLLEtBQUssRUFBRTtBQUN6RCwrQkFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7Ozs7Ozs7Ozs7ZUFRa0Isd0JBQUc7QUFDbEIsMkJBQWUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFakUsMkJBQWUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQ3JDLDJCQUFlLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7QUFFdEMsMkJBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMvRDs7Ozs7Ozs7Ozs7ZUFTaUIscUJBQUMsS0FBSyxFQUFFO0FBQ3RCLGdCQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssOEJBQVEsVUFBVSxJQUFJLGVBQWUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEtBQUssS0FBSyxFQUFFO0FBQ2xHLCtCQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDbEM7U0FDSjs7Ozs7Ozs7Ozs7O2VBVW1CLHVCQUFDLEtBQUssRUFBRTtBQUN4QiwyQkFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ2xDOzs7Ozs7Ozs7OztlQVNrQixzQkFBQyxLQUFLLEVBQUU7QUFDdkIsZ0JBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDaEUsZ0JBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDeEQsZ0JBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV4QixnQkFBSSxLQUFLLEdBQUcseUNBQWlCLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFN0MsMkJBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztXQWxLQyxlQUFlOzs7cUJBc0tOLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQ2xMUiw2QkFBNkI7Ozs7Ozs7Ozs7OztJQVM3QyxVQUFVO1lBQVYsVUFBVTs7ZUFBVixVQUFVOzs7Ozs7Ozs7O1dBU0ksbUJBQW1COzs7Ozs7Ozs7Ozs7V0FTbkIsbUJBQW1COzs7Ozs7Ozs7Ozs7V0FTbkIsbUJBQW1COzs7O0FBRXhCLFdBN0JULFVBQVUsQ0E2QkEsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFOzBCQTdCM0MsVUFBVTs7QUE4QlIsK0JBOUJGLFVBQVUsNkNBOEJGLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTtHQUMxQzs7U0EvQkMsVUFBVTs7O3FCQW1DRCxVQUFVOzs7Ozs7OzttQkM1Q1QsT0FBTzs7OztxQ0FDTywwQkFBMEI7Ozs7QUFFeEQsbUNBQWtCLElBQUksRUFBRSxDQUFDOztBQUV6QixNQUFNLENBQUMsR0FBRyxHQUFHLHNCQUFTLENBQUM7QUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7eUNDTkwsNkJBQTZCOzs7Ozs7Ozs7OztJQVE5QyxpQkFBaUI7QUFFUixhQUZULGlCQUFpQixHQUVMOzhCQUZaLGlCQUFpQjtLQUdsQjs7aUJBSEMsaUJBQWlCOztlQUtSLGdCQUFHOzs7Ozs7OztBQVFWLHNCQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7O0FBUXBELHNCQUFVLENBQUMsY0FBYyxDQUFDLG9CQUFvQixFQUFFLFVBQVUsTUFBVSxFQUFFO0FBQ2xFLHVCQUFPLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQzlFLENBQUMsQ0FBQzs7Ozs7Ozs7QUFRSCxzQkFBVSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxNQUFVLEVBQUU7QUFDeEQsdUJBQU8sSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDLHVDQUFXLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDbEYsQ0FBQyxDQUFDOzs7Ozs7OztBQVFILHNCQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxVQUFTLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFOztBQUVuRSxvQkFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN0QiwwQkFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO2lCQUN0RTs7QUFFRCxvQkFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO0FBQy9DLG9CQUFNLFNBQWEsR0FBRztBQUNsQix3QkFBSSxFQUFRLFdBQVMsQ0FBQyxFQUFDLENBQUMsRUFBRTtBQUFFLCtCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQUU7QUFDNUMseUJBQUssRUFBTyxXQUFTLENBQUMsRUFBQyxDQUFDLEVBQUU7QUFBRSwrQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUFFO0FBQzdDLHdCQUFJLEVBQVEsV0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFFO0FBQUUsK0JBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFBRTtBQUM1Qyx1QkFBRyxFQUFTLFdBQVMsQ0FBQyxFQUFDLENBQUMsRUFBRTtBQUFFLCtCQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQUU7QUFDM0MsdUJBQUcsRUFBUyxXQUFTLENBQUMsRUFBQyxDQUFDLEVBQUU7QUFBRSwrQkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUFFO0FBQzNDLHdCQUFJLEVBQVEsV0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFFO0FBQUUsK0JBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFBRTtBQUM1Qyx3QkFBSSxFQUFRLFdBQVMsQ0FBQyxFQUFDLENBQUMsRUFBRTtBQUFFLCtCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQUU7QUFDNUMsNEJBQVEsRUFBSSxpQkFBUyxDQUFDLEVBQUMsQ0FBQyxFQUFFO0FBQUUsK0JBQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUFFO2lCQUN0RCxDQUFDOztBQUVGLG9CQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3RCLDBCQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxHQUFHLFFBQVEsQ0FBQyxDQUFDO2lCQUMxRjs7QUFFRCxvQkFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFbkQsb0JBQUksTUFBTSxFQUFFO0FBQ1IsMkJBQU8sT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDM0IsTUFBTTtBQUNILDJCQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO2FBRUosQ0FBQyxDQUFDOzs7Ozs7O0FBT0gsc0JBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsYUFBaUIsRUFBRTtBQUM1RCx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM1Qix1QkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQix1QkFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFNUIsb0JBQUksYUFBYSxFQUFFO0FBQ2YsMkJBQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUM5QiwyQkFBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUM5QywyQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNqQzthQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JILHNCQUFVLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxVQUFTLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDbEUsb0JBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRTVCLG9CQUFJLFFBQVEsRUFBRTtBQUNWLHdCQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLHdCQUFJLE9BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDOztBQUUzQix5QkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3Qiw0QkFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO3FCQUM5RjtpQkFDSjs7QUFFRCx1QkFBTyxJQUFJLENBQUM7YUFDZixDQUFDLENBQUM7U0FFTjs7O1dBekhDLGlCQUFpQjs7O3FCQTZIUixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQ3JJVCxnQ0FBZ0M7Ozs7MkNBQy9CLCtCQUErQjs7OztnQ0FDaEMseUJBQXlCOzs7Ozs7Ozs7Ozs7O0lBVTFDLFNBQVM7WUFBVCxTQUFTOztBQXNEQSxXQXREVCxTQUFTLENBc0RDLFFBQVEsRUFBRSxJQUFJLEVBQUU7MEJBdEQxQixTQUFTOztBQXVEUCwrQkF2REYsU0FBUyw2Q0F1REQsUUFBUSxFQUFFLElBQUksRUFBRTs7U0E3QzFCLGNBQWMsR0FBRyxJQUFJO1NBU3JCLGVBQWUsR0FBRyxJQUFJO1NBV3RCLGdCQUFnQixHQUFHLEtBQUs7U0FXeEIsZUFBZSxHQUFHLElBQUk7U0FXdEIsU0FBUyxHQUFHLElBQUk7QUFLWixRQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztHQUN6Qjs7Ozs7O2VBMURDLFNBQVM7O1dBK0RMLGdCQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUU7QUFDbkIsaUNBaEVGLFNBQVMsd0NBZ0VNLFFBQVEsRUFBRSxJQUFJLEVBQUU7O0FBRTdCLFVBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUM5RCxVQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7S0FDbkU7Ozs7Ozs7V0FLSyxrQkFBRztBQUNMLFVBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7QUFBRSxlQUFPLElBQUksQ0FBQztPQUFFOztBQUU3QyxVQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDakYsVUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RixVQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUU3Rix3Q0FoRkYsU0FBUyx3Q0FnRmU7S0FDekI7Ozs7Ozs7V0FLTSxtQkFBRztBQUNOLFVBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7QUFBRSxlQUFPLElBQUksQ0FBQztPQUFFOztBQUU5QyxVQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDcEYsVUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRyxVQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVoRyx3Q0E3RkYsU0FBUyx5Q0E2RmdCO0tBQzFCOzs7Ozs7Ozs7Ozs7OztXQVlJLGlCQUFHO0FBQ0osK0NBQVksYUFBYSxDQUFDLDhCQUFXLE1BQU0sQ0FBQyxDQUFDO0tBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7OztXQWVhLHdCQUFDLEtBQUssRUFBRTtBQUNsQixXQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7O0FBRXZCLFVBQUksQ0FBQyxhQUFhLENBQUMsOEJBQVcsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFdEQsVUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hCOzs7Ozs7Ozs7Ozs7O1dBV2Esd0JBQUMsS0FBSyxFQUFFO0FBQ2xCLFdBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7QUFFdkIsVUFBSSxDQUFDLGFBQWEsQ0FBQyw4QkFBVyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUV0RCxVQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDaEI7Ozs7Ozs7Ozs7OztXQVVvQiwrQkFBQyxLQUFLLEVBQUU7QUFDekIsV0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztBQUV2QixVQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLEVBQUU7QUFDakMsWUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO09BQ2hCO0tBQ0o7OztTQWxLQyxTQUFTOzs7cUJBc0tBLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQ2xMRixhQUFhOzs7Ozs7Ozs7Ozs7OztJQVc3QixZQUFZO1lBQVosWUFBWTs7QUFFSCxXQUZULFlBQVksQ0FFRixRQUFRLEVBQWE7UUFBWCxJQUFJLHlEQUFHLEVBQUU7OzBCQUY3QixZQUFZOztBQUdWLCtCQUhGLFlBQVksNkNBR0osUUFBUSxFQUFFLElBQUksRUFBRTs7Ozs7QUFLdEIsUUFBSSxDQUFDLGVBQWUsR0FBRyxBQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssS0FBSyxDQUFDLEdBQUksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0dBQzFHOztTQVRDLFlBQVk7OztxQkFhSCxZQUFZOzs7Ozs7QUN4QjNCLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDaEIsUUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtBQUNsRSxZQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEFBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0tBQzlFLE1BQ0ksSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUNqRCxjQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzFEO0NBQ0osQ0FBQSxDQUFFLFVBQVUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7Ozs7O0FBTTNCLFFBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUFXcEMsUUFBSSxVQUFVLEdBQUcsQ0FBQyxZQUFZO0FBQzFCLGlCQUFTLFVBQVUsR0FBRzs7Ozs7Ozs7Ozs7QUFXbEIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGdCQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sV0FBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzFDOzs7Ozs7Ozs7Ozs7O0FBYUQsa0JBQVUsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEdBQUcsWUFBWTtBQUNyRCxtQkFBTyxNQUFNLFdBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkYsa0JBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDdkMsaUJBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO0FBQ2xCLG9CQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDMUIsd0JBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ3BCO2FBQ0o7U0FDSixDQUFDO0FBQ0YsZUFBTyxVQUFVLENBQUM7S0FDckIsQ0FBQSxFQUFHLENBQUM7QUFDTCxVQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxXQUFPLFdBQVEsR0FBRyxVQUFVLENBQUM7Q0FDaEMsQ0FBQyxDQUFDOzs7OztBQ3ZGSCxJQUFJLFNBQVMsR0FBRyxBQUFDLGFBQVEsVUFBSyxTQUFTLElBQUssVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3hELFNBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RELGFBQVMsRUFBRSxHQUFHO0FBQUUsWUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7S0FBRTtBQUN2QyxLQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQSxBQUFDLENBQUM7Q0FDeEYsQ0FBQztBQUNGLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDaEIsUUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtBQUNsRSxZQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEFBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0tBQzlFLE1BQ0ksSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUNqRCxjQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0NBQ0osQ0FBQSxDQUFFLFVBQVUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUMzQixRQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhM0MsUUFBSSxhQUFhLEdBQUcsQ0FBQyxVQUFVLE1BQU0sRUFBRTtBQUNuQyxpQkFBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxpQkFBUyxhQUFhLEdBQUc7QUFDckIsa0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7OztBQVNsQixnQkFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCRCxxQkFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUN6QyxnQkFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtBQUN6Qix1QkFBTyxJQUFJLENBQUM7YUFDZjtBQUNELGdCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN0QixnQkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2pCLG1CQUFPLElBQUksQ0FBQztTQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBY0YscUJBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFlBQVk7QUFDNUMsbUJBQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJGLHFCQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxZQUFZO0FBQzFDLGdCQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO0FBQzFCLHVCQUFPLElBQUksQ0FBQzthQUNmO0FBQ0QsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDbEIsbUJBQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFjRixxQkFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUM3QyxtQkFBTyxJQUFJLENBQUM7U0FDZixDQUFDO0FBQ0YsZUFBTyxhQUFhLENBQUM7S0FDeEIsQ0FBQSxDQUFFLFlBQVksV0FBUSxDQUFDLENBQUM7QUFDekIsVUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsV0FBTyxXQUFRLEdBQUcsYUFBYSxDQUFDO0NBQ25DLENBQUMsQ0FBQzs7Ozs7QUNwSUgsSUFBSSxTQUFTLEdBQUcsQUFBQyxhQUFRLFVBQUssU0FBUyxJQUFLLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN4RCxTQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCxhQUFTLEVBQUUsR0FBRztBQUFFLFlBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0tBQUU7QUFDdkMsS0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUEsQUFBQyxDQUFDO0NBQ3hGLENBQUM7QUFDRixDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQ2hCLFFBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDbEUsWUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxBQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztLQUM5RSxNQUNJLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDakQsY0FBTSxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSwwQkFBMEIsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSwwQkFBMEIsRUFBRSxnQ0FBZ0MsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3RMO0NBQ0osQ0FBQSxDQUFFLFVBQVUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUMzQixRQUFJLHdCQUF3QixHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ25FLFFBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2hELFFBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDM0QsUUFBSSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM3RCxRQUFJLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlIdkUsUUFBSSxVQUFVLEdBQUcsQ0FBQyxVQUFVLE1BQU0sRUFBRTtBQUNoQyxpQkFBUyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QixpQkFBUyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtBQUM5QixnQkFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFBRSxvQkFBSSxHQUFHLElBQUksQ0FBQzthQUFFO0FBQ3JDLGdCQUFJLE1BQU0sS0FBSyxLQUFLLENBQUMsRUFBRTtBQUFFLHNCQUFNLEdBQUcsSUFBSSxDQUFDO2FBQUU7QUFDekMsa0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUFVbEIsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7QUFTcEIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7QUFTcEIsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7QUFTckIsZ0JBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDOzs7Ozs7Ozs7QUFTMUIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOzs7Ozs7Ozs7QUFTbEIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGdCQUFJLElBQUksWUFBWSxzQkFBc0IsV0FBUSxFQUFFO0FBQ2hELG9CQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixvQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLG9CQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUM1QixNQUNJLElBQUksSUFBSSxFQUFFO0FBQ1gsb0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLG9CQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzthQUN6QjtTQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThERCxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxJQUFJLEVBQUUsTUFBTSxFQUFFO0FBQ2xELGdCQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtBQUFFLG9CQUFJLEdBQUcsS0FBSyxDQUFDO2FBQUU7QUFDdEMsZ0JBQUksTUFBTSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQUUsc0JBQU0sR0FBRyxJQUFJLENBQUM7YUFBRTs7QUFFekMsZ0JBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztBQUMxQixrQkFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDO0FBQ2hDLGdCQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO0FBQ3pCLHNCQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyw4SUFBOEksQ0FBQyxDQUFDO2FBQ3hNO0FBQ0QsZ0JBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7QUFDdkIsb0JBQUksTUFBTSxHQUFHLGlCQUFpQixXQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1RCxvQkFBSSxNQUFNLEVBQUU7QUFDUix3QkFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBc0IsV0FBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMxRCxNQUNJO0FBQ0Qsd0JBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLFdBQVEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDN0U7YUFDSjtBQUNELGdCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQyxnQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3JDLGdCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLG1CQUFPLElBQUksQ0FBQztTQUNmLENBQUM7Ozs7Ozs7Ozs7QUFVRixrQkFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDN0MsZ0JBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7QUFDdkIsc0JBQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLG9GQUFvRixDQUFDLENBQUM7YUFDOUk7QUFDRCxrQkFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7QUFFNUMsZ0JBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzVELHVCQUFPLElBQUksQ0FBQzthQUNmO0FBQ0QsZ0JBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7QUFDM0IscUJBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNmLHFCQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzthQUMxQjs7QUFFRCxnQkFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLEtBQUssRUFBRTtBQUM5QixvQkFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hDO0FBQ0QsZ0JBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUIsbUJBQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQzs7Ozs7Ozs7QUFRRixrQkFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLEtBQUssRUFBRTtBQUNyRCxnQkFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDaEQsZ0JBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzVDLGdCQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTs7QUFFakIsb0JBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7QUFDdkMsa0JBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QixNQUNJOztBQUVELG9CQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixrQkFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsb0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztBQUN6QyxrQkFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7O0FBRUQsaUJBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakQsaUJBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEQsQ0FBQzs7Ozs7Ozs7O0FBU0Ysa0JBQVUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDeEQsZ0JBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2hELGdCQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFNUMsZ0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0IsZ0JBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLGdCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QyxnQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O0FBRVosd0JBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFCLHNCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFeEIscUJBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekQscUJBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEQ7QUFDRCxtQkFBTyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztTQUM5QixDQUFDOzs7Ozs7OztBQVFGLGtCQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxVQUFVLEtBQUssRUFBRTtBQUNsRCxnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGlCQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDbkIsZ0JBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7QUFDdEQsMEJBQVUsQ0FBQyxZQUFZO0FBQ25CLHlCQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1IsdUJBQU87YUFDVjtBQUNELGdCQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsaUJBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQyxpQkFBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3ZDLGlCQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLGlCQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZixpQkFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2YsaUJBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLFdBQVEsQ0FBQyxXQUFXLFdBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQ3BGLENBQUM7Ozs7QUFJRixrQkFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3RELGdCQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3hDLGdCQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDOztBQUU3QixnQkFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDNUQsdUJBQU8sSUFBSSxDQUFDO2FBQ2Y7QUFDRCxnQkFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7O0FBRTlCLG9CQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCLE1BQ0k7O0FBRUQsb0JBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7QUFDM0IseUJBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNmLHlCQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztpQkFDMUI7O0FBRUQsb0JBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNkLHlCQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQzFDO0FBQ0Qsb0JBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEMsb0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDeEMscUJBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOztBQUVwQixzQ0FBc0IsV0FBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNFLG9CQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO0FBQ0QsbUJBQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQzs7OztBQUlGLGtCQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDMUQsZ0JBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDMUMsZ0JBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDMUMsZ0JBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNyQyxtQkFBTyxJQUFJLENBQUM7U0FDZixDQUFDOzs7O0FBSUYsa0JBQVUsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsS0FBSyxFQUFFO0FBQy9DLG1CQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEQsQ0FBQzs7Ozs7Ozs7O0FBU0Ysa0JBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsUUFBUSxFQUFFOztBQUVoRCxnQkFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDekQsZ0JBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDNUIsc0JBQU0sSUFBSSxTQUFTLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLGFBQWEsR0FBRyxRQUFRLEdBQUcsNEJBQTRCLENBQUMsQ0FBQzthQUNySDs7QUFFRCxnQkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUN4RCxnQkFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFM0MsZ0JBQUksVUFBVSxJQUFJLElBQUksRUFBRTs7QUFFcEIsMEJBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQzlCLDBCQUFVLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztBQUNwQyxvQkFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLDBCQUFVLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QywwQkFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7OztBQUc1QixzQkFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNwRDtBQUNELG1CQUFPLFVBQVUsQ0FBQztTQUNyQixDQUFDOzs7Ozs7Ozs7O0FBVUYsa0JBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQ25ELGdCQUFJLFFBQVEsS0FBSyxLQUFLLENBQUMsRUFBRTtBQUFFLHdCQUFRLEdBQUcsRUFBRSxDQUFDO2FBQUU7O0FBRTNDLGdCQUFJLE1BQU0sQ0FBQztBQUNYLGdCQUFJLFVBQVUsQ0FBQztBQUNmLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QyxnQkFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUM5QixpQkFBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUN2QyxzQkFBTSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXZCLG9CQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFDdkMsOEJBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQzlCLDhCQUFVLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUM3Qix3QkFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLDhCQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsOEJBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzs7QUFHNUIsMEJBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7aUJBQ3BEO2FBQ0o7QUFDRCxtQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3hCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhRixrQkFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ3pELGdCQUFJLE9BQU8sS0FBSyxLQUFLLENBQUMsRUFBRTtBQUFFLHVCQUFPLEdBQUcsSUFBSSxDQUFDO2FBQUU7QUFDM0MsZ0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxpQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDOztBQUVoQixnQkFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO0FBQzNDLHFCQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3hCLHFCQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzNCO0FBQ0QsZ0JBQUksT0FBTyxLQUFLLElBQUksRUFBRTtBQUNsQixxQkFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25CO0FBQ0Qsa0JBQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDL0MsbUJBQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQzs7Ozs7Ozs7O0FBU0Ysa0JBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxnQkFBSSxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUU7QUFBRSx1QkFBTyxHQUFHLElBQUksQ0FBQzthQUFFO0FBQzNDLGdCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEQsbUJBQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7O0FBWUYsa0JBQVUsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFVBQVUsT0FBTyxFQUFFO0FBQ3JELGdCQUFJLE9BQU8sS0FBSyxLQUFLLENBQUMsRUFBRTtBQUFFLHVCQUFPLEdBQUcsSUFBSSxDQUFDO2FBQUU7QUFDM0MsbUJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzdCLG9CQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDbEQ7QUFDRCxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN0QixtQkFBTyxJQUFJLENBQUM7U0FDZixDQUFDOzs7O0FBSUYsa0JBQVUsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFlBQVk7Ozs7OztBQU12QyxrQkFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJGLGtCQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFnQixHQUFHLFVBQVUsYUFBYSxFQUFFO0FBQzdELGdCQUFJLElBQUksQ0FBQztBQUNULGdCQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDekIsZ0JBQUksTUFBTSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDbEMsZ0JBQUksR0FBRyxDQUFDO0FBQ1IsaUJBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDbkMsbUJBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsb0JBQUksR0FBRyxrQkFBa0IsV0FBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRywrQkFBZSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEQ7QUFDRCxtQkFBTyxlQUFlLENBQUM7U0FDMUIsQ0FBQztBQUNGLGVBQU8sVUFBVSxDQUFDO0tBQ3JCLENBQUEsQ0FBRSx3QkFBd0IsV0FBUSxDQUFDLENBQUM7QUFDckMsVUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsV0FBTyxXQUFRLEdBQUcsVUFBVSxDQUFDO0NBQ2hDLENBQUMsQ0FBQzs7Ozs7QUNsbUJILElBQUksU0FBUyxHQUFHLEFBQUMsYUFBUSxVQUFLLFNBQVMsSUFBSyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDeEQsT0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsV0FBUyxFQUFFLEdBQUc7QUFBRSxRQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztHQUFFO0FBQ3ZDLEdBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFBLEFBQUMsQ0FBQztDQUN4RixDQUFDO0FBQ0YsQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUNoQixNQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ2xFLFFBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQUFBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7R0FDOUUsTUFDSSxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQ2pELFVBQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztHQUN2RTtDQUNKLENBQUEsQ0FBRSxVQUFVLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDM0IsTUFBSSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWE1RCxNQUFJLGFBQWEsR0FBRyxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQ25DLGFBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakMsYUFBUyxhQUFhLEdBQUc7QUFDckIsWUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7QUFRbEIsVUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Ozs7Ozs7OztBQVNsQixVQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQzs7Ozs7Ozs7O0FBU2hCLFVBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7QUFTWCxVQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7O0FBU1gsVUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7Ozs7OztBQVNmLFVBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7QUFTaEIsVUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7Ozs7Ozs7OztBQVN6QixVQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFRMUIsVUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0FBUWhCLFVBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7OztBQVFoQixVQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7QUFRbEIsVUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Ozs7Ozs7O0FBUWYsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Ozs7Ozs7O0FBUXBCLFVBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztBQVExQixVQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7O0FBUzNCLFVBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7Ozs7OztBQVF2QixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjs7Ozs7Ozs7Ozs7QUFXRCxpQkFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUN6QyxVQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUN0QixhQUFPLElBQUksQ0FBQztLQUNmLENBQUM7Ozs7Ozs7OztBQVNGLGlCQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxZQUFZO0FBQ3pDLGFBQU8sSUFBSSxDQUFDO0tBQ2YsQ0FBQzs7Ozs7Ozs7OztBQVVGLGlCQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFVLGFBQWEsRUFBRSxjQUFjLEVBQUU7QUFDdkUsVUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsVUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsYUFBTyxJQUFJLENBQUM7S0FDZixDQUFDO0FBQ0YsaUJBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFlBQVk7QUFDL0MsVUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNuQixDQUFDO0FBQ0YsaUJBQWEsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFlBQVk7QUFDL0MsVUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssRUFDOUQsT0FBTyxLQUFLLENBQUM7QUFDakIsVUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ3BCLFVBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDbEMsVUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2QsVUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ3JCLENBQUM7QUFDRixpQkFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUM3QyxVQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3RCLENBQUM7QUFDRixXQUFPLGFBQWEsQ0FBQztHQUN4QixDQUFBLENBQUUsaUJBQWlCLFdBQVEsQ0FBQyxDQUFDO0FBQzlCLFFBQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlELFNBQU8sV0FBUSxHQUFHLGFBQWEsQ0FBQztDQUNuQyxDQUFDLENBQUM7Ozs7O0FDeE9ILElBQUksU0FBUyxHQUFHLEFBQUMsYUFBUSxVQUFLLFNBQVMsSUFBSyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDeEQsU0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsYUFBUyxFQUFFLEdBQUc7QUFBRSxZQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztLQUFFO0FBQ3ZDLEtBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFBLEFBQUMsQ0FBQztDQUN4RixDQUFDO0FBQ0YsQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUNoQixRQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ2xFLFlBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsQUFBQyxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7S0FDOUUsTUFDSSxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO0FBQ2pELGNBQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM5RDtDQUNKLENBQUEsQ0FBRSxVQUFVLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDM0IsUUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakQsUUFBSSxzQkFBc0IsR0FBRyxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQzVDLGlCQUFTLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDMUMsaUJBQVMsc0JBQXNCLEdBQUc7QUFDOUIsa0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUFVbEIsZ0JBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7QUFTckIsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzs7Ozs7OztBQVFuQixnQkFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDOUI7Ozs7Ozs7Ozs7Ozs7O0FBY0QsOEJBQXNCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLEtBQUssRUFBRTs7QUFFekQsZ0JBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNkLHFCQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNuQztBQUNELGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixnQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUN4QyxpQkFBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDcEIsbUJBQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWFGLDhCQUFzQixDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFOztBQUVsRSxnQkFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ2QscUJBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25DO0FBQ0QsZ0JBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEMsZ0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDeEMsaUJBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLG1CQUFPLElBQUksQ0FBQztTQUNmLENBQUM7Ozs7Ozs7Ozs7OztBQVlGLDhCQUFzQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDNUQsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdEMsZ0JBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFOztBQUVkLG9CQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbEM7QUFDRCxnQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUN4QyxpQkFBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDcEIsbUJBQU8sSUFBSSxDQUFDO1NBQ2YsQ0FBQzs7Ozs7Ozs7Ozs7QUFXRiw4QkFBc0IsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFlBQVk7QUFDMUQsbUJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzdCLG9CQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUN6QztBQUNELG1CQUFPLElBQUksQ0FBQztTQUNmLENBQUM7Ozs7Ozs7Ozs7O0FBV0YsOEJBQXNCLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDdEUsZ0JBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsZ0JBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0MsZ0JBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN4QyxDQUFDOzs7Ozs7Ozs7OztBQVdGLDhCQUFzQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsVUFBVSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3hFLGdCQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUN0RixzQkFBTSxJQUFJLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsNERBQTRELEdBQUcsTUFBTSxHQUFHLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxDQUFDO2FBQ2xLO0FBQ0QsZ0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckMsZ0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckMsZ0JBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLG1CQUFPLElBQUksQ0FBQztTQUNmLENBQUM7Ozs7Ozs7OztBQVNGLDhCQUFzQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDOUQsbUJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkMsQ0FBQzs7Ozs7Ozs7O0FBU0YsOEJBQXNCLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLEtBQUssRUFBRTtBQUN6RCxtQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUMsQ0FBQzs7Ozs7Ozs7QUFRRiw4QkFBc0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsS0FBSyxFQUFFO0FBQzNELG1CQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0IsQ0FBQzs7Ozs7Ozs7OztBQVVGLDhCQUFzQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsVUFBVSxLQUFLLEVBQUU7QUFDOUQsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUNqQixpQkFBSyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2xELG9CQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRTtBQUNuQyx5QkFBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsMEJBQU07aUJBQ1Q7YUFDSjtBQUNELG1CQUFPLEtBQUssQ0FBQztTQUNoQixDQUFDO0FBQ0YsZUFBTyxzQkFBc0IsQ0FBQztLQUNqQyxDQUFBLENBQUUsZUFBZSxXQUFRLENBQUMsQ0FBQztBQUM1QixVQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxXQUFPLFdBQVEsR0FBRyxzQkFBc0IsQ0FBQztDQUM1QyxDQUFDLENBQUM7OztBQ3RPSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RSQSxJQUFJLFNBQVMsR0FBRyxBQUFDLGFBQVEsVUFBSyxTQUFTLElBQUssVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3hELFNBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RELGFBQVMsRUFBRSxHQUFHO0FBQUUsWUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7S0FBRTtBQUN2QyxLQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QzVDLGlDQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNwQztBQUNELHVCQUFPLGFBQWEsQ0FBQzthQUN4QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1AsbUJBQU8sVUFBVSxDQUFDO1NBQ3JCLENBQUM7Ozs7Ozs7OztBQVNGLFlBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLGVBQU8sSUFBSSxDQUFDO0tBQ2YsQ0FBQSxFQUFHLENBQUM7QUFDTCxVQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RCxXQUFPLFdBQVEsR0FBRyxJQUFJLENBQUM7Q0FDMUIsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBTdGFnZSBmcm9tICdzdHJ1Y3R1cmVqcy9kaXNwbGF5L1N0YWdlJztcblxuaW1wb3J0IE1vZGFsQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL01vZGFsQ29udHJvbGxlcic7XG5pbXBvcnQgR2VuZXJpY01vZGFsIGZyb20gJy4vdmlld3MvbW9kYWxzL0dlbmVyaWNNb2RhbCc7XG5cbi8qKlxuICogVE9ETzogWVVJRG9jX2NvbW1lbnRcbiAqXG4gKiBAY2xhc3MgQXBwXG4gKiBAZXh0ZW5kcyBTdGFnZVxuICogQGNvbnN0cnVjdG9yXG4gKiovXG5jbGFzcyBBcHAgZXh0ZW5kcyBTdGFnZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGRlbiBTdGFnZS5jcmVhdGVcbiAgICAgKi9cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZSgpO1xuXG4gICAgICAgIE1vZGFsQ29udHJvbGxlci5zZXRWaWV3KHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IHRlbXBNb2RhbCA9IG5ldyBHZW5lcmljTW9kYWwoJ3RlbXBsYXRlcy9wcmVjb21waWxlL21vZGFscy9HZW5lcmljTW9kYWwnLCB7XG4gICAgICAgICAgICB0aXRsZTogJ01vZGFsIFRpdGxlJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdNb2RhbCBDb250ZW50JyxcbiAgICAgICAgICAgIHJlamVjdEJ0bjogJ0NhbmNlbCcsXG4gICAgICAgICAgICBhY2NlcHRCdG46ICdBY2NlcHQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE1vZGFsQ29udHJvbGxlci5hZGRNb2RhbCh0ZW1wTW9kYWwpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCIvKipcbiAqIEEgY29uc3RhbnQgbGlzdCBvZiBrZXlib2FyZCBjb2Rlcy5cbiAqXG4gKiBAY2xhc3MgS2V5Q29kZVxuICogQGNvbnN0cnVjdG9yXG4gKiovXG5jbGFzcyBLZXlDb2RlIHtcblxuICAgIC8qKlxuICAgICAqIFRPRE86IFlVSURvY19jb21tZW50XG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgVEFCXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIFRBQiA9IDk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPOiBZVUlEb2NfY29tbWVudFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IEVOVEVSXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIEVOVEVSID0gMTM7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPOiBZVUlEb2NfY29tbWVudFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IEhPTUVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgSE9NRSA9IDM1O1xuXG4gICAgLyoqXG4gICAgICogVE9ETzogWVVJRG9jX2NvbW1lbnRcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBFTkRcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgRU5EID0gMzY7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPOiBZVUlEb2NfY29tbWVudFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IExFRlRfQVJST1dcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgTEVGVF9BUlJPVyA9IDM3O1xuXG4gICAgLyoqXG4gICAgICogVE9ETzogWVVJRG9jX2NvbW1lbnRcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBVUF9BUlJPV1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBVUF9BUlJPVyA9IDM4O1xuXG4gICAgLyoqXG4gICAgICogVE9ETzogWVVJRG9jX2NvbW1lbnRcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBSSUdIVF9BUlJPV1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBSSUdIVF9BUlJPVyA9IDM5O1xuXG4gICAgLyoqXG4gICAgICogVE9ETzogWVVJRG9jX2NvbW1lbnRcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBET1dOX0FSUk9XXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAc3RhdGljXG4gICAgICovXG4gICAgc3RhdGljIERPV05fQVJST1cgPSA0MDtcblxuICAgIC8qKlxuICAgICAqIFRPRE86IFlVSURvY19jb21tZW50XG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgRVNDQVBFX0tFWVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBFU0NBUEVfS0VZID0gMjc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5Q29kZTsiLCJpbXBvcnQgRXZlbnRCcm9rZXIgZnJvbSAnc3RydWN0dXJlanMvZXZlbnQvRXZlbnRCcm9rZXInO1xuaW1wb3J0IEtleUNvZGUgZnJvbSAnLi4vY29uc3RhbnRzL0tleUNvZGUnO1xuaW1wb3J0IEdlbmVyaWNNb2RhbCBmcm9tICcuLi92aWV3cy9tb2RhbHMvR2VuZXJpY01vZGFsJztcbmltcG9ydCBNb2RhbEV2ZW50IGZyb20gJy4uL2V2ZW50cy9Nb2RhbEV2ZW50JztcblxuLyoqXG4gKiBTaW5nbGV0b24gQ2xhc3MgdG8gbWFuYWdlIG1vZGFscy5cbiAqXG4gKiBAY2xhc3MgTW9kYWxDb250cm9sbGVyXG4gKiBAZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJcbiAqIEBjb25zdHJ1Y3RvclxuICoqL1xuY2xhc3MgTW9kYWxDb250cm9sbGVyIHtcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIGEgcmVmZXJlbmNlIHRvIGEgdmlldyB0aGF0IHRoZSBtb2RhbCB3aWxsIGJlIGFkZGVkIHRvLlxuICAgICAqIFRoZSB7eyNjcm9zc0xpbmsgXCJBcHBcIn19e3svY3Jvc3NMaW5rfX0gJGVsZW1lbnQgaXMgdGhlIEhUTUwgYm9keSBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IF92aWV3XG4gICAgICogQHR5cGUge0FwcH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfdmlldyA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBtb2RhbCBiZWluZyBkaXNwbGF5ZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgX2N1cnJlbnRNb2RhbFxuICAgICAqIEB0eXBlIHtCYXNlTW9kYWx9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgX2N1cnJlbnRNb2RhbCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgbW9kYWwgaXMgdXAgb3Igbm90LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzTW9kYWxBY3RpdmVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgc3RhdGljIGlzTW9kYWxBY3RpdmUgPSBmYWxzZTtcblxuICAgIHN0YXRpYyBpc0VuYWJsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZGVuIEV2ZW50RGlzcGF0Y2hlci5lbmFibGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZW5hYmxlKCkge1xuICAgICAgICBpZiAoTW9kYWxDb250cm9sbGVyLmlzRW5hYmxlZCA9PT0gdHJ1ZSkgeyByZXR1cm47IH1cblxuICAgICAgICBNb2RhbENvbnRyb2xsZXIuX3ZpZXcuJGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnLmpzLW1vZGFsVHJpZ2dlcicsIE1vZGFsQ29udHJvbGxlci5fY3JlYXRlTW9kYWwsIE1vZGFsQ29udHJvbGxlcik7XG4gICAgICAgIE1vZGFsQ29udHJvbGxlci5fdmlldy4kZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgTW9kYWxDb250cm9sbGVyLl9vbkVzY1ByZXNzLCBNb2RhbENvbnRyb2xsZXIpO1xuXG4gICAgICAgIEV2ZW50QnJva2VyLmFkZEV2ZW50TGlzdGVuZXIoTW9kYWxFdmVudC5SRU1PVkUsIE1vZGFsQ29udHJvbGxlci5fb25DbG9zZU1vZGFsLCBNb2RhbENvbnRyb2xsZXIpO1xuXG4gICAgICAgIE1vZGFsQ29udHJvbGxlci5pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBvdmVycmlkZGVuIEV2ZW50RGlzcGF0Y2hlci5kaXNhYmxlXG4gICAgICovXG4gICAgc3RhdGljIGRpc2FibGUoKSB7XG4gICAgICAgIGlmIChNb2RhbENvbnRyb2xsZXIuaXNFbmFibGVkID09PSBmYWxzZSkgeyByZXR1cm47IH1cblxuICAgICAgICBNb2RhbENvbnRyb2xsZXIuX3ZpZXcuJGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnLmpzLW1vZGFsVHJpZ2dlcicsIE1vZGFsQ29udHJvbGxlci5fY3JlYXRlTW9kYWwsIE1vZGFsQ29udHJvbGxlcik7XG4gICAgICAgIE1vZGFsQ29udHJvbGxlci5fdmlldy4kZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgTW9kYWxDb250cm9sbGVyLl9vbkVzY1ByZXNzLCBNb2RhbENvbnRyb2xsZXIpO1xuXG4gICAgICAgIEV2ZW50QnJva2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoTW9kYWxFdmVudC5SRU1PVkUsIE1vZGFsQ29udHJvbGxlci5fb25DbG9zZU1vZGFsLCBNb2RhbENvbnRyb2xsZXIpO1xuXG4gICAgICAgIE1vZGFsQ29udHJvbGxlci5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gSEVMUEVSIE1FVEhPRFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyBhIHZpZXcgdG8gYmUgc2V0IHNvIHRoaXMgY29udHJvbGxlciBrbm93cyB3aGF0IHZpZXcgdG8gYWRkIHRoZSBtb2RhbCB0by5cbiAgICAgKiBUaGUgdmlldyBuZWVkcyB0byBiZSBzZXQgYmVmb3JlIGFueSBvdGhlciBpbnRlcmFjdGlvbiB3aXRoIHRoaXMgY29udHJvbGxlci5cbiAgICAgKlxuICAgICAqIEBtZXRob2Qgc2V0Vmlld1xuICAgICAqIEBwYXJhbSB2aWV3IHtBcHB9XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIHN0YXRpYyBzZXRWaWV3KHZpZXcpIHtcbiAgICAgICAgaWYgKE1vZGFsQ29udHJvbGxlci5fdmlldyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgTW9kYWxDb250cm9sbGVyLmRpc2FibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE1vZGFsQ29udHJvbGxlci5fdmlldyA9IHZpZXc7XG5cbiAgICAgICAgTW9kYWxDb250cm9sbGVyLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBtb2RhbCB0byBjb3JyZWN0IHZpZXcuIEFsc28gcmVtb3ZlIHRoZSBjdXJyZW50IG1vZGFsIGlmIG9uZSBpcyBhY3RpdmUuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIGFkZE1vZGFsXG4gICAgICogQHBhcmFtIG1vZGFsIHtET01FbGVtZW50fVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkTW9kYWwobW9kYWwpIHtcbiAgICAgICAgaWYgKE1vZGFsQ29udHJvbGxlci5fY3VycmVudE1vZGFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBNb2RhbENvbnRyb2xsZXIuX3JlbW92ZU1vZGFsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBNb2RhbENvbnRyb2xsZXIuX2N1cnJlbnRNb2RhbCA9IG1vZGFsO1xuICAgICAgICBNb2RhbENvbnRyb2xsZXIuX3ZpZXcuYWRkQ2hpbGRBdChNb2RhbENvbnRyb2xsZXIuX2N1cnJlbnRNb2RhbCwgMCk7XG4gICAgICAgIE1vZGFsQ29udHJvbGxlci5pc01vZGFsQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAvLyBQcmV2ZW50cyB0aGUgYnJvd3NlciBmcm9tIHNjcm9sbGluZy4gVXNlZCB3aGVuIHRoZXJlIGlzIGEgc2Nyb2xsIGFyZWEgaW4gdGhlIG1vZGFsLlxuICAgICAgICBpZiAoTW9kYWxDb250cm9sbGVyLl9jdXJyZW50TW9kYWwuYWxsb3dQYWdlU2Nyb2xsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgTW9kYWxDb250cm9sbGVyLl92aWV3LiRlbGVtZW50LmFkZENsYXNzKCd1LW5vU2Nyb2xsaW5nJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBjdXJyZW50IG1vZGFsIGZyb20gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgX3JlbW92ZU1vZGFsXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgX3JlbW92ZU1vZGFsKCkge1xuICAgICAgICBNb2RhbENvbnRyb2xsZXIuX3ZpZXcucmVtb3ZlQ2hpbGQoTW9kYWxDb250cm9sbGVyLl9jdXJyZW50TW9kYWwpO1xuXG4gICAgICAgIE1vZGFsQ29udHJvbGxlci5fY3VycmVudE1vZGFsID0gbnVsbDtcbiAgICAgICAgTW9kYWxDb250cm9sbGVyLmlzTW9kYWxBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBNb2RhbENvbnRyb2xsZXIuX3ZpZXcuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ3Utbm9TY3JvbGxpbmcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBlc2Mga2V5IGlzIHByZXNzIGl0IHdpbGwgY2xvc2UgdGhlIG1vZGFsIHVubGVzcyB0aGUgbW9kYWwgdGVsbHMgdGhlIGNvbnRyb2xsZXIgbm90IHRvXG4gICAgICogYnkgdGhlIHt7I2Nyb3NzTGluayBcIkJhc2VNb2RhbC9mb3JjZUludGVyYWN0aW9uOnByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319IHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBfb25Fc2NQcmVzc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgc3RhdGljIF9vbkVzY1ByZXNzKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLkVTQ0FQRV9LRVkgJiYgTW9kYWxDb250cm9sbGVyLl9jdXJyZW50TW9kYWwuZm9yY2VJbnRlcmFjdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIE1vZGFsQ29udHJvbGxlci5fcmVtb3ZlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIHRoZSBnbG9iYWwgZGlzcGF0Y2hpbmcgb2YgdGhlIE1vZGFsRXZlbnQue3sjY3Jvc3NMaW5rIFwiTW9kYWxFdmVudC9SRU1PVkU6ZXZlbnRcIn19e3svY3Jvc3NMaW5rfX1cbiAgICAgKiBldmVudCB0aGlzIG1ldGhvZCB3aWxsIHJlbW92ZSB0aGUgbW9kYWwgZnJvbSB0aGUgZGlzcGxheSB2aWV3LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBfb25DbG9zZU1vZGFsXG4gICAgICogQHBhcmFtIGV2ZW50IHtCYXNlRXZlbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgX29uQ2xvc2VNb2RhbChldmVudCkge1xuICAgICAgICBNb2RhbENvbnRyb2xsZXIuX3JlbW92ZU1vZGFsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiBvbmUgb2YgdGhlICcuanMtbW9kYWxUcmlnZ2VyJyBtb2RhbCB0cmlnZ2VyIGJ1dHRvbnMgaXMgY2xpY2tlZCB0aGlzIG1ldGhvZCB3aWxsIGdldCB0aGUgdGVtcGxhdGUgYW5kIGRhdGFcbiAgICAgKiBmcm9tIHRoZSBidXR0b24uIEl0IHdpbGwgY3JlYXRlIGEgR2VuZXJpY01vZGFsIHRoZW4gcGFzcyBpdCB0byB0aGUgbW9kYWwgY29udHJvbGxlciB0byBkaXNwbGF5IGl0LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBfY3JlYXRlTW9kYWxcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfY3JlYXRlTW9kYWwoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb2RhbC10ZW1wbGF0ZScpO1xuICAgICAgICBsZXQgZGF0YSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW9kYWwtZGF0YScpO1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgICAgICBsZXQgbW9kYWwgPSBuZXcgR2VuZXJpY01vZGFsKHRlbXBsYXRlLCBkYXRhKTtcblxuICAgICAgICBNb2RhbENvbnRyb2xsZXIuYWRkTW9kYWwobW9kYWwpO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbnRyb2xsZXI7XG4iLCJpbXBvcnQgQmFzZUV2ZW50IGZyb20gJ3N0cnVjdHVyZWpzL2V2ZW50L0Jhc2VFdmVudCc7XG5cbi8qKlxuICogVGhpcyBldmVudCBjbGFzcyBpcyBtZWFudCB0byBtYW5hZ2UgYWxsIGV2ZW50IHR5cGVzIGZvciBhbGwgbW9kYWxzIHdpdGhpbiB0aGUgc2l0ZS5cbiAqXG4gKiBAY2xhc3MgTW9kYWxFdmVudFxuICogQGV4dGVuZHMgQmFzZUV2ZW50XG4gKiBAY29uc3RydWN0b3JcbiAqKi9cbmNsYXNzIE1vZGFsRXZlbnQgZXh0ZW5kcyBCYXNlRXZlbnQge1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgdG8gYmUgZGlzcGF0Y2hlZCB3aGVuIGEgbW9kYWwgbmVlZHMgdG8gYmUgY2xvc2VkLlxuICAgICAqXG4gICAgICogQGV2ZW50IFJFTU9WRVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBSRU1PVkUgPSAnTW9kYWxFdmVudC5yZW1vdmUnO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgdG8gYmUgZGlzcGF0Y2hlZCB3aGVuIGEgYnV0dG9uIGluIHRoZSBtb2RhbCBpcyBjbGljayB0byBjYW5jZWwgc29tZXRoaW5nLlxuICAgICAqXG4gICAgICogQGV2ZW50IFJFSkVDVFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHN0YXRpYyBSRUpFQ1QgPSAnTW9kYWxFdmVudC5yZWplY3QnO1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgdG8gYmUgZGlzcGF0Y2hlZCB3aGVuIGEgYnV0dG9uIGluIHRoZSBtb2RhbCBpcyBjbGljayB0byBjb25maXJtIHNvbWV0aGluZy5cbiAgICAgKlxuICAgICAqIEBldmVudCBBQ0NFUFRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICBzdGF0aWMgQUNDRVBUID0gJ01vZGFsRXZlbnQuYWNjZXB0JztcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIodHlwZSwgYnViYmxlcywgY2FuY2VsYWJsZSwgZGF0YSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsRXZlbnQ7XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcbmltcG9ydCBIYW5kbGViYXJzSGVscGVycyBmcm9tICcuL3V0aWxzL0hhbmRsZWJhckhlbHBlcnMnO1xuXG5IYW5kbGViYXJzSGVscGVycy5pbml0KCk7XG5cbndpbmRvdy5hcHAgPSBuZXcgQXBwKCk7XG53aW5kb3cuYXBwLmFwcGVuZFRvKCdib2R5Jyk7ICAgIC8vIE5lZWQgdG8gc3BlY2lmeSB3aGF0IGFyZWEgb3VyIGNvZGUgaGFzIGNvbnRyb2wgb3Zlci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIEFwcC5qcyBjbGFzcyBleHRlbmRzIFN0YWdlIHdoaWNoIGhhcyB0aGUgYXBwZW5kVG8gbWV0aG9kLlxuIiwiaW1wb3J0IFN0cmluZ1V0aWwgZnJvbSAnc3RydWN0dXJlanMvdXRpbC9TdHJpbmdVdGlsJztcblxuLyoqXG4gKiBIYW1idXJnZXIgaGVscGVycywgbWFrZXMgYSBncmVhdCBtZWFsXG4gKlxuICogQGNsYXNzIEhhbmRsZWJhcnNIZWxwZXJzXG4gKiBAY29uc3RydWN0b3JcbiAqKi9cbmNsYXNzIEhhbmRsZWJhcnNIZWxwZXJzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0KCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdXRwdXRzIHJhdyBqc29uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBvYmplY3Qge2FueX1cbiAgICAgICAgICogQHJldHVybiBIYW5kbGViYXJzXG4gICAgICAgICAqL1xuICAgICAgICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCd0b0pTT04nLCBKU09OLnN0cmluZ2lmeSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgc3BhY2VzIGFuZCBzZXRzIHN0cmluZyB0byBsb3dlcmNhc2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIG9iamVjdCB7YW55fVxuICAgICAgICAgKiBAcmV0dXJuIEhhbmRsZWJhcnNcbiAgICAgICAgICovXG4gICAgICAgIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2xvd2VyQ2FzZUFuZENvbmNhdCcsIGZ1bmN0aW9uIChvYmplY3Q6YW55KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEhhbmRsZWJhcnMuU2FmZVN0cmluZyhvYmplY3QucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIHNwYWNlcyBhbmQgc2V0cyBzdHJpbmcgdG8gbG93ZXJjYXNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBvYmplY3Qge2FueX1cbiAgICAgICAgICogQHJldHVybiBIYW5kbGViYXJzXG4gICAgICAgICAqL1xuICAgICAgICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCd0cnVuY2F0ZScsIGZ1bmN0aW9uIChzdHJpbmc6YW55KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEhhbmRsZWJhcnMuU2FmZVN0cmluZyhTdHJpbmdVdGlsLnRydW5jYXRlKHN0cmluZywgMTAwLCAnJmhlbGxpcDsnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21wYXJlcyB0d28gdmFsdWVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBvYmplY3Qge2FueX1cbiAgICAgICAgICogQHJldHVybiBIYW5kbGViYXJzXG4gICAgICAgICAqL1xuICAgICAgICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdjb21wYXJlJywgZnVuY3Rpb24obHZhbHVlLCBydmFsdWUsIG9wdGlvbnMpIHtcblxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIYW5kbGVyYmFycyBIZWxwZXIgXCJjb21wYXJlXCIgbmVlZHMgMiBwYXJhbWV0ZXJzJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gb3B0aW9ucy5oYXNoLm9wZXJhdG9yIHx8ICc9PSc7XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRvcnM6YW55ID0ge1xuICAgICAgICAgICAgICAgICc9PSc6ICAgICAgIGZ1bmN0aW9uKGwscikgeyByZXR1cm4gbCA9PSByOyB9LFxuICAgICAgICAgICAgICAgICc9PT0nOiAgICAgIGZ1bmN0aW9uKGwscikgeyByZXR1cm4gbCA9PT0gcjsgfSxcbiAgICAgICAgICAgICAgICAnIT0nOiAgICAgICBmdW5jdGlvbihsLHIpIHsgcmV0dXJuIGwgIT0gcjsgfSxcbiAgICAgICAgICAgICAgICAnPCc6ICAgICAgICBmdW5jdGlvbihsLHIpIHsgcmV0dXJuIGwgPCByOyB9LFxuICAgICAgICAgICAgICAgICc+JzogICAgICAgIGZ1bmN0aW9uKGwscikgeyByZXR1cm4gbCA+IHI7IH0sXG4gICAgICAgICAgICAgICAgJzw9JzogICAgICAgZnVuY3Rpb24obCxyKSB7IHJldHVybiBsIDw9IHI7IH0sXG4gICAgICAgICAgICAgICAgJz49JzogICAgICAgZnVuY3Rpb24obCxyKSB7IHJldHVybiBsID49IHI7IH0sXG4gICAgICAgICAgICAgICAgJ3R5cGVvZic6ICAgZnVuY3Rpb24obCxyKSB7IHJldHVybiB0eXBlb2YgbCA9PSByOyB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIW9wZXJhdG9yc1tvcGVyYXRvcl0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhbmRsZXJiYXJzIEhlbHBlciBcImNvbXBhcmVcIiBkb2VzblxcJ3Qga25vdyB0aGUgb3BlcmF0b3IgJyArIG9wZXJhdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gb3BlcmF0b3JzW29wZXJhdG9yXShsdmFsdWUsIHJ2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mbih0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT3V0cHV0cyB0aGUgZGF0YSBjb250ZXh0XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBvcHRpb25hbFZhbHVlIHthbnl9XG4gICAgICAgICAqL1xuICAgICAgICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKCdkZWJ1ZycsIGZ1bmN0aW9uIChvcHRpb25hbFZhbHVlOmFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJy8vLy8vLy8vLy8vLycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLy8vLy8vLy8vLy8vJyk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25hbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJysrKysrKysrKysrKysrJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29wdGlvbmFsVmFsdWU6ICcsIG9wdGlvbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcrKysrKysrKysrKysrKycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgJ3NlbGVjdGVkJyBwcm9wZXJ0eSBvbiB0aGUgc2VsZWN0IG9wdGlvbihzKSB3aGVuIHRoZSB2YWx1ZSBpcyBwYXNzZWQgaW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2Qgc2VsZWN0SGVscGVyXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgLy8gc2VsZWN0VmFsdWUgPSAnNjknXG4gICAgICAgICAqICAgICAgLy8gc2VsZWN0VmFsdWUgPSAnNjksNzAsNzEnXG4gICAgICAgICAqICAgICAgPHNlbGVjdD5cbiAgICAgICAgICogICAgICAgICAge3sjc2VsZWN0SGVscGVyIHNlbGVjdFZhbHVlfX1cbiAgICAgICAgICogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDb21wbGV0ZWRcIj5Db21wbGV0ZWQ8L29wdGlvbj5cbiAgICAgICAgICogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdmVyRHVlXCI+T3ZlckR1ZTwvb3B0aW9uPlxuICAgICAgICAgKiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNlbnRUb1BheWVyXCI+U2VudFRvUGF5ZXI8L29wdGlvbj5cbiAgICAgICAgICogICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb25lXCI+Tm9uZTwvb3B0aW9uPlxuICAgICAgICAgKiAgICAgICAgICB7ey9zZWxlY3RIZWxwZXJ9fVxuICAgICAgICAgKiAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgKi9cbiAgICAgICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignc2VsZWN0SGVscGVyJywgZnVuY3Rpb24oc2VsZWN0ZWQsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBodG1sID0gb3B0aW9ucy5mbih0aGlzKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IFN0cmluZyhzZWxlY3RlZCkuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSggbmV3IFJlZ0V4cCgnIHZhbHVlPVxcXCInICsgdmFsdWVzW2ldICsgJ1xcXCInKSwgJyQmIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhbmRsZWJhcnNIZWxwZXJzO1xuXG4iLCJpbXBvcnQgRE9NRWxlbWVudCBmcm9tICdzdHJ1Y3R1cmVqcy9kaXNwbGF5L0RPTUVsZW1lbnQnO1xuaW1wb3J0IEV2ZW50QnJva2VyIGZyb20gJ3N0cnVjdHVyZWpzL2V2ZW50L0V2ZW50QnJva2VyJztcbmltcG9ydCBNb2RhbEV2ZW50IGZyb20gJy4uLy4uL2V2ZW50cy9Nb2RhbEV2ZW50JztcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBiYXNlIGNsYXNzIGZvciBhbGwgbW9kYWxzLlxuICogQWxsIG1vZGFscyBzaG91bGQgZXh0ZW5kIHRoaXMgY2xhc3MuXG4gKlxuICogQGNsYXNzIEJhc2VNb2RhbFxuICogQGV4dGVuZHMgRE9NRWxlbWVudFxuICogQGNvbnN0cnVjdG9yXG4gKiovXG5jbGFzcyBCYXNlTW9kYWwgZXh0ZW5kcyBET01FbGVtZW50IHtcblxuICAgIC8qKlxuICAgICAqIEhvbGRzIGEgcmVmZXJlbmNlIHRvIHRoZSBtb2RhbCBjb250YWluZXIgc28gd2UgY2FuIHN0b3AgZXZlbnRcbiAgICAgKiBidWJibGluZyB0byB0aGUgYm9keSB0aHJvdWdoIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgXyRtb2RhbENvbnRlbnRcbiAgICAgKiBAdHlwZSB7alF1ZXJ5fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBfJG1vZGFsQ29udGVudCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBIb2xkcyBhIHJlZmVyZW5jZSB0byB0aGUgbW9kYWwncyBzbmVlemUgZ3VhcmQvYmFja2dyb3VuZFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IF8kbW9kYWxVbmRlcmxheVxuICAgICAqIEB0eXBlIHtqUXVlcnl9XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIF8kbW9kYWxVbmRlcmxheSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIHZhbHVlIGlzIHNldCB0byB0cnVlIHRoZSB1c2VyIGNhbm5vdCBjbGljayBvdXRzaWRlIG9mIHRoZSBtb2RhbCBvclxuICAgICAqIGNsaWNrIHRoZSBFU0Mga2V5IHRvIGNsb3NlIHRoZSBtb2RhbC4gVGhlIHVzZXIgbXVzdCBjbGljayBvbmUgb2YgdGhlIGJ1dHRvbnNcbiAgICAgKiBpbiB0aGUgbW9kYWwuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZm9yY2VJbnRlcmFjdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBmb3JjZUludGVyYWN0aW9uID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIHZhbHVlIGlzIHNldCB0byBmYWxzZSB0aGUgcGFnZS9ib2R5IHdpbGwgbm90IHNjcm9sbC5cbiAgICAgKiBTZXQgdGhpcyBwcm9wZXJ0eSB0byBmYWxzZSBpbiB0aGUgY2xhc3MgdGhhdCBleHRlbmRzIHRoaXMge3sjY3Jvc3NMaW5rIFwiQmFzZU1vZGFsXCJ9fXt7L2Nyb3NzTGlua319IGNsYXNzXG4gICAgICogaWYgdGhlcmUgaXMgYW55IHNjcm9sbGFibGUgY29udGVudCBpbiB0aGUgbW9kYWwuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYWxsb3dQYWdlU2Nyb2xsXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGFsbG93UGFnZVNjcm9sbCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZGF0YSB0aGF0IHdhcyBwYXNzZWQgaW50byB0aGUgY29uc3RydWN0b3Igb2YgdGhlIG1vZGFsLlxuICAgICAqIFRoaXMgZGF0YSBvYmplY3Qgd2lsbCBhbHNvIGJlIGRpc3BhdGNoZWQgd2l0aCB0aGUgTW9kYWxFdmVudC57eyNjcm9zc0xpbmsgXCJNb2RhbEV2ZW50L0FDQ0VQVDpldmVudFwifX17ey9jcm9zc0xpbmt9fSBhbmRcbiAgICAgKiB7eyNjcm9zc0xpbmsgXCJNb2RhbEV2ZW50L1JFSkVDVDpldmVudFwifX17ey9jcm9zc0xpbmt9fS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBtb2RhbERhdGFcbiAgICAgKiBAdHlwZSB7YW55fVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBtb2RhbERhdGEgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUsIGRhdGEpIHtcbiAgICAgICAgc3VwZXIodGVtcGxhdGUsIGRhdGEpO1xuXG4gICAgICAgIHRoaXMubW9kYWxEYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGRlbiBET01FbGVtZW50LmNyZWF0ZVxuICAgICAqL1xuICAgIGNyZWF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgICAgICBzdXBlci5jcmVhdGUodGVtcGxhdGUsIGRhdGEpO1xuXG4gICAgICAgIHRoaXMuXyRtb2RhbENvbnRlbnQgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5qcy1tb2RhbC1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuXyRtb2RhbFVuZGVybGF5ID0gdGhpcy4kZWxlbWVudC5maW5kKCcuanMtbW9kYWwtdW5kZXJsYXknKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGRlbiBET01FbGVtZW50LmVuYWJsZVxuICAgICAqL1xuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkID09PSB0cnVlKSB7IHJldHVybiB0aGlzOyB9XG5cbiAgICAgICAgdGhpcy5fJG1vZGFsVW5kZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrTW9kYWxVbmRlcmxheSwgdGhpcyk7XG4gICAgICAgIHRoaXMuXyRtb2RhbENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAnLmpzLW1vZGFsLXJlamVjdCcsIHRoaXMuX29uUmVqZWN0TW9kYWwsIHRoaXMpO1xuICAgICAgICB0aGlzLl8kbW9kYWxDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJy5qcy1tb2RhbC1hY2NlcHQnLCB0aGlzLl9vbkFjY2VwdE1vZGFsLCB0aGlzKTtcblxuICAgICAgICByZXR1cm4gc3VwZXIuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRkZW4gRE9NRWxlbWVudC5kaXNhYmxlXG4gICAgICovXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkID09PSBmYWxzZSkgeyByZXR1cm4gdGhpczsgfVxuXG4gICAgICAgIHRoaXMuXyRtb2RhbFVuZGVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGlja01vZGFsVW5kZXJsYXksIHRoaXMpO1xuICAgICAgICB0aGlzLl8kbW9kYWxDb250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgJy5qcy1tb2RhbC1yZWplY3QnLCB0aGlzLl9vblJlamVjdE1vZGFsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fJG1vZGFsQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICcuanMtbW9kYWwtYWNjZXB0JywgdGhpcy5fb25BY2NlcHRNb2RhbCwgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gSEVMUEVSIE1FVEhPRFxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYSBnbG9iYWwge3sjY3Jvc3NMaW5rIFwiTW9kYWxFdmVudFwifX17ey9jcm9zc0xpbmt9fS57eyNjcm9zc0xpbmsgXCJNb2RhbEV2ZW50L1JFTU9WRTpldmVudFwifX17ey9jcm9zc0xpbmt9fSBldmVudCBzbyB0aGUge3sjY3Jvc3NMaW5rIFwiTW9kYWxDb250cm9sbGVyXCJ9fXt7L2Nyb3NzTGlua319IGNhbiByZW1vdmUgdGhpcyBtb2RhbC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY2xvc2VcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIEV2ZW50QnJva2VyLmRpc3BhdGNoRXZlbnQoTW9kYWxFdmVudC5SRU1PVkUpO1xuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBFVkVOVCBIQU5ETEVSU1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSByZWplY3RlZCBidXR0b24gKGpzLW1vZGFsLXJlamVjdCkgaXMgY2xpY2tlZCBpbiB0aGUgbW9kYWwuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIG9yIGNoYW5nZSB0aGUgZnVuY3Rpb25hbGl0eS5cbiAgICAgKiBEaXNwYXRjaGVzIHRoZSB7eyNjcm9zc0xpbmsgXCJNb2RhbEV2ZW50XCJ9fXt7L2Nyb3NzTGlua319Lnt7I2Nyb3NzTGluayBcIk1vZGFsRXZlbnQvUkVKRUNUOmV2ZW50XCJ9fXt7L2Nyb3NzTGlua319IGV2ZW50LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBfb25SZWplY3RNb2RhbFxuICAgICAqIEBwYXJhbSBldmVudCB7SlF1ZXJ5RXZlbnRPYmplY3R9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9vblJlamVjdE1vZGFsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE1vZGFsRXZlbnQuUkVKRUNULCB0aGlzLm1vZGFsRGF0YSk7XG5cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBhY2NlcHRlZCBidXR0b24gKGpzLW1vZGFsLWFjY2VwdCkgaXMgY2xpY2tlZCBpbiB0aGUgbW9kYWwuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIG9yIGNoYW5nZSB0aGUgZnVuY3Rpb25hbGl0eS5cbiAgICAgKiBEaXNwYXRjaGVzIHRoZSB7eyNjcm9zc0xpbmsgXCJNb2RhbEV2ZW50XCJ9fXt7L2Nyb3NzTGlua319Lnt7I2Nyb3NzTGluayBcIk1vZGFsRXZlbnQvQUNDRVBUOmV2ZW50XCJ9fXt7L2Nyb3NzTGlua319IGV2ZW50LlxuICAgICAqXG4gICAgICogQG1ldGhvZCBfb25BY2NlcHRNb2RhbFxuICAgICAqIEBwYXJhbSBldmVudCB7SlF1ZXJ5RXZlbnRPYmplY3R9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9vbkFjY2VwdE1vZGFsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KE1vZGFsRXZlbnQuQUNDRVBULCB0aGlzLm1vZGFsRGF0YSk7XG5cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBtb2RhbCBiYWNrZ3JvdW5kIGlzIGNsaWNrZWQgb24gdGhpcyBtZXRob2QgaXMgY2FsbGVkIHRvIGNsb3NlIHRoZSBtb2RhbC5cbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vdCBjbG9zZSB0aGUgbW9kYWwgaWYgdGhlIHt7I2Nyb3NzTGluayBcIkJhc2VNb2RhbC9mb3JjZUludGVyYWN0aW9uOnByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319IHByb3BlcnR5IGlzIHRydWUuXG4gICAgICpcbiAgICAgKiBAbWV0aG9kIF9vbkNsaWNrTW9kYWxVbmRlcmxheVxuICAgICAqIEBwYXJhbSBldmVudCB7SlF1ZXJ5RXZlbnRPYmplY3R9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIF9vbkNsaWNrTW9kYWxVbmRlcmxheShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmZvcmNlSW50ZXJhY3Rpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZU1vZGFsO1xuIiwiaW1wb3J0IEJhc2VNb2RhbCBmcm9tICcuL0Jhc2VNb2RhbCc7XG5cbi8qKlxuICogVGhpcyBnZW5lcmljIG1vZGFsIGFsbG93cyBhIHRlbXBsYXRlIGFuZCBkYXRhIHRvIGJlIHBhc3NlZCBpbiB0byByZW5kZXIgYSBtb2RhbC5cbiAqIEl0IGlzIG1lYW50IGZvciBtb2RhbHMgdGhhdCBhcmUgZGlzcGxheSBvbmx5IGFuZCBoYXMgbm8gZXh0cmEgbG9naWMgZXhjZXB0IGNsb3NpbmcgaXRzZWxmLlxuICogQ2hlY2tvdXQgdGhlIEJhc2VNb2RhbCB0byBzZWUgd2hhdCBleHRyYSBmdW5jdGlvbmFsaXR5IHRoaXMgY2xhc3MgaW5oZXJpdHMuXG4gKlxuICogQGNsYXNzIEdlbmVyaWNNb2RhbFxuICogQGV4dGVuZHMgQmFzZU1vZGFsXG4gKiBAY29uc3RydWN0b3JcbiAqKi9cbmNsYXNzIEdlbmVyaWNNb2RhbCBleHRlbmRzIEJhc2VNb2RhbCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgZGF0YSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHRlbXBsYXRlLCBkYXRhKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQG92ZXJyaWRkZW4gQmFzZU1vZGFsLmFsbG93UGFnZVNjcm9sbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hbGxvd1BhZ2VTY3JvbGwgPSAoZGF0YS5hbGxvd1BhZ2VTY3JvbGwgPT09IHZvaWQgMCkgPyB0aGlzLmFsbG93UGFnZVNjcm9sbCA6IGRhdGEuYWxsb3dQYWdlU2Nyb2xsO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHZW5lcmljTW9kYWw7XG4iLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgdiA9IGZhY3RvcnkocmVxdWlyZSwgZXhwb3J0cyk7IGlmICh2ICE9PSB1bmRlZmluZWQpIG1vZHVsZS5leHBvcnRzID0gdjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnLi91dGlsL1V0aWwnXSwgZmFjdG9yeSk7XG4gICAgfVxufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcbiAgICAvLy88cmVmZXJlbmNlIHBhdGg9J19kZWNsYXJlL2pxdWVyeS5kLnRzJy8+XG4gICAgLy8vPHJlZmVyZW5jZSBwYXRoPSdfZGVjbGFyZS9oYW5kbGViYXJzLmQudHMnLz5cbiAgICAvLy88cmVmZXJlbmNlIHBhdGg9J19kZWNsYXJlL2dyZWVuc29jay5kLnRzJy8+XG4gICAgLy8vPHJlZmVyZW5jZSBwYXRoPSdfZGVjbGFyZS9qcXVlcnkuZXZlbnRMaXN0ZW5lci5kLnRzJy8+XG4gICAgLy8vPHJlZmVyZW5jZSBwYXRoPSdfZGVjbGFyZS9sb2cuZC50cycvPlxuICAgIHZhciBVdGlsXzEgPSByZXF1aXJlKCcuL3V0aWwvVXRpbCcpO1xuICAgIC8qKlxuICAgICAqIFRoZSB7eyNjcm9zc0xpbmsgXCJCYXNlT2JqZWN0XCJ9fXt7L2Nyb3NzTGlua319IGNsYXNzIGlzIGFuIGFic3RyYWN0IGNsYXNzIHRoYXQgcHJvdmlkZXMgY29tbW9uIHByb3BlcnRpZXMgYW5kIGZ1bmN0aW9uYWxpdHkgZm9yIGFsbCBTdHJ1Y3R1cmVKUyBjbGFzc2VzLlxuICAgICAqXG4gICAgICogQGNsYXNzIEJhc2VPYmplY3RcbiAgICAgKiBAbW9kdWxlIFN0cnVjdHVyZUpTXG4gICAgICogQHN1Ym1vZHVsZSBjb3JlXG4gICAgICogQHJlcXVpcmVzIFV0aWxcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAYXV0aG9yIFJvYmVydCBTLiAod3d3LmNvZGVCZWx0LmNvbSlcbiAgICAgKi9cbiAgICB2YXIgQmFzZU9iamVjdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEJhc2VPYmplY3QoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBzanNJZCAoU3RydWN0dXJlSlMgSUQpIGlzIGEgdW5pcXVlIGlkZW50aWZpZXIgYXV0b21hdGljYWxseSBhc3NpZ25lZCB0byBtb3N0IFN0cnVjdHVyZUpTIG9iamVjdHMgdXBvbiBpbnN0YW50aWF0aW9uLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBzanNJZFxuICAgICAgICAgICAgICogQHR5cGUge2ludH1cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgICAgICAgICAqIEB3cml0ZU9uY2VcbiAgICAgICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNqc0lkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2pzSWQgPSBVdGlsXzEuZGVmYXVsdC51bmlxdWVJZCgpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBmdWxseSBxdWFsaWZpZWQgY2xhc3MgbmFtZSBvZiBhbiBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgZ2V0UXVhbGlmaWVkQ2xhc3NOYW1lXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNsYXNzIG5hbWUuXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgIGxldCBzb21lQ2xhc3MgPSBuZXcgU29tZUNsYXNzKCk7XG4gICAgICAgICAqICAgICBzb21lQ2xhc3MuZ2V0UXVhbGlmaWVkQ2xhc3NOYW1lKCk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBTb21lQ2xhc3NcbiAgICAgICAgICovXG4gICAgICAgIEJhc2VPYmplY3QucHJvdG90eXBlLmdldFF1YWxpZmllZENsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlsXzEuZGVmYXVsdC5nZXROYW1lKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHB1cnBvc2Ugb2YgdGhlIGRlc3Ryb3kgbWV0aG9kIGlzIHRvIG1ha2UgYW4gb2JqZWN0IHJlYWR5IGZvciBnYXJiYWdlIGNvbGxlY3Rpb24uIFRoaXNcbiAgICAgICAgICogc2hvdWxkIGJlIHRob3VnaHQgb2YgYXMgYSBvbmUgd2F5IGZ1bmN0aW9uLiBPbmNlIGRlc3Ryb3kgaXMgY2FsbGVkIG5vIGZ1cnRoZXIgbWV0aG9kcyBzaG91bGQgYmVcbiAgICAgICAgICogY2FsbGVkIG9uIHRoZSBvYmplY3Qgb3IgcHJvcGVydGllcyBhY2Nlc3NlZC4gSXQgaXMgdGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRob3NlIHdobyBpbXBsZW1lbnQgdGhpc1xuICAgICAgICAgKiBmdW5jdGlvbiB0byBzdG9wIGFsbCBydW5uaW5nIFRpbWVycywgYWxsIHJ1bm5pbmcgU291bmRzLCBhbmQgdGFrZSBhbnkgb3RoZXIgc3RlcHMgbmVjZXNzYXJ5IHRvIG1ha2UgYW5cbiAgICAgICAgICogb2JqZWN0IGVsaWdpYmxlIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEJ5IGRlZmF1bHQgdGhlIGRlc3Ryb3kgbWV0aG9kIHdpbGwgbnVsbCBvdXQgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzIGF1dG9tYXRpY2FsbHkuIFlvdSBzaG91bGQgY2FsbCBkZXN0cm95XG4gICAgICAgICAqIG9uIG90aGVyIG9iamVjdHMgYmVmb3JlIGNhbGxpbmcgdGhlIHN1cGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgZGVzdHJveSgpIHtcbiAgICAgICAgICogICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgIHRoaXMuX2NoaWxkSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqL1xuICAgICAgICBCYXNlT2JqZWN0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQmFzZU9iamVjdDtcbiAgICB9KSgpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBleHBvcnRzLmRlZmF1bHQgPSBCYXNlT2JqZWN0O1xufSk7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciB2ID0gZmFjdG9yeShyZXF1aXJlLCBleHBvcnRzKTsgaWYgKHYgIT09IHVuZGVmaW5lZCkgbW9kdWxlLmV4cG9ydHMgPSB2O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICcuL0Jhc2VPYmplY3QnXSwgZmFjdG9yeSk7XG4gICAgfVxufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcbiAgICB2YXIgQmFzZU9iamVjdF8xID0gcmVxdWlyZSgnLi9CYXNlT2JqZWN0Jyk7XG4gICAgLyoqXG4gICAgICogVGhlIHt7I2Nyb3NzTGluayBcIk9iamVjdE1hbmFnZXJcIn19e3svY3Jvc3NMaW5rfX0gY2xhc3MgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBwcm92aWRlcyBlbmFibGluZyBhbmQgZGlzYWJsaW5nIGZ1bmN0aW9uYWxpdHkgZm9yIG1vc3QgU3RydWN0dXJlSlMgY2xhc3Nlcy5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBPYmplY3RNYW5hZ2VyXG4gICAgICogQG1vZHVsZSBTdHJ1Y3R1cmVKU1xuICAgICAqIEBleHRlbmRzIEJhc2VPYmplY3RcbiAgICAgKiBAc3VibW9kdWxlIGNvcmVcbiAgICAgKiBAcmVxdWlyZXMgRXh0ZW5kXG4gICAgICogQHJlcXVpcmVzIEJhc2VPYmplY3RcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAYXV0aG9yIFJvYmVydCBTLiAod3d3LmNvZGVCZWx0LmNvbSlcbiAgICAgKi9cbiAgICB2YXIgT2JqZWN0TWFuYWdlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhPYmplY3RNYW5hZ2VyLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBPYmplY3RNYW5hZ2VyKCkge1xuICAgICAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBpc0VuYWJsZWQgcHJvcGVydHkgaXMgdXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBlbmFibGVkIHN0YXRlIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGlzRW5hYmxlZFxuICAgICAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZW5hYmxlIG1ldGhvZCBpcyByZXNwb25zaWJsZSBmb3IgZW5hYmxpbmcgb2JqZWN0LlxuICAgICAgICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgaXQgd2lsbCB0cmlnZ2VyIHRoZSB7eyNjcm9zc0xpbmsgXCJPYmplY3RNYW5hZ2VyL29uRW5hYmxlZDptZXRob2RcIn19e3svY3Jvc3NMaW5rfX0gbWV0aG9kLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGVuYWJsZVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBjaGFpbmFibGVcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgIGVuYWJsZSgpIHtcbiAgICAgICAgICogICAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkID09PSB0cnVlKSB7IHJldHVybjsgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgICB0aGlzLl9jaGlsZEluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoQmFzZUV2ZW50LkNIQU5HRSwgdGhpcy5oYW5kbGVyTWV0aG9kLCB0aGlzKTtcbiAgICAgICAgICogICAgICAgICAgdGhpcy5fY2hpbGRJbnN0YW5jZS5lbmFibGUoKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAgc3VwZXIuZW5hYmxlKCk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgLy8gRXhhbXBsZSBvbiBob3cgdG8gZW5hYmxlIGEgdmlldy5cbiAgICAgICAgICogICAgICB0aGlzLl9jaGlsZEluc3RhbmNlLmVuYWJsZSgpO1xuICAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0TWFuYWdlci5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uRW5hYmxlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBhdXRvbWF0aWNhbGx5IGNhbGxlZCBhZnRlciB0aGUgZW5hYmxlIG1ldGhvZCBpcyBjYWxsZWQgb24gdGhlIG9iamVjdC5cbiAgICAgICAgICogVGhlIGVuYWJsZSBtZXRob2QgaXMgcmVzcG9uc2libGUgZm9yIGVuYWJsaW5nIGV2ZW50IGxpc3RlbmVycyBhbmQvb3IgY2hpbGRyZW4gb2YgdGhlIGNvbnRhaW5pbmcgb2JqZWN0cy5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBvbkVuYWJsZWRcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICBvbkVuYWJsZWQoKSB7XG4gICAgICAgICAqICAgICAgICAgIHRoaXMuX2NoaWxkSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihCYXNlRXZlbnQuQ0hBTkdFLCB0aGlzLmhhbmRsZXJNZXRob2QsIHRoaXMpO1xuICAgICAgICAgKiAgICAgICAgICB0aGlzLl9jaGlsZEluc3RhbmNlLmVuYWJsZSgpO1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKi9cbiAgICAgICAgT2JqZWN0TWFuYWdlci5wcm90b3R5cGUub25FbmFibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGlzYWJsZSBtZXRob2QgaXMgcmVzcG9uc2libGUgZm9yIGRpc2FibGluZyB0aGUgb2JqZWN0LlxuICAgICAgICAgKiBBZnRlciB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgaXQgd2lsbCB0cmlnZ2VyIHRoZSB7eyNjcm9zc0xpbmsgXCJPYmplY3RNYW5hZ2VyL29uRGlzYWJsZWQ6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319IG1ldGhvZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBkaXNhYmxlXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGNoYWluYWJsZVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIGRpc2FibGUoKSB7XG4gICAgICAgICAqICAgICAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCA9PT0gZmFsc2UpIHsgcmV0dXJuOyB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgIHRoaXMuX2NoaWxkSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihCYXNlRXZlbnQuQ0hBTkdFLCB0aGlzLmhhbmRsZXJNZXRob2QsIHRoaXMpO1xuICAgICAgICAgKiAgICAgICAgICB0aGlzLl9jaGlsZEluc3RhbmNlLmRpc2FibGUoKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAgc3VwZXIuZGlzYWJsZSgpO1xuICAgICAgICAgKiAgICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAvLyBFeGFtcGxlIG9uIGhvdyB0byBkaXNhYmxlIGEgdmlldy5cbiAgICAgICAgICogICAgICB0aGlzLl9jaGlsZEluc3RhbmNlLmRpc2FibGUoKTtcbiAgICAgICAgICovXG4gICAgICAgIE9iamVjdE1hbmFnZXIucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vbkRpc2FibGVkKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIGF1dG9tYXRpY2FsbHkgY2FsbGVkIGFmdGVyIHRoZSBkaXNhYmxlIG1ldGhvZCBpcyBjYWxsZWQgb24gdGhlIG9iamVjdC5cbiAgICAgICAgICogVGhlIG9uRGlzYWJsZWQgbWV0aG9kIGlzIHJlc3BvbnNpYmxlIGZvciBkaXNhYmxpbmcgZXZlbnQgbGlzdGVuZXJzIGFuZC9vciBjaGlsZHJlbiBvZiB0aGUgY29udGFpbmluZyBvYmplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIG9uRGlzYWJsZWRcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICBvbkRpc2FibGVkKCkge1xuICAgICAgICAgKiAgICAgICAgICB0aGlzLl9jaGlsZEluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoQmFzZUV2ZW50LkNIQU5HRSwgdGhpcy5oYW5kbGVyTWV0aG9kLCB0aGlzKTtcbiAgICAgICAgICogICAgICAgICAgdGhpcy5fY2hpbGRJbnN0YW5jZS5kaXNhYmxlKCk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqL1xuICAgICAgICBPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5vbkRpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBPYmplY3RNYW5hZ2VyO1xuICAgIH0pKEJhc2VPYmplY3RfMS5kZWZhdWx0KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gT2JqZWN0TWFuYWdlcjtcbn0pO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgdiA9IGZhY3RvcnkocmVxdWlyZSwgZXhwb3J0cyk7IGlmICh2ICE9PSB1bmRlZmluZWQpIG1vZHVsZS5leHBvcnRzID0gdjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnLi9EaXNwbGF5T2JqZWN0Q29udGFpbmVyJywgJy4uL2V2ZW50L0Jhc2VFdmVudCcsICcuLi91dGlsL1RlbXBsYXRlRmFjdG9yeScsICcuLi91dGlsL0NvbXBvbmVudEZhY3RvcnknLCAnLi4vcGx1Z2luL2pxdWVyeS5ldmVudExpc3RlbmVyJ10sIGZhY3RvcnkpO1xuICAgIH1cbn0pKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgdmFyIERpc3BsYXlPYmplY3RDb250YWluZXJfMSA9IHJlcXVpcmUoJy4vRGlzcGxheU9iamVjdENvbnRhaW5lcicpO1xuICAgIHZhciBCYXNlRXZlbnRfMSA9IHJlcXVpcmUoJy4uL2V2ZW50L0Jhc2VFdmVudCcpO1xuICAgIHZhciBUZW1wbGF0ZUZhY3RvcnlfMSA9IHJlcXVpcmUoJy4uL3V0aWwvVGVtcGxhdGVGYWN0b3J5Jyk7XG4gICAgdmFyIENvbXBvbmVudEZhY3RvcnlfMSA9IHJlcXVpcmUoJy4uL3V0aWwvQ29tcG9uZW50RmFjdG9yeScpO1xuICAgIHZhciBqcXVlcnlfZXZlbnRMaXN0ZW5lcl8xID0gcmVxdWlyZSgnLi4vcGx1Z2luL2pxdWVyeS5ldmVudExpc3RlbmVyJyk7XG4gICAgLyoqXG4gICAgICogVGhlIHt7I2Nyb3NzTGluayBcIkRPTUVsZW1lbnRcIn19e3svY3Jvc3NMaW5rfX0gY2xhc3MgaXMgdGhlIGJhc2UgdmlldyBjbGFzcyBmb3IgYWxsIG9iamVjdHMgdGhhdCBjYW4gYmUgcGxhY2VkIGludG8gdGhlIEhUTUwgRE9NLlxuICAgICAqXG4gICAgICogQGNsYXNzIERPTUVsZW1lbnRcbiAgICAgKiBAcGFyYW0gdHlwZSBbYW55PW51bGxdIEVpdGhlciBhIGpRdWVyeSBvYmplY3Qgb3IgSmF2YVNjcmlwdCB0ZW1wbGF0ZSBzdHJpbmcgcmVmZXJlbmNlIHlvdSB3YW50IHRvIHVzZSBhcyB0aGUgdmlldy4gQ2hlY2sgb3V0IHRoZSBleGFtcGxlcyBiZWxvdy5cbiAgICAgKiBAcGFyYW0gcGFyYW1zIFthbnk9bnVsbF0gQW55IGRhdGEgeW91IHdvdWxkIGxpa2UgdG8gcGFzcyBpbnRvIHRoZSBqUXVlcnkgZWxlbWVudCBvciB0ZW1wbGF0ZSB0aGF0IGlzIGJlaW5nIGNyZWF0ZWQuXG4gICAgICogQGV4dGVuZHMgRGlzcGxheU9iamVjdENvbnRhaW5lclxuICAgICAqIEBtb2R1bGUgU3RydWN0dXJlSlNcbiAgICAgKiBAc3VibW9kdWxlIHZpZXdcbiAgICAgKiBAcmVxdWlyZXMgRXh0ZW5kXG4gICAgICogQHJlcXVpcmVzIERpc3BsYXlPYmplY3RDb250YWluZXJcbiAgICAgKiBAcmVxdWlyZXMgQmFzZUV2ZW50XG4gICAgICogQHJlcXVpcmVzIFRlbXBsYXRlRmFjdG9yeVxuICAgICAqIEByZXF1aXJlcyBDb21wb25lbnRGYWN0b3J5XG4gICAgICogQHJlcXVpcmVzIGpRdWVyeVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBhdXRob3IgUm9iZXJ0IFMuICh3d3cuY29kZUJlbHQuY29tKVxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIC8vIEV4YW1wbGU6IFVzaW5nIERPTUVsZW1lbnQgd2l0aG91dCBleHRlbmRpbmcgaXQuXG4gICAgICogICAgIGxldCBhTGluayA9IG5ldyBET01FbGVtZW50KCdhJywge3RleHQ6ICdHb29nbGUnLCBocmVmOiAnaHR0cDovL3d3dy5nb29nbGUuY29tJywgJ2NsYXNzJzogJ2V4dGVybmFsTGluayd9KTtcbiAgICAgKiAgICAgdGhpcy5hZGRDaGlsZChhTGluayk7XG4gICAgICpcbiAgICAgKiAgICAgLy8gRXhhbXBsZTogQSB2aWV3IHBhc3NpbmcgaW4gYSBqUXVlcnkgb2JqZWN0LlxuICAgICAqICAgICBsZXQgdmlldyA9IG5ldyBDdXN0b21WaWV3KCQoJy5zZWxlY3RvcicpKTtcbiAgICAgKiAgICAgdGhpcy5hZGRDaGlsZCh2aWV3KTtcbiAgICAgKlxuICAgICAqICAgICAvLyBFeGFtcGxlOiBBIHZpZXcgZXh0ZW5kaW5nIERPTUVsZW1lbnQgd2hpbGUgcGFzc2luZyBpbiBhIGpRdWVyeSBvYmplY3QuXG4gICAgICogICAgIGNsYXNzIENsYXNzTmFtZSBleHRlbmRzIERPTUVsZW1lbnQge1xuICAgICAqXG4gICAgICogICAgICAgICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgKiAgICAgICAgICAgICAgc3VwZXIoJGVsZW1lbnQpO1xuICAgICAqICAgICAgICAgIH1cbiAgICAgKlxuICAgICAqICAgICAgICAgIGNyZWF0ZSgpIHtcbiAgICAgKiAgICAgICAgICAgICAgc3VwZXIuY3JlYXRlKCk7XG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgeW91ciBjaGlsZCBvYmplY3RzIHRvIHRoaXMgcGFyZW50IGNsYXNzLlxuICAgICAqICAgICAgICAgIH1cbiAgICAgKlxuICAgICAqICAgICAgICAgIGVuYWJsZSgpIHtcbiAgICAgKiAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkID09PSB0cnVlKSB7IHJldHVybjsgfVxuICAgICAqXG4gICAgICogICAgICAgICAgICAgIC8vIEVuYWJsZSB0aGUgY2hpbGQgb2JqZWN0cyBhbmQgYWRkIGFueSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICAgc3VwZXIuZW5hYmxlKCk7XG4gICAgICogICAgICAgICAgfVxuICAgICAqXG4gICAgICogICAgICAgICAgZGlzYWJsZSgpIHtcbiAgICAgKiAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkID09PSBmYWxzZSkgeyByZXR1cm47IH1cbiAgICAgKlxuICAgICAqICAgICAgICAgICAgICAvLyBEaXNhYmxlIHRoZSBjaGlsZCBvYmplY3RzIGFuZCByZW1vdmUgYW55IGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqICAgICAgICAgICAgICBzdXBlci5kaXNhYmxlKCk7XG4gICAgICogICAgICAgICAgfVxuICAgICAqXG4gICAgICogICAgICAgICAgbGF5b3V0KCkge1xuICAgICAqICAgICAgICAgICAgICAvLyBMYXlvdXQgb3IgdXBkYXRlIHRoZSBjaGlsZCBvYmplY3RzIGluIHRoaXMgcGFyZW50IGNsYXNzLlxuICAgICAqICAgICAgICAgIH1cbiAgICAgKlxuICAgICAqICAgICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICogICAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAqXG4gICAgICogICAgICAgICAgICAgIC8vIERlc3Ryb3kgdGhlIGNoaWxkIG9iamVjdHMgYW5kIHJlZmVyZW5jZXMgaW4gdGhpcyBwYXJlbnQgY2xhc3MgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuXG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAqICAgICAgICAgIH1cbiAgICAgKlxuICAgICAqICAgICB9XG4gICAgICpcbiAgICAgKiAgICAgLy8gRXhhbXBsZTogQSB2aWV3IGV4dGVuZGluZyBET01FbGVtZW50IHdpdGggYSBwcmVjb21waWxlZCBKYXZhU2NyaXB0IHRlbXBsYXRlIHJlZmVyZW5jZSBwYXNzZWQgaW4uXG4gICAgICogICAgIGNsYXNzIENsYXNzTmFtZSBleHRlbmRzIERPTUVsZW1lbnQge1xuICAgICAqXG4gICAgICogICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICogICAgICAgICAgICAgIF9zdXBlcigpO1xuICAgICAqICAgICAgICAgIH1cbiAgICAgKlxuICAgICAqICAgICAgICAgIGNyZWF0ZSgpIHtcbiAgICAgKiAgICAgICAgICAgICAgc3VwZXIuY3JlYXRlKCd0ZW1wbGF0ZXMvaG9tZS9ob21lVGVtcGxhdGUnLCB7ZGF0YTogJ3NvbWUgZGF0YSd9KTtcbiAgICAgKlxuICAgICAqICAgICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCB5b3VyIGNoaWxkIG9iamVjdHMgdG8gdGhpcyBwYXJlbnQgY2xhc3MuXG4gICAgICogICAgICAgICAgfVxuICAgICAqXG4gICAgICogICAgICAgICAgZW5hYmxlKCkge1xuICAgICAqICAgICAgICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQgPT09IHRydWUpIHsgcmV0dXJuOyB9XG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICAgLy8gRW5hYmxlIHRoZSBjaGlsZCBvYmplY3RzIGFuZCBhZGQgYW55IGV2ZW50IGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqICAgICAgICAgICAgICBzdXBlci5lbmFibGUoKTtcbiAgICAgKiAgICAgICAgICB9XG4gICAgICpcbiAgICAgKiAgICAgICAgICBkaXNhYmxlKCkge1xuICAgICAqICAgICAgICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQgPT09IGZhbHNlKSB7IHJldHVybjsgfVxuICAgICAqXG4gICAgICogICAgICAgICAgICAgIC8vIERpc2FibGUgdGhlIGNoaWxkIG9iamVjdHMgYW5kIHJlbW92ZSBhbnkgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogICAgICAgICAgICAgIHN1cGVyLmRpc2FibGUoKTtcbiAgICAgKiAgICAgICAgICB9XG4gICAgICpcbiAgICAgKiAgICAgICAgICBsYXlvdXQoKSB7XG4gICAgICogICAgICAgICAgICAgIC8vIExheW91dCBvciB1cGRhdGUgdGhlIGNoaWxkIG9iamVjdHMgaW4gdGhpcyBwYXJlbnQgY2xhc3MuXG4gICAgICogICAgICAgICAgfVxuICAgICAqXG4gICAgICogICAgICAgICAgZGVzdHJveSgpIHtcbiAgICAgKiAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICAgLy8gRGVzdHJveSB0aGUgY2hpbGQgb2JqZWN0cyBhbmQgcmVmZXJlbmNlcyBpbiB0aGlzIHBhcmVudCBjbGFzcyB0byBwcmVwYXJlIGZvciBnYXJiYWdlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAqICAgICAgICAgIH1cbiAgICAgKlxuICAgICAqICAgICB9XG4gICAgICovXG4gICAgdmFyIERPTUVsZW1lbnQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoRE9NRWxlbWVudCwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gRE9NRWxlbWVudCh0eXBlLCBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSB2b2lkIDApIHsgdHlwZSA9IG51bGw7IH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSBudWxsOyB9XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVHJhY2tzIG51bWJlciBvZiB0aW1lcyBhbiBlbGVtZW50J3Mgd2lkdGggaGFzIGJlZW4gY2hlY2tlZFxuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIHRoZSBlbGVtZW50IGhhcyBiZWVuIGFkZGVkXG4gICAgICAgICAgICAgKiB0byB0aGUgRE9NLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBjaGVja0NvdW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ291bnQgPSAwO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGNhY2hlZCByZWZlcmVuY2UgdG8gdGhlIERPTSBFbGVtZW50XG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGVsZW1lbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQSBjYWNoZWQgcmVmZXJlbmNlIHRvIHRoZSBqUXVlcnkgRE9NIGVsZW1lbnRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgJGVsZW1lbnRcbiAgICAgICAgICAgICAqIEB0eXBlIHtKUXVlcnl9XG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiBhIGpRdWVyeSBvYmplY3Qgd2FzIHBhc3NlZCBpbnRvIHRoZSBjb25zdHJ1Y3RvciB0aGlzIHdpbGwgYmUgc2V0IGFzIHRydWUgYW5kXG4gICAgICAgICAgICAgKiB0aGlzIGNsYXNzIHdpbGwgbm90IHRyeSB0byBhZGQgdGhlIHZpZXcgdG8gdGhlIERPTSBzaW5jZSBpdCBhbHJlYWR5IGV4aXN0cy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgX2lzUmVmZXJlbmNlXG4gICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5faXNSZWZlcmVuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSG9sZHMgb250byB0aGUgdmFsdWUgcGFzc2VkIGludG8gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBfdHlwZVxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5fdHlwZSA9IG51bGw7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEhvbGRzIG9udG8gdGhlIHZhbHVlIHBhc3NlZCBpbnRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgX3BhcmFtc1xuICAgICAgICAgICAgICogQHR5cGUge2FueX1cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5fcGFyYW1zID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0eXBlIGluc3RhbmNlb2YganF1ZXJ5X2V2ZW50TGlzdGVuZXJfMS5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IHR5cGU7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1JlZmVyZW5jZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY3JlYXRlIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIHByb3ZpZGUgYSBjb25zaXN0ZW50IHBsYWNlIGZvciB0aGUgY3JlYXRpb24gYW5kIGFkZGluZ1xuICAgICAgICAgKiBvZiBjaGlsZHJlbiB0byB0aGUgdmlldy4gSXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNhbGxlZCB0aGUgZmlyc3QgdGltZSB0aGF0IHRoZSB2aWV3IGlzIGFkZGVkXG4gICAgICAgICAqIHRvIGFub3RoZXIgRGlzcGxheU9iamVjdENvbnRhaW5lci4gSXQgaXMgY3JpdGljYWwgdGhhdCBhbGwgc3ViY2xhc3NlcyBjYWxsIHRoZSBzdXBlciBmb3IgdGhpcyBmdW5jdGlvbiBpblxuICAgICAgICAgKiB0aGVpciBvdmVycmlkZGVuIG1ldGhvZHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIG9uY2Ugd2hlbiB0aGUgY2hpbGQgdmlldyBpcyBhZGRlZCB0byBhbm90aGVyIHZpZXcuIElmIHRoZSBjaGlsZCB2aWV3IGlzIHJlbW92ZWRcbiAgICAgICAgICogYW5kIGFkZGVkIHRvIGFub3RoZXIgdmlldyB0aGUgY3JlYXRlIG1ldGhvZCB3aWxsIG5vdCBiZSBjYWxsZWQgYWdhaW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIFtzdHJpbmc9ZGl2XSBUaGUgSFRNTCB0YWcgeW91IHdhbnQgdG8gY3JlYXRlIG9yIHRoZSBpZC9jbGFzcyBzZWxlY3RvciBvZiB0aGUgdGVtcGxhdGUgb3IgdGhlIHByZS1jb21waWxlZCBwYXRoIHRvIGEgdGVtcGxhdGUuXG4gICAgICAgICAqIEBwYXJhbSBwYXJhbXMgW2FueT1udWxsXSBBbnkgZGF0YSB5b3Ugd291bGQgbGlrZSB0byBwYXNzIGludG8gdGhlIGpRdWVyeSBlbGVtZW50IG9yIHRlbXBsYXRlIHRoYXQgaXMgYmVpbmcgY3JlYXRlZC5cbiAgICAgICAgICogQHJldHVybnMge2FueX0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBpdHNlbGYuXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGNoYWluYWJsZVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgLy8gRVhBTVBMRSAxOiBCeSBkZWZhdWx0IHlvdXIgdmlldyBjbGFzcyB3aWxsIGJlIGEgZGl2IGVsZW1lbnQ6XG4gICAgICAgICAqICAgICBjcmVhdGUoKSB7XG4gICAgICAgICAqICAgICAgICAgIHN1cGVyLmNyZWF0ZSgpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgICB0aGlzLl9jaGlsZEluc3RhbmNlID0gbmV3IERPTUVsZW1lbnQoKTtcbiAgICAgICAgICogICAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9jaGlsZEluc3RhbmNlKTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIEVYQU1QTEUgMjogQnV0IGxldHMgc2F5IHlvdSB3YW50ZWQgdGhlIHZpZXcgdG8gYmUgYSB1bCBlbGVtZW50OlxuICAgICAgICAgKiAgICAgY3JlYXRlKCkge1xuICAgICAgICAgKiAgICAgICAgICBzdXBlci5jcmVhdGUoJ3VsJyk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBUaGVuIHlvdSBjb3VsZCBuZXN0IG90aGVyIGVsZW1lbnRzIGluc2lkZSB0aGlzIGJhc2Ugdmlldy9lbGVtZW50LlxuICAgICAgICAgKiAgICAgY3JlYXRlKCkge1xuICAgICAgICAgKiAgICAgICAgICBzdXBlci5jcmVhdGUoJ3VsJywge2lkOiAnbXlJZCcsICdjbGFzcyc6ICdteUNsYXNzIGFub3RoZXJDbGFzcyd9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAgbGV0IGxpID0gbmV3IERPTUVsZW1lbnQoJ2xpJywge3RleHQ6ICdSb2JlcnQgaXMgY29vbCd9KTtcbiAgICAgICAgICogICAgICAgICAgdGhpcy5hZGRDaGlsZChsaSk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBFWEFNUExFIDM6IFNvIHRoYXQncyBjb29sIGJ1dCB3aGF0IGlmIHlvdSB3YW50ZWQgYSBibG9jayBvZiBodG1sIHRvIGJlIHlvdXIgdmlldy4gTGV0J3Mgc2F5IHlvdSBoYWQgdGhlIGJlbG93XG4gICAgICAgICAqICAgICAvLyBpbmxpbmUgSGFuZGxlYmFyIHRlbXBsYXRlIGluIHlvdXIgaHRtbCBmaWxlLlxuICAgICAgICAgKiAgICAgPHNjcmlwdCBpZD1cInRvZG9UZW1wbGF0ZVwiIHR5cGU9XCJ0ZXh0L3RlbXBsYXRlXCI+XG4gICAgICAgICAqICAgICAgICAgIDxkaXYgaWQ9XCJodG1sVGVtcGxhdGVcIiBjbGFzcz1cImpzLXRvZG9cIj5cbiAgICAgICAgICogICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJsaXN0LWlucHV0XCIgcGxhY2Vob2xkZXI9XCJ7eyBkYXRhLnRleHQgfX1cIj5cbiAgICAgICAgICogICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlzdC1pdGVtLXN1Ym1pdFwiIHZhbHVlPVwiQWRkXCI+XG4gICAgICAgICAqICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICogICAgICAgICAgPC9kaXY+XG4gICAgICAgICAqICAgICA8L3NjcmlwdD5cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIFlvdSB3b3VsZCBqdXN0IHBhc3MgaW4gdGhlIGlkIG9yIGNsYXNzIHNlbGVjdG9yIG9mIHRoZSB0ZW1wbGF0ZSB3aGljaCBpbiB0aGlzIGNhc2UgaXMgXCIjdG9kb1RlbXBsYXRlXCIuXG4gICAgICAgICAqICAgICAvLyBUaGVyZSBpcyBhIHNlY29uZCBvcHRpb25hbCBhcmd1bWVudCB3aGVyZSB5b3UgY2FuIHBhc3MgZGF0YSBmb3IgdGhlIEhhbmRsZWJhciB0ZW1wbGF0ZSB0byB1c2UuXG4gICAgICAgICAqICAgICBjcmVhdGUoKSB7XG4gICAgICAgICAqICAgICAgICAgIHN1cGVyLmNyZWF0ZSgnI3RvZG9UZW1wbGF0ZScsIHsgZGF0YTogdGhpcy52aWV3RGF0YSB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIEVYQU1QTEUgNDogT3IgbWF5YmUgeW91J3JlIHVzaW5nIGdydW50LWNvbnRyaWItaGFuZGxlYmFycywgb3Igc2ltaWxhciwgdG8gcHJlY29tcGlsZSBoYnMgdGVtcGxhdGVzXG4gICAgICAgICAqICAgICBjcmVhdGUoKSB7XG4gICAgICAgICAqICAgICAgICAgIHN1cGVyLmNyZWF0ZSgndGVtcGxhdGVzL0hvbWVUZW1wbGF0ZScsIHtkYXRhOiBcInNvbWUgZGF0YVwifSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqL1xuICAgICAgICBET01FbGVtZW50LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAodHlwZSwgcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSAnZGl2JzsgfVxuICAgICAgICAgICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IG51bGw7IH1cbiAgICAgICAgICAgIC8vIFVzZSB0aGUgZGF0YSBwYXNzZWQgaW50byB0aGUgY29uc3RydWN0b3IgZmlyc3QgZWxzZSB1c2UgdGhlIGFyZ3VtZW50cyBmcm9tIGNyZWF0ZS5cbiAgICAgICAgICAgIHR5cGUgPSB0aGlzLl90eXBlIHx8IHR5cGU7XG4gICAgICAgICAgICBwYXJhbXMgPSB0aGlzLl9wYXJhbXMgfHwgcGFyYW1zO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDcmVhdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbJyArIHRoaXMuZ2V0UXVhbGlmaWVkQ2xhc3NOYW1lKCkgKyAnXSBZb3UgY2Fubm90IGNhbGwgdGhlIGNyZWF0ZSBtZXRob2QgbWFudWFsbHkuIEl0IGlzIG9ubHkgY2FsbGVkIG9uY2UgYXV0b21hdGljYWxseSBkdXJpbmcgdGhlIHZpZXcgbGlmZWN5Y2xlIGFuZCBzaG91bGQgb25seSBiZSBjYWxsZWQgb25jZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLiRlbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgaHRtbF8xID0gVGVtcGxhdGVGYWN0b3J5XzEuZGVmYXVsdC5jcmVhdGUodHlwZSwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAoaHRtbF8xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSBqcXVlcnlfZXZlbnRMaXN0ZW5lcl8xLmRlZmF1bHQoaHRtbF8xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSBqcXVlcnlfZXZlbnRMaXN0ZW5lcl8xLmRlZmF1bHQoXCI8XCIgKyB0eXBlICsgXCIvPlwiLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuJGVsZW1lbnRbMF07XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLiRlbGVtZW50LmhlaWdodCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQG92ZXJyaWRkZW4gRGlzcGxheU9iamVjdENvbnRhaW5lci5hZGRDaGlsZFxuICAgICAgICAgKiBAbWV0aG9kIGFkZENoaWxkXG4gICAgICAgICAqIEBwYXJhbSBjaGlsZCB7RE9NRWxlbWVudH0gVGhlIERPTUVsZW1lbnQgaW5zdGFuY2UgdG8gYWRkIGFzIGEgY2hpbGQgb2YgdGhpcyBvYmplY3QgaW5zdGFuY2UuXG4gICAgICAgICAqIEByZXR1cm5zIHthbnl9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgaXRzZWxmLlxuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICB0aGlzLmFkZENoaWxkKGRvbUVsZW1lbnRJbnN0YW5jZSk7XG4gICAgICAgICAqL1xuICAgICAgICBET01FbGVtZW50LnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWycgKyB0aGlzLmdldFF1YWxpZmllZENsYXNzTmFtZSgpICsgJ10gWW91IGNhbm5vdCB1c2UgdGhlIGFkZENoaWxkIG1ldGhvZCBpZiB0aGUgcGFyZW50IG9iamVjdCBpcyBub3QgYWRkZWQgdG8gdGhlIERPTS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuYWRkQ2hpbGQuY2FsbCh0aGlzLCBjaGlsZCk7XG4gICAgICAgICAgICAvLyBJZiBhbiBlbXB0eSBqUXVlcnkgb2JqZWN0IGlzIHBhc3NlZCBpbnRvIHRoZSBjb25zdHJ1Y3RvciB0aGVuIGRvbid0IHJ1biB0aGUgY29kZSBiZWxvdy5cbiAgICAgICAgICAgIGlmIChjaGlsZC5faXNSZWZlcmVuY2UgPT09IHRydWUgJiYgY2hpbGQuJGVsZW1lbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGQuaXNDcmVhdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmNyZWF0ZSgpOyAvLyBSZW5kZXIgdGhlIGl0ZW0gYmVmb3JlIGFkZGluZyB0byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgY2hpbGQuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBjaGlsZCBvYmplY3QgaXMgbm90IGEgcmVmZXJlbmNlIG9mIGEgalF1ZXJ5IG9iamVjdCBpbiB0aGUgRE9NIHRoZW4gYXBwZW5kIGl0LlxuICAgICAgICAgICAgaWYgKGNoaWxkLl9pc1JlZmVyZW5jZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFwcGVuZChjaGlsZC4kZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9vbkFkZGVkVG9Eb20oY2hpbGQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRzIHRoZSBzanNJZCB0byB0aGUgRE9NIGVsZW1lbnQgc28gd2UgY2FuIGtub3cgd2hhdCB3aGF0IENsYXNzIG9iamVjdCB0aGUgSFRNTEVsZW1lbnQgYmVsb25ncyB0b28uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgX2FkZENsaWVudFNpZGVJZFxuICAgICAgICAgKiBAcGFyYW0gY2hpbGQge0RPTUVsZW1lbnR9IFRoZSBET01FbGVtZW50IGluc3RhbmNlIHRvIGFkZCB0aGUgc2pzSWQgdG9vLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBET01FbGVtZW50LnByb3RvdHlwZS5fYWRkQ2xpZW50U2lkZUlkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGNoaWxkLiRlbGVtZW50LmF0dHIoJ2RhdGEtc2pzLXR5cGUnKTtcbiAgICAgICAgICAgIHZhciBpZCA9IGNoaWxkLiRlbGVtZW50LmF0dHIoJ2RhdGEtc2pzLWlkJyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFrZSB0aGVtIGFycmF5J3Mgc28gdGhlIGpvaW4gbWV0aG9kIHdpbGwgd29yay5cbiAgICAgICAgICAgICAgICB0eXBlID0gW2NoaWxkLmdldFF1YWxpZmllZENsYXNzTmFtZSgpXTtcbiAgICAgICAgICAgICAgICBpZCA9IFtjaGlsZC5zanNJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTcGxpdCB0aGVtIHNvIHdlIGNhbiBwdXNoL2FkZCB0aGUgbmV3IHZhbHVlcy5cbiAgICAgICAgICAgICAgICB0eXBlID0gdHlwZS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGlkID0gaWQuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICB0eXBlLnB1c2goY2hpbGQuZ2V0UXVhbGlmaWVkQ2xhc3NOYW1lKCkpO1xuICAgICAgICAgICAgICAgIGlkLnB1c2goY2hpbGQuc2pzSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXBkYXRlZCBsaXN0IG9mIGlkJ3MgYW5kIHR5cGVzXG4gICAgICAgICAgICBjaGlsZC4kZWxlbWVudC5hdHRyKCdkYXRhLXNqcy1pZCcsIGlkLmpvaW4oJywnKSk7XG4gICAgICAgICAgICBjaGlsZC4kZWxlbWVudC5hdHRyKCdkYXRhLXNqcy10eXBlJywgdHlwZS5qb2luKCcsJykpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyB0aGUgc2pzSWQgYW5kIGNsYXNzIHR5cGUgZnJvbSB0aGUgSFRNTEVsZW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgX3JlbW92ZUNsaWVudFNpZGVJZFxuICAgICAgICAgKiBAcGFyYW0gY2hpbGQge0RPTUVsZW1lbnR9IFRoZSBET01FbGVtZW50IGluc3RhbmNlIHRvIGFkZCB0aGUgc2pzSWQgdG9vLlxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBET01FbGVtZW50LnByb3RvdHlwZS5fcmVtb3ZlQ2xpZW50U2lkZUlkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGNoaWxkLiRlbGVtZW50LmF0dHIoJ2RhdGEtc2pzLXR5cGUnKTtcbiAgICAgICAgICAgIHZhciBpZCA9IGNoaWxkLiRlbGVtZW50LmF0dHIoJ2RhdGEtc2pzLWlkJyk7XG4gICAgICAgICAgICAvLyBTcGxpdCB0aGVtIHNvIHdlIGNhbiByZW1vdmUgdGhlIGNoaWxkIHNqc0lkIGFuZCB0eXBlLlxuICAgICAgICAgICAgdmFyIHR5cGVMaXN0ID0gdHlwZS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgdmFyIGlkTGlzdCA9IGlkLnNwbGl0KCcsJykubWFwKE51bWJlcik7IC8vIENvbnZlcnQgZWFjaCBpdGVtIGludG8gYSBudW1iZXIuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBpZExpc3QuaW5kZXhPZihjaGlsZC5zanNJZCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaWQgYW5kIHR5cGUgZnJvbSB0aGUgYXJyYXkuXG4gICAgICAgICAgICAgICAgdHlwZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBpZExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGVkIGxpc3Qgb2YgaWQncyBhbmQgdHlwZXNcbiAgICAgICAgICAgICAgICBjaGlsZC4kZWxlbWVudC5hdHRyKCdkYXRhLXNqcy10eXBlJywgdHlwZUxpc3Quam9pbignLCcpKTtcbiAgICAgICAgICAgICAgICBjaGlsZC4kZWxlbWVudC5hdHRyKCdkYXRhLXNqcy1pZCcsIGlkTGlzdC5qb2luKCcsJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlkTGlzdC5sZW5ndGggPT09IDA7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgY2hpbGQgb2JqZWN0IGlzIGFkZGVkIHRvIHRoZSBET00uXG4gICAgICAgICAqIFRoZSBtZXRob2Qgd2lsbCBjYWxsIHt7I2Nyb3NzTGluayBcIkRPTUVsZW1lbnQvbGF5b3V0Om1ldGhvZFwifX17ey9jcm9zc0xpbmt9fSBhbmQgZGlzcGF0Y2ggdGhlIEJhc2VFdmVudC5BRERFRF9UT19TVEFHRSBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBfb25BZGRlZFRvRG9tXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIERPTUVsZW1lbnQucHJvdG90eXBlLl9vbkFkZGVkVG9Eb20gPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBjaGlsZC5jaGVja0NvdW50Kys7XG4gICAgICAgICAgICBpZiAoY2hpbGQuJGVsZW1lbnQud2lkdGgoKSA9PT0gMCAmJiBjaGlsZC5jaGVja0NvdW50IDwgNSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fb25BZGRlZFRvRG9tKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FkZENsaWVudFNpZGVJZChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC53aWR0aCA9IGNoaWxkLiRlbGVtZW50LndpZHRoKCk7XG4gICAgICAgICAgICBjaGlsZC5oZWlnaHQgPSBjaGlsZC4kZWxlbWVudC5oZWlnaHQoKTtcbiAgICAgICAgICAgIGNoaWxkLnNldFNpemUoY2hpbGQud2lkdGgsIGNoaWxkLmhlaWdodCk7XG4gICAgICAgICAgICBjaGlsZC5lbmFibGUoKTtcbiAgICAgICAgICAgIGNoaWxkLmxheW91dCgpO1xuICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudChuZXcgQmFzZUV2ZW50XzEuZGVmYXVsdChCYXNlRXZlbnRfMS5kZWZhdWx0LkFEREVEX1RPX1NUQUdFKSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAb3ZlcnJpZGRlbiBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLmFkZENoaWxkQXRcbiAgICAgICAgICovXG4gICAgICAgIERPTUVsZW1lbnQucHJvdG90eXBlLmFkZENoaWxkQXQgPSBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCk7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgLy8gSWYgYW4gZW1wdHkgalF1ZXJ5IG9iamVjdCBpcyBwYXNzZWQgaW50byB0aGUgY29uc3RydWN0b3IgdGhlbiBkb24ndCBydW4gdGhlIGNvZGUgYmVsb3cuXG4gICAgICAgICAgICBpZiAoY2hpbGQuX2lzUmVmZXJlbmNlID09PSB0cnVlICYmIGNoaWxkLiRlbGVtZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgaW5kZXggcGFzc2VkIGluIGlzIGxlc3MgdGhhbiAwIGFuZCBncmVhdGVyIHRoYW4gdGhlIHRvdGFsIG51bWJlciBvZiBjaGlsZHJlbiB0aGVuIHBsYWNlIHRoZSBpdGVtIGF0IHRoZSBlbmQuXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBFbHNlIGdldCB0aGUgY2hpbGQgaW4gdGhlIGNoaWxkcmVuIGFycmF5IGJ5IHRoZSBpbmRleCBwYXNzZWQgaW4gYW5kIHBsYWNlIHRoZSBpdGVtIGJlZm9yZSB0aGF0IGNoaWxkLlxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5pc0NyZWF0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmNyZWF0ZSgpOyAvLyBSZW5kZXIgdGhlIGl0ZW0gYmVmb3JlIGFkZGluZyB0byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZHMgdGhlIGNoaWxkIGF0IGEgc3BlY2lmaWMgaW5kZXggYnV0IGFsc28gd2lsbCByZW1vdmUgdGhlIGNoaWxkIGZyb20gYW5vdGhlciBwYXJlbnQgb2JqZWN0IGlmIG9uZSBleGlzdHMuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTtcbiAgICAgICAgICAgICAgICB0aGlzLm51bUNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgICAgICAvLyBBZGRzIHRoZSBjaGlsZCBiZWZvcmUgYW55IGNoaWxkIGFscmVhZHkgYWRkZWQgaW4gdGhlIERPTS5cbiAgICAgICAgICAgICAgICBqcXVlcnlfZXZlbnRMaXN0ZW5lcl8xLmRlZmF1bHQoY2hpbGRyZW4uZ2V0KGluZGV4KSkuYmVmb3JlKGNoaWxkLiRlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkFkZGVkVG9Eb20oY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAb3ZlcnJpZGRlbiBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnN3YXBDaGlsZHJlblxuICAgICAgICAgKi9cbiAgICAgICAgRE9NRWxlbWVudC5wcm90b3R5cGUuc3dhcENoaWxkcmVuID0gZnVuY3Rpb24gKGNoaWxkMSwgY2hpbGQyKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQxSW5kZXggPSBjaGlsZDEuJGVsZW1lbnQuaW5kZXgoKTtcbiAgICAgICAgICAgIHZhciBjaGlsZDJJbmRleCA9IGNoaWxkMi4kZWxlbWVudC5pbmRleCgpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZEF0KGNoaWxkMSwgY2hpbGQySW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZEF0KGNoaWxkMiwgY2hpbGQxSW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAb3ZlcnJpZGRlbiBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLmdldENoaWxkQXRcbiAgICAgICAgICovXG4gICAgICAgIERPTUVsZW1lbnQucHJvdG90eXBlLmdldENoaWxkQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLmdldENoaWxkQXQuY2FsbCh0aGlzLCBpbmRleCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgRE9NRWxlbWVudCBvYmplY3Qgd2l0aCB0aGUgZmlyc3QgZm91bmQgRE9NIGVsZW1lbnQgYnkgdGhlIHBhc3NlZCBpbiBzZWxlY3Rvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBnZXRDaGlsZFxuICAgICAgICAgKiBAcGFyYW0gc2VsZWN0b3Ige3N0cmluZ30gRE9NIGlkIG5hbWUsIERPTSBjbGFzcyBuYW1lIG9yIGEgRE9NIHRhZyBuYW1lLlxuICAgICAgICAgKiBAcmV0dXJucyB7RE9NRWxlbWVudH1cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgRE9NRWxlbWVudC5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIC8vIEdldCB0aGUgZmlyc3QgbWF0Y2ggZnJvbSB0aGUgc2VsZWN0b3IgcGFzc2VkIGluLlxuICAgICAgICAgICAgdmFyIGpRdWVyeUVsZW1lbnQgPSB0aGlzLiRlbGVtZW50LmZpbmQoc2VsZWN0b3IpLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoalF1ZXJ5RWxlbWVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdbJyArIHRoaXMuZ2V0UXVhbGlmaWVkQ2xhc3NOYW1lKCkgKyAnXSBnZXRDaGlsZCgnICsgc2VsZWN0b3IgKyAnKSBDYW5ub3QgZmluZCBET00gJGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBoYXMgYSBzanNJZCB2YWx1ZSBhbmQgaXMgYSBjaGlsZCBvZiB0aGlzIHBhcmVudCBvYmplY3QuXG4gICAgICAgICAgICB2YXIgc2pzSWQgPSBwYXJzZUludChqUXVlcnlFbGVtZW50LmF0dHIoJ2RhdGEtc2pzLWlkJykpO1xuICAgICAgICAgICAgdmFyIGRvbUVsZW1lbnQgPSB0aGlzLmdldENoaWxkQnlDaWQoc2pzSWQpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIERPTUVsZW1lbnQgZnJvbSB0aGUgalF1ZXJ5RWxlbWVudC5cbiAgICAgICAgICAgIGlmIChkb21FbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgRE9NRWxlbWVudCBhbmQgYXNzaWduIHRoZSBqUXVlcnkgZWxlbWVudCB0byBpdC5cbiAgICAgICAgICAgICAgICBkb21FbGVtZW50ID0gbmV3IERPTUVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LiRlbGVtZW50ID0galF1ZXJ5RWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRDbGllbnRTaWRlSWQoZG9tRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5lbGVtZW50ID0galF1ZXJ5RWxlbWVudFswXTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LmlzQ3JlYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gQWRkZWQgdG8gdGhlIHN1cGVyIGFkZENoaWxkIG1ldGhvZCBiZWNhdXNlIHdlIGRvbid0IG5lZWQgdG8gYXBwZW5kIHRoZSBlbGVtZW50IHRvIHRoZSBET00uXG4gICAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCBpdCBhbHJlYWR5IGV4aXN0cyBhbmQgd2UgYXJlIGp1c3QgZ2V0dGluZyBhIHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5hZGRDaGlsZC5jYWxsKHRoaXMsIGRvbUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbUVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGFsbCB0aGUgSFRNTCBlbGVtZW50cyBjaGlsZHJlbiBvZiB0aGlzIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBnZXRDaGlsZHJlblxuICAgICAgICAgKiBAcGFyYW0gW3NlbGVjdG9yXSB7c3RyaW5nfSBZb3UgY2FuIHBhc3MgaW4gYW55IHR5cGUgb2YgalF1ZXJ5IHNlbGVjdG9yLiBJZiB0aGVyZSBpcyBubyBzZWxlY3RvciBwYXNzZWQgaW4gaXQgd2lsbCBnZXQgYWxsIHRoZSBjaGlsZHJlbiBvZiB0aGlzIHBhcmVudCBlbGVtZW50LlxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXkuPERPTUVsZW1lbnQ+fSBSZXR1cm5zIGEgbGlzdCBvZiBET01FbGVtZW50J3MuIEl0IHdpbGwgZ3JhYiBhbGwgY2hpbGRyZW4gSFRNTCBET00gZWxlbWVudHMgb2YgdGhpcyBvYmplY3QgYW5kIHdpbGwgY3JlYXRlIGEgRE9NRWxlbWVudCBmb3IgZWFjaCBET00gY2hpbGQuXG4gICAgICAgICAqIElmIHRoZSAnZGF0YS1zanMtaWQnIHByb3BlcnR5IGV4aXN0cyBpcyBvbiBhbiBIVE1MIGVsZW1lbnQgYSBET01FbGVtZW50IHdpbGwgbm90IGJlIGNyZWF0ZWQgZm9yIHRoYXQgZWxlbWVudCBiZWNhdXNlIGl0IHdpbGwgYmUgYXNzdW1lZCBpdCBhbHJlYWR5IGV4aXN0cyBhcyBhIERPTUVsZW1lbnQuXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICovXG4gICAgICAgIERPTUVsZW1lbnQucHJvdG90eXBlLmdldENoaWxkcmVuID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IgPT09IHZvaWQgMCkgeyBzZWxlY3RvciA9ICcnOyB9XG4gICAgICAgICAgICAvL1RPRE86IE1ha2Ugc3VyZSB0aGUgaW5kZXggb2YgdGhlIGNoaWxkcmVuIGFkZGVkIGlzIHRoZSBzYW1lIGFzIHRoZSB3aGF0IGlzIGluIHRoZSBhY3R1YWwgRE9NLlxuICAgICAgICAgICAgdmFyICRjaGlsZDtcbiAgICAgICAgICAgIHZhciBkb21FbGVtZW50O1xuICAgICAgICAgICAgdmFyICRsaXN0ID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihzZWxlY3Rvcik7XG4gICAgICAgICAgICB2YXIgbGlzdExlbmd0aCA9ICRsaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGlfMSA9IDA7IGlfMSA8IGxpc3RMZW5ndGg7IGlfMSsrKSB7XG4gICAgICAgICAgICAgICAgJGNoaWxkID0gJGxpc3QuZXEoaV8xKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgalF1ZXJ5IGVsZW1lbnQgYWxyZWFkeSBoYXMgc2pzSWQgZGF0YSBwcm9wZXJ0eSB0aGVuIGl0IG11c3QgYmUgYW4gZXhpc3RpbmcgRGlzcGxheU9iamVjdENvbnRhaW5lciAoRE9NRWxlbWVudCkgaW4gdGhlIGNoaWxkcmVuIGFycmF5LlxuICAgICAgICAgICAgICAgIGlmICgkY2hpbGQuYXR0cignZGF0YS1zanMtaWQnKSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBuZXcgRE9NRWxlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBkb21FbGVtZW50LiRlbGVtZW50ID0gJGNoaWxkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRDbGllbnRTaWRlSWQoZG9tRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQuZWxlbWVudCA9ICRjaGlsZC5nZXQoMCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkZWQgdG8gdGhlIHN1cGVyIGFkZENoaWxkIG1ldGhvZCBiZWNhdXNlIHdlIGRvbid0IG5lZWQgdG8gYXBwZW5kIHRoZSBlbGVtZW50IHRvIHRoZSBET00uXG4gICAgICAgICAgICAgICAgICAgIC8vIEF0IHRoaXMgcG9pbnQgaXQgYWxyZWFkeSBleGlzdHMgYW5kIHdlIGFyZSBqdXN0IGdldHRpbmcgYSByZWZlcmVuY2UgdG8gdGhlIERPTSBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmFkZENoaWxkLmNhbGwodGhpcywgZG9tRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgY2hpbGQgb2JqZWN0IGluc3RhbmNlIGZyb20gdGhlIGNoaWxkIGxpc3Qgb2YgdGhlIHBhcmVudCBvYmplY3QgaW5zdGFuY2UuXG4gICAgICAgICAqIFRoZSBwYXJlbnQgcHJvcGVydHkgb2YgdGhlIHJlbW92ZWQgY2hpbGQgaXMgc2V0IHRvIG51bGwgYW5kIHRoZSBvYmplY3QgaXMgZ2FyYmFnZSBjb2xsZWN0ZWQgaWYgdGhlcmUgYXJlIG5vIG90aGVyIHJlZmVyZW5jZXNcbiAgICAgICAgICogdG8gdGhlIGNoaWxkLiBUaGUgaW5kZXggcG9zaXRpb25zIG9mIGFueSBvYmplY3RzIGFib3ZlIHRoZSBjaGlsZCBpbiB0aGUgcGFyZW50IG9iamVjdCBhcmUgZGVjcmVhc2VkIGJ5IDEuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVtb3ZlQ2hpbGRcbiAgICAgICAgICogQHBhcmFtIGNoaWxkIHtET01FbGVtZW50fSBUaGUgRGlzcGxheU9iamVjdENvbnRhaW5lciBpbnN0YW5jZSB0byByZW1vdmUuXG4gICAgICAgICAqIEByZXR1cm5zIHthbnl9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgaXRzZWxmLlxuICAgICAgICAgKiBAb3ZlcnJpZGVcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqL1xuICAgICAgICBET01FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCwgZGVzdHJveSkge1xuICAgICAgICAgICAgaWYgKGRlc3Ryb3kgPT09IHZvaWQgMCkgeyBkZXN0cm95ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdmFyIHJlbW92ZSA9IHRoaXMuX3JlbW92ZUNsaWVudFNpZGVJZChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZC5kaXNhYmxlKCk7XG4gICAgICAgICAgICAvLyBDaGVja3MgaWYgZGVzdHJveSB3YXMgY2FsbGVkIGJlZm9yZSByZW1vdmVDaGlsZCBzbyBpdCBkb2Vzbid0IGVycm9yLlxuICAgICAgICAgICAgaWYgKHJlbW92ZSA9PT0gdHJ1ZSAmJiBjaGlsZC4kZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQuJGVsZW1lbnQudW5iaW5kKCk7XG4gICAgICAgICAgICAgICAgY2hpbGQuJGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGVzdHJveSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlQ2hpbGQuY2FsbCh0aGlzLCBjaGlsZCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGNoaWxkIGRpc3BsYXkgb2JqZWN0IGluc3RhbmNlIHRoYXQgZXhpc3RzIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVtb3ZlQ2hpbGRBdFxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgge2ludH0gVGhlIGluZGV4IHBvc2l0aW9uIG9mIHRoZSBjaGlsZCBvYmplY3QuXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGNoYWluYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgRE9NRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGRBdCA9IGZ1bmN0aW9uIChpbmRleCwgZGVzdHJveSkge1xuICAgICAgICAgICAgaWYgKGRlc3Ryb3kgPT09IHZvaWQgMCkgeyBkZXN0cm95ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmdldENoaWxkQXQoaW5kZXgpLCBkZXN0cm95KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBhbGwgY2hpbGQgb2JqZWN0IGluc3RhbmNlcyBmcm9tIHRoZSBjaGlsZCBsaXN0IG9mIHRoZSBwYXJlbnQgb2JqZWN0IGluc3RhbmNlLlxuICAgICAgICAgKiBUaGUgcGFyZW50IHByb3BlcnR5IG9mIHRoZSByZW1vdmVkIGNoaWxkcmVuIGlzIHNldCB0byBudWxsIGFuZCB0aGUgb2JqZWN0cyBhcmUgZ2FyYmFnZSBjb2xsZWN0ZWQgaWYgbm8gb3RoZXJcbiAgICAgICAgICogcmVmZXJlbmNlcyB0byB0aGUgY2hpbGRyZW4gZXhpc3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVtb3ZlQ2hpbGRyZW5cbiAgICAgICAgICogQHJldHVybnMge0RPTUVsZW1lbnR9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgaXRzZWxmLlxuICAgICAgICAgKiBAb3ZlcnJpZGVcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqL1xuICAgICAgICBET01FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZHJlbiA9IGZ1bmN0aW9uIChkZXN0cm95KSB7XG4gICAgICAgICAgICBpZiAoZGVzdHJveSA9PT0gdm9pZCAwKSB7IGRlc3Ryb3kgPSB0cnVlOyB9XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmNoaWxkcmVuLnBvcCgpLCBkZXN0cm95KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuZW1wdHkoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQG92ZXJyaWRkZW4gRGlzcGxheU9iamVjdENvbnRhaW5lci5kZXN0cm95XG4gICAgICAgICAqL1xuICAgICAgICBET01FbGVtZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTm90ZTogd2UgY2FuJ3QganVzdCBjYWxsIGRlc3Ryb3kgdG8gcmVtb3ZlIHRoZSBIVE1MRWxlbWVudCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyIHZpZXdzIG1hbmFnaW5nIHRoZSBzYW1lIEhUTUxFbGVtZW50LlxuICAgICAgICAgICAgLyppZiAodGhpcy4kZWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQudW5iaW5kKCk7XG4gICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgfSovXG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgd2F5IHRvIGluc3RhbnRpYXRlIHZpZXcgY2xhc3NlcyBieSBmb3VuZCBodG1sIHNlbGVjdG9ycy5cbiAgICAgICAgICpcbiAgICAgICAgICogRXhhbXBsZTogSXQgd2lsbCBmaW5kIGFsbCBjaGlsZHJlbiBlbGVtZW50cyBvZiB0aGUge3sjY3Jvc3NMaW5rIFwiRE9NRWxlbWVudC8kZWxlbWVudDpwcm9wZXJ0eVwifX17ey9jcm9zc0xpbmt9fSBwcm9wZXJ0eSB3aXRoIHRoZSAnanMtc2hhcmVFbWFpbCcgc2VsZWN0b3IuXG4gICAgICAgICAqIElmIGFueSBzZWxlY3RvcnMgYXJlIGZvdW5kIHRoZSBFbWFpbFNoYXJlQ29tcG9uZW50IGNsYXNzIHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBwYXNzIHRoZSBmb3VuZCBqUXVlcnkgZWxlbWVudCBpbnRvIHRoZSBjb250cnVjdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGNyZWF0ZUNvbXBvbmVudHNcbiAgICAgICAgICogQHBhcmFtIGNvbXBvbmVudExpc3QgKEFycmF5Ljx7IHNlbGVjdG9yOiBzdHJpbmc7IGNvbXBvbmVudDogRE9NRWxlbWVudCB9PlxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheS48RE9NRWxlbWVudD59IFJldHVybnMgYWxsIHRoZSBpdGVtcyBjcmVhdGVkIGZyb20gdGhpcyBjcmVhdGVDb21wb25lbnRzIG1ldGhvZC5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgY3JlYXRlKCkge1xuICAgICAgICAgKiAgICAgICAgICBzdXBlci5jcmVhdGUoKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICAgdGhpcy5jcmVhdGVDb21wb25lbnRzKFtcbiAgICAgICAgICogICAgICAgICAgICAgIHtzZWxlY3RvcjogJy5qcy1zaGFyZUVtYWlsJywgY29tcG9uZW50OiBFbWFpbFNoYXJlQ29tcG9uZW50fSxcbiAgICAgICAgICogICAgICAgICAgICAgIHtzZWxlY3RvcjogJy5qcy1wYWdpbmF0aW9uJywgY29tcG9uZW50OiBQYWdpbmF0aW9uQ29tcG9uZW50fSxcbiAgICAgICAgICogICAgICAgICAgICAgIHtzZWxlY3RvcjogJy5qcy1jYXJvdXNlbCcsIGNvbXBvbmVudDogQ2Fyb3VzZWxDb21wb25lbnR9XG4gICAgICAgICAqICAgICAgICAgIF0pO1xuICAgICAgICAgKiAgICAgIH1cbiAgICAgICAgICovXG4gICAgICAgIERPTUVsZW1lbnQucHJvdG90eXBlLmNyZWF0ZUNvbXBvbmVudHMgPSBmdW5jdGlvbiAoY29tcG9uZW50TGlzdCkge1xuICAgICAgICAgICAgdmFyIGxpc3Q7XG4gICAgICAgICAgICB2YXIgY3JlYXRlZENoaWxkcmVuID0gW107XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gY29tcG9uZW50TGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgb2JqO1xuICAgICAgICAgICAgZm9yICh2YXIgaV8yID0gMDsgaV8yIDwgbGVuZ3RoOyBpXzIrKykge1xuICAgICAgICAgICAgICAgIG9iaiA9IGNvbXBvbmVudExpc3RbaV8yXTtcbiAgICAgICAgICAgICAgICBsaXN0ID0gQ29tcG9uZW50RmFjdG9yeV8xLmRlZmF1bHQuY3JlYXRlKHRoaXMuJGVsZW1lbnQuZmluZChvYmouc2VsZWN0b3IpLCBvYmouY29tcG9uZW50LCB0aGlzKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVkQ2hpbGRyZW4gPSBjcmVhdGVkQ2hpbGRyZW4uY29uY2F0KGxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZWRDaGlsZHJlbjtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIERPTUVsZW1lbnQ7XG4gICAgfSkoRGlzcGxheU9iamVjdENvbnRhaW5lcl8xLmRlZmF1bHQpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBleHBvcnRzLmRlZmF1bHQgPSBET01FbGVtZW50O1xufSk7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciB2ID0gZmFjdG9yeShyZXF1aXJlLCBleHBvcnRzKTsgaWYgKHYgIT09IHVuZGVmaW5lZCkgbW9kdWxlLmV4cG9ydHMgPSB2O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICcuLi9ldmVudC9FdmVudERpc3BhdGNoZXInXSwgZmFjdG9yeSk7XG4gICAgfVxufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcbiAgICB2YXIgRXZlbnREaXNwYXRjaGVyXzEgPSByZXF1aXJlKCcuLi9ldmVudC9FdmVudERpc3BhdGNoZXInKTtcbiAgICAvKipcbiAgICAgKiBUaGUge3sjY3Jvc3NMaW5rIFwiRGlzcGxheU9iamVjdFwifX17ey9jcm9zc0xpbmt9fSBjbGFzcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIG9iamVjdHMgdGhhdCBjYW4gYmUgcGxhY2VkIG9uIHRoZSBkaXNwbGF5IGxpc3QuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgRGlzcGxheU9iamVjdFxuICAgICAqIEBleHRlbmRzIEV2ZW50RGlzcGF0Y2hlclxuICAgICAqIEBtb2R1bGUgU3RydWN0dXJlSlNcbiAgICAgKiBAc3VibW9kdWxlIHZpZXdcbiAgICAgKiBAcmVxdWlyZXMgRXh0ZW5kXG4gICAgICogQHJlcXVpcmVzIEV2ZW50RGlzcGF0Y2hlclxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBhdXRob3IgUm9iZXJ0IFMuICh3d3cuY29kZUJlbHQuY29tKVxuICAgICAqL1xuICAgIHZhciBEaXNwbGF5T2JqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKERpc3BsYXlPYmplY3QsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIERpc3BsYXlPYmplY3QoKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIFN0YWdlIG9mIHRoZSBkaXNwbGF5IG9iamVjdC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgc3RhZ2VcbiAgICAgICAgICAgICAqIEB0eXBlIHthbnl9XG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSBudWxsO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIGludGVyZmFjZSBwcm92aWRlcyB0aGUgMkQgcmVuZGVyaW5nIGNvbnRleHQgZm9yIHRoZSBkcmF3aW5nIHN1cmZhY2Ugb2YgYSBjYW52YXMgZWxlbWVudC5cbiAgICAgICAgICAgICAqIFRoaXMgcHJvcGVydHkgaXMgb25seSB1c2VkIHdpdGggdGhlIGNhbnZhcyBzcGVjaWZpYyBkaXNwbGF5IG9iamVjdHMuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGN0eFxuICAgICAgICAgICAgICogQHR5cGUge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cbiAgICAgICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jdHggPSBudWxsO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIHByb3BlcnR5IHByb3ZpZGluZyBhY2Nlc3MgdG8gdGhlIHggcG9zaXRpb24uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IHhcbiAgICAgICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgcHJvcGVydHkgcHJvdmlkaW5nIGFjY2VzcyB0byB0aGUgeSBwb3NpdGlvbi5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgeVxuICAgICAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW5kaWNhdGVzIHRoZSB3aWR0aCBvZiB0aGUgZGlzcGxheSBvYmplY3QsIGluIHBpeGVscy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgd2lkdGhcbiAgICAgICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbmRpY2F0ZXMgdGhlIGhlaWdodCBvZiB0aGUgZGlzcGxheSBvYmplY3QsIGluIHBpeGVscy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgaGVpZ2h0XG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgICAgICogQGRlZmF1bHQgMFxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgcHJvcGVydHkgcHJvdmlkaW5nIGFjY2VzcyB0byB0aGUgdW5zY2FsZWRXaWR0aC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgdW5zY2FsZWRXaWR0aFxuICAgICAgICAgICAgICogQHR5cGUge251bWJlcn1cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IDEwMFxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnVuc2NhbGVkV2lkdGggPSAxMDA7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgcHJvcGVydHkgcHJvdmlkaW5nIGFjY2VzcyB0byB0aGUgdW5zY2FsZWRIZWlnaHQuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IHVuc2NhbGVkSGVpZ2h0XG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgICAgICogQGRlZmF1bHQgMTAwXG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMudW5zY2FsZWRIZWlnaHQgPSAxMDA7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluZGljYXRlcyB0aGUgaG9yaXpvbnRhbCBzY2FsZSAocGVyY2VudGFnZSkgb2YgdGhlIG9iamVjdCBhcyBhcHBsaWVkIGZyb20gdGhlIHJlZ2lzdHJhdGlvbiBwb2ludC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgc2NhbGVYXG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluZGljYXRlcyB0aGUgdmVydGljYWwgc2NhbGUgKHBlcmNlbnRhZ2UpIG9mIGFuIG9iamVjdCBhcyBhcHBsaWVkIGZyb20gdGhlIHJlZ2lzdHJhdGlvbiBwb2ludCBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBzY2FsZVlcbiAgICAgICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc2NhbGVZID0gMTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW5kaWNhdGVzIHRoZSByb3RhdGlvbiBvZiB0aGUgRGlzcGxheU9iamVjdCBpbnN0YW5jZSwgaW4gZGVncmVlcywgZnJvbSBpdHMgb3JpZ2luYWwgb3JpZW50YXRpb24uXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IHJvdGF0aW9uXG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uID0gMDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW5kaWNhdGVzIHRoZSBhbHBoYSB0cmFuc3BhcmVuY3kgdmFsdWUgb2YgdGhlIG9iamVjdCBzcGVjaWZpZWQuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGFscGhhXG4gICAgICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmFscGhhID0gMTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGRpc3BsYXkgb2JqZWN0IGlzIHZpc2libGUuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IHZpc2libGVcbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGlzIG9iamVjdCByZWNlaXZlcyBtb3VzZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBtb3VzZUVuYWJsZWRcbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm1vdXNlRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIEJvb2xlYW4gdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgcG9pbnRpbmcgaGFuZCAoaGFuZCBjdXJzb3IpIGFwcGVhcnMgd2hlbiB0aGUgcG9pbnRlciByb2xscyBvdmVyIGEgZGlzcGxheSBvYmplY3QuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IHVzZUhhbmRDdXJzb3JcbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnVzZUhhbmRDdXJzb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGlzQ3JlYXRlZCBwcm9wZXJ0eSBpcyB1c2VkIHRvIGtlZXAgdHJhY2sgaWYgaXQgaXMgdGhlIGZpcnN0IHRpbWUgdGhpcyBEaXNwbGF5T2JqZWN0IGlzIGNyZWF0ZWQuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGlzQ3JlYXRlZFxuICAgICAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmlzQ3JlYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbmRpY2F0ZXMgdGhlIGluc3RhbmNlIG5hbWUgb2YgdGhlIERpc3BsYXlPYmplY3QuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IG5hbWVcbiAgICAgICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjcmVhdGUgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gcHJvdmlkZSBhIGNvbnNpc3RlbnQgcGxhY2UgZm9yIHRoZSBjcmVhdGlvbiBvciBpbml0aWFsaXppbmcgdGhlIHZpZXcuXG4gICAgICAgICAqIEl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBjYWxsZWQgdGhlIGZpcnN0IHRpbWUgdGhhdCB0aGUgdmlldyBpcyBhZGRlZCB0byBhIERpc3BsYXlPYmplY3RDb250YWluZXIuXG4gICAgICAgICAqIEl0IGlzIGNyaXRpY2FsIHRoYXQgYWxsIHN1YmNsYXNzZXMgY2FsbCB0aGUgc3VwZXIgZm9yIHRoaXMgZnVuY3Rpb24gaW4gdGhlaXIgb3ZlcnJpZGRlbiBtZXRob2RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAgICAgKiBAcmV0dXJucyB7RGlzcGxheU9iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBpdHNlbGYuXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGNoYWluYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgRGlzcGxheU9iamVjdC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc0NyZWF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGF5b3V0IG1ldGhvZCBwcm92aWRlcyBhIGNvbW1vbiBmdW5jdGlvbiB0byBoYW5kbGUgdXBkYXRpbmcgb2JqZWN0cyBpbiB0aGUgdmlldy5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBsYXlvdXRcbiAgICAgICAgICogQHJldHVybnMge0Rpc3BsYXlPYmplY3R9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgaXRzZWxmLlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBjaGFpbmFibGVcbiAgICAgICAgICovXG4gICAgICAgIERpc3BsYXlPYmplY3QucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNldFNpemUgbWV0aG9kIHNldHMgdGhlIGJvdW5kcyB3aXRoaW4gd2hpY2ggdGhlIGNvbnRhaW5pbmcgRGlzcGxheU9iamVjdCB3b3VsZCBsaWtlIHRoYXQgY29tcG9uZW50IHRvIGxheSBpdHNlbGYgb3V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gdW5zY2FsZWRXaWR0aCB7bnVtYmVyfSBUaGUgd2lkdGggd2l0aGluIHdoaWNoIHRoZSBjb21wb25lbnQgc2hvdWxkIGxheSBpdHNlbGYgb3V0LlxuICAgICAgICAgKiBAcGFyYW0gdW5zY2FsZWRIZWlnaHQge251bWJlcn0gVGhlIGhlaWdodCB3aXRoaW4gd2hpY2ggdGhlIGNvbXBvbmVudCBzaG91bGQgbGF5IGl0c2VsZiBvdXQuXG4gICAgICAgICAqIEByZXR1cm5zIHtEaXNwbGF5T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIGl0c2VsZi5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqL1xuICAgICAgICBEaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5zZXRTaXplID0gZnVuY3Rpb24gKHVuc2NhbGVkV2lkdGgsIHVuc2NhbGVkSGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NhbGVkV2lkdGggPSB1bnNjYWxlZFdpZHRoO1xuICAgICAgICAgICAgdGhpcy51bnNjYWxlZEhlaWdodCA9IHVuc2NhbGVkSGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIERpc3BsYXlPYmplY3QucHJvdG90eXBlLl9yZWFkZXJTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgRGlzcGxheU9iamVjdC5wcm90b3R5cGUucmVuZGVyQ2FudmFzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3R4ID09PSBudWxsIHx8IHRoaXMuYWxwaGEgPD0gMCB8fCB0aGlzLnZpc2libGUgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX3JlYWRlclN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMuYWxwaGE7XG4gICAgICAgICAgICB0aGlzLmxheW91dCgpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyRW5kKCk7XG4gICAgICAgIH07XG4gICAgICAgIERpc3BsYXlPYmplY3QucHJvdG90eXBlLl9yZW5kZXJFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBEaXNwbGF5T2JqZWN0O1xuICAgIH0pKEV2ZW50RGlzcGF0Y2hlcl8xLmRlZmF1bHQpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBleHBvcnRzLmRlZmF1bHQgPSBEaXNwbGF5T2JqZWN0O1xufSk7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciB2ID0gZmFjdG9yeShyZXF1aXJlLCBleHBvcnRzKTsgaWYgKHYgIT09IHVuZGVmaW5lZCkgbW9kdWxlLmV4cG9ydHMgPSB2O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICcuL0Rpc3BsYXlPYmplY3QnXSwgZmFjdG9yeSk7XG4gICAgfVxufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcbiAgICB2YXIgRGlzcGxheU9iamVjdF8xID0gcmVxdWlyZSgnLi9EaXNwbGF5T2JqZWN0Jyk7XG4gICAgLyoqXG4gICAgICogVGhlIHt7I2Nyb3NzTGluayBcIkRpc3BsYXlPYmplY3RDb250YWluZXJcIn19e3svY3Jvc3NMaW5rfX0gY2xhc3MgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBvYmplY3RzIHRoYXQgY2FuIGJlIHBsYWNlZCBvbiB0aGUgZGlzcGxheSBsaXN0LlxuICAgICAqXG4gICAgICogQGNsYXNzIERpc3BsYXlPYmplY3RDb250YWluZXJcbiAgICAgKiBAZXh0ZW5kcyBEaXNwbGF5T2JqZWN0XG4gICAgICogQG1vZHVsZSBTdHJ1Y3R1cmVKU1xuICAgICAqIEBzdWJtb2R1bGUgdmlld1xuICAgICAqIEByZXF1aXJlcyBFeHRlbmRcbiAgICAgKiBAcmVxdWlyZXMgRGlzcGxheU9iamVjdFxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBhdXRob3IgUm9iZXJ0IFMuICh3d3cuY29kZUJlbHQuY29tKVxuICAgICAqL1xuICAgIHZhciBEaXNwbGF5T2JqZWN0Q29udGFpbmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKERpc3BsYXlPYmplY3RDb250YWluZXIsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIERpc3BsYXlPYmplY3RDb250YWluZXIoKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIG9mIHRoaXMgb2JqZWN0LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBudW1DaGlsZHJlblxuICAgICAgICAgICAgICogQHR5cGUge2ludH1cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IDBcbiAgICAgICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm51bUNoaWxkcmVuID0gMDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNoaWxkIERpc3BsYXlPYmplY3QgaW5zdGFuY2VzIHRvIHRoaXMgcGFyZW50IG9iamVjdCBpbnN0YW5jZS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgY2hpbGRyZW5cbiAgICAgICAgICAgICAqIEB0eXBlIHtBcnJheS48RGlzcGxheU9iamVjdD59XG4gICAgICAgICAgICAgKiBAcmVhZE9ubHlcbiAgICAgICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBjaGlsZHJlbiBvZiB0aGUgb2JqZWN0IGFyZSBtb3VzZSBlbmFibGVkLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBtb3VzZUNoaWxkcmVuXG4gICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5tb3VzZUNoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBjaGlsZCBEaXNwbGF5T2JqZWN0IGluc3RhbmNlIHRvIHRoaXMgcGFyZW50IG9iamVjdCBpbnN0YW5jZS4gVGhlIGNoaWxkIGlzIGFkZGVkIHRvIHRoZSBmcm9udCAodG9wKSBvZiBhbGwgb3RoZXJcbiAgICAgICAgICogY2hpbGRyZW4gaW4gdGhpcyBwYXJlbnQgb2JqZWN0IGluc3RhbmNlLiAoVG8gYWRkIGEgY2hpbGQgdG8gYSBzcGVjaWZpYyBpbmRleCBwb3NpdGlvbiwgdXNlIHRoZSBhZGRDaGlsZEF0KCkgbWV0aG9kLilcbiAgICAgICAgICpcbiAgICAgICAgICogSWYgeW91IGFkZCBhIGNoaWxkIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIGEgZGlmZmVyZW50IHBhcmVudCwgdGhlIG9iamVjdCBpcyByZW1vdmVkIGZyb20gdGhlIGNoaWxkXG4gICAgICAgICAqIGxpc3Qgb2YgdGhlIG90aGVyIHBhcmVudCBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgYWRkQ2hpbGRcbiAgICAgICAgICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fSBUaGUgRGlzcGxheU9iamVjdCBpbnN0YW5jZSB0byBhZGQgYXMgYSBjaGlsZCBvZiB0aGlzIERpc3BsYXlPYmplY3RDb250YWluZXIgaW5zdGFuY2UuXG4gICAgICAgICAqIEByZXR1cm5zIHtEaXNwbGF5T2JqZWN0Q29udGFpbmVyfSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIGl0c2VsZi5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqL1xuICAgICAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgLy9JZiB0aGUgY2hpbGQgYmVpbmcgcGFzc2VkIGluIGFscmVhZHkgaGFzIGEgcGFyZW50IHRoZW4gcmVtb3ZlIHRoZSByZWZlcmVuY2UgZnJvbSB0aGVyZS5cbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIHRoaXMubnVtQ2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBjaGlsZCBEaXNwbGF5T2JqZWN0IGluc3RhbmNlIHRvIHRoaXMgRGlzcGxheU9iamVjdENvbnRhaW5lckNvbnRhaW5lciBpbnN0YW5jZS5cbiAgICAgICAgICogVGhlIGNoaWxkIGlzIGFkZGVkIGF0IHRoZSBpbmRleCBwb3NpdGlvbiBzcGVjaWZpZWQuIEFuIGluZGV4IG9mIDAgcmVwcmVzZW50cyB0aGUgYmFja1xuICAgICAgICAgKiAoYm90dG9tKSBvZiB0aGUgZGlzcGxheSBsaXN0IGZvciB0aGlzIERpc3BsYXlPYmplY3RDb250YWluZXJDb250YWluZXIgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGFkZENoaWxkQXRcbiAgICAgICAgICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fSBUaGUgRGlzcGxheU9iamVjdCBpbnN0YW5jZSB0byBhZGQgYXMgYSBjaGlsZCBvZiB0aGlzIG9iamVjdCBpbnN0YW5jZS5cbiAgICAgICAgICogQHBhcmFtIGluZGV4IHtpbnR9IFRoZSBpbmRleCBwb3NpdGlvbiB0byB3aGljaCB0aGUgY2hpbGQgaXMgYWRkZWQuIElmIHlvdSBzcGVjaWZ5IGEgY3VycmVudGx5IG9jY3VwaWVkIGluZGV4IHBvc2l0aW9uLCB0aGUgY2hpbGQgb2JqZWN0IHRoYXQgZXhpc3RzIGF0IHRoYXQgcG9zaXRpb24gYW5kIGFsbCBoaWdoZXIgcG9zaXRpb25zIGFyZSBtb3ZlZCB1cCBvbmUgcG9zaXRpb24gaW4gdGhlIGNoaWxkIGxpc3QuXG4gICAgICAgICAqIEByZXR1cm5zIHtEaXNwbGF5T2JqZWN0Q29udGFpbmVyfSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIGl0c2VsZi5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqL1xuICAgICAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnByb3RvdHlwZS5hZGRDaGlsZEF0ID0gZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgLy9JZiB0aGUgY2hpbGQgYmVpbmcgcGFzc2VkIGluIGFscmVhZHkgaGFzIGEgcGFyZW50IHRoZW4gcmVtb3ZlIHRoZSByZWZlcmVuY2UgZnJvbSB0aGVyZS5cbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIGNoaWxkKTtcbiAgICAgICAgICAgIHRoaXMubnVtQ2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIHNwZWNpZmllZCBjaGlsZCBvYmplY3QgaW5zdGFuY2UgZnJvbSB0aGUgY2hpbGQgbGlzdCBvZiB0aGUgcGFyZW50IG9iamVjdCBpbnN0YW5jZS5cbiAgICAgICAgICogVGhlIHBhcmVudCBwcm9wZXJ0eSBvZiB0aGUgcmVtb3ZlZCBjaGlsZCBpcyBzZXQgdG8gbnVsbCAsIGFuZCB0aGUgb2JqZWN0IGlzIGdhcmJhZ2UgY29sbGVjdGVkIGlmIG5vIG90aGVyIHJlZmVyZW5jZXNcbiAgICAgICAgICogdG8gdGhlIGNoaWxkIGV4aXN0LiBUaGUgaW5kZXggcG9zaXRpb25zIG9mIGFueSBvYmplY3RzIGFib3ZlIHRoZSBjaGlsZCBpbiB0aGUgcGFyZW50IG9iamVjdCBhcmUgZGVjcmVhc2VkIGJ5IDEuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVtb3ZlQ2hpbGRcbiAgICAgICAgICogQHBhcmFtIGNoaWxkIHtEaXNwbGF5T2JqZWN0fSBUaGUgRGlzcGxheU9iamVjdCBpbnN0YW5jZSB0byByZW1vdmUuXG4gICAgICAgICAqIEByZXR1cm5zIHtEaXNwbGF5T2JqZWN0Q29udGFpbmVyfSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIGl0c2VsZi5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqL1xuICAgICAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRDaGlsZEluZGV4KGNoaWxkKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmVzIHRoZSBjaGlsZCBvYmplY3QgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubnVtQ2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYWxsIGNoaWxkIERpc3BsYXlPYmplY3QgaW5zdGFuY2VzIGZyb20gdGhlIGNoaWxkIGxpc3Qgb2YgdGhlIERpc3BsYXlPYmplY3RDb250YWluZXJDb250YWluZXIgaW5zdGFuY2UuXG4gICAgICAgICAqIFRoZSBwYXJlbnQgcHJvcGVydHkgb2YgdGhlIHJlbW92ZWQgY2hpbGRyZW4gaXMgc2V0IHRvIG51bGwgLCBhbmQgdGhlIG9iamVjdHMgYXJlIGdhcmJhZ2UgY29sbGVjdGVkIGlmXG4gICAgICAgICAqIG5vIG90aGVyIHJlZmVyZW5jZXMgdG8gdGhlIGNoaWxkcmVuIGV4aXN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlbW92ZUNoaWxkcmVuXG4gICAgICAgICAqIEByZXR1cm5zIHtEaXNwbGF5T2JqZWN0Q29udGFpbmVyfSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIGl0c2VsZi5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqL1xuICAgICAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnByb3RvdHlwZS5yZW1vdmVDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMuY2hpbGRyZW4ucG9wKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyB0d28gRGlzcGxheU9iamVjdCdzIHdpdGggZWFjaCBvdGhlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBzd2FwQ2hpbGRyZW5cbiAgICAgICAgICogQHBhcmFtIGNoaWxkMSB7RGlzcGxheU9iamVjdH0gVGhlIERpc3BsYXlPYmplY3QgaW5zdGFuY2UgdG8gYmUgc3dhcC5cbiAgICAgICAgICogQHBhcmFtIGNoaWxkMiB7RGlzcGxheU9iamVjdH0gVGhlIERpc3BsYXlPYmplY3QgaW5zdGFuY2UgdG8gYmUgc3dhcC5cbiAgICAgICAgICogQHJldHVybnMge0Rpc3BsYXlPYmplY3RDb250YWluZXJ9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgaXRzZWxmLlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBjaGFpbmFibGVcbiAgICAgICAgICovXG4gICAgICAgIERpc3BsYXlPYmplY3RDb250YWluZXIucHJvdG90eXBlLnN3YXBDaGlsZHJlbiA9IGZ1bmN0aW9uIChjaGlsZDEsIGNoaWxkMikge1xuICAgICAgICAgICAgdmFyIGNoaWxkMUluZGV4ID0gdGhpcy5nZXRDaGlsZEluZGV4KGNoaWxkMSk7XG4gICAgICAgICAgICB2YXIgY2hpbGQySW5kZXggPSB0aGlzLmdldENoaWxkSW5kZXgoY2hpbGQyKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRBdChjaGlsZDEsIGNoaWxkMkluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRBdChjaGlsZDIsIGNoaWxkMUluZGV4KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGNoaWxkIG9iamVjdHMgYXQgdGhlIHR3byBzcGVjaWZpZWQgaW5kZXggcG9zaXRpb25zIGluIHRoZSBjaGlsZCBsaXN0LiBBbGwgb3RoZXIgY2hpbGQgb2JqZWN0cyBpbiB0aGUgZGlzcGxheSBvYmplY3QgY29udGFpbmVyIHJlbWFpbiBpbiB0aGUgc2FtZSBpbmRleCBwb3NpdGlvbnMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2Qgc3dhcENoaWxkcmVuQXRcbiAgICAgICAgICogQHBhcmFtIGluZGV4MSB7aW50fSBUaGUgaW5kZXggcG9zaXRpb24gb2YgdGhlIGZpcnN0IGNoaWxkIG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIGluZGV4MiB7aW50fSBUaGUgaW5kZXggcG9zaXRpb24gb2YgdGhlIHNlY29uZCBjaGlsZCBvYmplY3QuXG4gICAgICAgICAqIEByZXR1cm5zIHtEaXNwbGF5T2JqZWN0Q29udGFpbmVyfSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIGl0c2VsZi5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAY2hhaW5hYmxlXG4gICAgICAgICAqL1xuICAgICAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnByb3RvdHlwZS5zd2FwQ2hpbGRyZW5BdCA9IGZ1bmN0aW9uIChpbmRleDEsIGluZGV4Mikge1xuICAgICAgICAgICAgaWYgKGluZGV4MSA8IDAgfHwgaW5kZXgxIDwgMCB8fCBpbmRleDEgPj0gdGhpcy5udW1DaGlsZHJlbiB8fCBpbmRleDIgPj0gdGhpcy5udW1DaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1snICsgdGhpcy5nZXRRdWFsaWZpZWRDbGFzc05hbWUoKSArICddIGluZGV4IHZhbHVlKHMpIGNhbm5vdCBiZSBvdXQgb2YgYm91bmRzLiBpbmRleDEgdmFsdWUgaXMgJyArIGluZGV4MSArICcgaW5kZXgyIHZhbHVlIGlzICcgKyBpbmRleDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoaWxkMSA9IHRoaXMuZ2V0Q2hpbGRBdChpbmRleDEpO1xuICAgICAgICAgICAgdmFyIGNoaWxkMiA9IHRoaXMuZ2V0Q2hpbGRBdChpbmRleDIpO1xuICAgICAgICAgICAgdGhpcy5zd2FwQ2hpbGRyZW4oY2hpbGQxLCBjaGlsZDIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBwb3NpdGlvbiBvZiBhIGNoaWxkIERpc3BsYXlPYmplY3QgaW5zdGFuY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgZ2V0Q2hpbGRJbmRleFxuICAgICAgICAgKiBAcGFyYW0gY2hpbGQge0Rpc3BsYXlPYmplY3R9IFRoZSBEaXNwbGF5T2JqZWN0IGluc3RhbmNlIHRvIGlkZW50aWZ5LlxuICAgICAgICAgKiBAcmV0dXJucyB7aW50fSBUaGUgaW5kZXggcG9zaXRpb24gb2YgdGhlIGNoaWxkIGRpc3BsYXkgb2JqZWN0IHRvIGlkZW50aWZ5LlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqL1xuICAgICAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnByb3RvdHlwZS5nZXRDaGlsZEluZGV4ID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIGRpc3BsYXkgb2JqZWN0IGlzIGEgY2hpbGQgb2YgdGhlIERpc3BsYXlPYmplY3QgaW5zdGFuY2Ugb3IgdGhlIGluc3RhbmNlIGl0c2VsZi4gVGhlIHNlYXJjaCBpbmNsdWRlcyB0aGUgZW50aXJlIGRpc3BsYXkgbGlzdCBpbmNsdWRpbmcgdGhpcyBEaXNwbGF5T2JqZWN0IGluc3RhbmNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGNvbnRhaW5zXG4gICAgICAgICAqIEBwYXJhbSBjaGlsZCB7RGlzcGxheU9iamVjdH0gVGhlIGNoaWxkIG9iamVjdCB0byB0ZXN0LlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gIHRydWUgaWYgdGhlIGNoaWxkIG9iamVjdCBpcyBhIGNoaWxkIG9mIHRoZSBEaXNwbGF5T2JqZWN0IG9yIHRoZSBjb250YWluZXIgaXRzZWxmOyBvdGhlcndpc2UgZmFsc2UuXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICovXG4gICAgICAgIERpc3BsYXlPYmplY3RDb250YWluZXIucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKSA+PSAwO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgY2hpbGQgZGlzcGxheSBvYmplY3QgaW5zdGFuY2UgdGhhdCBleGlzdHMgYXQgdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBnZXRDaGlsZEF0XG4gICAgICAgICAqIEBwYXJhbSBpbmRleCB7aW50fSBUaGUgaW5kZXggcG9zaXRpb24gb2YgdGhlIGNoaWxkIG9iamVjdC5cbiAgICAgICAgICogQHJldHVybnMge0Rpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCBkaXNwbGF5IG9iamVjdCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IHBvc2l0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgRGlzcGxheU9iamVjdENvbnRhaW5lci5wcm90b3R5cGUuZ2V0Q2hpbGRBdCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyBhIERpc3BsYXlPYmplY3QgYnkgaXRzIHNqc0lkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGdldENoaWxkQnlDaWRcbiAgICAgICAgICogQHBhcmFtIHNqc0lkIHtudW1iZXJ9XG4gICAgICAgICAqIEByZXR1cm5zIHtEaXNwbGF5T2JqZWN0fG51bGx9XG4gICAgICAgICAqIEBvdmVycmlkZVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqL1xuICAgICAgICBEaXNwbGF5T2JqZWN0Q29udGFpbmVyLnByb3RvdHlwZS5nZXRDaGlsZEJ5Q2lkID0gZnVuY3Rpb24gKHNqc0lkKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBudWxsO1xuICAgICAgICAgICAgZm9yICh2YXIgaV8xID0gdGhpcy5udW1DaGlsZHJlbiAtIDE7IGlfMSA+PSAwOyBpXzEtLSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2lfMV0uc2pzSWQgPT0gc2pzSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2lfMV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIERpc3BsYXlPYmplY3RDb250YWluZXI7XG4gICAgfSkoRGlzcGxheU9iamVjdF8xLmRlZmF1bHQpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBleHBvcnRzLmRlZmF1bHQgPSBEaXNwbGF5T2JqZWN0Q29udGFpbmVyO1xufSk7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciB2ID0gZmFjdG9yeShyZXF1aXJlLCBleHBvcnRzKTsgaWYgKHYgIT09IHVuZGVmaW5lZCkgbW9kdWxlLmV4cG9ydHMgPSB2O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICcuL0RPTUVsZW1lbnQnXSwgZmFjdG9yeSk7XG4gICAgfVxufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcbiAgICB2YXIgRE9NRWxlbWVudF8xID0gcmVxdWlyZSgnLi9ET01FbGVtZW50Jyk7XG4gICAgLyoqXG4gICAgICogVGhlIHt7I2Nyb3NzTGluayBcIlN0YWdlXCJ9fXt7L2Nyb3NzTGlua319IGNsYXNzIHNob3VsZCBiZSBleHRlbmRlZCBieSB5b3VyIG1haW4gYXBwbGljYXRpb24gb3Igcm9vdCBjbGFzcy5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBTdGFnZVxuICAgICAqIEBleHRlbmRzIERPTUVsZW1lbnRcbiAgICAgKiBAbW9kdWxlIFN0cnVjdHVyZUpTXG4gICAgICogQHN1Ym1vZHVsZSB2aWV3XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQGF1dGhvciBSb2JlcnQgUy4gKHd3dy5jb2RlQmVsdC5jb20pXG4gICAgICogQHJlcXVpcmVzIEV4dGVuZFxuICAgICAqIEByZXF1aXJlcyBET01FbGVtZW50XG4gICAgICogQHJlcXVpcmVzIGpRdWVyeVxuICAgICAqIEBleGFtcGxlXG4gICAgICogICAgIC8vIFRoaXMgZXhhbXBsZSBpbGx1c3RyYXRlcyBob3cgdG8gc2V0dXAgeW91ciBtYWluIGFwcGxpY2F0aW9uIG9yIHJvb3QgY2xhc3Mgd2hlbiBleHRlbmRpbmcgdGhlIHt7I2Nyb3NzTGluayBcIlN0YWdlXCJ9fXt7L2Nyb3NzTGlua319IGNsYXNzLlxuICAgICAqICAgICAgICAgY2xhc3MgTWFpbkNsYXNzIGV4dGVuZHMgU3RhZ2Uge1xuICAgICAqXG4gICAgICogICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICogICAgICAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICogICAgICAgICAgICAgfVxuICAgICAqXG4gICAgICogICAgICAgICAgICAgY3JlYXRlKCkge1xuICAgICAqICAgICAgICAgICAgICAgICBzdXBlci5jcmVhdGUoKTtcbiAgICAgKlxuICAgICAqICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCB5b3VyIGNoaWxkIG9iamVjdHMgdG8gdGhpcyBwYXJlbnQgY2xhc3MuXG4gICAgICogICAgICAgICAgICAgfVxuICAgICAqXG4gICAgICogICAgICAgICAgICAgZW5hYmxlKCkge1xuICAgICAqICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQgPT09IHRydWUpIHsgcmV0dXJuOyB9O1xuICAgICAqXG4gICAgICogICAgICAgICAgICAgICAgIC8vIEVuYWJsZSB0aGUgY2hpbGQgb2JqZWN0cyBhbmQgYWRkIGFueSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICAgICAgc3VwZXIuZW5hYmxlKCk7XG4gICAgICogICAgICAgICAgICAgfVxuICAgICAqXG4gICAgICogICAgICAgICAgICAgZGlzYWJsZSgpIHtcbiAgICAgKiAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkID09PSBmYWxzZSkgeyByZXR1cm47IH07XG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICAgICAgLy8gRGlzYWJsZSB0aGUgY2hpbGQgb2JqZWN0cyBhbmQgcmVtb3ZlIGFueSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICAgICAgc3VwZXIuZGlzYWJsZSgpO1xuICAgICAqICAgICAgICAgICAgIH1cbiAgICAgKlxuICAgICAqICAgICAgICAgICAgIGxheW91dCgpIHtcbiAgICAgKiAgICAgICAgICAgICAgICAgLy8gTGF5b3V0IG9yIHVwZGF0ZSB0aGUgY2hpbGQgb2JqZWN0cyBpbiB0aGlzIHBhcmVudCBjbGFzcy5cbiAgICAgKiAgICAgICAgICAgICB9XG4gICAgICpcbiAgICAgKiAgICAgICAgICAgICBkZXN0cm95KCkge1xuICAgICAqICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgKlxuICAgICAqICAgICAgICAgICAgICAgICAvLyBEZXN0cm95IHRoZSBjaGlsZCBvYmplY3RzIGFuZCByZWZlcmVuY2VzIGluIHRoaXMgcGFyZW50IGNsYXNzIHRvIHByZXBhcmUgZm9yIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqICAgICAgICAgICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICogICAgICAgICAgICAgfVxuICAgICAqXG4gICAgICogICAgICAgICB9XG4gICAgICpcbiAgICAgKlxuICAgICAqIDxiPkluc3RhbnRpYXRpb24gRXhhbXBsZTwvYj48YnI+XG4gICAgICogVGhpcyBleGFtcGxlIGlsbHVzdHJhdGVzIGhvdyB0byBpbnN0YW50aWF0ZSB5b3VyIG1haW4gYXBwbGljYXRpb24gb3Igcm9vdCBjbGFzcy5cbiAgICAgKlxuICAgICAqICAgICAgbGV0IGFwcCA9IG5ldyBNYWluQ2xhc3MoKTtcbiAgICAgKiAgICAgIGFwcC5hcHBlbmRUbygnYm9keScpO1xuICAgICAqXG4gICAgICovXG4gICAgdmFyIFN0YWdlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKFN0YWdlLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBTdGFnZSgpIHtcbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2VsZWN0ZWQgSFRNTCBlbGVtZW50IHdoZXJlIHRoZSBjaGlsZCBlbGVtZW50cyB3aWxsIGJlIGNyZWF0ZWQuIFRoaXMgbWV0aG9kIHN0YXJ0cyB0aGUgbGlmZWN5Y2xlIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBhcHBlbmRUb1xuICAgICAgICAgKiBAcGFyYW0gdHlwZSB7YW55fSBBIHN0cmluZyB2YWx1ZSB3aGVyZSB5b3VyIGFwcGxpY2F0aW9uIHdpbGwgYmUgYXBwZW5kZWQuIFRoaXMgY2FuIGJlIGFuIGVsZW1lbnQgaWQgKCNzb21lLWlkKSwgZWxlbWVudCBjbGFzcyAoLnNvbWUtY2xhc3MpIG9yIGEgZWxlbWVudCB0YWcgKGJvZHkpLlxuICAgICAgICAgKiBAcGFyYW0gW2VuYWJsZWQ9dHJ1ZV0ge2Jvb2xlYW59IFNldHMgdGhlIGVuYWJsZWQgc3RhdGUgb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICogQGNoYWluYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgU3RhZ2UucHJvdG90eXBlLmFwcGVuZFRvID0gZnVuY3Rpb24gKHR5cGUsIGVuYWJsZWQpIHtcbiAgICAgICAgICAgIGlmIChlbmFibGVkID09PSB2b2lkIDApIHsgZW5hYmxlZCA9IHRydWU7IH1cbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSAodHlwZSBpbnN0YW5jZW9mIGpRdWVyeSkgPyB0eXBlIDogalF1ZXJ5KHR5cGUpO1xuICAgICAgICAgICAgdGhpcy5fYWRkQ2xpZW50U2lkZUlkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDcmVhdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NyZWF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChlbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFN0YWdlO1xuICAgIH0pKERPTUVsZW1lbnRfMS5kZWZhdWx0KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gU3RhZ2U7XG59KTtcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIHYgPSBmYWN0b3J5KHJlcXVpcmUsIGV4cG9ydHMpOyBpZiAodiAhPT0gdW5kZWZpbmVkKSBtb2R1bGUuZXhwb3J0cyA9IHY7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgJy4uL0Jhc2VPYmplY3QnXSwgZmFjdG9yeSk7XG4gICAgfVxufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcbiAgICB2YXIgQmFzZU9iamVjdF8xID0gcmVxdWlyZSgnLi4vQmFzZU9iamVjdCcpO1xuICAgIC8qKlxuICAgICAqIFRoZSB7eyNjcm9zc0xpbmsgXCJCYXNlRXZlbnRcIn19e3svY3Jvc3NMaW5rfX0gY2xhc3MgaXMgdXNlZCBhcyB0aGUgYmFzZSBjbGFzcyBmb3IgdGhlIGNyZWF0aW9uIG9mIEV2ZW50IG9iamVjdHMsIHdoaWNoIGFyZSBwYXNzZWQgYXMgcGFyYW1ldGVycyB0byBldmVudCBsaXN0ZW5lcnMgd2hlbiBhbiBldmVudCBvY2N1cnMuXG4gICAgICpcbiAgICAgKiBUaGUgcHJvcGVydGllcyBvZiB0aGUge3sjY3Jvc3NMaW5rIFwiQmFzZUV2ZW50XCJ9fXt7L2Nyb3NzTGlua319IGNsYXNzIGNhcnJ5IGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGFuIGV2ZW50LCBzdWNoIGFzIHRoZSBldmVudCdzIHR5cGUgb3Igd2hldGhlciB0aGUgZXZlbnQncyBkZWZhdWx0IGJlaGF2aW9yIGNhbiBiZSBjYW5jZWxlZC5cbiAgICAgKlxuICAgICAqIEZvciBtYW55IGV2ZW50cywgc3VjaCBhcyB0aGUgZXZlbnRzIHJlcHJlc2VudGVkIGJ5IHRoZSBFdmVudCBjbGFzcyBjb25zdGFudHMsIHRoaXMgYmFzaWMgaW5mb3JtYXRpb24gaXMgc3VmZmljaWVudC4gT3RoZXIgZXZlbnRzLCBob3dldmVyLCBtYXkgcmVxdWlyZSBtb3JlXG4gICAgICogZGV0YWlsZWQgaW5mb3JtYXRpb24uXG4gICAgICogQGNsYXNzIEJhc2VFdmVudFxuICAgICAqIEBleHRlbmRzIEJhc2VPYmplY3RcbiAgICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfSBUaGUgdHlwZSBvZiBldmVudC4gVGhlIHR5cGUgaXMgY2FzZS1zZW5zaXRpdmUuXG4gICAgICogQHBhcmFtIFtidWJibGVzPWZhbHNlXSB7Ym9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgYW4gZXZlbnQgaXMgYSBidWJibGluZyBldmVudC4gSWYgdGhlIGV2ZW50IGNhbiBidWJibGUsIHRoaXMgdmFsdWUgaXMgdHJ1ZTsgb3RoZXJ3aXNlIGl0IGlzIGZhbHNlLlxuICAgICAqIE5vdGU6IFdpdGggZXZlbnQtYnViYmxpbmcgeW91IGNhbiBsZXQgb25lIEV2ZW50IHN1YnNlcXVlbnRseSBjYWxsIG9uIGV2ZXJ5IGFuY2VzdG9yICh7eyNjcm9zc0xpbmsgXCJFdmVudERpc3BhdGNoZXIvcGFyZW50OnByb3BlcnR5XCJ9fXt7L2Nyb3NzTGlua319KVxuICAgICAqIChjb250YWluZXJzIG9mIGNvbnRhaW5lcnMgb2YgZXRjLikgb2YgdGhlIHt7I2Nyb3NzTGluayBcIkRpc3BsYXlPYmplY3RDb250YWluZXJcIn19e3svY3Jvc3NMaW5rfX0gdGhhdCBvcmlnaW5hbGx5IGRpc3BhdGNoZWQgdGhlIEV2ZW50LCBhbGwgdGhlIHdheSB1cCB0byB0aGUgc3VyZmFjZSAoe3sjY3Jvc3NMaW5rIFwiU3RhZ2VcIn19e3svY3Jvc3NMaW5rfX0pLiBBbnkgY2xhc3NlcyB0aGF0IGRvIG5vdCBoYXZlIGEgcGFyZW50IGNhbm5vdCBidWJibGUuXG4gICAgICogQHBhcmFtIFtjYW5jZWxhYmxlPWZhbHNlXSB7Ym9vbGVhbn0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGJlaGF2aW9yIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQgY2FuIGJlIHByZXZlbnRlZC4gSWYgdGhlIGJlaGF2aW9yIGNhbiBiZSBjYW5jZWxlZCwgdGhpcyB2YWx1ZSBpcyB0cnVlOyBvdGhlcndpc2UgaXQgaXMgZmFsc2UuXG4gICAgICogQHBhcmFtIFtkYXRhPW51bGxdIHthbnl9IFVzZSB0byBwYXNzIGFueSB0eXBlIG9mIGRhdGEgd2l0aCB0aGUgZXZlbnQuXG4gICAgICogQG1vZHVsZSBTdHJ1Y3R1cmVKU1xuICAgICAqIEBzdWJtb2R1bGUgZXZlbnRcbiAgICAgKiBAcmVxdWlyZXMgRXh0ZW5kXG4gICAgICogQHJlcXVpcmVzIEJhc2VPYmplY3RcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAYXV0aG9yIFJvYmVydCBTLiAod3d3LmNvZGVCZWx0LmNvbSlcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAvLyBFeGFtcGxlOiBob3cgdG8gY3JlYXRlIGEgY3VzdG9tIGV2ZW50IGJ5IGV4dGVuZGluZyBCYXNlRXZlbnQuXG4gICAgICpcbiAgICAgKiAgICAgY2xhc3MgQ291bnRyeUV2ZW50IGV4dGVuZHMgQmFzZUV2ZW50IHtcbiAgICAgKlxuICAgICAqICAgICAgICAgIENIQU5HRV9DT1VOVFJZID0gJ0NvdW50cnlFdmVudC5jaGFuZ2VDb3VudHJ5JztcbiAgICAgKlxuICAgICAqICAgICAgICAgIGNvbnN0cnVjdG9yKHR5cGUsIGJ1YmJsZXMgPSBmYWxzZSwgY2FuY2VsYWJsZSA9IGZhbHNlLCBkYXRhID0gbnVsbCkge1xuICAgICAqICAgICAgICAgICAgICBzdXBlcih0eXBlLCBidWJibGVzLCBjYW5jZWxhYmxlLCBkYXRhKTtcbiAgICAgKlxuICAgICAqICAgICAgICAgICAgICB0aGlzLmNvdW50cnlOYW1lID0gbnVsbDtcbiAgICAgKiAgICAgICAgICB9XG4gICAgICogICAgICB9XG4gICAgICpcbiAgICAgKiAgICAgLy8gRXhhbXBsZTogaG93IHRvIHVzZSB0aGUgY3VzdG9tIGV2ZW50LlxuICAgICAqICAgICBsZXQgZXZlbnQgPSBuZXcgQ291bnRyeUV2ZW50KENvdW50cnlFdmVudC5DSEFOR0VfQ09VTlRSWSk7XG4gICAgICogICAgIGV2ZW50LmNvdW50cnlOYW1lID0gJ0NhbmFkYSc7XG4gICAgICogICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICovXG4gICAgdmFyIEJhc2VFdmVudCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgIF9fZXh0ZW5kcyhCYXNlRXZlbnQsIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIEJhc2VFdmVudCh0eXBlLCBidWJibGVzLCBjYW5jZWxhYmxlLCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoYnViYmxlcyA9PT0gdm9pZCAwKSB7IGJ1YmJsZXMgPSBmYWxzZTsgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGFibGUgPT09IHZvaWQgMCkgeyBjYW5jZWxhYmxlID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmIChkYXRhID09PSB2b2lkIDApIHsgZGF0YSA9IG51bGw7IH1cbiAgICAgICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgdHlwZSBvZiBldmVudC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgdHlwZVxuICAgICAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICAgICAqIEByZWFkT25seVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IHRoYXQgb3JpZ2luYWxseSBkaXNwYXRjaGVkIHRoZSBldmVudC5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgdGFyZ2V0XG4gICAgICAgICAgICAgKiBAdHlwZSB7YW55fVxuICAgICAgICAgICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGN1cnJlbnRUYXJnZXQgcHJvcGVydHkgYWx3YXlzIHBvaW50cyB0byB0aGUge3sjY3Jvc3NMaW5rIFwiRGlzcGxheU9iamVjdENvbnRhaW5lclwifX17ey9jcm9zc0xpbmt9fSB0aGF0IHRoZSBldmVudCBpcyBjdXJyZW50bHkgcHJvY2Vzc2luZyAoaS5lLiBidWJibGluZyBhdCkuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGN1cnJlbnRUYXJnZXRcbiAgICAgICAgICAgICAqIEB0eXBlIHthbnl9XG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKiBAcmVhZE9ubHlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBwYXNzIGFueSB0eXBlIG9mIGRhdGEgd2l0aCB0aGUgZXZlbnQuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGRhdGFcbiAgICAgICAgICAgICAqIEB0eXBlIHthbnl9XG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGFuIGV2ZW50IGlzIGEgYnViYmxpbmcgZXZlbnQuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGJ1YmJsZXNcbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5idWJibGVzID0gZmFsc2U7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBiZWhhdmlvciBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50IGNhbiBiZSBwcmV2ZW50ZWQuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGNhbmNlbGFibGVcbiAgICAgICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluZGljYXRlcyBpZiB0aGUge3sjY3Jvc3NMaW5rIFwiQmFzZUV2ZW50L3N0b3BQcm9wYWdhdGlvbjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX0gd2FzIGNhbGxlZCBvbiB0aGUgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBpc1Byb3BhZ2F0aW9uU3RvcHBlZFxuICAgICAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICogQHJlYWRPbmx5XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSB7eyNjcm9zc0xpbmsgXCJCYXNlRXZlbnQvc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fSB3YXMgY2FsbGVkIG9uIHRoZSBldmVudCBvYmplY3QuXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQHByb3BlcnR5IGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkXG4gICAgICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgICAgICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAgICAgKiBAcmVhZE9ubHlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlcyA9IGJ1YmJsZXM7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbGFibGUgPSBjYW5jZWxhYmxlO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmVudHMgcHJvY2Vzc2luZyBvZiBhbnkgZXZlbnQgbGlzdGVuZXJzIGluIG5vZGVzIHN1YnNlcXVlbnQgdG8gdGhlIGN1cnJlbnQgbm9kZSBpbiB0aGUgZXZlbnQgZmxvdy5cbiAgICAgICAgICogVGhpcyBtZXRob2QgZG9lcyBub3QgYWZmZWN0IGFueSBldmVudCBsaXN0ZW5lcnMgaW4gdGhlIGN1cnJlbnQgbm9kZSAoY3VycmVudFRhcmdldCkuIEluIGNvbnRyYXN0LFxuICAgICAgICAgKiB0aGUge3sjY3Jvc3NMaW5rIFwiQmFzZUV2ZW50L3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjptZXRob2RcIn19e3svY3Jvc3NMaW5rfX0gbWV0aG9kIHByZXZlbnRzIHByb2Nlc3NpbmdcbiAgICAgICAgICogb2YgZXZlbnQgbGlzdGVuZXJzIGluIGJvdGggdGhlIGN1cnJlbnQgbm9kZSBhbmQgc3Vic2VxdWVudCBub2Rlcy4gQWRkaXRpb25hbCBjYWxscyB0byB0aGlzIG1ldGhvZCBoYXZlIG5vIGVmZmVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJldmVudHMgcHJvY2Vzc2luZyBvZiBhbnkgZXZlbnQgbGlzdGVuZXJzIGluIHRoZSBjdXJyZW50IG5vZGUgYW5kIGFueSBzdWJzZXF1ZW50IG5vZGVzIGluIHRoZSBldmVudCBmbG93LlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCB0YWtlcyBlZmZlY3QgaW1tZWRpYXRlbHksIGFuZCBpdCBhZmZlY3RzIGV2ZW50IGxpc3RlbmVycyBpbiB0aGUgY3VycmVudCBub2RlLiBJbiBjb250cmFzdCxcbiAgICAgICAgICogdGhlIHt7I2Nyb3NzTGluayBcIkJhc2VFdmVudC9zdG9wUHJvcGFnYXRpb246bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319IG1ldGhvZCBkb2Vzbid0IHRha2UgZWZmZWN0IHVudGlsXG4gICAgICAgICAqIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzIGluIHRoZSBjdXJyZW50IG5vZGUgZmluaXNoIHByb2Nlc3NpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2Qgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEdXBsaWNhdGVzIGFuIGluc3RhbmNlIG9mIGFuIEJhc2VFdmVudCBzdWJjbGFzcy5cbiAgICAgICAgICpcbiAgICAgICAgICogUmV0dXJucyBhIG5ldyBCYXNlRXZlbnQgb2JqZWN0IHRoYXQgaXMgYSBjb3B5IG9mIHRoZSBvcmlnaW5hbCBpbnN0YW5jZSBvZiB0aGUgQmFzZUV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIG5ldyBCYXNlRXZlbnQgb2JqZWN0IGluY2x1ZGVzIGFsbCB0aGUgcHJvcGVydGllcyBvZiB0aGUgb3JpZ2luYWwuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgY2xvbmVcbiAgICAgICAgICogQHJldHVybnMge0Jhc2VFdmVudH1cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgbGV0IGNsb25lT2ZFdmVudCA9IGV2ZW50LmNsb25lKCk7XG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNsb25lZEJhc2VNb2RlbCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMudHlwZSwgdGhpcy5idWJibGVzLCB0aGlzLmNhbmNlbGFibGUsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkQmFzZU1vZGVsW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsb25lZEJhc2VNb2RlbDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBCYXNlRXZlbnQuQUNUSVZBVEUgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYW4gYWN0aXZhdGUgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXZlbnQgQUNUSVZBVEVcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuQUNUSVZBVEUgPSAnQmFzZUV2ZW50LmFjdGl2YXRlJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBCYXNlRXZlbnQuQURERUQgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYW4gYWRkZWQgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXZlbnQgQURERURcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuQURERUQgPSAnQmFzZUV2ZW50LmFkZGVkJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBCYXNlRXZlbnQuQURERURfVE9fU1RBR0UgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYW4gYWRkZWRUb1N0YWdlIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IEFEREVEX1RPX1NUQUdFXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LkFEREVEX1RPX1NUQUdFID0gJ0Jhc2VFdmVudC5hZGRlZFRvU3RhZ2UnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEJhc2VFdmVudC5DQU5DRUwgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYSBjYW5jZWwgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXZlbnQgQ0FOQ0VMXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LkNBTkNFTCA9ICdCYXNlRXZlbnQuY2FuY2VsJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBCYXNlRXZlbnQuQ0hBTkdFIGNvbnN0YW50IGRlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGEgY2hhbmdlIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IENIQU5HRVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIEJhc2VFdmVudC5DSEFOR0UgPSAnQmFzZUV2ZW50LmNoYW5nZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50LkNMRUFSIGNvbnN0YW50IGRlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGEgY2xlYXIgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXZlbnQgQ0xFQVJcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuQ0xFQVIgPSAnQmFzZUV2ZW50LmNsZWFyJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBCYXNlRXZlbnQuQ0xPU0UgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYSBjbG9zZSBldmVudCBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBDTE9TRVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIEJhc2VFdmVudC5DTE9TRSA9ICdCYXNlRXZlbnQuY2xvc2UnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEJhc2VFdmVudC5DTE9TSU5HIGNvbnN0YW50IGRlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGEgY2xvc2luZyBldmVudCBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBDTE9TSU5HXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LkNMT1NJTkcgPSAnQmFzZUV2ZW50LmNsb3NpbmcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEJhc2VFdmVudC5DT01QTEVURSBjb25zdGFudCBkZWZpbmVzIHRoZSB2YWx1ZSBvZiB0aGUgdHlwZSBwcm9wZXJ0eSBvZiBhIGNvbXBsZXRlIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IENPTVBMRVRFXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LkNPTVBMRVRFID0gJ0Jhc2VFdmVudC5jb21wbGV0ZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50LkNPTk5FQ1QgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYSBjb25uZWN0IGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IENPTk5FQ1RcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuQ09OTkVDVCA9ICdCYXNlRXZlbnQuY29ubmVjdCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmVzIHRoZSB2YWx1ZSBvZiB0aGUgdHlwZSBwcm9wZXJ0eSBvZiBhIGNvcHkgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXZlbnQgQ09QWVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIEJhc2VFdmVudC5DT1BZID0gJ0Jhc2VFdmVudC5jb3B5JztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGEgY3V0IGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IENVVFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIEJhc2VFdmVudC5DVVQgPSAnQmFzZUV2ZW50LmN1dCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50LkRFQUNUSVZBVEUgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYSBkZWFjdGl2YXRlIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IERFQUNUSVZBVEVcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuREVBQ1RJVkFURSA9ICdCYXNlRXZlbnQuZGVhY3RpdmF0ZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50LkRJU1BMQVlJTkcgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYSBkaXNwbGF5aW5nIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IERJU1BMQVlJTkdcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuRElTUExBWUlORyA9ICdCYXNlRXZlbnQuZGlzcGxheWluZyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50LkVOVEVSX0ZSQU1FIGNvbnN0YW50IGRlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGFuIGVudGVyRnJhbWUgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXZlbnQgRU5URVJfRlJBTUVcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuRU5URVJfRlJBTUUgPSAnQmFzZUV2ZW50LmVudGVyRnJhbWUnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEJhc2VFdmVudC5FWElUX0ZSQU1FIGNvbnN0YW50IGRlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGFuIGV4aXRGcmFtZSBldmVudCBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBFWElUX0ZSQU1FXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LkVYSVRfRlJBTUUgPSAnQmFzZUV2ZW50LmV4aXRGcmFtZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50LkVYSVRJTkcgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYW4gZXhpdGluZyBldmVudCBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBFWElUSU5HXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LkVYSVRJTkcgPSAnQmFzZUV2ZW50LmV4aXRpbmcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEJhc2VFdmVudC5GVUxMX1NDUkVFTiBjb25zdGFudCBkZWZpbmVzIHRoZSB2YWx1ZSBvZiB0aGUgdHlwZSBwcm9wZXJ0eSBvZiBhIGZ1bGxTY3JlZW4gZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXZlbnQgRlVMTFNDUkVFTlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIEJhc2VFdmVudC5GVUxMU0NSRUVOID0gJ0Jhc2VFdmVudC5mdWxsU2NyZWVuJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBCYXNlRXZlbnQuSU5JVCBjb25zdGFudCBkZWZpbmVzIHRoZSB2YWx1ZSBvZiB0aGUgdHlwZSBwcm9wZXJ0eSBvZiBhbiBpbml0IGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IElOSVRcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuSU5JVCA9ICdCYXNlRXZlbnQuaW5pdCc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50Lk5FVFdPUktfQ0hBTkdFIGNvbnN0YW50IGRlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGEgbmV0d29ya0NoYW5nZSBldmVudCBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBORVRXT1JLX0NIQU5HRVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIEJhc2VFdmVudC5ORVRXT1JLX0NIQU5HRSA9ICdCYXNlRXZlbnQubmV0d29ya0NoYW5nZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50Lk9QRU4gY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYW4gb3BlbiBldmVudCBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBPUEVOXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50Lk9QRU4gPSAnQmFzZUV2ZW50Lm9wZW4nO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEJhc2VFdmVudC5QQVNURSBjb25zdGFudCBkZWZpbmVzIHRoZSB2YWx1ZSBvZiB0aGUgdHlwZSBwcm9wZXJ0eSBvZiBhIHBhc3RlIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IFBBU1RFXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LlBBU1RFID0gJ0Jhc2VFdmVudC5wYXN0ZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50LlBSRVBBUklORyBjb25zdGFudCBkZWZpbmVzIHRoZSB2YWx1ZSBvZiB0aGUgdHlwZSBwcm9wZXJ0eSBvZiBhIHByZXBhcmluZyBldmVudCBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBQUkVQQVJJTkdcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuUFJFUEFSSU5HID0gJ0Jhc2VFdmVudC5wcmVwYXJpbmcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEJhc2VFdmVudC5SRU1PVkVEIGNvbnN0YW50IGRlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGEgcmVtb3ZlZCBldmVudCBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBldmVudCBSRU1PVkVEXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LlJFTU9WRUQgPSAnQmFzZUV2ZW50LnJlbW92ZWQnO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEJhc2VFdmVudC5SRU5ERVIgY29uc3RhbnQgZGVmaW5lcyB0aGUgdmFsdWUgb2YgdGhlIHR5cGUgcHJvcGVydHkgb2YgYSByZW5kZXIgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXZlbnQgUkVOREVSXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgQmFzZUV2ZW50LlJFTkRFUiA9ICdCYXNlRXZlbnQucmVuZGVyJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBCYXNlRXZlbnQuUkVTSVpFIGNvbnN0YW50IGRlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGEgcmVzaXplIGV2ZW50IG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV2ZW50IFJFU0laRVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIEJhc2VFdmVudC5SRVNJWkUgPSAnQmFzZUV2ZW50LnJlc2l6ZSc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgQmFzZUV2ZW50LlNFTEVDVEVEIGNvbnN0YW50IGRlZmluZXMgdGhlIHZhbHVlIG9mIHRoZSB0eXBlIHByb3BlcnR5IG9mIGEgc2VsZWN0ZWQgZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXZlbnQgU0VMRUNURURcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBCYXNlRXZlbnQuU0VMRUNURUQgPSAnQmFzZUV2ZW50LnNlbGVjdGVkJztcbiAgICAgICAgcmV0dXJuIEJhc2VFdmVudDtcbiAgICB9KShCYXNlT2JqZWN0XzEuZGVmYXVsdCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGV4cG9ydHMuZGVmYXVsdCA9IEJhc2VFdmVudDtcbn0pO1xuIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIHYgPSBmYWN0b3J5KHJlcXVpcmUsIGV4cG9ydHMpOyBpZiAodiAhPT0gdW5kZWZpbmVkKSBtb2R1bGUuZXhwb3J0cyA9IHY7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgJy4vRXZlbnREaXNwYXRjaGVyJywgJy4vQmFzZUV2ZW50J10sIGZhY3RvcnkpO1xuICAgIH1cbn0pKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgdmFyIEV2ZW50RGlzcGF0Y2hlcl8xID0gcmVxdWlyZSgnLi9FdmVudERpc3BhdGNoZXInKTtcbiAgICB2YXIgQmFzZUV2ZW50XzEgPSByZXF1aXJlKCcuL0Jhc2VFdmVudCcpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50QnJva2VyIGlzIGEgc2ltcGxlIHB1Ymxpc2ggYW5kIHN1YnNjcmliZSBzdGF0aWMgY2xhc3MgdGhhdCB5b3UgY2FuIHVzZSB0byBmaXJlIGFuZCByZWNlaXZlIG5vdGlmaWNhdGlvbnMuXG4gICAgICogTG9vc2VseSBjb3VwbGVkIGV2ZW50IGhhbmRsaW5nLCB0aGUgc3Vic2NyaWJlciBkb2VzIG5vdCBrbm93IHRoZSBwdWJsaXNoZXIuIEJvdGggb2YgdGhlbSBvbmx5IG5lZWQgdG8ga25vdyB0aGUgZXZlbnQgdHlwZS5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBFdmVudEJyb2tlclxuICAgICAqIEBtb2R1bGUgU3RydWN0dXJlSlNcbiAgICAgKiBAc3VibW9kdWxlIGV2ZW50XG4gICAgICogQHJlcXVpcmVzIEV2ZW50RGlzcGF0Y2hlclxuICAgICAqIEByZXF1aXJlcyBCYXNlRXZlbnRcbiAgICAgKiBAc3RhdGljXG4gICAgICogQGF1dGhvciBSb2JlcnQgUy4gKHd3dy5jb2RlQmVsdC5jb20pXG4gICAgICovXG4gICAgdmFyIEV2ZW50QnJva2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRXZlbnRCcm9rZXIoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tFdmVudEJyb2tlcl0gRG8gbm90IGluc3RhbnRpYXRlIHRoZSBFdmVudEJyb2tlciBjbGFzcyBiZWNhdXNlIGl0IGlzIGEgc3RhdGljIGNsYXNzLicpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb2JqZWN0IHdpdGggYW4gRXZlbnRCcm9rZXIgb2JqZWN0IHNvIHRoYXQgdGhlIGxpc3RlbmVyIHJlY2VpdmVzIG5vdGlmaWNhdGlvbiBvZiBhbiBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBhZGRFdmVudExpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIHtTdHJpbmd9IFRoZSB0eXBlIG9mIGV2ZW50LlxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgdGhlIGV2ZW50LiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCByZWNlaXZlIGEge3sjY3Jvc3NMaW5rIFwiQmFzZUV2ZW50XCJ9fXt7L2Nyb3NzTGlua319IG9iamVjdCBvciBjdXN0b20gZXZlbnQgdGhhdCBleHRlbmRzIHRoZSB7eyNjcm9zc0xpbmsgXCJCYXNlRXZlbnRcIn19e3svY3Jvc3NMaW5rfX0gY2xhc3MuXG4gICAgICAgICAqIEBwYXJhbSBzY29wZSB7YW55fSBUaGUgc2NvcGUgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0gW3ByaW9yaXR5PTBdIHtpbnR9IEluZmx1ZW5jZXMgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBsaXN0ZW5lcnMgYXJlIGNhbGxlZC4gTGlzdGVuZXJzIHdpdGggbG93ZXIgcHJpb3JpdGllcyBhcmUgY2FsbGVkIGFmdGVyIG9uZXMgd2l0aCBoaWdoZXIgcHJpb3JpdGllcy5cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICBFdmVudEJyb2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9oYW5kbGVyTWV0aG9kLCB0aGlzKTtcbiAgICAgICAgICogICAgIC8vIEV4YW1wbGUgb2YgdXNpbmcgYSBjb25zdGFudCBldmVudCB0eXBlLlxuICAgICAgICAgKiAgICAgRXZlbnRCcm9rZXIuYWRkRXZlbnRMaXN0ZW5lcihCYXNlRXZlbnQuQ0hBTkdFLCB0aGlzLl9oYW5kbGVyTWV0aG9kLCB0aGlzKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIFRoZSBldmVudCBwYXNzZWQgdG8gdGhlIG1ldGhvZCB3aWxsIGFsd2F5cyBiZSBhIEJhc2VFdmVudCBvYmplY3QuXG4gICAgICAgICAqICAgICBfaGFuZGxlck1ldGhvZChldmVudCkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kYXRhKTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50QnJva2VyLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2ssIHNjb3BlLCBwcmlvcml0eSkge1xuICAgICAgICAgICAgaWYgKHByaW9yaXR5ID09PSB2b2lkIDApIHsgcHJpb3JpdHkgPSAwOyB9XG4gICAgICAgICAgICBFdmVudEJyb2tlci5fZXZlbnREaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIHNjb3BlLCBwcmlvcml0eSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb2JqZWN0IG9uY2Ugd2l0aCBhbiBFdmVudERpc3BhdGNoZXIgb2JqZWN0IHNvIHRoZSBsaXN0ZW5lciB3aWxsIHJlY2VpdmUgdGhlIG5vdGlmaWNhdGlvbiBvZiBhbiBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBhZGRFdmVudExpc3RlbmVyT25jZVxuICAgICAgICAgKiBAcGFyYW0gdHlwZSB7U3RyaW5nfSBUaGUgdHlwZSBvZiBldmVudC5cbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIHRoZSBldmVudC4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSBhIHt7I2Nyb3NzTGluayBcIkJhc2VFdmVudFwifX17ey9jcm9zc0xpbmt9fSBvYmplY3Qgb3IgY3VzdG9tIGV2ZW50IHRoYXQgZXh0ZW5kcyB0aGUge3sjY3Jvc3NMaW5rIFwiQmFzZUV2ZW50XCJ9fXt7L2Nyb3NzTGlua319IGNsYXNzLlxuICAgICAgICAgKiBAcGFyYW0gc2NvcGUge2FueX0gVGhlIHNjb3BlIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIFtwcmlvcml0eT0wXSB7aW50fSBJbmZsdWVuY2VzIHRoZSBvcmRlciBpbiB3aGljaCB0aGUgbGlzdGVuZXJzIGFyZSBjYWxsZWQuIExpc3RlbmVycyB3aXRoIGxvd2VyIHByaW9yaXRpZXMgYXJlIGNhbGxlZCBhZnRlciBvbmVzIHdpdGggaGlnaGVyIHByaW9yaXRpZXMuXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgRXZlbnRCcm9rZXIuYWRkRXZlbnRMaXN0ZW5lck9uY2UoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZXJNZXRob2QsIHRoaXMpO1xuICAgICAgICAgKiAgICAgLy8gRXhhbXBsZSBvZiB1c2luZyBhIGNvbnN0YW50IGV2ZW50IHR5cGUuXG4gICAgICAgICAqICAgICBFdmVudEJyb2tlci5hZGRFdmVudExpc3RlbmVyT25jZShCYXNlRXZlbnQuQ0hBTkdFLCB0aGlzLl9oYW5kbGVyTWV0aG9kLCB0aGlzKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIFRoZSBldmVudCBwYXNzZWQgdG8gdGhlIG1ldGhvZCB3aWxsIGFsd2F5cyBiZSBhIEJhc2VFdmVudCBvYmplY3QuXG4gICAgICAgICAqICAgICBfaGFuZGxlck1ldGhvZChldmVudCkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5kYXRhKTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50QnJva2VyLmFkZEV2ZW50TGlzdGVuZXJPbmNlID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrLCBzY29wZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGlmIChwcmlvcml0eSA9PT0gdm9pZCAwKSB7IHByaW9yaXR5ID0gMDsgfVxuICAgICAgICAgICAgRXZlbnRCcm9rZXIuX2V2ZW50RGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyT25jZSh0eXBlLCBjYWxsYmFjaywgc2NvcGUsIHByaW9yaXR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYSBzcGVjaWZpZWQgbGlzdGVuZXIgZnJvbSB0aGUgRXZlbnRCcm9rZXIgb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICogQHBhcmFtIHR5cGUge1N0cmluZ30gVGhlIHR5cGUgb2YgZXZlbnQuXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259IFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSByZW1vdmVkLlxuICAgICAgICAgKiBAcGFyYW0gc2NvcGUge2FueX0gVGhlIHNjb3BlIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSByZW1vdmVkLlxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgIEV2ZW50QnJva2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZXJNZXRob2QsIHRoaXMpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgRXZlbnRCcm9rZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihCYXNlRXZlbnQuQ0hBTkdFLCB0aGlzLl9oYW5kbGVyTWV0aG9kLCB0aGlzKTtcbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50QnJva2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgICAgICAgICBFdmVudEJyb2tlci5fZXZlbnREaXNwYXRjaGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIHNjb3BlKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgd2F5IHRvIGxpc3RlbiBmb3IgbXVsdGlwbGUgZXZlbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBvbmx5IGxpc3RlbmluZyBmb3Igb25lIGV2ZW50IHVzZSB7eyNjcm9zc0xpbmsgXCJFdmVudEJyb2tlci9hZGRFdmVudExpc3RlbmVyOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fS5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCB3YWl0Rm9yXG4gICAgICAgICAqIEBwYXJhbSBldmVudFR5cGVzIHtBcnJheTxzdHJpbmc+fSBBIGxpc3Qgb2YgZXZlbnQgdHlwZXMgeW91IGFyZSB3YWl0aW5nIGZvci5cbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiBhbGwgZXZlbnQgdHlwZXMgYXJlXG4gICAgICAgICAqIEBwYXJhbSBzY29wZSB7YW55fSBUaGUgc2NvcGUgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgIEV2ZW50QnJva2VyLndhaXRGb3IoWydzb21lRXZlbnQnLCAnYW5vdGhlckV2ZW50JywgQ3VzdG9tRXZlbnQuQ0hBTkdFXSwgdGhpcy5faGFuZGxlck1ldGhvZCwgdGhpcyk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBfaGFuZGxlck1ldGhvZChldmVudHMpIHtcbiAgICAgICAgICogICAgICAgICAgLy8gQW4gYXJyYXkgb2YgdGhlIGV2ZW50IG9iamVjdHMgeW91IHdhaXRlZCBmb3IuXG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqL1xuICAgICAgICBFdmVudEJyb2tlci53YWl0Rm9yID0gZnVuY3Rpb24gKGV2ZW50VHlwZXMsIGNhbGxiYWNrLCBzY29wZSkge1xuICAgICAgICAgICAgRXZlbnRCcm9rZXIuX3dhaXRGb3JMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZXM6IGV2ZW50VHlwZXMsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrU2NvcGU6IHNjb3BlLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICAgICAgb25jZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSB3YXkgdG8gbGlzdGVuIGZvciBtdWx0aXBsZSBldmVudHMuIE9uY2UgYWxsIGV2ZW50cyBhbGwgYXJlIHRyaWdnZXJlZCB0aGlzIGxpc3RlbmVyIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogSWYgb25seSBsaXN0ZW5pbmcgZm9yIG9uZSBldmVudCB1c2Uge3sjY3Jvc3NMaW5rIFwiRXZlbnRCcm9rZXIvYWRkRXZlbnRMaXN0ZW5lck9uY2U6bWV0aG9kXCJ9fXt7L2Nyb3NzTGlua319LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHdhaXRGb3JPbmNlXG4gICAgICAgICAqIEBwYXJhbSBldmVudFR5cGVzIHtBcnJheTxzdHJpbmc+fSBBIGxpc3Qgb2YgZXZlbnQgdHlwZXMgeW91IGFyZSB3YWl0aW5nIGZvci5cbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiBhbGwgZXZlbnQgdHlwZXMgYXJlXG4gICAgICAgICAqIEBwYXJhbSBzY29wZSB7YW55fSBUaGUgc2NvcGUgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgIEV2ZW50QnJva2VyLndhaXRGb3JPbmNlKFsnc29tZUV2ZW50JywgJ2Fub3RoZXJFdmVudCcsIEN1c3RvbUV2ZW50LkNIQU5HRV0sIHRoaXMuX2hhbmRsZXJNZXRob2QsIHRoaXMpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgX2hhbmRsZXJNZXRob2QoZXZlbnRzKSB7XG4gICAgICAgICAqICAgICAgICAgIC8vIEFuIGFycmF5IG9mIHRoZSBldmVudCBvYmplY3RzIHlvdSB3YWl0ZWQgZm9yLlxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKi9cbiAgICAgICAgRXZlbnRCcm9rZXIud2FpdEZvck9uY2UgPSBmdW5jdGlvbiAoZXZlbnRUeXBlcywgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgICAgICAgICBFdmVudEJyb2tlci5fd2FpdEZvckxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlczogZXZlbnRUeXBlcyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tTY29wZTogc2NvcGUsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgd2F5IHRvIGxpc3RlbiBmb3IgbXVsdGlwbGUgZXZlbnRzLiBPbmNlIGFsbCBldmVudHMgYWxsIGFyZSB0cmlnZ2VyZWQgaXQgd2lsbCBubyBsb25nZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZW1vdmVXYWl0Rm9yXG4gICAgICAgICAqIEBwYXJhbSBldmVudFR5cGVzIHtBcnJheTxzdHJpbmc+fSBBIGxpc3Qgb2YgZXZlbnQgdHlwZXMgeW91IGFyZSB3YWl0aW5nIGZvci5cbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiBhbGwgZXZlbnQgdHlwZXMgYXJlXG4gICAgICAgICAqIEBwYXJhbSBzY29wZSB7YW55fSBUaGUgc2NvcGUgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgIEV2ZW50QnJva2VyLnJlbW92ZVdhaXRGb3IoWydzb21lRXZlbnQnLCAnYW5vdGhlckV2ZW50JywgQ3VzdG9tRXZlbnQuQ0hBTkdFXSwgdGhpcy5faGFuZGxlck1ldGhvZCwgdGhpcyk7XG4gICAgICAgICAqL1xuICAgICAgICBFdmVudEJyb2tlci5yZW1vdmVXYWl0Rm9yID0gZnVuY3Rpb24gKGV2ZW50VHlwZXMsIGNhbGxiYWNrLCBzY29wZSkge1xuICAgICAgICAgICAgdmFyIHdhaXRGb3JPYmplY3Q7XG4gICAgICAgICAgICBmb3IgKHZhciBpXzEgPSBFdmVudEJyb2tlci5fd2FpdEZvckxpc3QubGVuZ3RoIC0gMTsgaV8xID49IDA7IGlfMS0tKSB7XG4gICAgICAgICAgICAgICAgd2FpdEZvck9iamVjdCA9IEV2ZW50QnJva2VyLl93YWl0Rm9yTGlzdFtpXzFdO1xuICAgICAgICAgICAgICAgIGlmICh3YWl0Rm9yT2JqZWN0LmV2ZW50VHlwZXMudG9TdHJpbmcoKSA9PT0gZXZlbnRUeXBlcy50b1N0cmluZygpICYmIHdhaXRGb3JPYmplY3QuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmIHdhaXRGb3JPYmplY3QuY2FsbGJhY2tTY29wZSA9PT0gc2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRCcm9rZXIuX3dhaXRGb3JMaXN0LnNwbGljZShpXzEsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BhdGNoZXMgYW4gZXZlbnQgd2l0aGluIHRoZSBFdmVudEJyb2tlciBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgZGlzcGF0Y2hFdmVudFxuICAgICAgICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ3xCYXNlRXZlbnR9IFRoZSBFdmVudCBvYmplY3Qgb3IgZXZlbnQgdHlwZSBzdHJpbmcgeW91IHdhbnQgdG8gZGlzcGF0Y2guXG4gICAgICAgICAqIEBwYXJhbSBbZGF0YT1udWxsXSB7YW55fSBUaGUgb3B0aW9uYWwgZGF0YSB5b3Ugd2FudCB0byBzZW5kIHdpdGggdGhlIGV2ZW50LiBEbyBub3QgdXNlIHRoaXMgcGFyYW1ldGVyIGlmIHlvdSBhcmUgcGFzc2luZyBpbiBhIHt7I2Nyb3NzTGluayBcIkJhc2VFdmVudFwifX17ey9jcm9zc0xpbmt9fS5cbiAgICAgICAgICogQHBhcmFtIFtzY29wZT1udWxsXSB7YW55fSBZb3UgY2FuIG9wdGlvbmFsbHkgcGFzcyBpbiB0aGUgdGFyZ2V0IG9mIHRoZSBvYmplY3QgdGhhdCBkaXNwYXRjaGVkIHRoZSBnbG9iYWwgZXZlbnQuIFNpbmNlIHt7I2Nyb3NzTGluayBcIkV2ZW50QnJva2VyXCJ9fXt7L2Nyb3NzTGlua319XG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIEV2ZW50QnJva2VyLmRpc3BhdGNoRXZlbnQoJ2NoYW5nZScpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIC8vIEV4YW1wbGU6IFNlbmRpbmcgZGF0YSB3aXRoIHRoZSBldmVudC5cbiAgICAgICAgICogICAgICBFdmVudEJyb2tlci5kaXNwYXRjaEV2ZW50KCdjaGFuZ2UnLCB7c29tZTogJ2RhdGEnfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgLy8gRXhhbXBsZTogU2VuZGluZyBhIEJhc2VFdmVudCBvciBjdXN0b20gZXZlbnQgb2JqZWN0LlxuICAgICAgICAgKiAgICAgIGxldCBldmVudCA9IG5ldyBCYXNlRXZlbnQoQmFzZUV2ZW50LkNIQU5HRSk7XG4gICAgICAgICAqICAgICAgZXZlbnQuZGF0YSA9IHtzb21lOiAnZGF0YSd9O1xuICAgICAgICAgKiAgICAgIEV2ZW50QnJva2VyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgKi9cbiAgICAgICAgRXZlbnRCcm9rZXIuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBkYXRhLCBzY29wZSkge1xuICAgICAgICAgICAgaWYgKGRhdGEgPT09IHZvaWQgMCkgeyBkYXRhID0gbnVsbDsgfVxuICAgICAgICAgICAgaWYgKHNjb3BlID09PSB2b2lkIDApIHsgc2NvcGUgPSBFdmVudEJyb2tlcjsgfVxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gdHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSBuZXcgQmFzZUV2ZW50XzEuZGVmYXVsdCh0eXBlLCBmYWxzZSwgZmFsc2UsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0ID0gc2NvcGU7XG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0ID0gc2NvcGU7XG4gICAgICAgICAgICBFdmVudEJyb2tlci5fZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgRXZlbnRCcm9rZXIuX2Rpc3BhdGNoV2FpdEZvcihldmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGRpc3BhdGNoIGV2ZW50cyBvbiB0aGUgd2FpdEZvck9iamVjdCBvYmplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIF9kaXNwYXRjaFdhaXRGb3JcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgRXZlbnRCcm9rZXIuX2Rpc3BhdGNoV2FpdEZvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHdhaXRGb3JPYmplY3Q7XG4gICAgICAgICAgICB2YXIgZXZlbnRUeXBlSW5kZXg7XG4gICAgICAgICAgICBmb3IgKHZhciBpXzIgPSBFdmVudEJyb2tlci5fd2FpdEZvckxpc3QubGVuZ3RoIC0gMTsgaV8yID49IDA7IGlfMi0tKSB7XG4gICAgICAgICAgICAgICAgd2FpdEZvck9iamVjdCA9IEV2ZW50QnJva2VyLl93YWl0Rm9yTGlzdFtpXzJdO1xuICAgICAgICAgICAgICAgIGV2ZW50VHlwZUluZGV4ID0gd2FpdEZvck9iamVjdC5ldmVudFR5cGVzLmluZGV4T2YoZXZlbnQudHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FpdEZvck9iamVjdC5ldmVudHNbZXZlbnRUeXBlSW5kZXhdID0gZXZlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh3YWl0Rm9yT2JqZWN0LmV2ZW50VHlwZXMubGVuZ3RoID09PSBPYmplY3Qua2V5cyh3YWl0Rm9yT2JqZWN0LmV2ZW50cykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhaXRGb3JPYmplY3QuY2FsbGJhY2suY2FsbCh3YWl0Rm9yT2JqZWN0LnNjb3BlLCB3YWl0Rm9yT2JqZWN0LmV2ZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIHdhaXRGb3JPYmplY3QuZXZlbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvbmNlIHZhbHVlIGlzIHRydWUgd2Ugd2FudCB0byByZW1vdmUgdGhlIGxpc3RlbmVyIHJpZ2h0IGFmdGVyIHRoaXMgY2FsbGJhY2sgd2FzIGNhbGxlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhaXRGb3JPYmplY3Qub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRCcm9rZXIuX3dhaXRGb3JMaXN0LnNwbGljZShpXzIsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgaWYgRXZlbnRCcm9rZXIgaGFzIGEgc3BlY2lmaWMgZXZlbnQgbGlzdGVuZXIgYWxyZWFkeSBhZGRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBoYXNFdmVudExpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIHtTdHJpbmd9IFRoZSB0eXBlIG9mIGV2ZW50LlxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufSBUaGUgbGlzdGVuZXIgbWV0aG9kIHRvIGNhbGwuXG4gICAgICAgICAqIEBwYXJhbSBzY29wZSB7YW55fSBUaGUgc2NvcGUgb2YgdGhlIGxpc3RlbmVyIG9iamVjdC5cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgRXZlbnRCcm9rZXIuaGFzRXZlbnRMaXN0ZW5lcihCYXNlRXZlbnQuQ0hBTkdFLCB0aGlzLl9oYW5kbGVyTWV0aG9kLCB0aGlzKTtcbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50QnJva2VyLmhhc0V2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgICAgICAgICByZXR1cm4gRXZlbnRCcm9rZXIuX2V2ZW50RGlzcGF0Y2hlci5oYXNFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrLCBzY29wZSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZXMgYSBzdHJpbmcgb3V0cHV0IG9mIGV2ZW50IGxpc3RlbmVycyBmb3IgYSBnaXZlbiBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgZ2V0RXZlbnRMaXN0ZW5lcnNcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICBFdmVudEJyb2tlci5nZXRFdmVudExpc3RlbmVycygpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIC8vIFtDbGFzc05hbWVdIGlzIGxpc3RlbiBmb3IgJ0Jhc2VFdmVudC5jaGFuZ2UnIGV2ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgRXZlbnRCcm9rZXIuZ2V0RXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gRXZlbnRCcm9rZXIuX2V2ZW50RGlzcGF0Y2hlci5nZXRFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEV2ZW50RGlzcGF0Y2hlciBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBfZXZlbnREaXNwYXRjaGVyXG4gICAgICAgICAqIEB0eXBlIHtFdmVudERpc3BhdGNoZXJ9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50QnJva2VyLl9ldmVudERpc3BhdGNoZXIgPSBuZXcgRXZlbnREaXNwYXRjaGVyXzEuZGVmYXVsdCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBsaXN0IG9mIHdhaXQgZm9yIG9iamVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBfd2FpdEZvckxpc3RcbiAgICAgICAgICogQHR5cGUge0FycmF5PHtldmVudFR5cGVzOkFycmF5PHN0cmluZz4sIGNhbGxiYWNrOkZ1bmN0aW9uLCBjYWxsYmFja1Njb3BlOmFueSwgZXZlbnRzOkFycmF5PGFueT4sIG9uY2U6Ym9vbGVhbn0+fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBFdmVudEJyb2tlci5fd2FpdEZvckxpc3QgPSBbXTtcbiAgICAgICAgcmV0dXJuIEV2ZW50QnJva2VyO1xuICAgIH0pKCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50QnJva2VyO1xufSk7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciB2ID0gZmFjdG9yeShyZXF1aXJlLCBleHBvcnRzKTsgaWYgKHYgIT09IHVuZGVmaW5lZCkgbW9kdWxlLmV4cG9ydHMgPSB2O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICcuLi9PYmplY3RNYW5hZ2VyJywgJy4vQmFzZUV2ZW50J10sIGZhY3RvcnkpO1xuICAgIH1cbn0pKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgdmFyIE9iamVjdE1hbmFnZXJfMSA9IHJlcXVpcmUoJy4uL09iamVjdE1hbmFnZXInKTtcbiAgICB2YXIgQmFzZUV2ZW50XzEgPSByZXF1aXJlKCcuL0Jhc2VFdmVudCcpO1xuICAgIC8qKlxuICAgICAqIEV2ZW50RGlzcGF0Y2hlciBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIGNsYXNzZXMgdGhhdCBkaXNwYXRjaCBldmVudHMuIEl0IGlzIHRoZSBiYXNlIGNsYXNzIGZvciB0aGUge3sjY3Jvc3NMaW5rIFwiRGlzcGxheU9iamVjdENvbnRhaW5lclwifX17ey9jcm9zc0xpbmt9fSBjbGFzcy5cbiAgICAgKiBFdmVudERpc3BhdGNoZXIgcHJvdmlkZXMgbWV0aG9kcyBmb3IgbWFuYWdpbmcgcHJpb3JpdGl6ZWQgcXVldWVzIG9mIGV2ZW50IGxpc3RlbmVycyBhbmQgZGlzcGF0Y2hpbmcgZXZlbnRzLlxuICAgICAqXG4gICAgICogQGNsYXNzIEV2ZW50RGlzcGF0Y2hlclxuICAgICAqIEBleHRlbmRzIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAbW9kdWxlIFN0cnVjdHVyZUpTXG4gICAgICogQHN1Ym1vZHVsZSBldmVudFxuICAgICAqIEByZXF1aXJlcyBFeHRlbmRcbiAgICAgKiBAcmVxdWlyZXMgT2JqZWN0TWFuYWdlclxuICAgICAqIEByZXF1aXJlcyBCYXNlRXZlbnRcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAYXV0aG9yIFJvYmVydCBTLiAod3d3LmNvZGVCZWx0LmNvbSlcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqICAgICAgLy8gQW5vdGhlciB3YXkgdG8gdXNlIHRoZSBFdmVudERpc3BhdGNoZXIuXG4gICAgICogICAgICBsZXQgZXZlbnREaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcigpO1xuICAgICAqICAgICAgZXZlbnREaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZXJNZXRob2QsIHRoaXMpO1xuICAgICAqICAgICAgZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoJ2NoYW5nZScpO1xuICAgICAqL1xuICAgIHZhciBFdmVudERpc3BhdGNoZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoRXZlbnREaXNwYXRjaGVyLCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSG9sZHMgYSByZWZlcmVuY2UgdG8gYWRkZWQgbGlzdGVuZXJzLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBfbGlzdGVuZXJzXG4gICAgICAgICAgICAgKiBAdHlwZSB7QXJyYXkuPGFueT59XG4gICAgICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IG51bGw7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluZGljYXRlcyB0aGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYSBjaGlsZCBvYmplY3QuIFVzZXMgdGhlIHBhcmVudCBwcm9wZXJ0eVxuICAgICAgICAgICAgICogdG8gc3BlY2lmeSBhIHJlbGF0aXZlIHBhdGggdG8gZGlzcGxheSBvYmplY3RzIHRoYXQgYXJlIGFib3ZlIHRoZSBjdXJyZW50IGRpc3BsYXkgb2JqZWN0IGluIHRoZSBkaXNwbGF5XG4gICAgICAgICAgICAgKiBsaXN0IGhpZXJhcmNoeSBhbmQgaGVscHMgZmFjaWxpdGF0ZSBldmVudCBidWJibGluZy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJvcGVydHkgcGFyZW50XG4gICAgICAgICAgICAgKiBAdHlwZSB7YW55fVxuICAgICAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIG9iamVjdCB3aXRoIGFuIEV2ZW50RGlzcGF0Y2hlciBvYmplY3Qgc28gdGhlIGxpc3RlbmVyIHJlY2VpdmVzIG5vdGlmaWNhdGlvbiBvZiBhbiBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBhZGRFdmVudExpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIHtTdHJpbmd9IFRoZSB0eXBlIG9mIGV2ZW50LlxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgdGhlIGV2ZW50LiBUaGlzIGZ1bmN0aW9uIG11c3QgYWNjZXB0IGFuIEV2ZW50IG9iamVjdCBhcyBpdHMgb25seSBwYXJhbWV0ZXIgYW5kIG11c3QgcmV0dXJuIG5vdGhpbmcsIGFzIHRoaXMgZXhhbXBsZSBzaG93cy4gQGV4YW1wbGUgZnVuY3Rpb24oZXZlbnQ6RXZlbnQpOnZvaWRcbiAgICAgICAgICogQHBhcmFtIHNjb3BlIHthbnl9IEJpbmRzIHRoZSBzY29wZSB0byBhIHBhcnRpY3VsYXIgb2JqZWN0IChzY29wZSBpcyBiYXNpY2FsbHkgd2hhdCBcInRoaXNcIiByZWZlcnMgdG8gaW4geW91ciBmdW5jdGlvbikuIFRoaXMgY2FuIGJlIHZlcnkgdXNlZnVsIGluIEphdmFTY3JpcHQgYmVjYXVzZSBzY29wZSBpc24ndCBnZW5lcmFsbHkgbWFpbnRhaW5lZC5cbiAgICAgICAgICogQHBhcmFtIFtwcmlvcml0eT0wXSB7aW50fSBJbmZsdWVuY2VzIHRoZSBvcmRlciBpbiB3aGljaCB0aGUgbGlzdGVuZXJzIGFyZSBjYWxsZWQuIExpc3RlbmVycyB3aXRoIGxvd2VyIHByaW9yaXRpZXMgYXJlIGNhbGxlZCBhZnRlciBvbmVzIHdpdGggaGlnaGVyIHByaW9yaXRpZXMuXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGNoYWluYWJsZVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihCYXNlRXZlbnQuQ0hBTkdFLCB0aGlzLl9oYW5kbGVyTWV0aG9kLCB0aGlzKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBfaGFuZGxlck1ldGhvZChldmVudCkge1xuICAgICAgICAgKiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQgKyBcIiBzZW50IHRoZSBldmVudC5cIik7XG4gICAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnR5cGUsIGV2ZW50LmRhdGEpO1xuICAgICAgICAgKiAgICAgIH1cbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBjYWxsYmFjaywgc2NvcGUsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHkgPT09IHZvaWQgMCkgeyBwcmlvcml0eSA9IDA7IH1cbiAgICAgICAgICAgIC8vIEdldCB0aGUgbGlzdCBvZiBldmVudCBsaXN0ZW5lcnMgYnkgdGhlIGFzc29jaWF0ZWQgdHlwZSB2YWx1ZSB0aGF0IGlzIHBhc3NlZCBpbi5cbiAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICAgICAgaWYgKGxpc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbGlzdCBvZiBldmVudCBsaXN0ZW5lcnMgZG8gbm90IGV4aXN0IGZvciB0aGUgdHlwZSB2YWx1ZSBwYXNzZWQgaW4gdGhlbiBjcmVhdGUgYSBuZXcgZW1wdHkgYXJyYXkuXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gbGlzdCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcjtcbiAgICAgICAgICAgIHZhciBpID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoLS1pID4gLTEpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RbaV07XG4gICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBsaXN0ZW5lci5zY29wZSA9PT0gc2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNhbWUgY2FsbGJhY2sgYW5kIHNjb3BlIGFyZSBmb3VuZCB0aGVuIHJlbW92ZSBpdCBhbmQgYWRkIHRoZSBjdXJyZW50IG9uZSBiZWxvdy5cbiAgICAgICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAwICYmIGxpc3RlbmVyLnByaW9yaXR5IDwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBsaXN0IGFycmF5IGF0IHRoZSBpbmRleCB2YWx1ZS5cbiAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAwLCB7IGNhbGxiYWNrOiBjYWxsYmFjaywgc2NvcGU6IHNjb3BlLCBwcmlvcml0eTogcHJpb3JpdHksIG9uY2U6IGZhbHNlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgb2JqZWN0IG9uY2Ugd2l0aCBhbiBFdmVudERpc3BhdGNoZXIgb2JqZWN0IHNvIHRoZSBsaXN0ZW5lciB3aWxsIHJlY2VpdmUgdGhlIG5vdGlmaWNhdGlvbiBvZiBhbiBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBhZGRFdmVudExpc3RlbmVyT25jZVxuICAgICAgICAgKiBAcGFyYW0gdHlwZSB7U3RyaW5nfSBUaGUgdHlwZSBvZiBldmVudC5cbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIHRoZSBldmVudC4gVGhpcyBmdW5jdGlvbiBtdXN0IGFjY2VwdCBhbiBFdmVudCBvYmplY3QgYXMgaXRzIG9ubHkgcGFyYW1ldGVyIGFuZCBtdXN0IHJldHVybiBub3RoaW5nLCBhcyB0aGlzIGV4YW1wbGUgc2hvd3MuIEBleGFtcGxlIGZ1bmN0aW9uKGV2ZW50OkV2ZW50KTp2b2lkXG4gICAgICAgICAqIEBwYXJhbSBzY29wZSB7YW55fSBCaW5kcyB0aGUgc2NvcGUgdG8gYSBwYXJ0aWN1bGFyIG9iamVjdCAoc2NvcGUgaXMgYmFzaWNhbGx5IHdoYXQgXCJ0aGlzXCIgcmVmZXJzIHRvIGluIHlvdXIgZnVuY3Rpb24pLiBUaGlzIGNhbiBiZSB2ZXJ5IHVzZWZ1bCBpbiBKYXZhU2NyaXB0IGJlY2F1c2Ugc2NvcGUgaXNuJ3QgZ2VuZXJhbGx5IG1haW50YWluZWQuXG4gICAgICAgICAqIEBwYXJhbSBbcHJpb3JpdHk9MF0ge2ludH0gSW5mbHVlbmNlcyB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIGxpc3RlbmVycyBhcmUgY2FsbGVkLiBMaXN0ZW5lcnMgd2l0aCBsb3dlciBwcmlvcml0aWVzIGFyZSBjYWxsZWQgYWZ0ZXIgb25lcyB3aXRoIGhpZ2hlciBwcmlvcml0aWVzLlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBjaGFpbmFibGVcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJPbmNlKEJhc2VFdmVudC5DSEFOR0UsIHRoaXMuX2hhbmRsZXJNZXRob2QsIHRoaXMpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIF9oYW5kbGVyTWV0aG9kKGV2ZW50KSB7XG4gICAgICAgICAqICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCArIFwiIHNlbnQgdGhlIGV2ZW50LlwiKTtcbiAgICAgICAgICogICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudHlwZSwgZXZlbnQuZGF0YSk7XG4gICAgICAgICAqICAgICAgfVxuICAgICAgICAgKi9cbiAgICAgICAgRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyT25jZSA9IGZ1bmN0aW9uICh0eXBlLCBjYWxsYmFjaywgc2NvcGUsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHkgPT09IHZvaWQgMCkgeyBwcmlvcml0eSA9IDA7IH1cbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZXZlbnQgbGlzdGVuZXIgdGhlIG5vcm1hbCB3YXkuXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIHNjb3BlLCBwcmlvcml0eSk7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGV2ZW50IGxpc3RlbmVycyB3ZSBqdXN0IGFkZGVkLlxuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV07XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0WzBdO1xuICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSB2YWx1ZSB0byB0cnVlIHNvIGl0IHdpbGwgYmUgcmVtb3ZlIGFmdGVyIGRpc3BhdGNoRXZlbnQgaXMgY2FsbGVkLlxuICAgICAgICAgICAgbGlzdGVuZXIub25jZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYSBzcGVjaWZpZWQgbGlzdGVuZXIgZnJvbSB0aGUgRXZlbnREaXNwYXRjaGVyIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB0eXBlIHtTdHJpbmd9IFRoZSB0eXBlIG9mIGV2ZW50LlxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufSBUaGUgbGlzdGVuZXIgb2JqZWN0IHRvIHJlbW92ZS5cbiAgICAgICAgICogQHBhcmFtIHNjb3BlIHthbnl9IFRoZSBzY29wZSBvZiB0aGUgbGlzdGVuZXIgb2JqZWN0IHRvIGJlIHJlbW92ZWQuXG4gICAgICAgICAqIEBoaWRlIFRoaXMgd2FzIGFkZGVkIGJlY2F1c2UgaXQgd2FzIG5lZWRlZCBmb3IgdGhlIHt7I2Nyb3NzTGluayBcIkV2ZW50QnJva2VyXCJ9fXt7L2Nyb3NzTGlua319IGNsYXNzLiBUbyBrZWVwIHRoaW5ncyBjb25zaXN0ZW50IHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBjaGFpbmFibGVcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoQmFzZUV2ZW50LkNIQU5HRSwgdGhpcy5faGFuZGxlck1ldGhvZCwgdGhpcyk7XG4gICAgICAgICAqL1xuICAgICAgICBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGxpc3Qgb2YgZXZlbnQgbGlzdGVuZXJzIGJ5IHRoZSBhc3NvY2lhdGVkIHR5cGUgdmFsdWUgdGhhdCBpcyBwYXNzZWQgaW4uXG4gICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXTtcbiAgICAgICAgICAgIGlmIChsaXN0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICB2YXIgaV8xID0gbGlzdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taV8xID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGNhbGxiYWNrIGFuZCBzY29wZSBhcmUgdGhlIHNhbWUgdGhlbiByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFtpXzFdLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBsaXN0W2lfMV0uc2NvcGUgPT09IHNjb3BlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpXzEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIDxwPkRpc3BhdGNoZXMgYW4gZXZlbnQgaW50byB0aGUgZXZlbnQgZmxvdy4gVGhlIGV2ZW50IHRhcmdldCBpcyB0aGUgRXZlbnREaXNwYXRjaGVyIG9iamVjdCB1cG9uIHdoaWNoIHRoZSBkaXNwYXRjaEV2ZW50KCkgbWV0aG9kIGlzIGNhbGxlZC48L3A+XG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgZGlzcGF0Y2hFdmVudFxuICAgICAgICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ3xCYXNlRXZlbnR9IFRoZSBFdmVudCBvYmplY3Qgb3IgZXZlbnQgdHlwZSBzdHJpbmcgeW91IHdhbnQgdG8gZGlzcGF0Y2guIFlvdSBjYW4gY3JlYXRlIGN1c3RvbSBldmVudHMsIHRoZSBvbmx5IHJlcXVpcmVtZW50IGlzIGFsbCBldmVudHMgbXVzdCBleHRlbmQge3sjY3Jvc3NMaW5rIFwiQmFzZUV2ZW50XCJ9fXt7L2Nyb3NzTGlua319LlxuICAgICAgICAgKiBAcGFyYW0gW2RhdGE9bnVsbF0ge2FueX0gVGhlIG9wdGlvbmFsIGRhdGEgeW91IHdhbnQgdG8gc2VuZCB3aXRoIHRoZSBldmVudC4gRG8gbm90IHVzZSB0aGlzIHBhcmFtZXRlciBpZiB5b3UgYXJlIHBhc3NpbmcgaW4gYSB7eyNjcm9zc0xpbmsgXCJCYXNlRXZlbnRcIn19e3svY3Jvc3NMaW5rfX0uXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGNoYWluYWJsZVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2hhbmdlJyk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgLy8gRXhhbXBsZTogU2VuZGluZyBkYXRhIHdpdGggdGhlIGV2ZW50OlxuICAgICAgICAgKiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY2hhbmdlJywge3NvbWU6ICdkYXRhJ30pO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIC8vIEV4YW1wbGU6IFdpdGggYW4gZXZlbnQgb2JqZWN0XG4gICAgICAgICAqICAgICAgLy8gKGV2ZW50IHR5cGUsIGJ1YmJsaW5nIHNldCB0byB0cnVlLCBjYW5jZWxhYmxlIHNldCB0byB0cnVlIGFuZCBwYXNzaW5nIGRhdGEpIDpcbiAgICAgICAgICogICAgICBsZXQgZXZlbnQgPSBuZXcgQmFzZUV2ZW50KEJhc2VFdmVudC5DSEFOR0UsIHRydWUsIHRydWUsIHtzb21lOiAnZGF0YSd9KTtcbiAgICAgICAgICogICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIC8vIEhlcmUgaXMgYSBjb21tb24gaW5saW5lIGV2ZW50IG9iamVjdCBiZWluZyBkaXNwYXRjaGVkOlxuICAgICAgICAgKiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQmFzZUV2ZW50KEJhc2VFdmVudC5DSEFOR0UpKTtcbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uICh0eXBlLCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YSA9PT0gdm9pZCAwKSB7IGRhdGEgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSB0eXBlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBldmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IG5ldyBCYXNlRXZlbnRfMS5kZWZhdWx0KHR5cGUsIGZhbHNlLCB0cnVlLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRhcmdldCBpcyBudWxsIHRoZW4gc2V0IGl0IHRvIHRoZSBvYmplY3QgdGhhdCBkaXNwYXRjaGVkIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGxpc3Qgb2YgZXZlbnQgbGlzdGVuZXIgYnkgdGhlIGFzc29jaWF0ZWQgdHlwZSB2YWx1ZS5cbiAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO1xuICAgICAgICAgICAgaWYgKGxpc3QgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHZhciBpXzIgPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXI7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taV8yID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgY2FuY2VsYWJsZSBhbmQgaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgYXJlIHRydWUgdGhlbiBicmVhayBvdXQgb2YgdGhlIHdoaWxlIGxvb3AuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5jYW5jZWxhYmxlID09PSB0cnVlICYmIGV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RbaV8yXTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5zY29wZSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgb25jZSB2YWx1ZSBpcyB0cnVlIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBsaXN0ZW5lciByaWdodCBhZnRlciB0aGlzIGNhbGxiYWNrIHdhcyBjYWxsZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lci5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQudHlwZSwgbGlzdGVuZXIuY2FsbGJhY2ssIGxpc3RlbmVyLnNjb3BlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRGlzcGF0Y2hlcyB1cCB0aGUgY2hhaW4gb2YgY2xhc3NlcyB0aGF0IGhhdmUgYSBwYXJlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgIT0gbnVsbCAmJiBldmVudC5idWJibGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgY2FuY2VsYWJsZSBhbmQgaXNQcm9wYWdhdGlvblN0b3BwZWQgYXJlIHRydWUgdGhlbiBkb24ndCBkaXNwYXRjaCB0aGUgZXZlbnQgb24gdGhlIHBhcmVudCBvYmplY3QuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmNlbGFibGUgPT09IHRydWUgJiYgZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0aGUgY3VycmVudCBvYmplY3QgdGhhdCBpcyBjdXJyZW50bHkgcHJvY2Vzc2luZyB0aGUgZXZlbnQgKGkuZS4gZXZlbnQgYnViYmxpbmcgYXQpLlxuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIC8vIFBhc3MgdGhlIGV2ZW50IHRvIHRoZSBwYXJlbnQgKGV2ZW50IGJ1YmJsaW5nKS5cbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGhhcyBhIHNwZWNpZmljIGV2ZW50IGxpc3RlbmVyIGFscmVhZHkgYWRkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgaGFzRXZlbnRMaXN0ZW5lclxuICAgICAgICAgKiBAcGFyYW0gdHlwZSB7U3RyaW5nfSBUaGUgdHlwZSBvZiBldmVudC5cbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gVGhlIGxpc3RlbmVyIG1ldGhvZCB0byBjYWxsLlxuICAgICAgICAgKiBAcGFyYW0gc2NvcGUge2FueX0gVGhlIHNjb3BlIG9mIHRoZSBsaXN0ZW5lciBvYmplY3QuXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICB0aGlzLmhhc0V2ZW50TGlzdGVuZXIoQmFzZUV2ZW50LkNIQU5HRSwgdGhpcy5faGFuZGxlck1ldGhvZCwgdGhpcyk7XG4gICAgICAgICAqL1xuICAgICAgICBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlLmhhc0V2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXI7XG4gICAgICAgICAgICAgICAgdmFyIG51bU9mQ2FsbGJhY2tzID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpXzMgPSAwOyBpXzMgPCBudW1PZkNhbGxiYWNrczsgaV8zKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV1baV8zXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiBsaXN0ZW5lci5zY29wZSA9PT0gc2NvcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogR2VuZXJhdGVzIGEgc3RyaW5nIG91dHB1dCBvZiBldmVudCBsaXN0ZW5lcnMgZm9yIGEgZ2l2ZW4gb2JqZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGdldEV2ZW50TGlzdGVuZXJzXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAvLyBbQ2xhc3NOYW1lXSBpcyBsaXN0ZW5pbmcgZm9yIHRoZSAnQmFzZUV2ZW50LmNoYW5nZScgZXZlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBFdmVudERpc3BhdGNoZXIucHJvdG90eXBlLmdldEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICAgICAgdmFyIG51bU9mQ2FsbGJhY2tzO1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyO1xuICAgICAgICAgICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBudW1PZkNhbGxiYWNrcyA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaV80ID0gMDsgaV80IDwgbnVtT2ZDYWxsYmFja3M7IGlfNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdW2lfNF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lci5zY29wZSAmJiAodHlwZW9mIGxpc3RlbmVyLnNjb3BlLmdldFF1YWxpZmllZENsYXNzTmFtZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSAnWycgKyBsaXN0ZW5lci5zY29wZS5nZXRRdWFsaWZpZWRDbGFzc05hbWUoKSArICddJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciArPSAnW1Vua25vd25dJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCIgaXMgbGlzdGVuIGZvciAnXCIgKyB0eXBlICsgXCInIGV2ZW50LlxcblwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAb3ZlcnJpZGRlbiBCYXNlT2JqZWN0LmRlc3Ryb3lcbiAgICAgICAgICovXG4gICAgICAgIEV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBFdmVudERpc3BhdGNoZXI7XG4gICAgfSkoT2JqZWN0TWFuYWdlcl8xLmRlZmF1bHQpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBleHBvcnRzLmRlZmF1bHQgPSBFdmVudERpc3BhdGNoZXI7XG59KTtcbiIsIihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciB2ID0gZmFjdG9yeShyZXF1aXJlLCBleHBvcnRzKTsgaWYgKHYgIT09IHVuZGVmaW5lZCkgbW9kdWxlLmV4cG9ydHMgPSB2O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsICdqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfVxufSkoZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcbiAgICB2YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAgIHZhciAkZXZlbnRMaXN0ZW5lciA9ICQ7XG4gICAgLyoqXG4gICAgICogQSBiaW5kIHBvbHlmaWxsIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIGJpbmQgbWV0aG9kLlxuICAgICAqL1xuICAgIGlmICghRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQpIHtcbiAgICAgICAgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAob1RoaXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vIGNsb3Nlc3QgdGhpbmcgcG9zc2libGUgdG8gdGhlIEVDTUFTY3JpcHQgNSBpbnRlcm5hbCBJc0NhbGxhYmxlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgLSB3aGF0IGlzIHRyeWluZyB0byBiZSBib3VuZCBpcyBub3QgY2FsbGFibGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZUb0JpbmQgPSB0aGlzLCBmTk9QID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgfSwgZkJvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmVG9CaW5kLmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBmTk9QICYmIG9UaGlzXG4gICAgICAgICAgICAgICAgICAgID8gdGhpc1xuICAgICAgICAgICAgICAgICAgICA6IG9UaGlzLCBhQXJncy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZOT1AucHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG4gICAgICAgICAgICBmQm91bmQucHJvdG90eXBlID0gbmV3IGZOT1AoKTtcbiAgICAgICAgICAgIHJldHVybiBmQm91bmQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIGhhc2ggc3RyaW5nIGZyb20gdGhlIHN0cmluZyBiZWluZyBwYXNzZWQgaW4uIEluIHRoaXMgY2FzZSBpdCBpcyBhIGZ1bmN0aW9uIHRoYXQgaXMgY2FzdGVkIGFzIHN0cmluZyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHZhciBoYXNoQ29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgICAgIC8vIGh0dHA6Ly9lcmx5Y29kZXIuY29tLzQ5L2phdmFzY3JpcHQtaGFzaC1mdW5jdGlvbnMtdG8tY29udmVydC1zdHJpbmctaW50by1pbnRlZ2VyLWhhc2gtXG4gICAgICAgIHZhciBjaGFyYWN0ZXI7XG4gICAgICAgIHZhciBoYXNoID0gbnVsbDtcbiAgICAgICAgdmFyIHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XG4gICAgICAgIGlmIChzdHJMZW5ndGggPT0gMClcbiAgICAgICAgICAgIHJldHVybiBoYXNoO1xuICAgICAgICBmb3IgKHZhciBpXzEgPSAwOyBpXzEgPCBzdHJMZW5ndGg7IGlfMSsrKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSBzdHIuY2hhckNvZGVBdChpXzEpO1xuICAgICAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcmFjdGVyO1xuICAgICAgICAgICAgaGFzaCA9IGhhc2ggJiBoYXNoOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RyaW5nKE1hdGguYWJzKGhhc2gpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBqUXVlcnkgYWRkRXZlbnRMaXN0ZW5lciBwbHVnaW5cbiAgICAgKi9cbiAgICAkZXZlbnRMaXN0ZW5lci5mbi5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIHNlbGVjdG9yLCBkYXRhLCBjYWxsYmFjaywgc2NvcGUpIHtcbiAgICAgICAgdmFyIF9jYWxsYmFjaztcbiAgICAgICAgdmFyIF9zY29wZTtcbiAgICAgICAgdmFyIF9oYW5kbGVyO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBfY2FsbGJhY2sgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICBfc2NvcGUgPSBkYXRhO1xuICAgICAgICAgICAgICAgIF9zY29wZS5faGFuZGxlck1hcCA9IF9zY29wZS5faGFuZGxlck1hcCB8fCB7fTtcbiAgICAgICAgICAgICAgICBfaGFuZGxlciA9IF9zY29wZS5faGFuZGxlck1hcFtoYXNoQ29kZShfY2FsbGJhY2spXSA9IF9jYWxsYmFjay5iaW5kKF9zY29wZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbih0eXBlLCBfaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgX2NhbGxiYWNrID0gZGF0YTtcbiAgICAgICAgICAgICAgICBfc2NvcGUgPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICBfc2NvcGUuX2hhbmRsZXJNYXAgPSBfc2NvcGUuX2hhbmRsZXJNYXAgfHwge307XG4gICAgICAgICAgICAgICAgX2hhbmRsZXIgPSBfc2NvcGUuX2hhbmRsZXJNYXBbaGFzaENvZGUoX2NhbGxiYWNrKV0gPSBfY2FsbGJhY2suYmluZChfc2NvcGUpO1xuICAgICAgICAgICAgICAgIHRoaXMub24odHlwZSwgc2VsZWN0b3IsIF9oYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICBfY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICBfc2NvcGUgPSBzY29wZTtcbiAgICAgICAgICAgICAgICBfc2NvcGUuX2hhbmRsZXJNYXAgPSBfc2NvcGUuX2hhbmRsZXJNYXAgfHwge307XG4gICAgICAgICAgICAgICAgX2hhbmRsZXIgPSBfc2NvcGUuX2hhbmRsZXJNYXBbaGFzaENvZGUoX2NhbGxiYWNrKV0gPSBfY2FsbGJhY2suYmluZChfc2NvcGUpO1xuICAgICAgICAgICAgICAgIHRoaXMub24odHlwZSwgc2VsZWN0b3IsIGRhdGEsIF9oYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdqUXVlcnkgYWRkRXZlbnRMaXN0ZW5lciBwbHVnaW4gcmVxdWlyZXMgYXQgbGVhc3QgMyBhcmd1bWVudHMuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgalF1ZXJ5IHJlbW92ZUV2ZW50TGlzdGVuZXIgcGx1Z2luXG4gICAgICovXG4gICAgJGV2ZW50TGlzdGVuZXIuZm4ucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBzZWxlY3RvciwgY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgICAgIHZhciBfY2FsbGJhY2s7XG4gICAgICAgIHZhciBfc2NvcGU7XG4gICAgICAgIHZhciBfaGFuZGxlcjtcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX2NhbGxiYWNrID0gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgX3Njb3BlID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgX3Njb3BlLl9oYW5kbGVyTWFwID0gX3Njb3BlLl9oYW5kbGVyTWFwIHx8IHt9O1xuICAgICAgICAgICAgICAgIF9oYW5kbGVyID0gX3Njb3BlLl9oYW5kbGVyTWFwW2hhc2hDb2RlKF9jYWxsYmFjayldO1xuICAgICAgICAgICAgICAgIHRoaXMub2ZmKHR5cGUsIF9oYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfc2NvcGUuX2hhbmRsZXJNYXBbaGFzaENvZGUoX2NhbGxiYWNrKV0gPSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIF9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIF9zY29wZSA9IHNjb3BlO1xuICAgICAgICAgICAgICAgIF9zY29wZS5faGFuZGxlck1hcCA9IF9zY29wZS5faGFuZGxlck1hcCB8fCB7fTtcbiAgICAgICAgICAgICAgICBfaGFuZGxlciA9IF9zY29wZS5faGFuZGxlck1hcFtoYXNoQ29kZShfY2FsbGJhY2spXTtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZih0eXBlLCBzZWxlY3RvciwgX2hhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF9zY29wZS5faGFuZGxlck1hcFtoYXNoQ29kZShfY2FsbGJhY2spXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignalF1ZXJ5IHJlbW92ZUV2ZW50TGlzdGVuZXIgcGx1Z2luIHJlcXVpcmVzIGF0IGxlYXN0IDMgYXJndW1lbnRzLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGV4cG9ydHMuZGVmYXVsdCA9ICRldmVudExpc3RlbmVyO1xufSk7XG4iLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgdiA9IGZhY3RvcnkocmVxdWlyZSwgZXhwb3J0cyk7IGlmICh2ICE9PSB1bmRlZmluZWQpIG1vZHVsZS5leHBvcnRzID0gdjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCAnLi4vdXRpbC9VdGlsJ10sIGZhY3RvcnkpO1xuICAgIH1cbn0pKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgdmFyIFV0aWxfMSA9IHJlcXVpcmUoJy4uL3V0aWwvVXRpbCcpO1xuICAgIC8qKlxuICAgICAqIEEgaGVscGVyIGNsYXNzIHRvIGNyZWF0ZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlIHNhbWUgQ29tcG9uZW50IENsYXNzIGZyb20galF1ZXJ5IG9iamVjdCB0aGF0IGhhcyBvbmUgb3IgbW9yZSBlbGVtZW50cyBpbiBpdC5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBDb21wb25lbnRGYWN0b3J5XG4gICAgICogQG1vZHVsZSBTdHJ1Y3R1cmVKU1xuICAgICAqIEBzdWJtb2R1bGUgdXRpbFxuICAgICAqIEBhdXRob3IgUm9iZXJ0IFMuICh3d3cuY29kZUJlbHQuY29tKVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICB2YXIgQ29tcG9uZW50RmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIENvbXBvbmVudEZhY3RvcnkoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tDb21wb25lbnRGYWN0b3J5XSBEbyBub3QgaW5zdGFudGlhdGUgdGhlIENvbXBvbmVudEZhY3RvcnkgY2xhc3MgYmVjYXVzZSBpdCBpcyBhIHN0YXRpYyBjbGFzcy4nKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVGFrZXMgYSBqUXVlcnkgb2JqZWN0IHRoYXQgaGFzIG9uZSBvciBtb3JlIGVsZW1lbnRzIGluIGl0IGFuZCBwYXNzZXMgYSBzaW5nbGUgalF1ZXJ5IGVsZW1lbnQgaW50byB0aGUgY29uc3RydWN0b3Igb2YgdGhlIGNsYXNzIHRoYXQgaXMgYWxzbyBiZWluZyBwYXNzZWQgaW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICAgICAqIEBwYXJhbSAkZWxlbWVudCB7alF1ZXJ5fSBPbmUgb3IgbW9yZSBqUXVlcnkgcmVmZXJlbmNlZCBET00gZWxlbWVudHMuXG4gICAgICAgICAqIEBwYXJhbSBDb21wb25lbnRDbGFzcyB7YW55fSBUaGUgY2xhc3MgdGhhdCB5b3Ugd2FudCBpbnN0YW50aWF0ZWQuXG4gICAgICAgICAqIEBwYXJhbSBbc2NvcGU9bnVsbF0ge0Rpc3BsYXlPYmplY3RDb250YWluZXJ9IFRoaXMgc2NvcGUgKHBhcmVudCBvYmplY3QpIGlzIG5lZWRlZCB0byBpbnN0YW50aWF0ZSB0aGUgY29tcG9uZW50L3ZpZXcgd2l0aCB0aGUgdXNlIG9mIHRoZSB7eyNjcm9zc0xpbmsgXCJEaXNwbGF5T2JqZWN0Q29udGFpbmVyL2FkZENoaWxkOm1ldGhvZFwifX17ey9jcm9zc0xpbmt9fSBtZXRob2QuXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5Ljxhbnk+fSBSZXR1cm5zIGEgbGlzdCBvZiBpbnN0YW50aWF0ZWQgY29tcG9uZW50cy92aWV3cyBzbyB5b3UgY2FuIG1hbmFnZSB0aGVtIHdpdGhpbiB0aGUgQ2xhc3MgdGhhdCBjcmVhdGVkIHRoZW0uXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIENvbXBvbmVudEZhY3RvcnkuY3JlYXRlKCQoJy5qcy1saXN0JyksIFNvbWVDbGFzcywgdGhpcyk7XG4gICAgICAgICAqL1xuICAgICAgICBDb21wb25lbnRGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uICgkZWxlbWVudHMsIENvbXBvbmVudENsYXNzLCBzY29wZSkge1xuICAgICAgICAgICAgaWYgKHNjb3BlID09PSB2b2lkIDApIHsgc2NvcGUgPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudDtcbiAgICAgICAgICAgIHZhciAkZWxlbWVudDtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSAkZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHR5cGVzO1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudE5hbWU7XG4gICAgICAgICAgICBmb3IgKHZhciBpXzEgPSAwOyBpXzEgPCBsZW5ndGg7IGlfMSsrKSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQgPSAkZWxlbWVudHMuZXEoaV8xKTtcbiAgICAgICAgICAgICAgICB0eXBlcyA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtc2pzLXR5cGUnKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZXMgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGNvbXBvbmVudCBpZiB0aGVyZSBpcyBub3QgYSAnZGF0YS1zanMtdHlwZScgYXR0cmlidXRlIG9uIHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBDb21wb25lbnRGYWN0b3J5Ll9jcmVhdGVDb21wb25lbnQoJGVsZW1lbnQsIENvbXBvbmVudENsYXNzLCBzY29wZSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRWxzZSBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgJ2RhdGEtc2pzLXR5cGUnIGF0dHJpYnV0ZSB0aGVuIGdldCB0aGUgdHlwZShzKS5cbiAgICAgICAgICAgICAgICAgICAgdHlwZXMgPSB0eXBlcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnROYW1lID0gVXRpbF8xLmRlZmF1bHQuZ2V0TmFtZShDb21wb25lbnRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgY3JlYXRlIHRoZSBjb21wb25lbnQgaWYgdGhlIGNvbXBvbmVudCB0eXBlIGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlcy5pbmRleE9mKGNvbXBvbmVudE5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gQ29tcG9uZW50RmFjdG9yeS5fY3JlYXRlQ29tcG9uZW50KCRlbGVtZW50LCBDb21wb25lbnRDbGFzcywgc2NvcGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgdG8gY3JlYXRlIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgX2NyZWF0ZUNvbXBvbmVudFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgQ29tcG9uZW50RmFjdG9yeS5fY3JlYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCRlbGVtZW50LCBDb21wb25lbnRDbGFzcywgc2NvcGUpIHtcbiAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50Q2xhc3MoJGVsZW1lbnQpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGNsYXNzIG9iamVjdCBoYXMgdGhlIHNqc0lkIHByb3BlcnR5IHRoZW4gSSBhbSBhc3N1bWluZyBpdCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgRGlzcGxheU9iamVjdCBjbGFzcy5cbiAgICAgICAgICAgIGlmIChzY29wZSAhPT0gbnVsbCAmJiBjb21wb25lbnQuaGFzT3duUHJvcGVydHkoJ3Nqc0lkJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5hZGRDaGlsZChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudEZhY3Rvcnk7XG4gICAgfSkoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gQ29tcG9uZW50RmFjdG9yeTtcbn0pO1xuIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIHYgPSBmYWN0b3J5KHJlcXVpcmUsIGV4cG9ydHMpOyBpZiAodiAhPT0gdW5kZWZpbmVkKSBtb2R1bGUuZXhwb3J0cyA9IHY7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZhY3RvcnkpO1xuICAgIH1cbn0pKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIFN0cmluZ1V0aWwuLi5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBTdHJpbmdVdGlsXG4gICAgICogQG1vZHVsZSBTdHJ1Y3R1cmVKU1xuICAgICAqIEBzdWJtb2R1bGUgdXRpbFxuICAgICAqIEBhdXRob3IgUm9iZXJ0IFMuICh3d3cuY29kZUJlbHQuY29tKVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICB2YXIgU3RyaW5nVXRpbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFN0cmluZ1V0aWwoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tTdHJpbmdVdGlsXSBEbyBub3QgaW5zdGFudGlhdGUgdGhlIFN0cmluZ1V0aWwgY2xhc3MgYmVjYXVzZSBpdCBpcyBhIHN0YXRpYyBjbGFzcy4nKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgZXh0ZW5zaW9uIG5hbWUgb2ZmIHRoZSBzdHJpbmcgYmVpbmcgcGFzc2VkIGluLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGdldEV4dGVuc2lvblxuICAgICAgICAgKiBAcGFyYW0gZmlsZW5hbWUge3N0cmluZ31cbiAgICAgICAgICogQHBhcmFtIHdpdGhEb3Qge2Jvb2xlYW59IElmIHlvdSB3YW50IHRoZSBwZXJpb2QgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIGV4dGVuc2lvbiBuYW1lLlxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICBTdHJpbmdVdGlsLmdldEV4dGVuc2lvbignZmlsZS5leGUnKTtcbiAgICAgICAgICogICAgICAvLyAnZXhlJ1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIFN0cmluZ1V0aWwuZ2V0RXh0ZW5zaW9uKCdmaWxlLmV4ZScsIHRydWUpO1xuICAgICAgICAgKiAgICAgIC8vICcuZXhlJ1xuICAgICAgICAgKi9cbiAgICAgICAgU3RyaW5nVXRpbC5nZXRFeHRlbnNpb24gPSBmdW5jdGlvbiAoZmlsZW5hbWUsIHdpdGhEb3QpIHtcbiAgICAgICAgICAgIGlmICh3aXRoRG90ID09PSB2b2lkIDApIHsgd2l0aERvdCA9IGZhbHNlOyB9XG4gICAgICAgICAgICB2YXIgbnVtID0gKHdpdGhEb3QgPT09IHRydWUpID8gMCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gZmlsZW5hbWUuc2xpY2UoZmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKSArIG51bSwgZmlsZW5hbWUubGVuZ3RoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIGEgc3RyaW5nIHRvIGEgc2VudGVuY2UgY2FzZSBzdHJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgdG9TZW50ZW5jZVxuICAgICAgICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9XG4gICAgICAgICAqIEBwYXJhbSBbc2VwYXJhdG9yXSB7c3RyaW5nfSBDYW4gYmUgYW55IHN0cmluZyB5b3Ugd2FudCB0byB1c2UgYXMgYSBzZXBhcmF0b3IuXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIFN0cmluZ1V0aWwudG9TZW50ZW5jZShcImxpdmVEb3duX2J5LXRoZS5SaXZlclwiKTtcbiAgICAgICAgICogICAgICAvLyAnbGl2ZSBkb3duIGJ5IHRoZSByaXZlcidcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBTdHJpbmdVdGlsLnRvU2VudGVuY2UoXCJsaXZlRG93bl9ieS10aGUuUml2ZXJcIiwgJy0nKTtcbiAgICAgICAgICogICAgICAvLyAnbGl2ZS1kb3duLWJ5LXRoZS1yaXZlcidcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBTdHJpbmdVdGlsLnRvU2VudGVuY2UoXCJsaXZlRG93bl9ieS10aGUuUml2ZXJcIiwgJ18nKTtcbiAgICAgICAgICogICAgICAvLyAnbGl2ZV9kb3duX2J5X3RoZV9yaXZlcidcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBTdHJpbmdVdGlsLnRvU2VudGVuY2UoXCJsaXZlRG93bl9ieS10aGUuUml2ZXJcIiwgJy8nKTtcbiAgICAgICAgICogICAgICAvLyAnbGl2ZS9kb3duL2J5L3RoZS9yaXZlcidcbiAgICAgICAgICovXG4gICAgICAgIFN0cmluZ1V0aWwudG9TZW50ZW5jZSA9IGZ1bmN0aW9uIChzdHIsIHNlcGFyYXRvcikge1xuICAgICAgICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdm9pZCAwKSB7IHNlcGFyYXRvciA9ICcgJzsgfVxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhzdHIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyhcXGQpL2csICckMSAnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oW2Etel0oPz1bQS1aXSkpL2csICckMSAnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOSBdL2csICcgJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL14gfCAkL2csICcnKVxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xccysvZywgc2VwYXJhdG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIGEgc3RyaW5nIHRvIGEgY2FtZWwgY2FzZSBzdHJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgdG9DYW1lbENhc2VcbiAgICAgICAgICogQHBhcmFtIHN0ciB7c3RyaW5nfVxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICBTdHJpbmdVdGlsLnRvQ2FtZWxDYXNlKFwibGl2ZURvd25fYnktdGhlLlJpdmVyXCIpO1xuICAgICAgICAgKiAgICAgIC8vICdsaXZlRG93bkJ5VGhlUml2ZXInXG4gICAgICAgICAqL1xuICAgICAgICBTdHJpbmdVdGlsLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZ1V0aWwudG9TZW50ZW5jZShzdHIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyAoXFx3KS9nLCBmdW5jdGlvbiAoXywgJDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJDEudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udmVydHMgYSBoeXBoZW4gc3RyaW5nIHRvIGEgcGFzY2FsIGNhc2Ugc3RyaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHRvUGFzY2FsQ2FzZVxuICAgICAgICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9XG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIFN0cmluZ1V0aWwudG9QYXNjYWxDYXNlKFwibGl2ZURvd25fYnktdGhlLlJpdmVyXCIpO1xuICAgICAgICAgKiAgICAgIC8vICdMaXZlRG93bkJ5VGhlUml2ZXInXG4gICAgICAgICAqL1xuICAgICAgICBTdHJpbmdVdGlsLnRvUGFzY2FsQ2FzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmdVdGlsLnRvQ2FtZWxDYXNlKHN0cilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlthLXpBLVpdLywgZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyBhIHN0cmluZyB0byBhIGNvbnN0YW50IGNhc2Ugc3RyaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHRvQ29uc3RhbnRDYXNlXG4gICAgICAgICAqIEBwYXJhbSBzdHIge3N0cmluZ31cbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgU3RyaW5nVXRpbC50b0NvbnN0YW50Q2FzZShcImxpdmVEb3duX2J5LXRoZS5SaXZlclwiKTtcbiAgICAgICAgICogICAgICAvLyAnTElWRV9ET1dOX0JZX1RIRV9SSVZFUidcbiAgICAgICAgICovXG4gICAgICAgIFN0cmluZ1V0aWwudG9Db25zdGFudENhc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nVXRpbC50b1NlbnRlbmNlKHN0ciwgJ18nKVxuICAgICAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlcyBhIHVuaXZlcnNhbGx5IHVuaXF1ZSBpZGVudGlmaWVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGNyZWF0ZVVVSURcbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgU3RyaW5nVXRpbC5jcmVhdGVVVUlEKCk7XG4gICAgICAgICAqICAgICAgLy8gJ2E5NWQ3MTM0LTMzNDItNDAwMS1iY2VhLWNjMDM3MWI3MGRlYydcbiAgICAgICAgICovXG4gICAgICAgIFN0cmluZ1V0aWwuY3JlYXRlVVVJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1dWlkID0gKCd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnKS5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xuICAgICAgICAgICAgICAgIHZhciB2ID0gKGMgPT0gJ3gnKSA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdXVpZDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnZlcnRzIGEgcXVlcnkgc3RyaW5nIHRvIGFuIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBxdWVyeVN0cmluZ1RvT2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSBxdWVyeVN0cmluZyB7c3RyaW5nfVxuICAgICAgICAgKiBAcGFyYW0gW3VzZVBhcnNlRmxvYXQ9ZmFsc2VdIHtib29sZWFufSBJZiB0cnVlIGNvbnZlcnRzIHN0cmluZ3MgdG8gbnVtYmVycy5cbiAgICAgICAgICogQHJldHVybnMge09iamVjdHxOdWxsfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICBTdHJpbmdVdGlsLnF1ZXJ5U3RyaW5nVG9PYmplY3QoJz9uYW1lPVJvYmVydCZhZ2U9MjMmZ2VuZGVyPW1hbGUnKTtcbiAgICAgICAgICogICAgICAvLyB7bmFtZTogJ1JvYmVydCcsIGFnZTogJzIzJywgZ2VuZGVyOiAnbWFsZSd9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgU3RyaW5nVXRpbC5xdWVyeVN0cmluZ1RvT2JqZWN0KCc/bmFtZT1Sb2JlcnQmYWdlPTIzJmdlbmRlcj1tYWxlJywgdHJ1ZSk7XG4gICAgICAgICAqICAgICAgLy8ge25hbWU6ICdSb2JlcnQnLCBhZ2U6IDIzLCBnZW5kZXI6ICdtYWxlJ31cbiAgICAgICAgICovXG4gICAgICAgIFN0cmluZ1V0aWwucXVlcnlTdHJpbmdUb09iamVjdCA9IGZ1bmN0aW9uIChxdWVyeVN0cmluZywgdXNlUGFyc2VGbG9hdCkge1xuICAgICAgICAgICAgaWYgKHVzZVBhcnNlRmxvYXQgPT09IHZvaWQgMCkgeyB1c2VQYXJzZUZsb2F0ID0gZmFsc2U7IH1cbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICAgICAgICAgIHZhciB0ZW1wID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBzdHIgPSBxdWVyeVN0cmluZy5zdWJzdHJpbmcocXVlcnlTdHJpbmcuaW5kZXhPZignPycpICsgMSk7XG4gICAgICAgICAgICBpZiAoc3RyID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3BsaXQgaW50byBrZXkvdmFsdWUgcGFpcnNcbiAgICAgICAgICAgIHZhciBxdWVyaWVzID0gc3RyLnNwbGl0KCcmJyk7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBhcnJheSBvZiBzdHJpbmdzIGludG8gYW4gb2JqZWN0XG4gICAgICAgICAgICB2YXIgbGVuID0gcXVlcmllcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpXzEgPSAwOyBpXzEgPCBsZW47IGlfMSsrKSB7XG4gICAgICAgICAgICAgICAgdGVtcCA9IHF1ZXJpZXNbaV8xXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9ICh1c2VQYXJzZUZsb2F0ID09PSB0cnVlICYmIGlzTmFOKHBhcnNlRmxvYXQodGVtcFsxXSkpID09PSBmYWxzZSkgPyBwYXJzZUZsb2F0KHRlbXBbMV0pIDogdGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIHdoaXRlc3BhY2UgZnJvbSB0aGUgc3RyaW5nIHBhc3NlZCBpbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZW1vdmVBbGxXaGl0ZXNwYWNlXG4gICAgICAgICAqIEBwYXJhbSBzdHIge3N0cmluZ31cbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgbGV0IHN0ciA9ICcgICBhIGIgICAgYyBkIGUgZiBnICc7XG4gICAgICAgICAqICAgICAgU3RyaW5nVXRpbC5yZW1vdmVBbGxXaGl0ZXNwYWNlKHN0cik7XG4gICAgICAgICAqICAgICAgLy8gJ2FiY2RlZmcnXG4gICAgICAgICAqL1xuICAgICAgICBTdHJpbmdVdGlsLnJlbW92ZUFsbFdoaXRlc3BhY2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccysvZywgJycpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgcmVtb3ZlTGVhZGluZ1RyYWlsaW5nV2hpdGVzcGFjZVxuICAgICAgICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9XG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIGxldCBzdHIgPSAnICAgYSBiICAgIGMgZCBlIGYgZyAnO1xuICAgICAgICAgKiAgICAgIFN0cmluZ1V0aWwucmVtb3ZlTGVhZGluZ1RyYWlsaW5nV2hpdGVzcGFjZShzdHIpO1xuICAgICAgICAgKiAgICAgIC8vICdhIGIgICAgYyBkIGUgZiBnJ1xuICAgICAgICAgKi9cbiAgICAgICAgU3RyaW5nVXRpbC5yZW1vdmVMZWFkaW5nVHJhaWxpbmdXaGl0ZXNwYWNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyt8XFxzKyQpL2csICcnKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgdHJ1bmNhdGVcbiAgICAgICAgICogQHBhcmFtIHRleHQge3N0cmluZ31cbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCB7aW50fVxuICAgICAgICAgKiBAcGFyYW0gaW5kaWNhdG9yIHtzdHJpbmd9XG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiAgICAgIFN0cmluZ1V0aWwudHJ1bmNhdGUoJ1JvYmVydCBpcyBjb29sIGFuZCBoZSBsaWtlcyBicnVzY2hldHRhLicsIDE0KSk7XG4gICAgICAgICAqICAgICAgLy8gJ1JvYmVydCBpcyBjb29sLi4uJ1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIFN0cmluZ1V0aWwudHJ1bmNhdGUoJ1JvYmVydCBpcyBjb29sIGFuZCBoZSBsaWtlcyBicnVzY2hldHRhLicsIDE0LCAnISEhJykpO1xuICAgICAgICAgKiAgICAgIC8vICdSb2JlcnQgaXMgY29vbCEhISdcbiAgICAgICAgICovXG4gICAgICAgIFN0cmluZ1V0aWwudHJ1bmNhdGUgPSBmdW5jdGlvbiAodGV4dCwgbGVuZ3RoLCBpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgIGlmIChpbmRpY2F0b3IgPT09IHZvaWQgMCkgeyBpbmRpY2F0b3IgPSAnLi4uJzsgfVxuICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoIDw9IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQuc3Vic3RyKDAsIGxlbmd0aCkgKyBpbmRpY2F0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXBsYWNlcyBlYWNoIGZvcm1hdCBpdGVtIGluIGEgc3BlY2lmaWVkIHN0cmluZyB3aXRoIHRoZSB0ZXh0IGVxdWl2YWxlbnQgb2YgYSBjb3JyZXNwb25kaW5nIG9iamVjdCdzIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGZvcm1hdFxuICAgICAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAgICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9XG4gICAgICAgICAqIEBwYXJhbSAuLi5yZXN0IHtBcnJheS48YW55Pn1cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgU3RyaW5nVXRpbC5mb3JtYXQoJ1JvYmVydCBpcyB7MH0uIFZlcnkgezB9IGFuZCB7MX0hJywgJ2Nvb2wnLCAnc21hcnQnKTtcbiAgICAgICAgICogICAgICAvLyAnUm9iZXJ0IGlzIGNvb2wuIFZlcnkgY29vbCBhbmQgc21hcnQhJ1xuICAgICAgICAgKi9cbiAgICAgICAgU3RyaW5nVXRpbC5mb3JtYXQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICByZXN0W19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IHJlc3QubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RyO1xuICAgICAgICAgICAgZm9yICh2YXIgaV8yID0gMDsgaV8yIDwgbGVuZ3RoOyBpXzIrKykge1xuICAgICAgICAgICAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKCdcXFxceycgKyBpXzIgKyAnXFxcXH0nLCAnZ20nKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVnLCByZXN0W2lfMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyBhIHZhbHVlIGluIHRoZSBxdWVyeSBzdHJpbmcgYnkgaXRzIGtleSBuYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHBhcmFtUmVwbGFjZVxuICAgICAgICAgKiBAcGFyYW0gcXVlcnlTdHJpbmdcbiAgICAgICAgICogQHBhcmFtIG5hbWVcbiAgICAgICAgICogQHBhcmFtIHZhbHVlXG4gICAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd8dm9pZH1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICBTdHJpbmdVdGlsLnBhcmFtUmVwbGFjZSgnP25hbWU9Um9iZXJ0JmFnZT0yMyZnZW5kZXI9bWFsZScsICdnZW5kZXInLCAnZmVtYWxlJyk7XG4gICAgICAgICAqICAgICAgLy8gJz9uYW1lPVJvYmVydCZhZ2U9MjMmZ2VuZGVyPWZlbWFsZSdcbiAgICAgICAgICovXG4gICAgICAgIFN0cmluZ1V0aWwucGFyYW1SZXBsYWNlID0gZnVuY3Rpb24gKHF1ZXJ5U3RyaW5nLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgcGFyYW0gd2l0aCByZWdleFxuICAgICAgICAgICAgLy8gR3JhYiB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSByZXR1cm5lZCBzdHJpbmcgKHNob3VsZCBiZSA/IG9yICYpXG4gICAgICAgICAgICAvLyBSZXBsYWNlIG91ciBocmVmIHN0cmluZyB3aXRoIG91ciBuZXcgdmFsdWUsIHBhc3Npbmcgb24gdGhlIG5hbWUgYW5kIGRlbGltaXRlclxuICAgICAgICAgICAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnW1xcXFw/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKTtcbiAgICAgICAgICAgIHZhciBkZWxpbWl0ZXIgPSByZS5leGVjKHF1ZXJ5U3RyaW5nKVswXS5jaGFyQXQoMCk7XG4gICAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmcucmVwbGFjZShyZSwgZGVsaW1pdGVyICsgbmFtZSArICc9JyArIHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFN0cmluZ1V0aWw7XG4gICAgfSkoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gU3RyaW5nVXRpbDtcbn0pO1xuIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIHYgPSBmYWN0b3J5KHJlcXVpcmUsIGV4cG9ydHMpOyBpZiAodiAhPT0gdW5kZWZpbmVkKSBtb2R1bGUuZXhwb3J0cyA9IHY7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgJy4vU3RyaW5nVXRpbCddLCBmYWN0b3J5KTtcbiAgICB9XG59KShmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xuICAgIHZhciBTdHJpbmdVdGlsXzEgPSByZXF1aXJlKCcuL1N0cmluZ1V0aWwnKTtcbiAgICAvKipcbiAgICAgKiBBIGhlbHBlciBjbGFzcyB0byBwcm92aWRlIGEgY29udmVuaWVudCBhbmQgY29uc2lzdGVudCB3YXkgdG8gcmVuZGVyIHRlbXBsYXRlcy5cbiAgICAgKlxuICAgICAqIEBjbGFzcyBUZW1wbGF0ZUZhY3RvcnlcbiAgICAgKiBAbW9kdWxlIFN0cnVjdHVyZUpTXG4gICAgICogQHN1Ym1vZHVsZSB1dGlsXG4gICAgICogQHJlcXVpcmVzIFN0cmluZ1V0aWxcbiAgICAgKiBAcmVxdWlyZXMgSGFuZGxlYmFyc1xuICAgICAqIEBhdXRob3IgUm9iZXJ0IFMuICh3d3cuY29kZUJlbHQuY29tKVxuICAgICAqIEBzdGF0aWNcbiAgICAgKi9cbiAgICB2YXIgVGVtcGxhdGVGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVGVtcGxhdGVGYWN0b3J5KCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbVGVtcGxhdGVGYWN0b3J5XSBEbyBub3QgaW5zdGFudGlhdGUgdGhlIFRlbXBsYXRlRmFjdG9yeSBjbGFzcyBiZWNhdXNlIGl0IGlzIGEgc3RhdGljIGNsYXNzLicpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgdGVtcGxhdGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICAgICAqIEBwYXJhbSB0ZW1wbGF0ZVBhdGgge2FueX1cbiAgICAgICAgICogQHBhcmFtIFtkYXRhPWFueV1cbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgVGVtcGxhdGVGYWN0b3J5LmNyZWF0ZSgndGVtcGxhdGVOYW1lJywge3NvbWU6ICdkYXRhJ30pO1xuICAgICAgICAgKi9cbiAgICAgICAgVGVtcGxhdGVGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZVBhdGgsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhID09PSB2b2lkIDApIHsgZGF0YSA9IG51bGw7IH1cbiAgICAgICAgICAgIC8vQ2hlY2tzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgdG8gc2VlIGlmIGl0IGlzIGEgJy4nIG9yICcjJy5cbiAgICAgICAgICAgIHZhciByZWdleCA9IC9eKFsuI10pKC4rKS87XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBudWxsO1xuICAgICAgICAgICAgdmFyIGlzRnVuY3Rpb25UZW1wbGF0ZSA9IHR5cGVvZiB0ZW1wbGF0ZVBhdGggPT09ICdmdW5jdGlvbic7XG4gICAgICAgICAgICB2YXIgaXNDbGFzc09ySWROYW1lID0gcmVnZXgudGVzdCh0ZW1wbGF0ZVBhdGgpO1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb25UZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGVQYXRoKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNDbGFzc09ySWROYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHBvdW5kIHNpZ24gZnJvbSB0aGUgaWQgbmFtZS5cbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhdGggPSB0ZW1wbGF0ZVBhdGguc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgICAgIHZhciBodG1sU3RyaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVQYXRoKS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgaHRtbFN0cmluZyA9IFN0cmluZ1V0aWxfMS5kZWZhdWx0LnJlbW92ZUxlYWRpbmdUcmFpbGluZ1doaXRlc3BhY2UoaHRtbFN0cmluZyk7XG4gICAgICAgICAgICAgICAgaWYgKFRlbXBsYXRlRmFjdG9yeS50ZW1wbGF0ZUVuZ2luZSA9PSBUZW1wbGF0ZUZhY3RvcnkuVU5ERVJTQ09SRSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBVbmRlcnNjb3JlIFRlbXBsYXRlOlxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVNZXRob2QgPSB3aW5kb3dbJ18nXS50ZW1wbGF0ZShodG1sU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZU1ldGhvZChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZWJhcnMgVGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlTWV0aG9kID0gSGFuZGxlYmFycy5jb21waWxlKGh0bWxTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlTWV0aG9kKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZU9iaiA9IHdpbmRvd1tUZW1wbGF0ZUZhY3RvcnkudGVtcGxhdGVOYW1lc3BhY2VdO1xuICAgICAgICAgICAgICAgIGlmICghdGVtcGxhdGVPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJucyBudWxsIGJlY2F1c2UgdGhlIHRlbXBsYXRlIG5hbWVzcGFjZSBpcyBub3QgZm91bmQuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGVGdW5jdGlvbiA9IHRlbXBsYXRlT2JqW3RlbXBsYXRlUGF0aF07XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBsYXRlRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHRlbXBsYXRlUGF0aCBnZXRzIGEgZnVuY3Rpb24gc3RvcmFnZSBpbiB0aGUgYXNzb2NpYXRpdmUgYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbGwgdGhlIGZ1bmN0aW9uIGJ5IHBhc3NpbmcgaW4gdGhlIGRhdGEgYXMgdGhlIGFyZ3VtZW50LlxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlRnVuY3Rpb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBjb25zdGFudCB2YWx1ZSBmb3IgdXNpbmcgVW5kZXJzY29yZSBvciBMb2Rhc2ggdGVtcGxhdGVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgVU5ERVJTQ09SRVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBmaW5hbFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBUZW1wbGF0ZUZhY3RvcnkuVU5ERVJTQ09SRSA9ICd1bmRlcnNjb3JlJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY29uc3RhbnQgdmFsdWUgZm9yIHVzaW5nIEhhbmRsZWJhcnMgdGVtcGxhdGVzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHRlbXBsYXRlIGVuZ2luZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEhBTkRMRUJBUlNcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAZmluYWxcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgVGVtcGxhdGVGYWN0b3J5LkhBTkRMRUJBUlMgPSAnaGFuZGxlYmFycyc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBlbmdpbmUgdHlwZSBmb3IgdGhpcyBUZW1wbGF0ZUZhY3RvcnkgY2xhc3MuIFRoZSBkZWZhdWx0IGlzIFRlbXBsYXRlRmFjdG9yeS5IQU5ETEVCQVJTXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB0ZW1wbGF0ZUVuZ2luZVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCBUZW1wbGF0ZUZhY3RvcnkuSEFORExFQkFSU1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIFRlbXBsYXRlRmFjdG9yeS50ZW1wbGF0ZUVuZ2luZSA9IFRlbXBsYXRlRmFjdG9yeS5IQU5ETEVCQVJTO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGdsb2JhbCBuYW1lc3BhY2UgZm9yIHByZS1jb21waWxlZCB0ZW1wbGF0ZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB0ZW1wbGF0ZU5hbWVzcGFjZVxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKiBAZGVmYXVsdCAnSlNUJ1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIFRlbXBsYXRlRmFjdG9yeS50ZW1wbGF0ZU5hbWVzcGFjZSA9ICdKU1QnO1xuICAgICAgICByZXR1cm4gVGVtcGxhdGVGYWN0b3J5O1xuICAgIH0pKCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIGV4cG9ydHMuZGVmYXVsdCA9IFRlbXBsYXRlRmFjdG9yeTtcbn0pO1xuIiwiKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIHYgPSBmYWN0b3J5KHJlcXVpcmUsIGV4cG9ydHMpOyBpZiAodiAhPT0gdW5kZWZpbmVkKSBtb2R1bGUuZXhwb3J0cyA9IHY7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZhY3RvcnkpO1xuICAgIH1cbn0pKGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XG4gICAgLyoqXG4gICAgICogQSBVdGlsaXR5IGNsYXNzIHRoYXQgaGFzIHNldmVyYWwgc3RhdGljIG1ldGhvZHMgdG8gYXNzaXN0IGluIGRldmVsb3BtZW50LlxuICAgICAqXG4gICAgICogQGNsYXNzIFV0aWxcbiAgICAgKiBAbW9kdWxlIFN0cnVjdHVyZUpTXG4gICAgICogQHN1Ym1vZHVsZSB1dGlsXG4gICAgICogQGF1dGhvciBSb2JlcnQgUy4gKHd3dy5jb2RlQmVsdC5jb20pXG4gICAgICogQHN0YXRpY1xuICAgICAqL1xuICAgIHZhciBVdGlsID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVXRpbCgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW1V0aWxdIERvIG5vdCBpbnN0YW50aWF0ZSB0aGUgVXRpbCBjbGFzcyBiZWNhdXNlIGl0IGlzIGEgc3RhdGljIGNsYXNzLicpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgSUQuIElmIGEgcHJlZml4IGlzIHBhc3NlZCBpbiwgdGhlIHZhbHVlIHdpbGwgYmUgYXBwZW5kZWQgdG8gaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgdW5pcXVlSWRcbiAgICAgICAgICogQHBhcmFtIFtwcmVmaXhdIHtzdHJpbmd9IFRoZSBzdHJpbmcgdmFsdWUgdXNlZCBmb3IgdGhlIHByZWZpeC5cbiAgICAgICAgICogQHJldHVybnMge2luaXR8c3RyaW5nfSBSZXR1cm5zIHRoZSB1bmlxdWUgaWRlbnRpZmllci5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgbGV0IHByb3BlcnR5ID0gVXRpbC51bmlxdWVJZCgpO1xuICAgICAgICAgKiAgICAgIC8vIDFcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBsZXQgcHJvcGVydHkgPSBVdGlsLnVuaXF1ZUlkKCdwcmVmaXhOYW1lXycpO1xuICAgICAgICAgKiAgICAgIC8vIHByZWZpeE5hbWVfMVxuICAgICAgICAgKi9cbiAgICAgICAgVXRpbC51bmlxdWVJZCA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgICAgIGlmIChwcmVmaXggPT09IHZvaWQgMCkgeyBwcmVmaXggPSBudWxsOyB9XG4gICAgICAgICAgICB2YXIgaWQgPSArK1V0aWwuX2lkQ291bnRlcjtcbiAgICAgICAgICAgIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcocHJlZml4ICsgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBhIGxpc3Qgb2YgcHJvcGVydGllcyBmcm9tIGFuIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBkZWxldGVQcm9wZXJ0eUZyb21PYmplY3RcbiAgICAgICAgICogQHBhcmFtIG9iamVjdCB7T2JqZWN0fSBUaGUgb2JqZWN0IHlvdSB3YW50IHRvIHJlbW92ZSBwcm9wZXJ0aWVzIGZyb20uXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSB7c3RyaW5nfEFycmF5LjxzdHJpbmc+fSBBIHByb3BlcnR5IG5hbWUgb3IgYW4gYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgeW91IHdhbnQgdG8gcmVtb3ZlIGZyb20gdGhlIG9iamVjdC5cbiAgICAgICAgICogQHJldHVybnMge2FueX0gUmV0dXJucyB0aGUgb2JqZWN0IHBhc3NlZCBpbiB3aXRob3V0IHRoZSByZW1vdmVkIHRoZSBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogICAgICBsZXQgb2JqID0geyBuYW1lOiAnUm9iZXJ0JywgZ2VuZGVyOiAnbWFsZScsIHBob25lOiAnNTU1LTU1NS01NTU1JyB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgVXRpbC5kZWxldGVQcm9wZXJ0eUZyb21PYmplY3Qob2JqLCBbJ3Bob25lJywgJ2dlbmRlciddKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAvLyB7IG5hbWU6ICdSb2JlcnQnIH1cbiAgICAgICAgICovXG4gICAgICAgIFV0aWwuZGVsZXRlUHJvcGVydHlGcm9tT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCwgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIElmIHByb3BlcnRpZXMgaXMgbm90IGFuIGFycmF5IHRoZW4gbWFrZSBpdCBhbiBhcnJheSBvYmplY3QuXG4gICAgICAgICAgICB2YXIgbGlzdCA9ICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCB0aGUgb2JqZWN0IHByb3BlcnRpZXMuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGtleSBpcyBhIHByb3BlcnR5IGFuZCBub3QgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZV8xID0gb2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwcm9wZXJ0eSBpcyBhbiBBcnJheS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlXzEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBBcnJheSBhbmQgY2FsbCB0aGUgVXRpbC5kZWxldGVQcm9wZXJ0eUZyb21PYmplY3QgbWV0aG9kIG9uIGVhY2ggb2JqZWN0IGluIHRoZSBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJheSA9IHZhbHVlXzE7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBhcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWwuZGVsZXRlUHJvcGVydHlGcm9tT2JqZWN0KGFycmF5W2luZGV4XSwgbGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWVfMSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbC5kZWxldGVQcm9wZXJ0eUZyb21PYmplY3QodmFsdWVfMSwgbGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggdGhlIGxpc3Qgb2YgcHJvcGVydHkgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGxpc3RJbmRleCBpbiBsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGtleShwcm9wZXJ0eSBuYW1lKSBlcXVhbHMgdGhlIHByb3BlcnR5IG5hbWUgaW4gdGhlIGxpc3QgYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gbGlzdFtsaXN0SW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgcHJvcGVydHkgZnJvbSB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmFtZXMgYSBwcm9wZXJ0eSBuYW1lIG9uIGFuIG9iamVjdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCByZW5hbWVQcm9wZXJ0eU9uT2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSBvYmplY3Qge09iamVjdH0gVGhlIG9iamVjdCB5b3Ugd2FudCB0byByZW5hbWUgcHJvcGVydGllcyBmcm9tLlxuICAgICAgICAgKiBAcGFyYW0gb2xkTmFtZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcGFyYW0gbmV3TmFtZSB7c3RyaW5nfVxuICAgICAgICAgKiBAcmV0dXJucyB7YW55fSBSZXR1cm5zIHRoZSBvYmplY3QgcGFzc2VkIGluIHJlbmFtZWQgcHJvcGVydGllcy5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgbGV0IG9iaiA9IHsgbmFtZTogJ1JvYmVydCcsIGdlbmRlcjogJ21hbGUnLCBwaG9uZTogJzU1NS01NTUtNTU1NScgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIFV0aWwucmVuYW1lUHJvcGVydHlPbk9iamVjdChvYmosICdnZW5kZXInLCAnc2V4Jyk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgLy8geyBuYW1lOiAnUm9iZXJ0Jywgc2V4OiAnbWFsZScsIHBob25lOiAnNTU1LTU1NS01NTU1JyB9XG4gICAgICAgICAqL1xuICAgICAgICBVdGlsLnJlbmFtZVByb3BlcnR5T25PYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBvbGROYW1lLCBuZXdOYW1lKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdGhlIG9sZCBwcm9wZXJ0eSBuYW1lIHRvIGF2b2lkIGEgUmVmZXJlbmNlRXJyb3IgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KG9sZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W25ld05hbWVdID0gb2JqZWN0W29sZE5hbWVdO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmplY3Rbb2xkTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZXMgYSBjbG9uZSBvZiBhbiBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgY2xvbmVcbiAgICAgICAgICogQHBhcmFtIG9iaiB7T2JqZWN0fSBUaGUgb2JqZWN0IHlvdSB0byBjbG9uZS5cbiAgICAgICAgICogQHJldHVybnMge2FueX0gUmV0dXJucyBhIGNsb25lIG9iamVjdCBvZiB0aGUgb25lIHBhc3NlZCBpbi5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgbGV0IGNsb25lT2ZPYmplY3QgPSBVdGlsLmNsb25lKG9iaik7XG4gICAgICAgICAqL1xuICAgICAgICBVdGlsLmNsb25lID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgLy9vdGhlciBzY3JpcHRzOiBodHRwOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtY2xvbmVcbiAgICAgICAgICAgIC8vaHR0cDovL29yYW5sb29uZXkuY29tL2Z1bmN0aW9uYWwtamF2YXNjcmlwdC9cbiAgICAgICAgICAgIC8vaHR0cDovL29yYW5sb29uZXkuY29tL2RlZXAtY29weS1qYXZhc2NyaXB0L1xuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSAzIHNpbXBsZSB0eXBlcywgYW5kIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAobnVsbCA9PSBvYmogfHwgJ29iamVjdCcgIT0gdHlwZW9mIG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIYW5kbGUgRGF0ZVxuICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRUaW1lKG9iai5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSGFuZGxlIEFycmF5XG4gICAgICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpXzEgPSAwLCBsZW4gPSBvYmoubGVuZ3RoOyBpXzEgPCBsZW47IGlfMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5W2lfMV0gPSBVdGlsLmNsb25lKG9ialtpXzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSGFuZGxlIE9iamVjdFxuICAgICAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBjb3B5ID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29weVthdHRyXSA9IFV0aWwuY2xvbmUob2JqW2F0dHJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIltVdGlsXSBVbmFibGUgdG8gY29weSBvYmohIEl0cyB0eXBlIGlzbid0IHN1cHBvcnRlZC5cIik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb252ZXJ0cyBhIHN0cmluZyBvciBudW1iZXIgdG8gYSBib29sZWFuLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHRvQm9vbGVhblxuICAgICAgICAgKiBAcGFyYW0gc3RyTnVtIHtzdHJpbmd8bnVtYmVyfVxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgVXRpbC50b0Jvb2xlYW4oXCJUUlVFXCIpO1xuICAgICAgICAgKiAgICAgIC8vIHRydWVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBVdGlsLnRvQm9vbGVhbigwKTtcbiAgICAgICAgICogICAgICAvLyBmYWxzZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIFV0aWwudG9Cb29sZWFuKHVuZGVmaW5lZCk7XG4gICAgICAgICAqICAgICAgLy8gZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIFV0aWwudG9Cb29sZWFuID0gZnVuY3Rpb24gKHN0ck51bSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gKHR5cGVvZiBzdHJOdW0gPT09ICdzdHJpbmcnKSA/IHN0ck51bS50b0xvd2VyQ2FzZSgpIDogc3RyTnVtO1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSA+IDAgfHwgdmFsdWUgPT0gJ3RydWUnIHx8IHZhbHVlID09ICd5ZXMnKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uL29iamVjdCBwYXNzZWQgaW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZXRob2QgZ2V0TmFtZVxuICAgICAgICAgKiBAcGFyYW0gY2xhc3NPYmplY3Qge2FueX1cbiAgICAgICAgICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gb3Igb2JqZWN0LlxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgbGV0IHNvbWVDbGFzcyA9IG5ldyBTb21lQ2xhc3MoKTtcbiAgICAgICAgICogICAgICBVdGlsLmdldE5hbWUoc29tZUNsYXNzKTsgICAgICAgICAgICAvLyAnU29tZUNsYXNzJ1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIFV0aWwuZ2V0TmFtZShmdW5jdGlvbiBUZXN0KCl7fSk7ICAgIC8vICdUZXN0J1xuICAgICAgICAgKiAgICAgIFV0aWwuZ2V0TmFtZShmdW5jdGlvbiAoKXt9KTsgICAgICAgIC8vICdhbm9ueW1vdXMnXG4gICAgICAgICAqL1xuICAgICAgICBVdGlsLmdldE5hbWUgPSBmdW5jdGlvbiAoY2xhc3NPYmplY3QpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIGNsYXNzT2JqZWN0O1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb24gKFteXFwoXSspLztcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIC8vIEdldHMgdGhlIG5hbWUgb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0cyA9IGNsYXNzT2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkubWF0Y2goZnVuY05hbWVSZWdleCk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHRzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBlbHNlIGNvZGUgaXMgbWFpbmx5IGZvciBJbnRlcm5ldCBFeHBsb3JlLlxuICAgICAgICAgICAgICAgIHZhciBpc0Z1bmN0aW9uID0gKHR5cGUgPT09ICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgaG93IHRvIGV4cGxhaW4gdGhpc1xuICAgICAgICAgICAgICAgIHZhciBuYW1lXzEgPSBpc0Z1bmN0aW9uICYmICgoY2xhc3NPYmplY3QubmFtZSAmJiBbJycsIGNsYXNzT2JqZWN0Lm5hbWVdKSB8fCBjbGFzc09iamVjdC50b1N0cmluZygpLm1hdGNoKGZ1bmNOYW1lUmVnZXgpKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lXzEgJiYgbmFtZV8xWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmFtZV8xWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnYW5vbnltb3VzJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgbmV3IGRlYm91bmNlZCB2ZXJzaW9uIG9mIHRoZSBwYXNzZWQgZnVuY3Rpb24gd2hpY2ggd2lsbCBwb3N0cG9uZSBpdHMgZXhlY3V0aW9uIHVudGlsIGFmdGVyXG4gICAgICAgICAqIHdhaXQgbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIGl0IHdhcyBpbnZva2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIGRlYm91bmNlXG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259IFRoZSBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBleGVjdXRlZC5cbiAgICAgICAgICogQHBhcmFtIHdhaXQge251bWJlcn0gTWlsbGlzZWNvbmRzIHRvIGVsYXBzZWQgYmVmb3JlIGludm9raW5nIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICogQHBhcmFtIGltbWVkaWF0ZSB7Ym9vbGVhbn0gUGFzcyB0cnVlIGZvciB0aGUgaW1tZWRpYXRlIHBhcmFtZXRlciB0byBjYXVzZSBkZWJvdW5jZSB0byB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGUgbGVhZGluZyBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB3YWl0IGludGVydmFsLiBVc2VmdWwgaW4gY2lyY3Vtc3RhbmNlcyBsaWtlIHByZXZlbnRpbmcgYWNjaWRlbnRhbCBkb3VibGUtY2xpY2tzIG9uIGEgXCJzdWJtaXRcIiBidXR0b24gZnJvbSBmaXJpbmcgYSBzZWNvbmQgdGltZS5cbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrU2NvcGUge2FueX0gVGhlIHNjb3BlIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSBleGVjdXRlZC5cbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqICAgICAgVXRpbC5kZWJvdW5jZSh0aGlzLl9vbkJyZWFrcG9pbnRDaGFuZ2UsIDI1MCwgZmFsc2UsIHRoaXMpO1xuICAgICAgICAgKi9cbiAgICAgICAgVXRpbC5kZWJvdW5jZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgd2FpdCwgaW1tZWRpYXRlLCBjYWxsYmFja1Njb3BlKSB7XG4gICAgICAgICAgICB2YXIgdGltZW91dDtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICB2YXIgZGVib3VuY2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGF5ZWQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbW1lZGlhdGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrU2NvcGUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGltbWVkaWF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjay5hcHBseShjYWxsYmFja1Njb3BlLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZGVsYXllZCwgd2FpdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWJvdW5jZWQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gZGVib3VuY2VkO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVE9ETzogWVVJRG9jX2NvbW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQG1ldGhvZCBhcHBseU1peGluc1xuICAgICAgICAgKiBAcGFyYW0gZGVyaXZlZEN0b3Ige2FueX1cbiAgICAgICAgICogQHBhcmFtIGJhc2VDdG9ycyB7YW55fVxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICAgICAgICBjbGFzcyBGbGllcyB7XG4gICAgICAgICAgICAgICAgICAgIGZseSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdJcyBpdCBhIGJpcmQ/IElzIGl0IGEgcGxhbmU/Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgY2xhc3MgQ2xpbWJzIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpbWIoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnTXkgc3BpZGVyLXNlbnNlIGlzIHRpbmdsaW5nLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGNsYXNzIEhvcnNlZmx5V29tYW4gaW1wbGVtZW50cyBDbGltYnMsIEZsaWVzIHtcbiAgICAgICAgICAgICAgICAgICAgY2xpbWI6ICgpID0+IHZvaWQ7XG4gICAgICAgICAgICAgICAgICAgIGZseTogKCkgPT4gdm9pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgVXRpbC5hcHBseU1peGlucyhIb3JzZWZseVdvbWFuLCBbQ2xpbWJzLCBGbGllc10pO1xuICAgICAgICAgKi9cbiAgICAgICAgVXRpbC5hcHBseU1peGlucyA9IGZ1bmN0aW9uIChkZXJpdmVkQ3RvciwgYmFzZUN0b3JzKSB7XG4gICAgICAgICAgICBiYXNlQ3RvcnMuZm9yRWFjaChmdW5jdGlvbiAoYmFzZUN0b3IpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVyaXZlZEN0b3IucHJvdG90eXBlW25hbWVdID0gYmFzZUN0b3IucHJvdG90eXBlW25hbWVdO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggZHVwbGljYXRlcyByZW1vdmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWV0aG9kIHVuaXF1ZVxuICAgICAgICAgKiBAcGFyYW0gbGlzdCB7QXJyYXkuPGFueT59IFRoZSBhcnJheSB5b3Ugd2FudCB0byB1c2UgdG8gZ2VuZXJhdGUgdGhlIHVuaXF1ZSBhcnJheS5cbiAgICAgICAgICogQHJldHVybiB7QXJyYXk8YW55Pn0gUmV0dXJucyBhIG5ldyBhcnJheSBsaXN0IG9mIHVuaXF1ZSBpdGVtcy5cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgVXRpbC51bmlxdWUgPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgdmFyIHVuaXF1ZUxpc3QgPSBsaXN0LnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzVmFsdWUuaW5kZXhPZihjdXJyZW50VmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1ZhbHVlLnB1c2goY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICByZXR1cm4gdW5pcXVlTGlzdDtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjb3VudCBmb3IgdGhlIHVuaXF1ZUlkIG1ldGhvZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IF9pZENvdW50ZXJcbiAgICAgICAgICogQHR5cGUge2ludH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgVXRpbC5faWRDb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIFV0aWw7XG4gICAgfSkoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gVXRpbDtcbn0pO1xuIl19
