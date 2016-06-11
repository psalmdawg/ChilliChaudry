class UserEmail < ApplicationMailer

  default :from => "orders@chilliechaudry.com"

  def create_order
    @user
  end

end
