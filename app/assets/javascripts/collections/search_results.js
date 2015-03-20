Petadopter.Collections.SearchResults = Backbone.Collection.extend({

  url: "/api/search",

  model: function (attrs) {
    var type = attrs._type
    delete attrs._type

    return new Petadopter.Models.Listing(attrs)
  },

  parse: function (resp) {
    if (resp.total_count) {
      this.total_count = resp.total_count
    }

    return resp.results
  }

})
