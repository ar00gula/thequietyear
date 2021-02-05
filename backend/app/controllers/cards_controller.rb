class CardsController < ApplicationController

    def index
        cards = {spring: Card.where(suite: 'hearts'), summer: Card.where(suite: 'diamonds')}
        render json: shuffleDeck(cards)
    end

private

    def shuffleDeck(object)
        shuffledSpring = object[:spring].shuffle
        shuffledSummer = object[:summer].shuffle
        shuffledDeck = shuffledSpring + shuffledSummer
    end

end

