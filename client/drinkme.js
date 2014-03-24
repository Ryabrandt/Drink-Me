if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to drinkme.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        Meteor.call("getCocktails");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
