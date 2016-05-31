require 'HTTParty'
require 'JSON'
class DishController < ApplicationController

  def index
    @dishes = Dish.all
  end

end
