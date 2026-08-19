import angular from 'angular';

import scanService from '../../services/scan.service.js';
import scanController from './scan.controller.js';

export default angular.module('components.scan', [scanService])
    .component('scan', {
        bindings: {
            q: '<',
            p: '<',
            i: '<'
        },
        template: require('./scan.pug')(),
        controller: scanController
    })
    .component('termsList', {
        bindings: {
            content: '<',
            onSelect: '&',
            onNext: '&',
            onPrev: '&',
            cc: '@'
        },
        template: require('./termsList.pug')(),
        controller: function () {
            var ctrl = this;

            ctrl.selectedItem = function(item) {
                console.log('selected item', item);
                ctrl.onSelect({item: item});
            };

            ctrl.next = function(item) {
                console.log('next item', item);
                ctrl.onNext({item: item});
            };

            ctrl.prev = function(item) {
                console.log('prev item', item);
                ctrl.onPrev({item: item});
            };
 
        }
    })
    .component('termsListItem', {
        bindings: {
            item: '<',
            onSelect: '&'
        },
        template: require('./termsListItem.pug')(),
        controller: function() {
            var ctrl = this;

            ctrl.$onChanges = function(changes) {
                if (changes) {
                    if (changes.item) {
                        ctrl.item = changes.item.currentValue;
                    }
                }
            };

            ctrl.select = function() {
                console.log('select', ctrl.item);
                ctrl.onSelect({item: ctrl.item});
            };
        }
    })
    .value('ScanConfig', {
        maximumTerms: 25,
        columnCount: 1,
        indexes: [ 
            //{name: 'Заглавие (слово)', value: 'dc.title'},
            {name: 'Заглавие', value: 'local.title'},
            {name: 'Название источника', value: 'local.titleSeries'},
            {name: "Имя лица", value: 'local.personalName'},
            {name: "Название организации", value: 'local.corporateName'},
            {name: "Автор", value: 'local.creator'},
            {name: "Дата публикации", value: 'local.date'},
            {name: "Классификация", value: 'local.classificationUDC'},
            //{name: "Идентификатор записи", value: 'local.id'},
            {name: "Дата создания записи", value: 'local.dateTimeAdded'},
            {name: "Дата модификации записи", value: 'local.dateTimeLastModified'},
        ]
    })
    .name; 
