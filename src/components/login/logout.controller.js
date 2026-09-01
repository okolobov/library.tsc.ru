LogoutController.$inject = ['$location', 'AuthenticationService'];

export default function LogoutController($location, AuthenticationService) {
    var ctrl = this;

    ctrl.$onInit = function() {
        logout();
    };

    ctrl.isAuthenticated = function() {
        return AuthenticationService.isAuthenticated();
    };

    function logout() {
        var self = this;
        ctrl.loading = true;
        AuthenticationService.logout(function(response) {
            ctrl.loading = false;
            if (response) {
                $location.path('/login');
            } else {
                self.error = "logout failed";
            }
        });
    }

}
