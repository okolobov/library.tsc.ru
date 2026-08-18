routing.$inject = ['$stateProvider', '$urlServiceProvider'];
export default function routing($stateProvider, $urlServiceProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            component: 'home',
        });

    $urlServiceProvider.rules.otherwise({state: 'home'});
}
