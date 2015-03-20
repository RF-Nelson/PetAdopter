json.extract!(listing,
  :id, :owner_id, :location, :pet_name, :species, :breed, :age, :body, :gender)

json.picture_url image_url(listing.picture.url)
json.email listing.user.email.reverse

# breeds = []
# Listing.where({species: listing.species}).each{|specie| breeds << specie.breed}
#
# json.breeds breeds

# json.signed_in @signed_in?

if show_comments
   json.comments listing.comments do |comment|
     json.extract!(comment, :body, :commenter_id, :id)
     json.username comment.user.email.reverse
   end
end
