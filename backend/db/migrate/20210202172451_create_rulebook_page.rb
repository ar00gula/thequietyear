class CreateRulebookPage < ActiveRecord::Migration[6.0]
  def change
    create_table :rulebook_pages do |t|
      t.integer :chapter
      t.string :name
      t.text :text
    end
  end
end
