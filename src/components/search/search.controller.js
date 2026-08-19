SearchController.$inject = ['$state', 'SearchConfig', 'SearchService'];

export default function SearchController($state, SearchConfig, SearchService) {
    var ctrl = this;


    ctrl.$onInit = function() {
        console.log('>>> $onInit()');
        console.log('>>> q:', ctrl.q);
        console.log('>>> p:', ctrl.p);
        ctrl.query = ctrl.q;
        ctrl.current = ctrl.p;
        ctrl.form = ctrl.f;
        ctrl.maxSize = SearchConfig.maxSize;
        ctrl.itemsPerPage = SearchConfig.itemsPerPage;
        fetch();
    };


    ctrl.$onChanges = function(changes) {
        console.log('>>> $onChanges()');
        if (changes) {
            if (changes.q) {
                ctrl.q = changes.q.currentValue;
            }
            if (changes.p) {
                ctrl.p = changes.p.currentValue;
            }
            if (changes.f) {
                ctrl.f = changes.f.currentValue;
            }
        }
    };

    function fetch() {
        var params = {};

        params.query = ctrl.query;
        params.startRecord = (ctrl.current-1) * ctrl.itemsPerPage + 1;
        params.maximumRecords = ctrl.itemsPerPage;
        params.recordPacking = 'xml';

        if (params.query) {
            ctrl.loading = true;
            search_retrieve(params, function(error, response) {
                if(error) {
                    ctrl.error = error;
                }
                ctrl.response = response;
                ctrl.loading = false;
            });
        }
 
    };

    ctrl.callSearch = function() {
        console.log('>>> callSearch()');
        console.log('>>> query:', ctrl.query);
        $state.go('search', {q: ctrl.query, p: ctrl.current});
    };


    ctrl.pageChanged = function() {
        $state.go('search', {q: ctrl.query, p: ctrl.current});
    };

    ctrl.callReset = function() {
        ;
    };


    ///////

    /**
     * search_retrieve(params, done)
     *
     * @param {object} params
     * @param {object} done
     */
    function search_retrieve(params, done) {
        params = params || {};
        SearchService.get(params).$promise.then(function(response) {
            done(null, response);
        }, function(err) {
            done(err, null);
        });
    }


}
