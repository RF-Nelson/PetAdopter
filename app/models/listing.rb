class Listing < ActiveRecord::Base

  validates :owner_id, :location, :pet_name, :species, presence: true
  validates :species, inclusion: { in: %w(Dog Cat Bird Reptile Human Rodent) }

  belongs_to( :user,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many( :comments,
    class_name: "Comment",
    foreign_key: :listing_id,
    primary_key: :id
  )

end
