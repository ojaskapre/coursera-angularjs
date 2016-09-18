(function() {
	'use strict';
	angular.module('ShoppingListCheckOff', [])
		   .controller('ToBuyShoppingController', ToBuyShoppingController)
           .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
           .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuyCntrl = this;
        
        toBuyCntrl.getItems = function() {
            toBuyCntrl.itemsList = ShoppingListCheckOffService.getAvailableItems();
            return toBuyCntrl.itemsList;
        }; 
        
        toBuyCntrl.buyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }
    
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var boughtCntrl = this;       
          
        boughtCntrl.getItems = function() {
            boughtCntrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
            return boughtCntrl.boughtItems;
        };
    }
    
    function ShoppingListCheckOffService() {
        
        var service = this;
        
        service.itemsList = [{
            name: 'Cookies', 
            quantity : 3
        }, {
            name: 'Chips',
            quantity: 4
        }, {
            name: 'Cakes',
            quantity: 10
        }, {
            name: 'Pizza Wheels',
            quantity: 10
        }, {
            name: 'Potato Bites', 
            quantity : 5
        }];
        
        service.boughtItems = [];
        
        service.buyItem = function(itemIndex) {
            service.boughtItems.push(service.itemsList[itemIndex]);
            service.itemsList.splice(itemIndex, 1);
        };
        
        service.getAvailableItems = function() {
            return service.itemsList;
        };
        
        service.getBoughtItems = function() {
            return service.boughtItems;
        };
        
    }
	
})();