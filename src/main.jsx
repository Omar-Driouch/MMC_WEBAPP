import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from './store/store.js';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"
import { PrimeReactProvider } from 'primereact/api';
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
     <PrimeReactProvider>
       <App />
     </PrimeReactProvider>
    </Provider>
  
)
