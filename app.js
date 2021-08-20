var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.names = [{
         
        "firstName" : "Ram",
        "lastName" : "Santo"
    },
    {    
         
        "firstName" : "Mohammed",
        "lastName" : " Ibrahim"
    },
    {
         
        "firstName" : " Sher",
        "lastName" : " khan"
    },
    { 
         
        "firstName" : "Carl",
        "lastName" : "Marx"
    },
    { 
         
        "firstName" : "Peter",
        "lastName" : "ceach"
    },
    { 
         
        "firstName" : "Thomas",
        "lastName" : " dalton"
    },
    { 
         
        "firstName" : " Marcus",
        "lastName" : " Benjamin"
    },
];
         $scope.addEntry=function() {
             $scope.names.push( $scope.newData);
             $scope.newData='';
         }

});