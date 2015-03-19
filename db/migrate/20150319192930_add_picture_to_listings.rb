class AddPictureToListings < ActiveRecord::Migration

  def self.up
    add_attachment :listings, :picture
  end

  def self.down
    remove_attachment :listings, :picture
  end

end
