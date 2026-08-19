import angular from 'angular';

export default angular.module('components.help', [])
    .component('help', {
        template: require('./help.pug')()
    })
    .component('about', {
        template: require('./about.pug')()
    })
    .name; 
