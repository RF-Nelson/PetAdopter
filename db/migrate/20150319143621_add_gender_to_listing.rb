class AddGenderToListing < ActiveRecord::Migration
  def change
    add_column(:listings, :gender, :string)
  end
end
