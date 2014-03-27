Cocktails = new Meteor.Collection("Cocktails");
Cabinets = new Meteor.Collection("Cabinets");
Ingredients = new Meteor.Collection("Ingredients");

Cabinets.allow({
  update: function(userId, doc, fields, modifier) {
    return (userId && doc.owner === userId);
  },
  fetch: ['owner']
});