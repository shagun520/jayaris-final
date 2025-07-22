import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App1 from './App1';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <App1 />
  </HashRouter>
);
