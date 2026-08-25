import angular from 'angular';

export default angular.module('components.footer', [])
    .component('footer', {
        template: require('./footer.pug')()
    })
    .name;
