(function(){
    
    "use strict";

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['$state', 'MyInfoService', 'ApiPath'];
    function MyInfoController($state, MyInfoService, ApiPath) {
		var ctrl = this;
        ctrl.registeredInfo = MyInfoService.getMyInfo();
		console.log("reg " ,ctrl.registeredInfo);
		ctrl.basePath = ApiPath;
		
		if (!angular.equals(ctrl.registeredInfo, {})) {
			console.log("in if");
			ctrl.infoSaved = true;
		} else {
			ctrl.infoSaved = false;
		}
     
        ctrl.okay = function() {
			$state.go('public.home');
		};
    }
    
    
})();