// Finds the cabinet only of the associated User.
Meteor.publish("cabinetData", function(){
  return Cabinets.find({owner: this.userId});
});

// Alphabetizes the cocktail list on window load. Currently
// does not re-alphabetize if cocktails are being added in real time.
Meteor.publish("allCocktails", function(){
  return Cocktails.find({ $query: {}, $orderby: { name: 1 }});
});

// Publishes the services field on a User so if they signed in
// with Twitter, their info from there can be accessed.
Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'services': 1}});
  } else {
    this.ready();
  }
});
