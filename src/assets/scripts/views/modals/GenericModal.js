import BaseModal from './BaseModal';

/**
 * This generic modal allows a template and data to be passed in to render a modal.
 * It is meant for modals that are display only and has no extra logic except closing itself.
 * Checkout the BaseModal to see what extra functionality this class inherits.
 *
 * @class GenericModal
 * @extends BaseModal
 * @constructor
 **/
class GenericModal extends BaseModal {

    constructor(template, data = {}) {
        super(template, data);

        /**
         * @overridden BaseModal.allowPageScroll
         */
        this.allowPageScroll = (data.allowPageScroll === void 0) ? this.allowPageScroll : data.allowPageScroll;
    }

}

export default GenericModal;
