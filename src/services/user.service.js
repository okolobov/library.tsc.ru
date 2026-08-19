import angular from 'angular';

UserService.$inject = ['$resource', 'appSettings'];

function UserService($resource, appSettings) {
    return $resource(appSettings.apiEndpointUsers + "/users/:id", {id: '@id'}, {
        create: {
            method: 'POST'
        },
        update: {
            method: 'PUT'
        },
    });
}

export default angular.module('user.service', [])
    .factory('UserService', UserService)
    .name;
