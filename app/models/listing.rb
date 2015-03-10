class Listing < ActiveRecord::Base

  validates :owner_id, :location, :pet_name, :species, presence: true
  validates :species, inclusion: { in: %w(dog cat bird reptile human rodent) }

  belongs_to( :users,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )







end
