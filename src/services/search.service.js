import angular from 'angular';

SearchService.$inject = ['$resource', 'appSettings'];

function SearchService($resource, appSettings) {
    return $resource(appSettings.apiEndpoint + '/searchRetrieve', {});
}

export default angular.module('search.service', [])
    .factory('SearchService', SearchService)
    .name;
