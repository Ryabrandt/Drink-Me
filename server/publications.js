Meteor.publish("CabinetData", function(){
  return Cabinets.find({owner: this.userId});
});
