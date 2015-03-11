window.Petadopter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Petadopter.Routers.Router({ $rootEl = $('#content') })
    Backbone.history.start()
  }
};
