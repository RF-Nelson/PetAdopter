Petadopter.Collections.Listings = Backbone.Collection.extend({
  url: 'api/listings',
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
  },

  getOrFetchComment: function (listingId, commentId) {
    var listing = this.get(listingId)
    var comment
    if (listing) {
      comment = listing.comments().getOrFetch(commentId)
      return comment
    }
    comment = new Petadopter.Models.Comment({ id: commentId })
    comment.fetch()
    return comment
  }

});

Petadopter.Collections.listings = new Petadopter.Collections.Listings()
