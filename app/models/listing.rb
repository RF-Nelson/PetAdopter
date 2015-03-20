class Listing < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:location, :pet_name, :species, :breed, :gender]

  validates :owner_id, :location, :pet_name, :species, :body, presence: true
  validates :species, inclusion: { in: %w(Dog Cat Bird Reptile Human Rodent Aquatic Amphibian) }

  has_attached_file :picture, default_url: "cat.jpeg"
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

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
