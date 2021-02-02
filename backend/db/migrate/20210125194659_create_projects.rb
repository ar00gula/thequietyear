class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :weeks
      t.string :description
      t.integer :player_id

      t.timestamps
    end
  end
end
