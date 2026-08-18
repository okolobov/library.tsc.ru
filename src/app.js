import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './app.config';
import homeComponent from './components/home';

angular.module('app', [uirouter, homeComponent])
    .config(routing)
    .constant('appSettings', {
        apiEndpoint: process.env.API_ENDPOINT, // Using process/browser
    })
    .run(function() {
        console.log("Run App!");
    });
 
