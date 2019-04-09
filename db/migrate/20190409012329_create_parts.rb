class CreateParts < ActiveRecord::Migration[5.2]
  def change
    create_table :parts do |t|
      t.string :name
      t.float :price
      t.string :description
      t.string :manufacturer
      t.integer :user_id
      t.string :url
      t.string :page_link
      t.integer :qty

      t.timestamps
    end
  end
end
