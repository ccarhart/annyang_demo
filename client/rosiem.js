if (Meteor.isClient) {


 

  Template.control.events({
    'click .setup': function (event) {
      setupAnnYang();
    },
    'click .start-listening': function (event) {
      annyang.start();
    }
  });

  

  function setupAnnYang() {
    if (annyang) {
      
      // Remove all commands
      annyang.removeCommands();

      //Add some commands = triggers + action when heard.
      var commands = {
        
        'rosie': function() {
          alert('Yes, dear, what can I do for you?');
        },
        'set date': function() {
          alert('When do you want it to play?');
        }
      };
      annyang.addCommands(commands);

      alert('Setup has set triggers.');
      
    }
    else {
      alert('no annyang to set up...');
    }
  }

  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
