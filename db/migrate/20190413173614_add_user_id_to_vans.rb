class AddUserIdToVans < ActiveRecord::Migration[5.2]
  def change
    add_column :vans, :user_id, :integer
  end
end
