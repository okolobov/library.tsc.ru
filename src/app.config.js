routing.$inject = ['$locationProvider', '$urlServiceProvider', '$urlRouterProvider', '$stateProvider', '$httpProvider'];

export default function routing($locationProvider, $urlServiceProvider,$urlRouterProvider, $stateProvider, $httpProvider) {

    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix("!");
    $urlServiceProvider.rules.otherwise({state: 'home'});
    //$urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                header: 'navigation',
                body: 'home'
            }
        });
}
