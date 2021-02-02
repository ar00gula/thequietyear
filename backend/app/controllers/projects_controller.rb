class ProjectsController < ApplicationController

    def index
        projects = Project.all
        render json: projects
    end
    
    def create
            @project = Project.new(project_params)
            if @project.save
              render json: @project, status: :created, location: @project
            else
              render json: @project.errors, status: :unprocessable_entity
            end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:name, :player_id, :weeks, :description)
    end
end



