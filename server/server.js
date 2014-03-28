Meteor.methods({
  // Upsert attempts to update based on the qury parameter, in this case, owner,
  // and if no cabinet by that owner exists, will create on instead.
  addToLiquorCabinet: function(data){
    try{
      Cabinets.update(
            {owner: data.cabinetOwner},
            {$push: 
              {cabinet: {
                name: data.ingredientName,
                quantity: data.ingredientQuant
              }},
            },
            {upsert: true});
      
    }catch(error){
      console.log(error);
    }
  },
  // Creates a new cocktail where ingredients is an array of objects, while the
  // others are standard objects with one key each.
  newCocktail: function(info){
    try{
      Cocktails.insert({
        name: info.cocktailName,
        glass: info.cocktailGlass,
        directions: info.cocktailDirections,
        ingredients: info.cocktailIngredients
      });
    }catch(error){
      console.log(error);
    }
  }
});