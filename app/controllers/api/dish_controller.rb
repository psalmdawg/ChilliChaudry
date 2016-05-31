module Api
  class DishController < ApplicationController

    def index
      @dishes = Dish.all
      render json: @dishes.to_json
    end

    # def create
    #   dish = Dish.new
    #   dish.name = params[:name]
    #   dish.image_url = params[:image_url]
    #   if dish.save
    #     render json: dish.to_json(methods: :like_count), status: 201
    #   else
    #     render json: dish.errors.to_json
    #   end
    # end
    #
    # def show
    #    dish = Dish.find(params[:id])
    #   render json: dish.to_json, status: 200
    # end

  end
end
