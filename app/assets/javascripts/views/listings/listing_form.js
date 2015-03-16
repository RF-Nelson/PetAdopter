Petadopter.Views.ListingForm = Backbone.View.extend({
  template: JST['listings/form'],

  render: function () {
    var that = this
    var view = this.template({
      listing: this.model,
      userId:  Petadopter.currentUserId
    })

    var dialog = $(view).dialog({
      height: 600, width: 620,
      modal: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      buttons: {"Create Listing": function () {
          var attrs = $("#newListing").serializeJSON()

          that.model.set(attrs)
          that.model.save({}, {
            success: function () {
              that.collection.add(that.model, {merge: true})
              $(dialog).dialog('close')
            },
            error: function () {
              $("form#newListing").prepend("<h4 style='color:red'>Please make sure your new adoption listing has a Pet Name, Location, and Description.</h4></style>")
            }
          })
        }
      },
      close: function () {
        $("div#new_listing").remove()
      },
      hide: {
        effect: "explode",
        duration: 500
      }
    })

    // var form = dialog.find("#newListing").on("submit", function (event) {
    //   event.preventDefault()
    //   addListing()
    // })


    Backbone.history.navigate("", {trigger: true})

    return this
  },

  addListing: function () {
    var that = this
    var attrs = $("#newListing").serializeJSON()

    this.model.set(attrs)
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, {merge: true})
        $("div#new_listing").remove()
      }
    })
  }

})


// buttons: {"Create Listing": function () {
//   event.preventDefault();
//   debugger
//   var attrs = that.$el.serializeJSON()
//   this.model.set(attrs)
//   this.model.save({}, {
//     success: function () {
//       that.collection.add(that.model, {merge: true})
//       $("div#new_listing").remove()
//     }
//   })
// }}
