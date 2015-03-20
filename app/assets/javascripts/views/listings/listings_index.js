Petadopter.Views.ListingsIndex = Backbone.View.extend({

  template: JST['listings/index'],

  initialize: function () {
    this.listenTo(this.collection, 'all', this.render)
    // this.bindScroll(); // infinite scroll
		this.searchResults = new Petadopter.Collections.SearchResults();
		this.searchResults.pageNum = 1;
		this.listenTo(this.searchResults, "sync", this.renderSearch);
  },

  events: {
    'click .listing': 'goToListing',
    'click .new_listing': 'newListing',
    "change .query": "search",
		"click .next-page": "nextPage",
		"click .prev-page": "prevPage" // not implemented
  },

  render: function () {
    var view = this.template({ listings: this.collection, userId: Petadopter.currentUserId })
    this.$el.html(view)
    return this
  },

  search: function (event) {
    var that = this;
    event.preventDefault();
		this.searchResults.pageNum = 1;
		this.searchResults.query = this.$(".query").val();

		this.searchResults.fetch({
			data: {
				query: this.searchResults.query,
				page: 1
			}
		});
  },

  renderSearch: function () {
    var view = this.template({ listings: this.searchResults, userId: Petadopter.currentUserId })
    $('.bodycontainer').html(view)
  },

	// bindScroll: function () {
	// 	$(window).on("scroll", this.handleScroll.bind(this));
	// },
  //
	// handleScroll: function (event) {
	// 	var $doc = $(document);
	// 	var scrolledDist = $doc.height() - window.innerHeight - $doc.scrollTop();
  //
	// 	if (scrolledDist < 300) {
	// 		this.nextPageInfiniteScroll();
	// 	}
	// },
  //
	// nextPage: function (event) {
	// 	this.searchResults.fetch({
	// 		data: {
	// 			query: this.searchResults.query,
	// 			page: this.searchResults.pageNum + 1
	// 		},
	// 		success: function () {
	// 			this.searchResults.pageNum = this.searchResults.pageNum + 1;
	// 		}.bind(this)
	// 	});
	// },
  //
	// // Infinite scroll can be improved even more by using subviews.
	// // Right now, we're rerendering the whole view when we add the
	// // 25 results of the next page. Instead, a better approach would be
	// // to `append` the html for each new result. This is way easy if we
	// // have a subview for each result. We would also `listenTo` collection
	// // `add` instead of `sync`. The callback to the `add` gets passed the
	// // model that was just added, so at that point you can instantiate a
	// // subview and append it to the list.
	// nextPageInfiniteScroll: function () {
	// 	if (this.requestingNextPage) return;
  //
	// 	this.requestingNextPage = true;
	// 	this.searchResults.fetch({
	// 		remove: false,
	// 		data: {
	// 			query: this.searchResults.query,
	// 			page: this.searchResults.pageNum + 1
	// 		},
	// 		success: function () {
	// 			this.requestingNextPage = false;
	// 			this.searchResults.pageNum++;
	// 		}.bind(this)
	// 	});
	// },

  goToListing: function (event) {
    var $target = $(event.currentTarget)
    var id = $target.attr('data-id')
    var $dialogBox = $("div#dialog-" + id)
    if ($dialogBox.length === 0) {
      Backbone.history.navigate("listings/" + id, {trigger: true})
    } else {
      $dialogBox.parents(".ui-dialog").effect("shake", "slow")
    }
  },

  newListing: function () {
    Backbone.history.navigate("listings/new", {trigger: true})
  }

});
