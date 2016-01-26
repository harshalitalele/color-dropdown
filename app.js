angular.module('colorPalette', [])
.controller('colorsCtrl', function($scope) {
    $scope.colors = [{
        title: 'Black',
        code: '#000000'
    }, {
        title: 'White',
        code: '#FFFFFF'
    }, {
        title: 'Dark Red',
        code: '#C00000'
    }, {
        title: 'Red',
        code: '#FF0000'
    }, {
        title: 'Orange',
        code: '#FFC000'
    },{
        title: 'Yellow',
        code: '#FFFF00'
    }, {
        title: 'Light Green',
        code: '#92D050'
    }, {
        title: 'Green',
        code: '#00B050'
    }, {
        title: 'Light Blue',
        code: '#00B0F0'
    }, {
        title: 'Blue',
        code: '#0000FF'
    }, {
        title: 'Dark Blue',
        code: '#002060'
    }, {
        title: 'Purple',
        code: '#7030A0'
    }];
    
    $scope.selectColor = function(selectedColor) {
        $scope.selectedColor = selectedColor;
    };
});
