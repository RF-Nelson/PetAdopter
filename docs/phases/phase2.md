# Phase 2: Viewing and Commenting on Adoption Listings

## Rails
### Models

### Controllers
Api::ListingsController (create, destroy, index, show)
Api::CommentssController (create, destroy)

### Views
* listings/show.json.jbuilder

## Backbone
### Models
* Listing (parses nested `comments` association)
* Comment

### Collections
* Listings
* Comments

### Views
* ListingForm
* ListingShow 

## Gems/Libraries
