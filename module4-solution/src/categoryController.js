(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);


CategoryController.$inject = ['items'];
function CategoryController (items) {
    var categoryCtrl = this;
    categoryCtrl.items = items;

}

})();
