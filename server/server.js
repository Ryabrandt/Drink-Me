Meteor.methods({
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