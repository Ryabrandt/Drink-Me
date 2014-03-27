Template.addToCabinet.form_changed = function(){
  return Session.get('form_changed');
};
Template.addToCabinet.events({
  "submit #addToCabinetForm": function(e){
    e.preventDefault();
    console.log("Ingredient Added!");
    try{
      Meteor.call('addToLiquorCabinet', {
        cabinetOwner: Meteor.userId(),
        ingredientName: $(".cabinetIngredient").val(),
        ingredientQuant: $(".ingredientQuant").val()
      });
    Session.set('form_changed', window.Date());
    $("#addToCabinetForm")[0].reset();      
    }catch(error){
      console.log(error);
    }
  }

});



// Cabinets({
//   _id: String
//   userId: {}
//   cabinet: [{

//     }]
// })