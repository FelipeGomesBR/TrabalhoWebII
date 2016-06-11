angular.module('starter.controllers', ['ionic' ,'ionic-datepicker'])

.controller('FotoCtrl', function($scope, $cordovaCamera) {
   $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }

})

.controller('PullRefresherCtrl', function($scope, $timeout) {
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];
  
  $scope.doRefresh = function() {
    $timeout( function() {
      //simulate async response
      $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
  };
})

.controller('DatePickerCtrl', function($scope, ionicDatePicker) {
  $scope.currentDate = new Date();

  var ipObj1 = {
      callback: function (val) {
        $scope.currentDate = new Date(val);
      },
      setLabel: 'Set',
      closeLabel: 'Close',
      mondayFirst: true,
      closeOnSelect: false,
      templateType: 'popup',
      showTodayButton: true
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };
});
