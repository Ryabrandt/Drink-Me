Template.addToCabinet.form_changed = function(){
  return Session.get('form_changed');
};
Template.addToCabinet.events({
  "submit #addToCabinetForm": function(e){
    // Cannot use default behavior because no page refreshes.
    e.preventDefault();
    try{
      // Sends an object of values from the form along with the id of
      // the current user to the server to store their liquors.
      Meteor.call('addToLiquorCabinet', {
        cabinetOwner: Meteor.userId(),
        ingredientName: $(".cabinetIngredient").val(),
        ingredientQuant: $(".ingredientQuant").val()
      });
    // This updates on submit to clear the form.
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
//   }]
// })