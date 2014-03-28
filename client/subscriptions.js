Meteor.autorun(function(){
  // Allows the Client access to the datasets provided by publish.
  Meteor.subscribe("cabinetData");
  Meteor.subscribe("allCocktails");
  Meteor.subscribe("userData");
});