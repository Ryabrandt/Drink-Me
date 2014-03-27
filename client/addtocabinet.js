Template.addToCabinet.events({
  "submit #addToCabinetForm": function(e){
    e.preventDefault();
    console.log("Ingredient Added!");
    try{
      Meteor.users.update(Meteor.userId(), {$push: { cabinet:
          [{ name: $(".cabinetIngredient").val(),
             quantity: $(".ingredientQuant").val()

        }]}});

      
      
    }catch(error){
      console.log(error);
    }
  }

});



// Currentuser({
//   cabinet: [{

//     }]
// })