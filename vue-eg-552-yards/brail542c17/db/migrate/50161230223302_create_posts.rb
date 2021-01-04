class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.integer :active_status
      t.date :log_date

      t.timestamps
    end
  end
end
