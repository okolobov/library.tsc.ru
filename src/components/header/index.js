import angular from 'angular';

export default angular.module('components.header', [])
    .component('header', {
        template: require('./header.pug')()
    })
    .name;
