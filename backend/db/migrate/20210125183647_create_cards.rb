class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :suite
      t.string :value
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
