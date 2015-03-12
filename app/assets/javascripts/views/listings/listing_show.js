Petadopter.Views.ListingShow = Backbone.View.extend({

  template: JST['listings/show'],

  // initialize: function () {
  //   this.listenTo(this.model, 'sync', this.render)
  // },

  render: function () {
    var view = this.template({
      listing: this.model
    })

    $(view).dialog({
      height: 460, width: 620,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "clip",
        duration: 500
      }})

    this.el = $("#dialog")

    // this.$el.html(view)
    return this
  }

})
