import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css?raw';
import '../node_modules/bootstrap-toggle/css/bootstrap2-toggle.css?raw';

addLocaleData(en);
addLocaleData(es);

ReactDOM.render(
    <BrowserRouter>
        <App lang="en"/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
