Meteor.publish("cabinetData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'cabinet': 1}});
  } else {
    this.ready();
  }
});