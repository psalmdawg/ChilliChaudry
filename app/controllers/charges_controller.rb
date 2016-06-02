class ChargesController < ApplicationController

  def new
  end

  def create
    # Amount in cents
    dishes = params[:ordered_dishes] #will return a string of numbers

    dish_ids = dishes.split(',')
    array_of_dish_prices = []

    dish_ids.each do |id|
      one_dish = Dish.find(id.to_i)
      array_of_dish_prices << one_dish.price
    end

    total = 0

    array_of_dish_prices.each do |price|
      total += price
    end


    @amount = total

    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :source  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'Rails Stripe customer',
      :currency    => 'KES'
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end

end
