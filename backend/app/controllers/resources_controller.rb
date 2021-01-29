class ResourcesController < ApplicationController

    def index
        resources = Resource.all
        render json: resources
    end
    
    def create
            @resource = Resource.new(resource_params)
            if @resource.save
              render json: @resource, status: :created, location: @resource
            else
              render json: @resource.errors, status: :unprocessable_entity
            end
    end

    def update
        @resource = Resource.find(params[:id])
        @resource.status = resource_params[:status]
        if @resource.save
          render json: @resource, status: :created, location: @resource
        else
          render json: @resource.errors, status: :unprocessable_entity
        end
    end
end


private
    # Use callbacks to share common setup or constraints between actions.
    def set_resource
      @resource = Resource.find(params[:id])
    end
    # Only allow a trusted parameter "white list" through.
    def resource_params
      params.require(:resource).permit(:name, :status)
    end
