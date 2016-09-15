(function(){
	'use strict';
	angular.module('LunchCheck', [])
		   .controller('LunchCheckController', lunchController);
	
    lunchController.$inject = ['$scope'];
	function lunchController($scope) {
		  
        $scope.checkLunch = function() {
            if (!$scope.lunchItems) {
                noItems();
                return;
            }
            var lunchItems =  getLunchItems($scope.lunchItems);
            if(lunchItems.length == 0) {
                noItems();
            } else if (lunchItems.length < 4) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too Much!";
            }
            
        }
        
        function getLunchItems(str) {
            var allItems = str.split(",");
            var validItems = [];
            
            angular.forEach(allItems, function(i, index) {
                if (i.trim() != "") {
                   validItems.push(i);
                }
            });
            
            return validItems;
        }       
        
        function noItems() {
             $scope.message = "Please enter data first";  
             $scope.lunchItems = "";
        }
	}
    
    
	
})();