(function(){
    
    "use strict";

    angular.module('public')
		.service('MyInfoService', MyInfoService);

    
    function MyInfoService() {
		var service = this;
		var myInfo = {};
      
		service.setMyInfo = function(userInfo) {
			 
			myInfo = userInfo;
		};
        
		service.getMyInfo = function () {
			return myInfo;
		};
    }
    
    
})();