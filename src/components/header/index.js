import angular from 'angular';
import authenticationService from '../../services/authentication.service.js';

export default angular.module('components.header', [])
    .component('header', {
        template: require('./header.pug')(),
        controller: ['AuthenticationService', function(AuthenticationService) { 
            var ctrl = this;
            ctrl.isAuth = AuthenticationService.isAuthenticated();
        }]
    })
    .name;
