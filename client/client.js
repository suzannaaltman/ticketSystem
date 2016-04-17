var app = angular.module('ticketApp', []);

//ng-repeat ticket in tickets
app.controller('FormController', ['$scope', '$http', function($scope, $http){
  console.log('Controller called');

  $scope.ticket = {};
  $scope.tickets = [];

  $scope.getTickets = function(){
    console.log('getTickets called');
    $http.get('ticket/all').then(function(response){
      console.log(response);
      $scope.tickets = response.data;
    })
  }

  $scope.sendData = function(){
    console.log('sendData called');
    $http.post('/ticket/add', $scope.ticket).then(function(response){
      console.log(response);
      $scope.getTickets();
    })
  }

  $scope.removeTicket = function(ticket) {
    console.log('Ticket is', ticket);
    id = ticket._id;
    console.log('/ticket/remove/' +id);
    $http.delete('/ticket/remove/' +id).then(function(response){
      console.log('deleted', ticket);
      $scope.getTickets();
    })
  }

  $scope.getTickets();
}])
