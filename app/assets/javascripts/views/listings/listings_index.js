Petadopter.Views.ListingsIndex = Backbone.View.extend({

  template: JST['listings/index'],

  initialize: function () {
    this.listenTo(this.collection, 'add remove', this.render)
    // this.bindScroll(); // infinite scroll
		this.searchResults = new Petadopter.Collections.SearchResults();
		this.searchResults.pageNum = 1;
		this.listenTo(this.searchResults, "sync", this.renderSearch);
    this.filters = []
    this.breed = null;
    this.gender = null;
    this.species = null;

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
    var that = this
    var filter = $(event.target).attr('name')
     if ($(event.target).attr('class') === 'filter species clicked' || $(event.target).attr('class') === 'filter breed clicked' || $(event.target).attr('class') === 'filter gender clicked') {
       $(event.target).removeClass('clicked')
       if (this.filters.length === 1) {
         this.filters = []
       }
       if ($(event.target).attr('class') === 'filter species clicked') {
         this.species = null
       }

       if ($(event.target).attr('class') === 'filter gender clicked') {
         this.gender = null
       }

       $(event.target).parent().children().removeClass('clicked')

       if ($(event.target).attr('id') === "breed-list") {
         this.breed = null
       }

     } else {
       var $selection = $(event.target)
       var array = $(event.target).parent().children()//.removeClass('clicked')
      //  array.forEach(function (el) {
      //    debugger
      //  })
      $(event.target).parent().children().each(function (child) {
        // debugger
        $($(event.target).parent().children()[child]).removeClass('clicked')
      })

      // get all siblings, then iterate through the filter array and remove
      // any siblings before adding itself to the filter array
      var siblings = []
      $(event.target).siblings().each(function (sibling) {
        for (var i = 0; i < that.filters.length; i++) {
          siblings.push(sibling)
        }
      })



      $(siblings).each(function (sibling) {
        for (var i = 0; i < that.filters.length; i++) {
          if (that.filters[i] === $($(event.target).siblings()[sibling]).attr('name')) {
            that.filters.splice(i, 1)
          }
        }
      })





       this.filters.push(filter)

       $(event.target).addClass('clicked')
       if ($(event.target).parent().attr('id') === "breed-list") {
         this.breed = ($(event.target).attr('name'))
       }

       if ($(event.target).attr('id') === "Breed") {
         var species = ($selection.attr('name'))
         var breedList = (Petadopter.breeds[species]);
         var view = JST['breed']({ breeds: breedList })
         $('#breed-list').html('')
         $('#breed-list').html(view)
       }
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

    $('.clicked').each(function (i) {
      if ($('.clicked')[i].id === "Breed") {
        var species = $($('.clicked')[0]).attr('name')
        var breedList = (Petadopter.breeds[species]);
        var view = JST['breed']({ breeds: breedList })
        $('#breed-list').html('')
        $('#breed-list').html(view)
      }
    })
    // SELECT BREED AND GET IT AGAIN
    if (this.breed) {
      var string = "li[name='" + that.breed + "']"
      $(string).addClass('clicked')
      // console.log($(string));
    }

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
