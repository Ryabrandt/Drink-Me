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
  }
});