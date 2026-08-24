RegistrationController.$inject = ['$location', '$window', 'RegistrationService'];

export default function RegistrationController($location, $window, RegistrationService) {
    var ctrl = this;

    /*
    ctrl.$onInit = function() {
        reset();
    };

    ctrl.reset = function() {
        reset();
    };

    ctrl.callRegistration = function() {
        var self = this;
        var data = {};

        data.username = ctrl.identifier;
        data.password = ctrl.password;
        data.realname = ctrl.realname;
        data.email = ctrl.email;

        ctrl.loading = true;
        RegistrationService.registration(data, function(response) {
            ctrl.loading = false;
            if (response) {
                $location.path('/');
            } else {
                self.error = "registration error";
            }
        });
    };

    function reset() {
        ctrl.username = null;
        ctrl.password = null;
        ctrl.realname = null;
        ctrl.email = null;
        ctrl.error = null;
    }
    */
}
