(function() {
	'use strict';
	angular.module('data')
		   .service('MenuDataService', MenuDataService)
           .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    
    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        
        var menuDataService = this;
                
        menuDataService.getAllCategories = function () {
            
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            }).then(function (result) {                
                return result.data;                
            });
        };
                
        menuDataService.getItemsForCategory = function (categoryShortName) {
            
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {category : categoryShortName}
            });
        };
    }
	
})();