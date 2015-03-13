# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user = User.create([{email: "doglover123@yahoo.com", password: "123456"}])
user2 = User.create([{email: "johnny5alive@aol.com", password: "123456"}])
user3 = User.create([{email: "CarlosDanger@gmail.com", password: "123456"}])
listing = Listing.create([{owner_id: "1", location: "Brooklyn, NY",
  pet_name: "Bobby", species: "Dog", breed: "Chihuahua", body: "Bobbby is a feisty beast."}])
listing2 = Listing.create([{owner_id: "2", location: "Cheesequake, NJ",
  pet_name: "Jimmy", species: "Rodent", breed: "Rat", body: "Plopper is a loving and fastidious rat."}])
comment = Comment.create([{
  listing_id: 1, commenter_id: 2, body: "yo quiero taco bell"}])
comment2 = Comment.create([{
  listing_id: 2, commenter_id: 1, body: "Rats make great pets; you don't have to take your trash out anymore because they'll eat it."}])
listing3 = Listing.create([{owner_id: "1", location: "Sweet Lips, TN",
  pet_name: "Carl", species: "Cat", breed: "Domestic shorthair", body: "Carl is evil and conniving. He would be a good match for an evil genius."}])
listing4 = Listing.create([{owner_id: "3", location: "New York, NY",
  pet_name: "Rich", species: "Human", breed: "WASP/Jew mix", age: "30", body: "This man is house-trained but has had problems with locking bathroom doors. Comes with a parrot."}])
