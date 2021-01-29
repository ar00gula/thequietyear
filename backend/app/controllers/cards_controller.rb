class CardsController < ApplicationController

    def index
        cards = {spring: Card.where(suite: 'hearts'), summer: Card.where(suite: 'diamonds')}
        render json: cards
    end

private

    def shuffleDeck(object)
        shuffledSpring = object[:spring].shuffle
        shuffledSummer = object[:summer].shuffle
        shuffledDeck = shuffledSpring + shuffledSummer
    end

    # def random(cards)
    #     spring = cards[spring]
    #     summer = cards[summer]
    #     autumn = cards[autumn]
    #     winter = cards[winter]

    #     return drawCard(spring)
    # end

end