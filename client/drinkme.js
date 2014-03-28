if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to drinkme.";
  };

  Template.cocktails.events({
    'click .tweetButton': function() {
      console.log("CLICKED SOMETHING");
      Meteor.call("cocktailTweet", "This is Twweeeeeetttt!", function(err,result) {
        if(!err) {
          alert("Tweet posted");
        } else {
          console.log(err);
        }
      });
    }
  });

  Template.cocktails.allDrinks = function(){
    try{
      return Cocktails.find();      
    }catch(error){
      console.log(error);
    }
  };

  Template.cabinet.events({
    'click .addToCabinetButton': function() {
      $(".cabinet").toggleClass("byeBye");
    },
    'click .newDrinkButton': function() {
      Router.go("insertNewDrink");
    }
  });

  Template.cabinet.fullCabinet = function() {
      try{
        return Cabinets.find();
      }catch(error){
        console.log(error);
      }
    };
}

if (Meteor.isServer) {
  var twitter = new TwitterApi();

  Meteor.methods({
    cocktailTweet: function(text){
      if(Meteor.user()){
        console.log("Trying to post");
        twitter.postTweet(text);
      }
    }
  });
}
