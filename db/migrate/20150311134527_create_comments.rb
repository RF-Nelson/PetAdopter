class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :listing_id, null: false
      t.integer :commenter_id, null: false
      t.text    :body, null: false

      t.timestamps
    end
  end
end
