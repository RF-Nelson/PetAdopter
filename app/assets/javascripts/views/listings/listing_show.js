Petadopter.Views.ListingShow = Backbone.View.extend({

  template: JST['listings/show'],

  // initialize: function () {
  //   this.listenTo(this.model, 'sync', this.render)
  // },

  render: function () {
    var view = this.template({
      listing: this.model
    })

    $(view).dialog({height: 460, width: 620})

    this.el = $("#dialog")

    // this.$el.html(view)
    return this
  }

})
