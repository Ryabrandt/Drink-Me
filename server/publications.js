Meteor.publish("cabinetData", function(){
  return Cabinets.find({owner: this.userId});
});

Meteor.publish("allCocktails", function(){
  return Cocktails.find();
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'services': 1}});
  } else {
    this.ready();
  }
});
