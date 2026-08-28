import angular from 'angular';

AuthenticationService.$inject = ['$http', '$cookies', '$base64', 'appSettings'];

function AuthenticationService($http, $cookies, $base64, appSettings) {

    var service = {};

    service.login = login;
    service.profile = profile;
    service.logout = logout;
    service.isAuthenticated = isAuthenticated; // see isAuthenticated()

    return service;

    /**
     * logout(cb)
     * @cb
     */
    function logout(callback) {
        $http({method: 'POST', url: '/logout'}).then(function(response) {
            if (response.status === 200) {
                callback(true);
            } else {
                callback(false);
            }
        }, function(err) {
            if (err) console.log(err.message || err);
            callback(false);
        });
    }
    /**
     * login(username, password, cb)
     * @username
     * @password
     * @cb
     */
    function login(identifier, password, callback) {
        var authstring = $base64.encode(identifier + ':' + password);
        $http({method: 'POST', url: '/authenticate', headers: {'Authorization': 'Basic ' + authstring}}).then(function(response) {
            if (response.status === 200) {
                callback(true);
            } else {
                callback(false);
            }
        }, function(err) {
            if (err) console.log(err.message || err);
            callback(false);
        });
    }

    /**
     * isAuthenticated()
     */
    function isAuthenticated() {
        var user = $cookies.get('user');
        return !(user === undefined);
    }
    /**
     * profile(callback)
     */
    function profile(callback) {
        $http({method: 'POST', url: '/profile'}).then(function(response) {
            callback(response.data);
        }, function(err) {
            callback(err.message || err);
        });
    }
}

export default angular.module('authentication.service', [])
    .factory('AuthenticationService', AuthenticationService)
    .name;
