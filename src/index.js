import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './components/movies';
import Playground from './playground';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Movies />
    <Playground />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
