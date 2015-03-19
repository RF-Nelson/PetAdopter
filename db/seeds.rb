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
user4 = User.create([{email: "davia622@gmail.com", password: "123456"}])
listing = Listing.create([{owner_id: "1", location: "Brooklyn, NY",
  pet_name: "The Legless Wonder", species: "Reptile", breed: "Snake", gender: "Male", body: "Amazingly, TLW has made it through his entire life without any legs! How does he do it? I don't know!"}])
listing2 = Listing.create([{owner_id: "2", location: "Cheesequake, NJ",
  pet_name: "Plopper", species: "Rodent", breed: "Rat", gender: "Female", body: "Plopper is a loving and fastidious rat."}])
comment = Comment.create([{
  listing_id: 1, commenter_id: 2, body: "Wait... He really has no legs?!?!"}])
comment2 = Comment.create([{
  listing_id: 2, commenter_id: 1, body: "Rats make great pets; you don't have to take your trash out anymore because they'll eat it."}])
listing3 = Listing.create([{owner_id: "4", location: "Currently on tour",
  pet_name: "Kitty Purry", species: "Cat", gender: "Female", breed: "Tabby", body: "Kitty Purry loves to dance and sing. She will be available for adoption in May 2015 when she's finished touring."}])
listing4 = Listing.create([{owner_id: "4", location: "Florida",
  pet_name: "Bob Barker", species: "Dog", gender: "Male", breed: "Old English Sheepdog", age: "2", body: "Bob Barker loves to lay in the sun. He'd love to be adopted by a pretty female that has an appreciation for accurately guessing the prices of moderately priced kitchen appliances."}])
listing5 = Listing.create([{owner_id: "4", location: "Shanghai, China",
  pet_name: "Chairman Meow", species: "Cat", gender: "Male", breed: "Chinese Li Hua", age: "122", body: "Born in 1893, Chairman Meow (or Meow Zetongue to his close friends) is famous for being a founding father of the People's Republic of China. Please note he would prefer to be homed with other feline Communist sympathizers."}])
listing6 = Listing.create([{owner_id: "4", location: "Venice, Italy",
  pet_name: "Barko Polo", species: "Dog", gender: "Male", breed: "Venetian", age: "760", body: "Barko Polo loves to travel and sell things. He is a senior boy and it's become more of a challenge to travel, so he's all about ebay these days."}])
comment2 = Comment.create([{
  listing_id: 5, commenter_id: 3, body: "I have a socialist parrot. Would they get along together?"}])
listing7 = Listing.create([{owner_id: "4", location: "Kellerman's, Catskill Mountains
",
  pet_name: "Catrick Swayze", species: "Cat", gender: "Male", breed: "Orange Tabby", age: "5", body: "You'll have the time of your life with Catrick Swayze! He loves to dance, and is very good at catching things. He does not like corners, so he'd do best in a round home."}])
listing8 = Listing.create([{owner_id: "4", location: "New York, NY",
  pet_name: "Don Drapurr", species: "Cat", gender: "Male", breed: "Tuxedo", age: "4", body: "Don's claim to fame is the Meow Mix jingle. He is an alcoholic, so he might have some liver damage. He prefers his hair to be perfectly coiffed, so please be sure to have a comb or brush for grooming."}])
listing9 = Listing.create([{owner_id: "4", location: "Home alone at 671 Lincoln Blvd",
    pet_name: "Kevin", species: "Human", gender: "Male", breed: "W.A.S.P.", age: "8", body: "Kevin was accidentally left behind when his family went to Paris for their Christmas vacation. He initially enjoyed being home alone but after a vicious battle with the Wet Bandits, he realized he would like a family. Won't you adopt him?"}])
listing10 = Listing.create([{owner_id: "4", location: "Fallingwater",
    pet_name: "Frank Lloyd Bite", species: "Dog", gender: "Male", breed: "Fuzzy Fox Terrier", age: "5", body: "Frank was the first dog to go to Barkitecture school! He enjoys going on outings to see the sights with his best friend, George Catstanza, though he's always felt that George was a little jealous of him."}])
listing11 = Listing.create([{owner_id: "4", location: "New York, NY",
    pet_name: "George Catstanza", species: "Cat", gender: "Male", breed: "Domestic Shorthair", age: "37", body: "George is a bit overweight, and feels like nothing ever goes his way. He always wanted to be an architect, and is jealous of his best friend, Frank Lloyd Bite. George sometimes uses the alias 'Art Vandelay.'"}])
