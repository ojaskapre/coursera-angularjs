(function () {
    'use strict';

    angular.module('MenuApp')
           .controller('ItemDetailController', ItemDetailController);


    ItemDetailController.$inject = ['$stateParams', 'list'];
    function ItemDetailController ($stateParams, list) {
        var itemDetail = this;
        itemDetail.list = list;
        itemDetail.category = $stateParams.shortName;
        
    }

})();
