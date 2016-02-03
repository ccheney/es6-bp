import BaseEvent from './BaseEvent';

/**
 * The ApplicationCacheEvent ....
 *
 * @class ApplicationCacheEvent
 * @extends BaseEvent
 * @param type {string} The type of event. The type is case-sensitive.
 * @param [bubbles=false] {boolean} Indicates whether an event is a bubbling event. If the event can bubble, this value is true; otherwise it is false.
 * Note: With event-bubbling you can let one Event subsequently call on every ancestor ({{#crossLink "EventDispatcher/parent:property"}}{{/crossLink}})
 * (containers of containers of etc.) of the {{#crossLink "DisplayObjectContainer"}}{{/crossLink}} that originally dispatched the Event, all the way up to the surface ({{#crossLink "Stage"}}{{/crossLink}}). Any classes that do not have a parent cannot bubble.
 * @param [cancelable=false] {boolean} Indicates whether the behavior associated with the event can be prevented. If the behavior can be canceled, this value is true; otherwise it is false.
 * @param [data=null] {any} Use to pass any type of data with the event.
 * @module StructureJS
 * @submodule event
 * @requires Extend
 * @requires BaseEvent
 * @constructor
 * @author Robert S. (www.codeBelt.com)
 */
class ApplicationCacheEvent extends BaseEvent
{
    /**
     * The browser is checking for an update, or is attempting to download
     * the cache manifest for the first time. This is always the first event
     * in the sequence.
     *
     * @event CHECKING
     * @type {string}
     * @static
     */
    public static CHECKING:string = 'checking';

    /**
     * The cache manifest hadn't changed.
     *
     * @event NO_UPDATE
     * @type {string}
     * @static
     */
    public static NO_UPDATE:string = 'noupdate';

    /**
     * The browser has started to download the cache manifest, either for the
     * first time or because changes have been detected.
     *
     * @event DOWNLOADING
     * @type {string}
     * @static
     */
    public static DOWNLOADING:string = 'downloading';

    /**
     * The browser had downloaded and cached an asset. This is fired once for
     * every file that is downloaded (including the current page which is cached implicitly).
     *
     * @event PROGRESS
     * @type {string}
     * @static
     */
    public static PROGRESS:string = 'progress';

    /**
     * The resources listed in the manifest have been fully downloaded, and the application is
     * now cached locally.
     *
     * @event CACHED
     * @type {string}
     * @static
     */
    public static CACHED:string = 'cached';

    /**
     * The resources listed in the manifest have been newly re-downloaded, and the script can
     * use swapCache() to switch to the new cache.
     *
     * @event UPDATE_READY
     * @type {string}
     * @static
     */
    public static UPDATE_READY:string = 'updateready';

    /**
     * The cache manifest file could not be found, indicating that the cache is no longer needed.
     * The application cache is being deleted.
     *
     * @event OBSOLETE
     * @type {string}
     * @static
     */
    public static OBSOLETE:string = 'obsolete';

    /**
     * An error occurred at some point - this could be caused by a number of things. This will
     * always be the last event in the sequence.
     *
     * @event ERROR
     * @type {string}
     * @static
     */
    public static ERROR:string = 'error';

    constructor(type:string, bubbles:boolean = false, cancelable:boolean = false, data:any = null)
    {
        super(type, bubbles, cancelable, data);
    }

}

export default ApplicationCacheEvent;