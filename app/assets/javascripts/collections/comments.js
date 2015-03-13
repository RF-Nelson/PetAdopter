Petadopter.Collections.Comments = Backbone.Collection.extend({

  initialize: function (models, options) {
    this.listing = options.listing
  },

  model: Petadopter.Models.Comment,
  url: function () {
    return this.listing.url() + '/comments'
  },

  getOrFetch: function (id) {
    var comment = this.get(id)
    var comments = this

    if (!comment) {
      comment = new Petadopter.Models.Comment({ id: id })
      comment.fetch({
        success: function () {
          comments.add(comment)
        }
      })
    }
    return comment
  }

})

// Petadopter.Collections.comments = new Petadopter.Collections.Comments()
