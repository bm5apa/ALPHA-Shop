import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/Step/App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Main({children}) {
  return(
<>
  {children}
</>
);
}

export default Main