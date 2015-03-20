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
      $comments.html(this.commentsTemplate({
        comments: this.comments,
        userId: Petadopter.currentUserId,
        listerId: this.model.get("owner_id")
      }))
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
          height: 240,
          width: 390,
          buttons: {
            "Yes": function () {
                $(this).dialog('close');
                $(this).remove()
                that.model.destroy()
                $("div#dialog-" + that.modelId).parent().effect("explode")
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
    Backbone.history.navigate("", {trigger: true})
    $(window).scrollTop(pos)
    var that = this
    var view = this.template({
      listing: this.model,
      userId: Petadopter.currentUserId
    })
    var dialog = $(view).dialog({
      height: 560, width: 530,
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
        effect: "fold",
        duration: 900
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
            that.comments.add(comment, {merge: true})
            $(".addComment").hide( "clip", 400 )
            // var $dialogBox = $("div#dialog-" + that.modelId)
            // var $comments = $dialogBox.children(".comments")
            // $comments.html("")
            // $comments.html(that.commentsTemplate({ comments:that.comments }))
            // debugger
          }
        });
      })

      $(dialog).parent().on('click', '.removeComment', function () {
        event.preventDefault()
        var comment = $(event.target).parent().attr('id')
        var id = comment[comment.length-1];
        comment = new Petadopter.Models.Comment({ id: id, listing: that.modelId })
        comment.fetch({
          success: function () {
            comment.destroy()
            that.comments.remove(comment)
          }
        })
      })

      $(dialog).parent().on('click', 'img', function () {
        var pic = $(event.target).attr('src')
        var picLink = '<img src="' + pic + '"/>'
        $('#photo-modal').html(picLink)
        $('#photo-modal').dialog({
          height: 660, width: 800,
          show: {
            effect: "slide",
            duration: 700
          },
          modal: true,
          close: function () {
            $(this).remove()
            $('#photo-modal').html('')
          },
          hide: {
            effect: "clip",
            duration: 600
          }})
      })

      // setTimeout(function() {ackbone.history.navigate("", {trigger: true)}, 800)

    // Backbone.history.navigate("", {trigger: true})

    this.el = $("#dialog")
    this.el.attr("id", "dialog-" + this.model.id)
    // this.$el.html(view)
    return this
  },

  refreshComments: function () {

  }

})
