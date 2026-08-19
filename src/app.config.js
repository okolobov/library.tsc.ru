routing.$inject = [
    '$locationProvider',
    '$urlRouterProvider',
    '$stateProvider',
    '$httpProvider'
];

export default function routing($locationProvider, $urlRouterProvider, $stateProvider, $httpProvider) {

    $locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix("!");
    //$urlServiceProvider.rules.otherwise({state: 'home'});
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                header: 'navigation',
                body: 'home'
            }
        }).state('help', {
            url: '/help',
            views: {
                header: 'navigation',
                body: 'help'
            }
        }).state('about', {
            url: '/help/about',
            views: {
                header: 'navigation',
                body: 'about'
            }
        }).state('login', {
            url: '/login',
            views: {
                header: 'navigation',
                body: 'login'
            }
        }).state('profile', {
            url: '/profile',
            views: {
                header: 'navigation',
                body: 'profile'
            }
        }).state('logout', {
            url: '/logout',
            views: {
                header: 'navigation',
                body: 'logout'
            }
        }).state('registration', {
            url: '/registration',
            views: {
                header: 'navigation',
                body: 'registration'
            }
        }).state('opac', {
            url: '/opac',
            views: {
                header: 'navigation',
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
                header: 'navigation',
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
                header: 'navigation',
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
                header: 'navigation',
                body: 'document'
            }
        });
}
