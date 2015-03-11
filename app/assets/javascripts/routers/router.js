Petadopter.Routers.Router = Backbone.Router.extend({

  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": 'index',
    "api/listings/new": 'new',
    "api/listings/:id/edit": 'edit',
    "api/listings/:id/show": 'show'
  },

  index: function () {
    Petadopter.Collections.listings.fetch()
    var view = new Petadopter.Views.ListingsIndex({
      collection: Petadopter.Collections.listings
    })
    this._swapView(view)
  },

  new: function () {
    var listing = new Petadopter.Models.Listing()
    var view = new Petadopter.Views.ListingForm({
      model: listing, collection: Petadopter.Collections.listings
    })
    this._swapView(view)
  },

  edit: function (id) {
    var post = Petadopter.Collections.posts.getOrFetch(id)
    var view = new Petadopter.Views.ListingForm({
      model: listing, collection: Petadopter.Collections.listings
    })
    this._swapView(view)
  },

  show: function (id) {
    var post = Petadopter.Collections.posts.getOrFetch(id)
    var view = new Petadopter.Views.ListingShow({
      model: post
    })
    this._swapView(view)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove()
    this._currentView = view
    this.$rootEl.html(view.render().$el)
  }

});
