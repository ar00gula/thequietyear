class GamesController < ApplicationController

    def rulebook
        rulebook = {chapter_one: RulebookPage.where(chapter: 1), chapter_two: RulebookPage.where(chapter: 2)}
        render json: rulebook
        
    end
end
