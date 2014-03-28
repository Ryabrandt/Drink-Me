Meteor.autorun(function(){
  Meteor.subscribe("cabinetData");
  Meteor.subscribe("allCocktails");
  Meteor.subscribe("userData");
});