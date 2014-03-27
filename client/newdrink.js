
Template.insertNewDrink.form_changed = function(){
  return Session.get('form_changed');
};
Template.insertNewDrink.events({
  
  'submit #newDrinkForm': function(e){
    console.log("Submitted");
    e.preventDefault();
    try{
      var ingredients = [];
      var ingArray = [];
      $(".cocktailIngredient").each(function(index){
        var ing = $(".cocktailIngredient")[index].children[0].value;
        var quant= $(".cocktailIngredient")[index].children[1].value;

        ingredients.push(ing);
        ingredients.push(quant);
      });
      for(var i = 0; i < ingredients.length; i += 2){
        var tempObj = {};
        tempObj.name = ingredients[i];
        tempObj.quantity = ingredients[i+1];
        ingArray.push(tempObj);
      }      
      Cocktails.insert({
        name: $(".drinkName").val(),
        glass: $(".glass").val(),
        directions: $(".mixingDirections").val(),
        ingredients: ingArray
      });
      Session.set('form_changed', window.Date());
      $("#newDrinkForm")[0].reset();
      console.log(ingArray);
    } catch(err){
      console.log(err);
    }
  },
  'click .newIngredientButton': function(e){
    e.preventDefault();
    var addDiv = "<div class='form-group cocktailIngredient'><input type='text' class='form-inline form-control ingredientName' placeholder='ingredient'></input><input type='text' class='form-inline form-control ingredientQty' placeholder='quantity'></input></div>";
    $(".nodeAfterIngredients").prev().append(addDiv);
    console.log("Adding new Ingredient");
  }
});