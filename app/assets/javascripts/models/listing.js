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

    if (response.current_user) {
      this.set({current_user: response.current_user})
      delete response.current_user
    }

    return response
  },

  toJSON: function () {
    return {
      listing: _.clone(this.attributes)
    }
  }

});
