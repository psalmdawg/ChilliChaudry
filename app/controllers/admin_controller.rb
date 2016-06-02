class AdminController < ApplicationController

  def index
    orders = Order.all
    @unprocessed_orders = orders.where(processed: false)
    @count = @unprocessed_orders.length


    # WTF isnt this working
    # orders = Order.all
    processed_orders = orders.where(processed: true)


    @processed = processed_orders.where(created_at: (Time.now - 24.hours)..Time.now)
  end
end
