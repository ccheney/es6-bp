import HandlebarsHelpers from './utils/HandlebarsHelpers';
import App from './App';

HandlebarsHelpers.init();

const app = new App();
app.appendTo('body');    // Need to specify what area our code has control over.
                         // The App.js class extends Stage which has the appendTo method.
