class SessionsController < ApplicationController
  def create
    @user = Admin.find_by(user_name: params[:user_name])
    if @user && @user.authenticate(params[:password])
      session[:current_user_id] = @user.id
      redirect_to '/'
    else
      redirect_to '/login'
    end
  end

  def destroy
    session[:current_user_id] = nil
    redirect_to '/'
  end
end
