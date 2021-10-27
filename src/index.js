import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
import Playground from './util/playground';

ReactDOM.render(
  <React.StrictMode>
    <Movies />
    <Playground />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
