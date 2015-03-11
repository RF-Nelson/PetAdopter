class Comment < ActiveRecord::Base

  validates :lisitng_id, :commenter_id, :body, presence: true

  belongs_to( :listing,
  class_name: "Listing",
  foreign_key: :listing_id,
  primary_id: :id
  )

end
