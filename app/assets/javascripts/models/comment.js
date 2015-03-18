Petadopter.Models.Comment = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/listings/' + this.get("listing_id") + '/comments'
  }
})
