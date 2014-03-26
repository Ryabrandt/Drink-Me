Meteor.methods({
  hashifyIng: function(data){
    try{
      data = data || [];
      var ingArray = [];
      console.log("Got it" + data);
      for(var i = 0; i < data.length; i += 2){
        var tempObj = {};
        tempObj.name = data[i];
        tempObj.quantity = data[i+1];
        ingArray.push(tempObj);
      }
      return ingArray;
    }catch(err){
      console.log(err);
    }
  }

});