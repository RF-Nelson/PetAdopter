Petadopter.Models.Listing = Backbone.Model.extend({
  urlRoot: '/api/listings',

  comments: function () {
    if (!this._comments) {
      this._comments = new Petadopter.Collections.Comments([], {
        listing: this
      })
    }
    return this._comments
  },

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments, {parse: true})
      delete response.comments
    }
    return response
  }

});
