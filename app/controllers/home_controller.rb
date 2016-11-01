class HomeController < ApplicationController


  def index
  end

  def login
  end

  def confirmation
    @ordered_dishes = params[:ordered_dishes]
  end

end
