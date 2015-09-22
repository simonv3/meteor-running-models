Meteor.startup(function () {
  if (Sites.find().count() === 0) {
    Sites.insert({
      'name': 'App',
      'has_been_set_up': false
    });
  }
});
