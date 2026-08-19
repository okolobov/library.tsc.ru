import angular from 'angular';
import authenticationService from '../../services/authentication.service.js';
import loginController from './login.controller.js';
import logoutController from './logout.controller.js';
import profileController from './profile.controller.js';

export default angular.module('components.login', [authenticationService])
    .component('login', {
        template: require('./login.pug')(),
        controller: loginController
    })
    .component('logout', {
        template: require('./logout.pug')(),
        controller: logoutController
    })
    .component('profile', {
        template: require('./profile.pug')(),
        controller: profileController 
    })
    .name; 
