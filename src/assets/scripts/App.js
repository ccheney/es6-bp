import Stage from 'structurejs/display/Stage';

import ModalController from './controllers/ModalController';
import GenericModal from './views/modals/GenericModal';

/**
 * TODO: YUIDoc_comment
 *
 * @class App
 * @extends Stage
 * @constructor
 **/
class App extends Stage {

    constructor() {
        super();
    }

    /**
     * @overridden Stage.create
     */
    create() {
        super.create();

        ModalController.setView(this);

        const tempModal = new GenericModal('templates/precompile/modals/GenericModal', {
            title: 'Modal Title',
            content: 'Modal Content',
            rejectBtn: 'Cancel',
            acceptBtn: 'Accept'
        });

        ModalController.addModal(tempModal);
    }

}

export default App;
