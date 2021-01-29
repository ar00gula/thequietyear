# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

spring = {

        "ace" => {
          :name => "Ace of Spring",
          :image => "images/kingofspring.png"
        },
      
        "two" => {
          :name => "2 of Spring",
          :image => "images/2ofAutumn.png"
        },

        "three" => {
          :name => "3 of Spring",
          :image => "images/3ofspring.png"
        },

        "four" => {
          :name => "4 of Spring",
          :image => "images/7ofspring.png"
        },

        "five" => {
          :name => "5 of Spring",
          :image => "images/9ofspring.png"
        }
      }
      
      spring.each do |name, card_hash|
        c = Card.new
        c.name = name
       card_hash.each do |attribute, value|
          c[attribute] = value
        end
        c.save
      end