(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    /**
     * The **Route** class is a model that keeps track of a specific route for the {{#crossLink "Router"}}{{/crossLink}} class.
     *
     * @class Route
     * @module StructureJS
     * @submodule model
     * @param routePattern {string} The string pattern you want to have match, which can be any of the following combinations {}, ::, *, ''
     * @param callback {Function} The function that should be executed when a request matches the routePattern.
     * @param callbackScope {any} The scope of the callback function that should be executed.
     * @constructor
     * @author Robert S. (www.codeBelt.com)
     * @example
     *     // Example of adding a route listener and the function callback below.
     *     let route = new Route('/games/{gameName}/:level:/', this._method, this);
     *
     *     // The above route would match the string below:
     *     route.match('/games/asteroids/2/');
     *
     * Route Pattern Options:
     * ----------------------
     * **:optional:** The two colons **::** means a part of the hash url is optional for the match. The text between can be anything you want it to be.
     *
     *     let route = new Route('/contact/:name:/', this._method, this);
     *
     *     // Will match one of the following:
     *     route.match('/contact/');
     *     route.match('/contact/heather/');
     *     route.match('/contact/john/');
     *
     *
     * **{required}** The two curly brackets **{}** means a part of the hash url is required for the match. The text between can be anything you want it to be.
     *
     *     let route = new Route('/product/{productName}/', this._method, this);
     *
     *     // Will match one of the following:
     *     route.match('/product/shoes/');
     *     route.match('/product/jackets/');
     *
     *
     * **\*** The asterisk character means it will match all or part of part the hash url.
     *
     *     let route = new Route('*', this._method, this);
     *
     *     // Will match one of the following:
     *     route.match('/anything/');
     *     route.match('/matches/any/hash/url/');
     *     route.match('/really/it/matches/any/and/all/hash/urls/');
     *
     *
     * **''** The empty string means it will match when there are no hash url.
     *
     *     let route = new Route('', this._method, this);
     *     let route = new Route('/', this._method, this);
     *
     *     // Will match one of the following:
     *     route.match('');
     *     route.match('/');
     *
     *
     * Other possible combinations but not limited too:
     *
     *     let route = new Route('/games/{gameName}/:level:/', this._method1, this);
     *     let route = new Route('/{category}/blog/', this._method2, this);
     *     let route = new Route('/about/*', this._method3, this);
     *
     */
    var Route = (function () {
        function Route(routePattern, callback, scope) {
            /**
             * The string pattern you want to have match, which can be any of the following combinations {}, ::, *, ?, "". See below for examples.
             *
             * @property routePattern
             * @type String
             * @public
             */
            this.routePattern = '';
            /**
             * The regex representation for the routePattern that was passed into the constructor.
             *
             * @property regex
             * @type RegExp
             * @public
             * @readOnly
             */
            this.regex = null;
            /**
             * The function that should be executed when a request matches the routePattern. The {{#crossLink "Router"}}{{/crossLink}} class will be using this property.
             *
             * @property callback
             * @type {Function}
             * @public
             */
            this.callback = null;
            /**
             * The scope of the callback function that should be executed. The {{#crossLink "Router"}}{{/crossLink}} class will be using this property.
             *
             * @property callbackScope
             * @type {any}
             * @public
             */
            this.callbackScope = null;
            this.routePattern = routePattern;
            this.regex = this._routePatternToRegexp(routePattern);
            this.callback = callback;
            this.callbackScope = scope;
        }
        /**
         * Converts the routePattern that was passed into the constructor to a regexp object.
         *
         * @method _routePatternToRegexp
         * @param {String} routePattern
         * @returns {RegExp}
         * @protected
         */
        Route.prototype._routePatternToRegexp = function (routePattern) {
            var findFirstOrLastForwardSlash = new RegExp('^\/|\/$', 'g'); // Finds if the first character OR if the last character is a forward slash
            var findOptionalColons = new RegExp(':([^:]*):', 'g'); // Finds the colons : :
            var findRequiredBrackets = new RegExp('{([^}]+)}', 'g'); // Finds the brackets { }
            var optionalFirstCharSlash = '^/?'; // Allows the first character to be if a forward slash to be optional.
            var optionalLastCharSlash = '/?$'; // Allows the last character to be if a forward slash to be optional.
            // Remove first and last forward slash.
            routePattern = routePattern.replace(findFirstOrLastForwardSlash, '');
            // Convert the wild card * be a regex ?(.*) to select all.
            routePattern = routePattern.replace('*', '?(.*)');
            // Make any :alphanumeric: optional
            routePattern = routePattern.replace(findOptionalColons, '?([^/]*)');
            // Make any {alphanumeric} required
            routePattern = routePattern.replace(findRequiredBrackets, '([^/]+)');
            return new RegExp(optionalFirstCharSlash + routePattern + optionalLastCharSlash, 'i');
        };
        /**
         * Determine if a route matches a routePattern.
         *
         * @method match
         * @param route {String} The route or path to match against the routePattern that was passed into the constructor.
         * @returns {Array.<any>}
         * @example
         *     let route = new Route('/games/{gameName}/:level:/', this.method, this);
         *     console.log( route.match('/games/asteroids/2/') );
         */
        Route.prototype.match = function (route) {
            // Remove the query string before matching against the route pattern.
            var routeWithoutQueryString = route.replace(/\?.*/, '');
            return routeWithoutQueryString.match(this.regex);
        };
        return Route;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Route;
});
