class ChangeAgeColumnToString < ActiveRecord::Migration
  def change
    change_column(:listings, :age, :string)
  end
end
