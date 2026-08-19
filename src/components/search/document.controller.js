DocumentController.$inject = ['SearchConfig', 'SearchService'];

export default function DocumentController(SearchConfig, SearchService) {
    var ctrl = this;

    ctrl.$onInit = function() {
        console.log('>>> $onInit()');
        fetch_document();
    };

    ctrl.$onChanges = function(changes) {
        console.log('>>> $onChanges()');
        if (changes) {
            if (changes.docid) {
                ctrl.docid = changes.docid.currentValue;
            }
        }
    };


    function fetch_document() {
        var params = {};

        params.query = 'rec.id="' + ctrl.docid + '"';
        params.maximumRecords = 1;
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
 
    }

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
