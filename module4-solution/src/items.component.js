(function() {
	'use strict';
    angular.module('data')
           .component('items', {
                                templateUrl: 'templates/items.html',
                                controller: ItemsComponentController,
                                controllerAs : 'ctrl',
                                bindings: {
                                    list: '<'
                                }
            });
		  
    
	function ItemsComponentController () {
        
    }
})();