import angular from 'angular';
//import mk2 from '';

export default angular.module('filters.mk2', [])
    .filter('mk2', [function() {
        return function(input) {
            var output = '';




            return input['mk2xml'][0]['Work'];
        }
    }])
    .name;
