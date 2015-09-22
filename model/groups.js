Groups = new Mongo.Collection('groups');

Groups.allow({

  insert: function (userId, response) {
    if (Meteor.user()) {
      return Meteor.user().is_admin;
    }
    return false;
  },

  update: function (userId, response, fields, modifier) {
    if (Meteor.user()) {
      return Meteor.user().is_admin;
    }
    return false;
  },

  remove: function (userId, response) {
    if (Meteor.user()) {
      return Meteor.user().is_admin;
    }
    return false;
  }
});
