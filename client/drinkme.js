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

  Template.profilePage.username = function(){
    if(Boolean(Meteor.user())){
      return Meteor.user().emails[0].address;
    }
  };

  Template.profilePage.events({
    'click input': function() {
      Router.go("newDrink");
    }
  });

  Template.drinks.allDrinks = function(){
    try{
      console.log("in the allDrinks");
      return Cocktails.find();      
    }catch(error){
      console.log(error);
    }
  };
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
