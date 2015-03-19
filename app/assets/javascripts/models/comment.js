Petadopter.Models.Comment = Backbone.Model.extend({

  initialize: function (options) {
    if (options) {
      this.listing = options.listing
    }
  },

  urlRoot: function () {
    if (this.listing) {
      return 'api/listings/' + this.listing + '/comments'
    } else {
      return 'api/listings/' + this.get("listing_id") + '/comments'
    }
  }
})
