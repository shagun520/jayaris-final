import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App1 from './App1';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/jayaris-final' : '/'}>
    <App1 />
  </BrowserRouter>
);
