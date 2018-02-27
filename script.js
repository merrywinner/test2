var myApp = angular.module("myApp" , [] );
myApp.controller('myController', ['$scope' , function($scope){
  $scope.gmail = {
    username: "",
    email: ""
  };
  $scope.onGoogleLogin = function(){
    var params = {
     'clientid': '439825098539-4nen3sfvgafs5uqgt706a05rhjl86h6e.apps.googleusercontent.com',
      'cookiepolicy': 'single_host_origin',
      'callback': function(result){
        if (result['status']['signed_in']){
          var request = gapi.client.plus.people.get(
           {
             'userId': 'me'
           }
          );
          request.execute(function(resp){
            $scope.$apply(function(){
              hhhhhhh
              $scope.gmail.username = resp.displayName;
              $scope.gmail.email = resp.emails[0].value;
            });
          });
        }
      },
      'approvalprompt':'force',
      'scope':'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read '
    };
    gapi.auth.signIn(params);
  }
  
} ]);
