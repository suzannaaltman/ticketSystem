var express = require('express');
var Ticket = require('../../models/ticketModel');
var router = express.Router();

router.get('/all', function(request, response){
  Ticket.find({}, function(err, tickets){
    if(err){
      console.log(err);
      response.sendStatus(500);
    }else{
      response.send(tickets);
    }
  })
})

router.post('/add', function(request, response){
  console.log('Requested with a body of', request.body);

  var data = request.body;

  var newTicket = new Ticket({
    name: data.name,
    type: data.type,
    priority: data.priority,
    description: data.description,
    assignee: data.assignee,
    reporter: data.reporter
  })

  newTicket.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    }else{
      console.log('Ticket saved!');
      response.sendStatus(200);
    }
  })
})

module.exports = router;