json.extract!(listing,
  :id, :owner_id, :location, :pet_name, :species, :breed, :age, :body)

# if show_comments
#   json.comments do
#     json.array!(listing.comments) do |comment|
#       json.partial! 'comments/comment', comment: comment
#     end
#   end
# end
