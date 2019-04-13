class RemoveVanAttributesFromUser < ActiveRecord::Migration[5.2]
  def change
     remove_column :users, :van_year
     remove_column :users, :van_make
     remove_column :users, :van_model
     remove_column :users, :van_color
     remove_column :users, :van_wheelbase
     remove_column :users, :url
  end
end
