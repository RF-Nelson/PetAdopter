Petadopter.Views.ListingForm = Backbone.View.extend({
  template: JST['listings/form'],

  render: function () {
    var that = this
    var view = this.template({
      listing: this.model
    })

    $(view).dialog({
      height: 580, width: 620,
      modal: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      buttons: {"Create Listing": function () {
        event.preventDefault();
        var attrs = this.serializeJSON()
        this.model.set(attrs)
        this.model.save({}, {
          success: function () {
            that.collection.add(that.model, {merge: true})
            $("div#new_listing").remove()
          }
        })
      }},
      close: function () {
        // $("div#dialog-" + that.modelId).remove()
      },
      hide: {
        effect: "explode",
        duration: 500
      }})
    Backbone.history.navigate("", {trigger: true})

    return this
  },

  addListing: function () {
    event.preventDefault();
    var attrs = this.serializeJSON()
    var that = this

    this.model.set(attrs)
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, {merge: true})
        $("div#new_listing").remove()
      }
    })
  }

})
