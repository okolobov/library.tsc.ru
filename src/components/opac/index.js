import angular from 'angular';

import opacController from './opac.controller.js';

export default angular.module('components.opac', [  ])
    .component('opac', {
        template: require('./opac.pug')(),
        controller: opacController
    })
    .name; 
