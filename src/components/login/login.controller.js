LoginController.$inject = ['$location', 'AuthenticationService'];

export default function LoginController($location, AuthenticationService) {
    var ctrl = this;

    ctrl.$onInit = function() {
        reset();
    };

    ctrl.reset = function() {
        reset();
    };

    ctrl.login = function() {
        var self = this;
        ctrl.loading = true;
        AuthenticationService.login(ctrl.identifier, ctrl.password, function(response) {
            ctrl.loading = false;
            if (response) {
                $location.path('/');
            } else {
                self.error = "username or password is incorrect";
            }
        });
    };

    ctrl.isAuthenticated = function() {
        return AuthenticationService.isAuthenticated();
    };

    ////////

    function reset() {
        ctrl.identifier = null;
        ctrl.password = null;
        ctrl.error = null;
    }
}
