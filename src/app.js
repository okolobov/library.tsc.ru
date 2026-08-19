import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './style.css';
import angular from 'angular';
import ngresource from 'angular-resource';
import nganimate from 'angular-animate';
import ngmessages from 'angular-messages';
import ngbase64 from 'angular-base64';
import ngcookies from 'angular-cookies';
import uirouter from 'angular-ui-router';
import uibootstrap from 'ui-bootstrap4';

import routing from './app.config';
import app from './components/app';
import navigation from './components/navigation';
import home from './components/home';
import help from './components/help';
import login from './components/login';
import registration from './components/registration';
import search from './components/search';
import scan from './components/scan';
import opac from './components/opac';

angular
    .module('app', [
        ngresource,
        nganimate,
        ngmessages,
        ngcookies,
        'base64',
        uirouter,
        uibootstrap,
        app,
        navigation,
        home, help, login, registration,
        search, scan, opac
    ])
    .config(routing)
    .constant('appSettings', {
        apiEndpoint: process.env.API_ENDPOINT, // Using process/browser
    })
    .run(function() {
        console.log("Run app!");
    });

