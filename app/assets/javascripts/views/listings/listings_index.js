Petadopter.Views.ListingsIndex = Backbone.View.extend({

  template: JST['listings/index'],

  initialize: function () {
    this.listenTo(this.collection, 'add remove', this.render)
    // this.bindScroll(); // infinite scroll
		this.searchResults = new Petadopter.Collections.SearchResults();
		this.searchResults.pageNum = 1;
		this.listenTo(this.searchResults, "sync", this.renderSearch);
    this.filters = []
  },

  events: {
    'click .listing': 'goToListing',
    'click .new_listing': 'newListing',
    "change .query": "search",
    'click .search .filter': 'filter',
    'click .searchFilter': 'filteredSearch'
		// "click .next-page": "nextPage",
		// "click .prev-page": "prevPage" // not implemented
  },

  filter: function (event) {
    var filter = $(event.target).attr('name')

     if ($(event.target).attr('class') === 'filter clicked') {
       $(event.target).removeClass('clicked')
       if (this.filters.length === 1) {
         this.filters = []
       }
       for (var i = 0; i < this.filters.length; i++) {
         if (this.filters[i] === filter) {
           this.filters.splice(i, this.filters.length - 1)
         }
       }
     } else {
       this.filters.push(filter)
       $(event.target).addClass('clicked')
     }
  },

  filteredSearch: function () {
    var that = this
    if (this.filters.length === 0) {
      $('.bodyContainer').prepend("PLEASE ADD A FILTER TO YOUR SEARCH")
    } else {
      var query = ""
      this.filters.forEach(function (filter) {
        query = query + (filter + " ")
      })
      event.preventDefault();
      this.searchResults.pageNum = 1;
      this.searchResults.query = query

      this.searchResults.fetch({
        data: {
          query: this.searchResults.query,
          page: 1
        }
      });
      $('.filter').each(function (child) {
        var $el = $($('.filter')[child])

        for (var i = 0; i < that.filters.length; i++) {
          var $x = $(child)
          if (that.filters[i] === ($el.attr('name'))) {
            $el.addClass('clicked')
          }
        }
      })
    }
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
    var that = this;
    var view = this.template({ listings: this.searchResults, userId: Petadopter.currentUserId })
    $('.bodycontainer').html(view)
    $('.filter').each(function (child) {
      var $el = $($('.filter')[child])

      for (var i = 0; i < that.filters.length; i++) {
        var $x = $(child)
        if (that.filters[i] === ($el.attr('name'))) {
          $el.addClass('clicked')
        }
      }
    })
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
      //Backbone.history.navigate("listings/" + id, {trigger: true})
      var post = Petadopter.Collections.listings.getOrFetch(id)

      var that = this

      var view = new Petadopter.Views.ListingShow({
        model: post//, $rootEl: that.$rootEl
      })
      $('.content').append(view.render().$el)
      $('[data-id="' + id + '"]').effect("transfer", { to: $("div#dialog-" + id) }, 800)
    } else {
      $dialogBox.parents(".ui-dialog").effect("shake", "slow")
    }
  },

  newListing: function () {
    Backbone.history.navigate("listings/new", {trigger: true})
  }

});
