Petadopter.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "index",
    "listings/new": 'newListing',
    "listings/:id/edit": 'edit',
    "listings/:id": 'show'
    // "listings/:listing_id/comments/:id": "comment"

  },

  index: function () {
    Petadopter.Collections.listings.fetch()
    var view = new Petadopter.Views.ListingsIndex({
      collection: Petadopter.Collections.listings
    })
    this._swapView(view)
  },

  newListing: function () {
    var listing = new Petadopter.Models.Listing()
    var view = new Petadopter.Views.ListingForm({
      model: listing, collection: Petadopter.Collections.listings
    })
    this.$rootEl.append(view.render().$el)
    // this._swapView(view)
  },

  edit: function (id) {
    var post = Petadopter.Collections.listings.getOrFetch(id)
    var view = new Petadopter.Views.ListingForm({
      model: listing, collection: Petadopter.Collections.listings
    })
    this._swapView(view)
  },

  show: function (id) {
    var post = Petadopter.Collections.listings.getOrFetch(id)
    var $dialogBox = $("div#dialog-" + id)
    var that = this
    if ($dialogBox.length === 0) {

      var view = new Petadopter.Views.ListingShow({
        model: post, $rootEl: that.$rootEl
      })
      that.$rootEl.append(view.render().$el)
      $('[data-id="' + id + '"]').effect("transfer", { to: $("div#dialog-" + id) }, 800)

    } else {
      $dialogBox.parents(".ui-dialog").effect("shake", "slow")

      // Backbone.history.navigate("", {trigger: true, replace: true})
    }
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove()
    this._currentView = view
    this.$rootEl.html(view.render().$el)
  },

  // comment: function (listingId, commentId) {
  //   var comment = this.listings.getOrFetchComment(listingId, commentId)
  //
  // }

});
