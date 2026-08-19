ScanController.$inject = ['$state', 'ScanConfig', 'ScanService'];

export default function ScanController($state, ScanConfig, ScanService) {
    var ctrl = this;

    ctrl.$onInit = function() {
        console.log('>>> $onInit()');
        console.log('>>> q:', ctrl.q);
        console.log('>>> p:', ctrl.p);
        console.log('>>> i:', ctrl.i);

        ctrl.term = ctrl.q;
        ctrl.indexes = ScanConfig.indexes;
        ctrl.index = ctrl.indexes.find((index) => index.value === ctrl.i);
        ctrl.maximumTerms = ScanConfig.maximumTerms;
        ctrl.responsePosition = ctrl.p;
        ctrl.scanClause = `${ctrl.index.value} = "${ctrl.term}"`;
        ctrl.columnCount = ScanConfig.columnCount;

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
            if (changes.i) {
                ctrl.i = changes.i.currentValue;
            }
        }
    };

    ctrl.callScan = function() {
        console.log('>>> callScan()');
        $state.go('scan', {q: ctrl.term, p: 1, i: ctrl.index.value});
    };

    ctrl.callSearch = function(item) {
        console.log('>>> callSearch', item);
        const cql = `${ctrl.index.value} = "${item['zs:displayTerm'][0]}"`;
        $state.go('search', {q: cql, p: 1});
    };


    ctrl.callScanNext = function(item) {
        console.log('>>> callScanNext', item);
        $state.go('scan', {q: item['zs:displayTerm'][0], p: 1, i: ctrl.index.value});
    };

    ctrl.callScanPrev = function(item) {
        console.log('>>> callScanPrev', item);
        $state.go('scan', {q: item['zs:displayTerm'][0], p: ctrl.maximumTerms, i: ctrl.index.value});
    };

    ctrl.callReset = function() {
        ;
    };

    function fetch() {
        var params = {};


        params.scanClause = ctrl.scanClause;
        params.maximumTerms = ctrl.maximumTerms;
        params.responsePosition = ctrl.responsePosition;

        if (params.scanClause) {
            ctrl.loading = true;
            scan(params, function(error, response) {
                if(error) {
                    ctrl.error = error;
                }
                ctrl.response = response;
                ctrl.loading = false;
            });
        }
 
    };



    ///////

    /**
     * scan(params, done)
     *
     * @param {object} params
     * @param {object} done
     */
    function scan(params, done) {
        params = params || {};
        ScanService.get(params).$promise.then(function(response) {
            done(null, response);
        }, function(err) {
            done(err, null);
        });
    }


}
