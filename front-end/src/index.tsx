import React from 'react'; // importando React da biblioteca 'react' para poder usar jsx
import ReactDOM from 'react-dom';
import App from './App'; // importando o App, que nada mais é do que a aplicação enxuta
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
