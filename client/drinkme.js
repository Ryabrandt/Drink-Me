if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to drinkme.";
  };

  // Needs to be reworked and hooked up to oAuth, adhering to the specs
  // from the latest version of meteor.
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

  // Returns a find based on what data was subscribed, NOT necessarily the entire set
  // although in this case it should be.
  Template.cocktails.allDrinks = function(){
    try{
      return Cocktails.find();      
    }catch(error){
      console.log(error);
    }
  };

  Template.cabinet.events({
    'click .addToCabinetButton': function() {
      $(".cabinet").toggleClass("byeBye"); //toggles the hidden form to add a new ingredient
    },
    'click .newDrinkButton': function() {
      Router.go("insertNewDrink"); // renders the insertnewDrink template
    }
  });

  // Unlike above, returns only the cabinet that is associated with currentUser
  // based on the publish function
  Template.cabinet.fullCabinet = function() {
      try{
        return Cabinets.find();
      }catch(error){
        console.log(error);
      }
    };
}

if (Meteor.isServer) {

  // May need to be manually replaced and have ENV variables added for 
  // posting with oAuth.
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
