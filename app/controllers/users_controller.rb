class UsersController < ApplicationController

  def new
    if signed_in?
      redirect_to listings_url
    else
      @user = User.new
      render :new
    end  
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to listings_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :password)
    end

end
