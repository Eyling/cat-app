app.controller('appController', function($scope, titleService) {
    $scope.$on('handleTitleBroadcast', function() {
      $scope.title = titleService.title;
    });
});
