class AddSpecialRequirementsToOrder < ActiveRecord::Migration
  def change
    add_column :orders, :special_instructions, :text
  end
end
