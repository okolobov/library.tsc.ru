import angular from 'angular';

export default angular.module('components.home', [])
    .component('home', {
        template: require('./index.pug')(),
    })
    .name;
