(function() {
	'use strict';
	angular.module('data')
           .component('categories', {
                templateUrl: 'templates/categories.html',
                controller: CategoriesComponentController,
                controllerAs : 'ctrl',
                bindings: {
                    items: '<'
                }
        
    });
    
    
    function CategoriesComponentController() {
        var ctrl = this;
            
    }
	
})();