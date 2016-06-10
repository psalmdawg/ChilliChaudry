class AddDishTypeToDishes < ActiveRecord::Migration
  def change
    add_column :dishes, :dish_type, :string
  end
end
