import DOMElement from 'structurejs/display/DOMElement';
import EventBroker from 'structurejs/event/EventBroker';
import ModalEvent from '../../events/ModalEvent';

/**
 * This is the base class for all modals.
 * All modals should extend this class.
 *
 * @class BaseModal
 * @extends DOMElement
 * @constructor
 **/
class BaseModal extends DOMElement {

    /**
     * If this value is set to true the user cannot click outside of the modal or
     * click the ESC key to close the modal. The user must click one of the buttons
     * in the modal.
     *
     * @property forceInteraction
     * @type {boolean}
     * @public
     */
    forceInteraction = true;

    /**
     * If this value is set to false the page/body will not scroll.
     * Set this property to false in the class that extends this {{#crossLink "BaseModal"}}{{/crossLink}} class
     * if there is any scrollable content in the modal.
     *
     * @property allowPageScroll
     * @type {boolean}
     * @public
     */
    allowPageScroll = true;

    /**
     * A reference to the data that was passed into the constructor of the modal.
     * This data object will also be dispatched with the
     * ModalEvent.{{#crossLink "ModalEvent/ACCEPT:event"}}{{/crossLink}}
     * and {{#crossLink "ModalEvent/REJECT:event"}}{{/crossLink}}.
     *
     * @property modalData
     * @type {any}
     * @public
     */
    modalData = null;

    /**
     * Holds a reference to the modal container so we can stop event
     * bubbling to the body through the DOM.
     *
     * @property _$modalContent
     * @type {jQuery}
     * @
     */
    _$modalContent = null;

    /**
     * Holds a reference to the modal's sneeze guard/background
     *
     * @property _$modalUnderlay
     * @type {jQuery}
     * @
     */
    _$modalUnderlay = null;

    constructor(template = null, data = null) {
        super(template, data);
    }

    /**
     * @overridden DOMElement.create
     */
    create(template = null, data = null) {
        super.create(template, data);

        this._$modalContent = this.$element.find('.js-modal-content');
        this._$modalUnderlay = this.$element.find('.js-modal-underlay');
    }

    enable() {
        if (this.isEnabled === true) { return; }

        this._$modalUnderlay.addEventListener('click', this._onClickModalUnderlay, this);
        this._$modalContent.addEventListener('click', '.js-modal-reject', this._onRejectModal, this);
        this._$modalContent.addEventListener('click', '.js-modal-accept', this._onAcceptModal, this);
        this._$modalContent.addEventListener('click', '.js-modal-close', this._onCloseModal, this);

        super.enable();
    }

    disable() {
        if (this.isEnabled === false) { return; }

        this._$modalUnderlay.removeEventListener('click', this._onClickModalUnderlay, this);
        this._$modalContent.removeEventListener('click', '.js-modal-reject', this._onRejectModal, this);
        this._$modalContent.removeEventListener('click', '.js-modal-accept', this._onAcceptModal, this);
        this._$modalContent.removeEventListener('click', '.js-modal-close', this._onCloseModal, this);

        super.enable();
    }

    //////////////////////////////////////////////////////////////////////////////////
    // HELPER METHODS
    //////////////////////////////////////////////////////////////////////////////////

    /**
     * Dispatches a global
     * {{#crossLink "ModalEvent"}}{{/crossLink}}.{{#crossLink "ModalEvent/REMOVE:event"}}{{/crossLink}}
     * event so the {{#crossLink "ModalController"}}{{/crossLink}} can remove this modal.
     *
     * @method close
     * @public
     */
    close() {
        EventBroker.dispatchEvent(ModalEvent.REMOVE);
    }

    //////////////////////////////////////////////////////////////////////////////////
    // EVENT HANDLERS
    //////////////////////////////////////////////////////////////////////////////////

    /**
     * This method will be called when a rejected button (js-modal-reject) is clicked in the modal.
     * Override this method to add or change the functionality.
     * Dispatches the
     * {{#crossLink "ModalEvent"}}{{/crossLink}}.{{#crossLink "ModalEvent/REJECT:event"}}{{/crossLink}} event.
     *
     * @method _onRejectModal
     * @param event {JQueryEventObject}
     * @
     */
    _onRejectModal(event) {
        event.preventDefault();

        this.dispatchEvent(ModalEvent.REJECT, this.modalData);

        this.close();
    }

    /**
     * This method will be called when a accepted button (js-modal-accept) is clicked in the modal.
     * Override this method to add or change the functionality.
     * Dispatches the
     * {{#crossLink "ModalEvent"}}{{/crossLink}}.{{#crossLink "ModalEvent/ACCEPT:event"}}{{/crossLink}} event.
     *
     * @method _onAcceptModal
     * @param event {JQueryEventObject}
     * @
     */
    _onAcceptModal(event) {
        event.preventDefault();

        this.dispatchEvent(ModalEvent.ACCEPT, this.modalData);

        this.close();
    }

    /**
     * If the modal background is clicked on this method is called to close the modal.
     * This method will not close the modal if the
     * {{#crossLink "BaseModal/forceInteraction:property"}}{{/crossLink}} property is true.
     *
     * @method _onClickModalUnderlay
     * @param event {jQueryEventObject}
     * @
     */
    _onClickModalUnderlay(event) {
        event.preventDefault();

        if (this.forceInteraction === false) {
            this.close();
        }
    }

    /**
     * Closes the modal
     *
     * @method _onClickModalUnderlay
     * @param event {jQueryEventObject}
     * @
     */
    _onCloseModal(event) {
        event.preventDefault();

        this.close();
    }

}

export default BaseModal;
