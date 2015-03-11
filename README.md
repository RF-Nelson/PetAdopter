# pet-adopter

[Heroku link][heroku]

[heroku]: http://pet-adopter.herokuapp.com

## Minimum Viable Product
PetAdopter is a clone of PetFinder built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create adoption listings
- [x] Comment on adoption listings
- [ ] Create a profile
- [ ] Search adoption listings by name
- [ ] Filter adoption listings by location, species, breed, age, and gender

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Adoption Listing Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create adoption listings
in a simple form in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing and Commenting on Adoption Listings (~2 days)
I will add API routes to serve adoption listing data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create adoption listings as well as view listings and make comments on listings, all
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Editing/Displaying Adoption Listings and Geolocation (~2 days)
I plan to use third-party libraries to add functionality to the `ListingForm` and
`ListingShow` views in this phase.  I plan to integrate Filepicker for file upload so
users can upload images of the pet with each listing. I also plan on integrating the Google Maps for Rails gem to show the location of the pet. Combined with the Ruby Geocoder gem, users can be directed to nearby pets without even enterting their location.

[Details][phase-three]

### Phase 4: User Profiles (~1 days)
I'll start by adding a `profile` route nested under the user while associating each user with a profile. In that profile, the user can describe themselves/their organization, how their animals are maintained, and the adoption interview process. On the Backbone side, I'll make a `ProfileShow` view as well as a subview showing that user's current adoption listings.

[Details][phase-four]

### Phase 5: Searching for Pets (~2-3 days)
I will add a `search` route to the AdoptionListings controller. Users will be able to filter search results by location, breed, etc. On the
Backbone side, there will be a `SearchResults` view that will fetch from the new `search` route.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Custom profile urls for adoption organizations
- [ ] Pagination/infinite scroll
- [ ] View prior successful adoptions
- [ ] Drag and Drop search filter
- [ ] User avatars
- [ ] Make appointments for adoption interview on ListingShow page

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
