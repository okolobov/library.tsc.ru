import angular from 'angular';

import searchService from '../../services/search.service.js';
import searchController from './search.controller.js';
import documentController from './document.controller.js';
import mk2Filter from '../../filters/mk2';

export default angular.module('components.search', [searchService, mk2Filter])
    .component('search', {
        bindings: {
            q: '<',
            p: '<',
            f: '<'
        },
        template: require('./search.pug')(),
        controller: searchController
    })
    .component('documentsList', {
        bindings: {
            content: '<'
        },
        template: require('./documentsList.pug')()
    })
    .component('documentsListItem', {
        bindings: {
            item: '<'
        },
        template: require('./documentsListItem.pug')()
    })
    .component('document', {
        bindings: {
            docid: '<'
        },
        template: require('./document.pug')(),
        controller: documentController
    })
    .value('SearchConfig', {
        maxSize: 10,
        itemsPerPage: 20,
    })
    .name; 
