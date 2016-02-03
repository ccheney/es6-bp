import EventBroker from 'structurejs/event/EventBroker';
import KeyCode from '../constants/KeyCode';
import GenericModal from '../views/modals/GenericModal';
import ModalEvent from '../events/ModalEvent';

/**
 * Singleton Class to manage modals.
 *
 * @class ModalController
 * @extends EventDispatcher
 * @constructor
 **/
class ModalController {

    /**
     * Holds a reference to a view that the modal will be added to.
     * The {{#crossLink "App"}}{{/crossLink}} $element is the HTML body element.
     *
     * @property _view
     * @type {App}
     * @private
     */
    static _view = null;

    /**
     * Holds a reference to the current modal being displayed.
     *
     * @property _currentModal
     * @type {BaseModal}
     * @private
     */
    static _currentModal = null;

    /**
     * Determines if a modal is up or not.
     *
     * @property isModalActive
     * @type {boolean}
     * @public
     */
    static isModalActive = false;

    static isEnabled = false;

    constructor() {
    }

    /**
     * @overridden EventDispatcher.enable
     */
    static enable() {
        if (ModalController.isEnabled === true) { return; }

        ModalController._view.$element.addEventListener('click', '.js-modalTrigger', ModalController._createModal, ModalController);
        ModalController._view.$element.addEventListener('keydown', ModalController._onEscPress, ModalController);

        EventBroker.addEventListener(ModalEvent.REMOVE, ModalController._onCloseModal, ModalController);

        ModalController.isEnabled = true;
    }

    /**
     * @overridden EventDispatcher.disable
     */
    static disable() {
        if (ModalController.isEnabled === false) { return; }

        ModalController._view.$element.removeEventListener('click', '.js-modalTrigger', ModalController._createModal, ModalController);
        ModalController._view.$element.removeEventListener('keydown', ModalController._onEscPress, ModalController);

        EventBroker.removeEventListener(ModalEvent.REMOVE, ModalController._onCloseModal, ModalController);

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
    static setView(view) {
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
    static addModal(modal) {
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
    static _removeModal() {
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
    static _onEscPress(event) {
        if (event.keyCode === KeyCode.ESCAPE_KEY && ModalController._currentModal.forceInteraction === false) {
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
    static _onCloseModal(event) {
        ModalController._removeModal();
    }

    /**
     * When one of the '.js-modalTrigger' modal trigger buttons is clicked this method will get the template and data
     * from the button. It will create a GenericModal then pass it to the modal controller to display it.
     *
     * @method _createModal
     * @private
     */
    static _createModal(event) {
        let template = event.target.getAttribute('data-modal-template');
        let data = event.target.getAttribute('data-modal-data');
        data = JSON.parse(data);

        let modal = new GenericModal(template, data);

        ModalController.addModal(modal);
    }

}

export default ModalController;
