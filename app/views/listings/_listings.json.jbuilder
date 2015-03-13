json.extract!(listing,
  :id, :owner_id, :location, :pet_name, :species, :breed, :age, :body)

if show_comments
   json.comments listing.comments do |comment|
     json.extract!(comment, :body, :commenter_id)
   end
end
