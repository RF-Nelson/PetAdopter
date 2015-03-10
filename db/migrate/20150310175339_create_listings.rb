class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :owner_id, null: false
      t.string  :location, null: false
      t.string  :pet_name, null: false
      t.string  :species,  null: false
      t.string  :breed
      t.integer :age
      t.text    :body

      t.timestamps
    end
  end
end
