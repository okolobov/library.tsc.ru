import angular from 'angular';

RegistrationService.$inject = ['$http', '$cookies',  'appSettings'];

function RegistrationService($http, $cookies, appSettings) {
    var service = {};

    service.registration = registration;

    return service;

    function registration(data, callback) {
        data = data || {};
        $http({method: 'POST', url: '/registration', data: data}).then(function(response) {
            if (response.status === 201) {
                callback(true);
            } else {
                callback(false);
            }
        }, function(err) {
            if (err) console.log(err.message || err);
            callback(false);
        });
    }

}

export default angular.module('registration.service', [])
    .factory('RegistrationService', RegistrationService)
    .name;
