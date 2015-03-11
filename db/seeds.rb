# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user = User.create([{email: "doglover123@yahoo.com", password: "123456"}])
user2 = User.create([{email: "johnny5alive@aol.com", password: "123456"}])
listing = Listing.create([{owner_id: "1", location: "Brooklyn, NY",
  pet_name: "Bobo", species: "Dog", breed: "Chihuahua", body: "Bobo is a feisty beast."}])
listing2 = Listing.create([{owner_id: "2", location: "Westchester, NY",
  pet_name: "Plopper", species: "Rodent", breed: "Rat", body: "Plopper is a loving and fastidious rat."}])
