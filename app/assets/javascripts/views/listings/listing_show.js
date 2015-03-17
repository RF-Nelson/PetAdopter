Petadopter.Views.ListingShow = Backbone.View.extend({

  template: JST['listings/show'],
  commentsTemplate: JST['listings/comment'],

  initialize: function (options) {
    this.comments = this.model.comments()
    this.modelId = this.model.id
    this.$rootEl = options.$rootEl
    this.listenTo(this.comments, 'all', function () {
      var $dialogBox = $("div#dialog-" + this.modelId)
      var $comments = $dialogBox.children(".comments")
      $comments.html("")
      $comments.html(this.commentsTemplate({ comments:this.comments }))
    })
  },

  render: function () {
    // $("body").scroll(function(e){ e.preventDefault()});
    // $('body').addClass('stop-scrolling')
    var pos = $(window).scrollTop()
    Backbone.history.navigate("", {trigger: true})
    $(window).scrollTop(pos)
    var that = this
    var view = this.template({
      listing: this.model
    })
    $(view).dialog({
      height: 460, width: 620,
      position: { my: "center", at: "center", of: $('[data-id="'+ this.modelId +'"]')},
      show: {
        effect: "blind",
        duration: 700
      },
      close: function () {
        $("div#dialog-" + that.modelId).remove()
      },
      hide: {
        effect: "clip",
        duration: 500
      }})

      // setTimeout(function() {ackbone.history.navigate("", {trigger: true)}, 800)

    // Backbone.history.navigate("", {trigger: true})

    this.el = $("#dialog")
    this.el.attr("id", "dialog-" + this.model.id)
    // this.$el.html(view)
    return this
  }

})
