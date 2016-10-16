(function() {
	'use strict';
	angular.module('NarrowItDownApp', [])
		   .controller('NarrowItDownController', NarrowItDownController)
           .service("MenuSearchService", MenuSearchService)
           .directive("foundItems", foundItems)
           .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
          
	
    NarrowItDownController .$inject = ['MenuSearchService'];
	function NarrowItDownController (MenuSearchService) {
        var narrowDownCtrl = this;
        
        narrowDownCtrl.found = [];
        
        narrowDownCtrl.narrowDown = function(searchText) {
            narrowDownCtrl.btnClicked = true;
            MenuSearchService.getMatchedMenuItems(searchText).then(function (data){
                
                narrowDownCtrl.found = data;    
                
            });           
        };
        
        narrowDownCtrl.removeItem = function (index) {
            narrowDownCtrl.found.splice(index, 1);
        }
       
    }
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var menuSearchService = this;
        
        menuSearchService.getMatchedMenuItems = function(searchTerm) {
            
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
            
                var foundItems = []
                if (result.data.menu_items.length) {
                    angular.forEach(result.data.menu_items, function(item, index) {
                        if(item.description.includes(searchTerm)) {
                            foundItems.push(item);
                        }
                    });    
                }
                
                return foundItems;
            });            
        };
        
        return menuSearchService;
    }
    
    function foundItems() {
       var ddo = {
        restrict: "E",
        templateUrl: 'foundItems.html',
        scope: {
          items: '<',                   
          onRemove: '&'
        },
        controller: FoundItemsController,
        controllerAs: 'list',
        bindToController: true
      };

      return ddo;
    }
    
    function FoundItemsController () {
        
    }
	
})();