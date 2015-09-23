
Meteor.users.allow({
  update: function (userId, user, fieldNames) {
    return (userId && userId === user._id) || Meteor.user().is_admin;
  },
});
