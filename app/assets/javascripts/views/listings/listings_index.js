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
    var id = $target.attr('data-id')
    var $dialogBox = $("div#dialog-" + id)
    if ($dialogBox.length === 0) {
      Backbone.history.navigate("listings/" + id, {trigger: true})
    } else {
      $dialogBox.parents(".ui-dialog").effect("shake", "slow")
    }
  },

  newListing: function () {
    Backbone.history.navigate("listings/new", {trigger: true})
  }

});
