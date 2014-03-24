Meteor.methods({
  
  getCocktails: function(){
    var ends = [89, 186, 187, 188, 189, 190, 191, 192, 193, 194,195, 196, 197, 
    198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 
    213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 
    228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 
    243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 259, 260, 261, 262, 263, 
    265, 266, 267];
    
    
    for(var i = 0; i < ends.length; i++){
      var cocktailUrl = "http://www.iba-world.com/index.php?option=com_content&id=" + ends[i];
      Meteor.http.get(cocktailUrl , function (error, result) {
        if (error) { 
          console.log("Problems");
        } else if (result.statusCode === 200) {
          $ = cheerio.load(result.content);
          console.log($(".info1").text());
        }
      });
    }
    
  }

});