import angular from 'angular';

export default angular.module('components.app', [])
    .component('app', {
        template: require('./index.pug')()
    })
    .name;
