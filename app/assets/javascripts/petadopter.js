window.Petadopter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    this.currentUserId = options.user_id,
    this.currentUsername = options.username
    new Petadopter.Routers.Router({
      $rootEl: $("#content")
    })
    Backbone.history.start()
  }
};
