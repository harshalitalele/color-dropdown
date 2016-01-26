angular.module('colorPalette', [])
.controller('colorsCtrl', function($scope) {
    $scope.colors = [{
        title: 'Black',
        code: '#000000'
    }, {
        title: 'White',
        code: '#FFFFFF'
    }];
    
    $scope.selectColor = function(selectedColor) {
        $scope.selectedColor = selectedColor;
    };
});
