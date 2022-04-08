import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';

const App = () => {
  const [, setState] = useState(initialData);
  

  
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

