class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :dishes
      t.string :customer_name
      t.string :phone
      t.string :email
      t.text :delivery_address

      t.timestamps null: false
    end
  end
end
