class PlayersController < ApplicationController
    def index
        players = Player.all
        render json: players
    end

    def create
        @player = Player.new(player_params)
        if @player.save
            render json: @player, status: :created, location: @player
        else
            render json: @player.errors, status: :unprocessable_entity
        end
    end

end

private

def player_params
  params.require(:player).permit(:name)
end
