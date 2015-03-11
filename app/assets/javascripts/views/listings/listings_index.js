Petadopter.Views.ListingsIndex = Backbone.View.extend({

  template: JST['listings/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render)
  },

  events: {
    'click .listing': 'goToListing'
  },

  render: function () {
    var view = this.template({ listings: this.collection })
    this.$el.html(view)
    return this
  },

  goToListing: function (event) {
    var $target = $(event.currentTarget)
    var id = $target.attr('data-id')
    Backbone.history.navigate("listings/" + id, {trigger: true})
  }

});
