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


  // this function creates buttons depending upon if the listing
  // was created by the current user
  dialogButtons: function () {
    var that = this;
    if (Petadopter.currentUserId === this.model.get("owner_id")) {
      return {"Edit Listing": function () {

        var $boxContent = $("div#dialog-" + that.modelId)
        $boxContent.parent().remove()
        Backbone.history.navigate("listings/" + that.modelId + "/edit", {trigger: true})
        },

        "Remove Listing": function () {
        $("#dialog-confirm").html("Are you sure you want to remove your adoption listing?")
        $("#dialog-confirm").dialog({
          resizable: false,
          modal: true,
          title: "Confirm listing deletion",
          height: 220,
          width: 400,
          buttons: {
            "Yes": function () {
                $(this).dialog('close');
                $(this).remove()
                that.model.destroy()
                $("div#dialog-" + that.modelId).parent().effect("puff")
                setTimeout(function () {
                  $("div#dialog-" + that.modelId).parent().remove()
                }, 700)
                // $("div#dialog-" + that.modelId).parent().remove()
             },
            "No": function () {
                $(this).dialog('close');
             }
        }
    });
        }
      }
    } else {
      return null
    }
  },

  render: function () {
    // $("body").scroll(function(e){ e.preventDefault()});
    // $('body').addClass('stop-scrolling')
    var pos = $(window).scrollTop()
    // Backbone.history.navigate("", {trigger: true})
    $(window).scrollTop(pos)
    var that = this
    var view = this.template({
      listing: this.model,
      userId: Petadopter.currentUserId
    })
    var dialog = $(view).dialog({
      height: 460, width: 620,
      position: { my: "center", at: "center", of: $('[data-id="'+ this.modelId +'"]')},
      show: {
        effect: "blind",
        duration: 700
      },
      buttons: that.dialogButtons(),
      close: function () {
        $("div#dialog-" + that.modelId).remove()
      },
      hide: {
        effect: "clip",
        duration: 500
      }})

      $(dialog).parent().on('click', '.combut', function () {
        event.preventDefault();
        var dialog = $(".newCommentForm")//.parent()
        var attrs = dialog.serializeJSON()
        // debugger
        var comment = new Petadopter.Models.Comment()
        comment.set(attrs)
        comment.save({}, {
          success: function () {
            that.comments.add(that.model, {merge: true})
            $(".addComment").hide( "clip", 400 )
          }
        });
      })

      // setTimeout(function() {ackbone.history.navigate("", {trigger: true)}, 800)

    // Backbone.history.navigate("", {trigger: true})

    this.el = $("#dialog")
    this.el.attr("id", "dialog-" + this.model.id)
    // this.$el.html(view)
    return this
  }

})
