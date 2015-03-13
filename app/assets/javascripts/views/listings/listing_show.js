Petadopter.Views.ListingShow = Backbone.View.extend({

  template: JST['listings/show'],
  commentsTemplate: JST['listings/comment'],

  initialize: function (options) {
    this.comments = this.model.comments()
    this.modelId = this.model.id
    this.$rootEl = options.$rootEl
    this.listenTo(this.comments, 'sync add', function () {
      var $dialogBox = $("div#dialog-" + this.modelId)
      $dialogBox.append(this.commentsTemplate({ comments:this.comments }))
    })
  },

  render: function () {
    var that = this
    var view = this.template({
      listing: this.model
    })

    $(view).dialog({
      height: 460, width: 620,
      show: {
        effect: "blind",
        duration: 1000
      },
      close: function () {
        $("div#dialog-" + that.modelId).remove()
      },
      hide: {
        effect: "clip",
        duration: 500
      }})


    Backbone.history.navigate("", {trigger: true})

    this.el = $("#dialog")
    this.el.attr("id", "dialog-" + this.model.id)
    // this.$el.html(view)
    return this
  }

})
