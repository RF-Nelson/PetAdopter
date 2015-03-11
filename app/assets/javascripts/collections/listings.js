Petadopter.Collections.Listings = Backbone.Collection.extend({
  url: 'api/posts'
  model: Petadopter.Models.Listing,

  getOrFetch: function (id) {
    var listing = this.get(id)
    var listings = this

    if (!listing) {
      var listing = new Petadopter.Models.Listing({id: id})
      listing.fetch({
        success: function () {
          listings.add(listing)
        }
      })
    } else {
      listing.fetch()
    }
    return listing
  }

});

Petadopter.Collections.listings = new Petadopter.Collections.Listings()
