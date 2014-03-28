
Template.insertNewDrink.form_changed = function(){
  return Session.get('form_changed');
};
Template.insertNewDrink.events({
  
  'submit #newDrinkForm': function(e){
    e.preventDefault();
    try{
      var ingredients = [];
      var ingArray = [];
      // Extracts the values of each ingredient in the form, which can be few
      // or many, and adds them all to an array.
      $(".cocktailIngredient").each(function(index){
        var ing = $(".cocktailIngredient")[index].children[0].value;
        var quant= $(".cocktailIngredient")[index].children[1].value;

        ingredients.push(ing);
        ingredients.push(quant);
      });
      // Iterates through the newly built array, by twos, adding each ingredient
      // into an object by each pair of indexes. 
      for(var i = 0; i < ingredients.length; i += 2){
        var tempObj = {};
        tempObj.name = ingredients[i];
        tempObj.quantity = ingredients[i+1];
        ingArray.push(tempObj);
      }      
      // Sends an object of the data we built along with more data from the form
      // to a server method for insertion.
      Meteor.call("newCocktail", {
        cocktailName: $(".drinkName").val(),
        cocktailGlass: $(".glass").val(),
        cocktailDirections: $(".mixingDirections").val(),
        cocktailIngredients: ingArray
      });      
      // Sets a new value on the variable that got watched in the hidded div
      // so as to refresh the form and get rid of extra ingredient fields
      // that may be unnecessary now.       
      Session.set('form_changed', window.Date());
      $("#newDrinkForm")[0].reset();
    } catch(err){
      console.log(err);
    }
  },
  // This adds a new instance of the html for an ingredient, so that you can describe 
  // cocktails that have as many or few ingredients that you want.
  'click .newIngredientButton': function(e){
    e.preventDefault();
    var addDiv = "<div class='form-group cocktailIngredient'><input type='text' class='form-inline form-control ingredientName' placeholder='ingredient'></input><input type='text' class='form-inline form-control ingredientQty' placeholder='quantity'></input></div>";
    $(".nodeAfterIngredients").prev().append(addDiv);
  }
});