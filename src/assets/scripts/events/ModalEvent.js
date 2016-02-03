import BaseEvent from 'structurejs/event/BaseEvent';

/**
 * This event class is meant to manage all event types for all modals within the site.
 *
 * @class ModalEvent
 * @extends BaseEvent
 * @constructor
 **/
class ModalEvent extends BaseEvent {

    /**
     * Event to be dispatched when a modal needs to be closed.
     *
     * @event REMOVE
     * @type {string}
     * @static
     */
    static REMOVE = 'ModalEvent.remove';

    /**
     * Event to be dispatched when a button in the modal is click to cancel something.
     *
     * @event REJECT
     * @type {string}
     * @static
     */
    static REJECT = 'ModalEvent.reject';

    /**
     * Event to be dispatched when a button in the modal is click to confirm something.
     *
     * @event ACCEPT
     * @type {string}
     * @static
     */
    static ACCEPT = 'ModalEvent.accept';

    constructor(type, bubbles, cancelable, data) {
        super(type, bubbles, cancelable, data);
    }

}

export default ModalEvent;
