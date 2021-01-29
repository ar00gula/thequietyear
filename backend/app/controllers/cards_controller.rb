class CardsController < ApplicationController

    def index
        cards = Card.all
        card = drawCard(cards)
        render json: card
    end

private

    def drawCard(array)
        index = 1 + rand(array.count)
        card = array[index]
        return card
    end

    # def random(cards)
    #     spring = cards[spring]
    #     summer = cards[summer]
    #     autumn = cards[autumn]
    #     winter = cards[winter]

    #     return drawCard(spring)
    # end

end