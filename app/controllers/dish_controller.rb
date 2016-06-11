
require 'JSON'
class DishController < ApplicationController

  def index
    dishes = Dish.all
    @Vegetarian = dishes.where(dish_type:"Vegetarian")
    @meat_fish = dishes.where(dish_type:"Meat & Fish Curries & Biriyani")
    @lunch_special = dishes.where(dish_type:"Lunch Time Special Deals")
    @Nan = dishes.where(dish_type:"Nans & Rice")
    @salads = dishes.where(dish_type:"Salads")
    @drinks = dishes.where(dish_type:"Drinks")
    @BBQ = dishes.where(dish_type:"BBQ / Tandoori")
    @sides = dishes.where(dish_type:"Side Dishes")
  end

end
