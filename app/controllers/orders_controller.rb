class OrdersController < ApplicationController

  def create

    @ordered_dishes = params[:ordered_dishes]
    @customer_name  = params[:customer_name]
    @customer_phone = params[:customer_phone]
    @customer_email = params[:customer_email]
    @delivery_address = params[:delivery_address]
    @special_instructions = params[:special_instructions]


    @dish = Dish.all


    order = Order.new
    order.dishes = params[:ordered_dishes]
    order.customer_name = params[:customer_name]
    order.phone = params[:customer_phone]
    order.email = params[:customer_email]
    order.delivery_address = params[:delivery_address]
    order.special_instructions = params[:special_instructions]
    order.processed = false
    order.save
  end

  def update
    order = Order.find_by(id:params[:id])
    # new_order.find_by(id:params[:id])
    order.processed = true
    order.save
    redirect_to '/admin'
  end

  def show_individual

    order = Order.find_by(id:params[:id])
    orderlength = order.dishes.length

    # if orderlength == 0
    #     @order_has_no_value = "This record has no food order, the customer didn't specify any food"
    # else
        @contact = order.phone
        @delivery = order.delivery_address
        @name = order.customer_name
        @instructions = order.special_instructions
        @email = order.email
        @orderID = order.id
        processed = order.processed

        if
          processed == true
          @processed = "This order has been processed"
         else
        end

        @timestamp = order.created_at.strftime("%I:%M %p %m/%d/%Y")
        @timestamp_two = order.created_at.strftime("%m, %d, %Y %H:%M:%S")



        dishes = order.dishes #wil return a string of numbers

        dish_ids = dishes.split(',')
        array_of_dish_names = []
        array_of_dish_ids = []

        dish_ids.each do |id|
          one_dish = Dish.find(id.to_i)
          array_of_dish_names << one_dish.name
          array_of_dish_ids << one_dish.id
        end


      if orderlength == 0
        @orderlength = orderlength
        @order_has_no_value = "INVALID: This record has no food orders, the customer didn't specify any food!"
      else

      counts = Hash.new(0)
      array_of_dish_names.each { |array_of_dish_names| counts[array_of_dish_names] += 1 }
      @dishes = counts
    end
  end
end
