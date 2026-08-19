import angular from 'angular';

ScanService.$inject = ['$resource', 'appSettings'];

function ScanService($resource, appSettings) {
    return $resource(appSettings.apiEndpoint + '/scan', {});
}

export default angular.module('scan.service', [])
    .factory('ScanService', ScanService)
    .name;
