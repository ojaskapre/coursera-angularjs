(function(){
    
    "use strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$state', 'MenuService', 'MyInfoService'];
    function SignUpController($state, MenuService, MyInfoService) {
      var ctrl = this;
        
      ctrl.submit = function(userInfo) {
          MenuService.getFavoriteMenu(userInfo.favMenu).then(function(response) {
			  ctrl.noItemFound = false;
			  var contactInfo = {};
			  contactInfo.firstName = userInfo.firstName;
			  contactInfo.lastName = userInfo.lastName;
			  contactInfo.email = userInfo.email;
			  contactInfo.phone = userInfo.phone;
			  contactInfo.favMenu = userInfo.favMenu;
			  contactInfo.menuItem = response.data;
              MyInfoService.setMyInfo(contactInfo);
			  console.log("contactInfo  ", contactInfo);
			  $state.go('public.home');
          }, function(response) {
              ctrl.noItemFound = true;
          });
          
      }
	  
	  ctrl.checkMenu = function(favMenu) {
		MenuService.getFavoriteMenu(favMenu).then(function(response) {
			  ctrl.noItemFound = false;			  
          }, function(response) {
              ctrl.noItemFound = true;
          });
	  }
        
    }
    
    
})();