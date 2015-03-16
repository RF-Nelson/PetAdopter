Petadopter.Views.ListingsIndex = Backbone.View.extend({

  template: JST['listings/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync add change remove', this.render)
  },

  events: {
    'click .listing': 'goToListing',
    'click .new_listing': 'newListing'
  },

  render: function () {
    var view = this.template({ listings: this.collection, userId: Petadopter.currentUserId })
    this.$el.html(view)
    return this
  },

  goToListing: function (event) {
    var $target = $(event.currentTarget)
    console.log($target);
    var id = $target.attr('data-id')
    Backbone.history.navigate("listings/" + id, {trigger: true})
    $('[data-id="' + id + '"]').effect("transfer", { to: $("div#dialog-" + id) }, 1000)
  },

  newListing: function () {
    Backbone.history.navigate("listings/new", {trigger: true})
  }

});
