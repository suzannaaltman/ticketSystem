var app = angular.module('ticketApp', []);

//ng-repeat ticket in tickets
app.controller('FormController', ['$http', function($http){
  console.log('Controller called');
  var controller = this;
  controller.ticket = {};
  controller.tickets = [];

  controller.getTickets = function(){
    console.log('getTickets called');
    $http.get('ticket/all').then(function(response){
      console.log(response);
      controller.tickets = response.data;
    })
  }

  controller.sendData = function(){
    console.log('sendData called');
    $http.post('/ticket/add', controller.ticket).then(function(response){
      console.log(response);
      controller.ticket = {};
      controller.getTickets();
    })
  }

  controller.removeTicket = function(ticket) {
    console.log('Ticket is', ticket);
    id = ticket._id;
    console.log('/ticket/remove/' +id);
    $http.delete('/ticket/remove/' +id).then(function(response){
      console.log('deleted', ticket);
      controller.getTickets();
    })
  }

  controller.getTickets();
}])
