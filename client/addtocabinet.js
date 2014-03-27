Meteor.subscribe('cabinetData');

Template.addToCabinet.form_changed = function(){
  return Session.get('form_changed');
};
Template.addToCabinet.events({
  "submit #addToCabinetForm": function(e){
    e.preventDefault();
    console.log("Ingredient Added!");
    try{
      Cabinets.update(
          {owner: Meteor.userId()},
          {$push: 
            {cabinet: {
              name: $(".cabinetIngredient").val(),
              quantity: $(".ingredientQuant").val()
            }}
          }
      );
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