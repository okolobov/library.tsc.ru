routing.$inject = [
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    '$httpProvider',
    '$mdThemingProvider'
];

export default function routing($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider, $mdThemingProvider) {

    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix("!");
    //$urlServiceProvider.rules.otherwise({state: 'home'});
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                header: 'header',
                body: 'home'
            }
        }).state('help', {
            url: '/help',
            views: {
                header: 'header',
                body: 'help'
            }
        }).state('about', {
            url: '/help/about',
            views: {
                header: 'header',
                body: 'about'
            }
        }).state('login', {
            url: '/login',
            views: {
                header: 'header',
                body: 'login'
            }
        }).state('profile', {
            url: '/profile',
            views: {
                header: 'header',
                body: 'profile'
            }
        }).state('logout', {
            url: '/logout',
            views: {
                header: 'header',
                body: 'logout'
            }
        }).state('registration', {
            url: '/registration',
            views: {
                header: 'header',
                body: 'registration'
            }
        }).state('opac', {
            url: '/opac',
            views: {
                header: 'header',
                body: 'opac'
            }
        }).state('scan', {
            url: '/scan?q&p&i',
            params: {
                q: {
                    value: '',
                    squash: false 
                },
                p: {
                    value: '1',
                    squash: false
                },
                i: {
                    value: 'local.title',
                    squash: false
                }
            },
            resolve: {
                q: ['$transition$', function($transition$) {
                    return $transition$.params().q;
                }],
                p: ['$transition$', function($transition$) {
                    return $transition$.params().p;
                }],
                i: ['$transition$', function($transition$) {
                    return $transition$.params().i;
                }]
            },
            views: {
                header: 'header',
                body: 'scan'
            }
        }).state('search', {
            url: '/search?q&p&f',
            params: {
                q: {
                    value: '',
                    squash: false 
                },
                p: {
                    value: '1',
                    squash: false
                },
                f: {
                    value: '1',
                    squash: false
                }
            },
            resolve: {
                q: ['$transition$', function($transition$) {
                    return $transition$.params().q;
                }],
                p: ['$transition$', function($transition$) {
                    return $transition$.params().p;
                }],
                f: ['$transition$', function($transition$) {
                    return $transition$.params().f;
                }]
            },
            views: {
                header: 'header',
                body: 'search'
            }
        }).state('document', {
            url: '/document/{docid:.*}',
            resolve: {
                docid: ['$transition$', function($transition$) {
                    return $transition$.params().docid;
                }],
            },
            views: {
                header: 'header',
                body: 'document'
            }
        });

    /* Configuring Color */

    $mdThemingProvider.theme('default');
    //$mdThemingProvider.disableTheming();
}


