import angular from 'angular';

export default angular.module('components.home', [])
    .component('home', {
        template: require('./home.pug')()
    })
    .component('advancedSearch', {
        template: require('./advancedSearch.pug')()
    })
    .name; 
