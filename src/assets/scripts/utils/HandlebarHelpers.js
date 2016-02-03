import StringUtil from 'structurejs/util/StringUtil';

/**
 * Hamburger helpers, makes a great meal
 *
 * @class HandlebarsHelpers
 * @constructor
 **/
class HandlebarsHelpers {

    constructor() {
    }

    static init() {

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
        Handlebars.registerHelper('lowerCaseAndConcat', function (object:any) {
            return new Handlebars.SafeString(object.replace(/\s+/g, '').toLowerCase());
        });

        /**
         * Removes spaces and sets string to lowercase
         *
         * @param object {any}
         * @return Handlebars
         */
        Handlebars.registerHelper('truncate', function (string:any) {
            return new Handlebars.SafeString(StringUtil.truncate(string, 100, '&hellip;'));
        });

        /**
         * Compares two values
         *
         * @param object {any}
         * @return Handlebars
         */
        Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {

            if (arguments.length < 3) {
                throw new Error('Handlerbars Helper "compare" needs 2 parameters');
            }

            const operator = options.hash.operator || '==';
            const operators:any = {
                '==':       function(l,r) { return l == r; },
                '===':      function(l,r) { return l === r; },
                '!=':       function(l,r) { return l != r; },
                '<':        function(l,r) { return l < r; },
                '>':        function(l,r) { return l > r; },
                '<=':       function(l,r) { return l <= r; },
                '>=':       function(l,r) { return l >= r; },
                'typeof':   function(l,r) { return typeof l == r; }
            };

            if (!operators[operator]) {
                throw new Error('Handlerbars Helper "compare" doesn\'t know the operator ' + operator);
            }

            const result = operators[operator](lvalue, rvalue);

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
        Handlebars.registerHelper('debug', function (optionalValue:any) {
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
        Handlebars.registerHelper('selectHelper', function(selected, options) {
            let html = options.fn(this);

            if (selected) {
                let values = String(selected).split(',');
                let length = values.length;

                for (let i = 0; i < length; i++) {
                    html = html.replace( new RegExp(' value=\"' + values[i] + '\"'), '$& selected="selected"');
                }
            }

            return html;
        });

    }

}

export default HandlebarsHelpers;

