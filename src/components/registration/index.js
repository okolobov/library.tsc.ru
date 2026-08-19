import angular from 'angular';

import registrationService from '../../services/registration.service.js';
import registrationController from './registration.controller.js';

export default angular.module('components.registration', [ registrationService ])
    .component('registration', {
        template: require('./registration.pug')(),
        controller: registrationController
    })
    .name; 
