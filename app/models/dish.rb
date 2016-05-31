class Dish < ActiveRecord::Base




  def index
    @dish = Dish.all
  end




end
