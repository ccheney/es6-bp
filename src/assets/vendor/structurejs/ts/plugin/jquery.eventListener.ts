import * as $ from 'jquery';

const $eventListener = $;

/**
 * A bind polyfill for browsers that don't support the bind method.
 */
if (!Function.prototype.bind)
{
    Function.prototype.bind = function (oThis)
    {
        if (typeof this !== 'function')
        {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        let aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function ()
            {
            },
            fBound = function ()
            {
                return fToBind.apply(this instanceof fNOP && oThis
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
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
let hashCode = function (str)
{
    str = String(str);
    // http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
    let character;
    let hash = null;
    let strLength = str.length;

    if (strLength == 0) return hash;

    for (let i = 0; i < strLength; i++)
    {
        character = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash = hash & hash; // Convert to 32bit integer
    }

    return String(Math.abs(hash));
};

/**
 * The jQuery addEventListener plugin
 */
$eventListener.fn.addEventListener = function (type, selector, data, callback, scope)
{
    let _callback;
    let _scope;
    let _handler;
    switch (arguments.length)
    {
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
            throw new Error('jQuery addEventListener plugin requires at least 3 arguments.')
    }
    return this;
};

/**
 * The jQuery removeEventListener plugin
 */
$eventListener.fn.removeEventListener = function (type, selector, callback, scope)
{
    let _callback;
    let _scope;
    let _handler;

    switch (arguments.length)
    {
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
            throw new Error('jQuery removeEventListener plugin requires at least 3 arguments.')
    }
    return this;
}


export default $eventListener;
