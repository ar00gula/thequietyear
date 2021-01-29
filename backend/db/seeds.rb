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
          :suite => "hearts",
          :image => "images/1ofspring.png"
        },
      
        "two" => {
          :name => "2 of Spring",
          :suite => "hearts",
          :image => "images/2ofspring.png"
        },

        "three" => {
          :name => "3 of Spring",
          :suite => "hearts",
          :image => "images/3ofspring.png"
        },

        "four" => {
          :name => "4 of Spring",
          :suite => "hearts",
          :image => "images/4ofspring.png"
        },

        "five" => {
          :name => "5 of Spring",
          :suite => "hearts",
          :image => "images/5ofspring.png"
        },

        "six" => {
          :name => "6 of Spring",
          :suite => "hearts",
          :image => "images/6ofspring.png"
        },

        "seven" => {
          :name => "7 of Spring",
          :suite => "hearts",
          :image => "images/7ofspring.png"
        },

        "eight" => {
          :name => "8 of Spring",
          :suite => "hearts",
          :image => "images/8ofspring.png"
        },

        "nine" => {
          :name => "9 of Spring",
          :suite => "hearts",
          :image => "images/9ofspring.png"
        },

        "ten" => {
          :name => "10 of Spring",
          :suite => "hearts",
          :image => "images/10ofspring.png"
        },

        "jack" => {
          :name => "Jack of Spring",
          :suite => "hearts",
          :image => "images/11ofspring.png"
        },

        "queen" => {
          :name => "Queen of Spring",
          :suite => "hearts",
          :image => "images/12ofspring.png"
        },

        "king" => {
          :name => "King of Spring",
          :suite => "hearts",
          :image => "images/13ofspring.png"
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

      summer = {

        "ace" => {
          :name => "Ace of Summer",
          :suite => "diamonds",
          :image => "images/1ofsummer.jpg"
        },
      
        "two" => {
          :name => "2 of Summer",
          :suite => "diamonds",
          :image => "images/2ofsummer.jpg"
        },

        "three" => {
          :name => "3 of Summer",
          :suite => "diamonds",
          :image => "images/3ofsummer.jpg"
        },

        "four" => {
          :name => "4 of Summer",
          :suite => "diamonds",
          :image => "images/4ofsummer.jpg"
        },

        "five" => {
          :name => "5 of Summer",
          :suite => "diamonds",
          :image => "images/5ofsummer.jpg"
        },

        "six" => {
          :name => "6 of Summer",
          :suite => "diamonds",
          :image => "images/6ofsummer.jpg"
        },

        "seven" => {
          :name => "7 of Summer",
          :suite => "diamonds",
          :image => "images/7ofsummer.jpg"
        },

        "eight" => {
          :name => "8 of Summer",
          :suite => "diamonds",
          :image => "images/8ofsummer.jpg"
        },

        "nine" => {
          :name => "9 of Summer",
          :suite => "diamonds",
          :image => "images/9ofsummer.jpg"
        },

        "ten" => {
          :name => "10 of Summer",
          :suite => "diamonds",
          :image => "images/10ofsummer.jpg"
        },

        "jack" => {
          :name => "Jack of Summer",
          :suite => "diamonds",
          :image => "images/11ofsummer.jpg"
        },

        "queen" => {
          :name => "Queen of Summer",
          :suite => "diamonds",
          :image => "images/12ofsummer.jpg"
        },

        "king" => {
          :name => "King of Summer",
          :suite => "diamonds",
          :image => "images/13ofsummer.jpg"
        }
      }
      
      summer.each do |name, card_hash|
        c = Card.new
        c.name = name
       card_hash.each do |attribute, value|
          c[attribute] = value
        end
        c.save
      end