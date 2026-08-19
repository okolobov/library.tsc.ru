import angular from 'angular';

export default angular.module('components.navigation', [])
    .component('navigation2', {
        template: require('./navigation2.pug')()
    })
    .component('navigation', {
        template: require('./navigation.pug')(),
        controller: ['$state', '$window', 'AuthenticationService', function($state, $window, AuthenticationService) { 
            var ctrl = this;

            ctrl.q = null;
            ctrl.isAuth = AuthenticationService.isAuthenticated();

            ctrl.menu = [
                //{ ref: 'home', 'Home' },
                //{ ref: 'search', name: 'Search' },
                //{ ref: 'scan', name: 'Scan' },
                //{ ref: 'create', name: 'Create' },
                //{ ref: 'login',  name: 'Login'}
            ];

            ctrl.callSearch = function() {
                $state.go('search', {q: transform_text2cql(ctrl.q)});
            };

            ////////

            function transform_text2cql(text) {
                if (text) return `cql.serverChoice = "${text}"`;
            }


        }]
    })
    .component('navigationMenu', {
        bindings: {
            menu: '<'
        },
        template: require('./navigationMenu.pug')(),
        controller: ['$state', function($state) { 
            var ctrl = this;

            ctrl.$onInit = function() {
                ctrl.currentName = $state.current.name;
            };

            ctrl.$onChanges = function(changes) {
                if (changes) {
                    if (changes.menu) {
                        ctrl.menu = changes.menu.currentValue;
                    }
                }
            };

            ctrl.selectItem = function(item) {
                console.log(item);
            };

        }]
    })
    .component('navigationItem', {
        bindings: {
            item: '<',
            onSelect: '&'
        },
        template: require('./navigationMenuItem.pug')(),
        controller: ['$state', function($state) {
            var ctrl = this;
            ctrl.$onInit = function() {
                ctrl.isActive = ctrl.item.ref === $state.current.name;
            };
            ctrl.$onChanges = function(changes) {
                if (changes.item) {
                    ctrl.item = changes.item.currentValue;
                }
            };

            ctrl.select = function() {
                ctrl.onSelect({item: ctrl.item});
            };
        }]
    })
    .name;
