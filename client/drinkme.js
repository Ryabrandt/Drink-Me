if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to drinkme.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("Sam is the best wife");
    }
  });

  Template.profilePage.events({
    'click .newDrinkButton': function() {
      Router.go("insertNewDrink");
    }
  });

  Template.cocktails.allDrinks = function(){
    try{
      console.log("in the allDrinks");
      return Cocktails.find();      
    }catch(error){
      console.log(error);
    }
  };

  Template.cabinet.events({
    'click .addToCabinetButton': function() {
      $(".cabinet").toggleClass("byeBye");
    }
  });

  Template.cabinet.fullCabinet = function() {
    return Meteor.subscribe("cabinetData");
  };
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
