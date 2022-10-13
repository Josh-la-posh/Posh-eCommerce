import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/ConfigureStore';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faUser, faStar, faMagnifyingGlass, faCircleQuestion, faCartShopping, faCartPlus, faChevronRight, faMobile, faLaptop, faVolleyball, faGamepad, faShirt, faCarSide, faEllipsis, faTrash, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faUser, faStar, faMagnifyingGlass, faCircleQuestion, faCartShopping, faCartPlus, faChevronRight, faMobile, faLaptop, faVolleyball, faGamepad, faShirt, faCarSide, faEllipsis, faTrash, faSpinner)
const store = ConfigureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();