class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

# def orders
  # orders = Order.all
  # @unprocessed_orders = orders.where(processed: false)
  # @work = 'twat'
  #
  #
  # if
  #   @unprocessed_orders.length != 0
  #   @count = @unprocessed_orders.length.to_s + " unprocessed orders"
  #  else
  #    @unprocessed_orders = ""
  #
  #  end
  # # end
end
