module Api
  class OrderController < ApplicationController

    def index
      @orders = Order.all
      render json: @orders.to_json
    end

    def create
          order = Order.new
          order.dishes = params[:ordered_dishes]
          order.customer_name = params[:customer_name]
          order.phone = params[:customer_phone]
          order.email = params[:customer_email]
          order.delivery_address = params[:delivery_address]
          order.special_instructions = params[:special_instructions]
          order.processed = false


          if order.save
            render json: order.to_json, status: 201
          else
            render json: order.errors.to_json
          end
        end


  end
end
