class CreateVans < ActiveRecord::Migration[5.2]
  def change
    create_table :vans do |t|
      t.integer :van_year
      t.string :van_make
      t.string :van_model
      t.string :van_color
      t.integer :van_wheelbase
      t.string :url

      t.timestamps
    end
  end
end
