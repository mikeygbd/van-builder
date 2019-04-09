class AddVanColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :van_make, :string
    add_column :users, :van_model, :string
    add_column :users, :van_year, :integer
    add_column :users, :van_wheelbase, :integer
    add_column :users, :van_color, :string
    add_column :users, :url, :string
  end
end
