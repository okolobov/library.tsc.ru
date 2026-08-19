ProfileController.$inject = ['$location', 'AuthenticationService'];

export default function ProfileController($location, AuthenticationService) {
    var ctrl = this;

    ctrl.$onInit = function() {
        load();
    };

    ctrl.isAuthenticated = function() {
        return AuthenticationService.isAuthenticated();
    };

    function load() {
        var self = this;
        ctrl.loading = true;
        AuthenticationService.profile(function(response) {
            ctrl.loading = false;
            if (response) {
                ctrl.profile = response;
            } else {
                self.error = "can't get profile";
            }
        });
    }



}
