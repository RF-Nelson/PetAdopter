class SessionsController < ApplicationController

  def new
    if signed_in?
      redirect_to root_url
    else
      render :new
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username and/or password"]
      render :new
    end
  end

  def destroy
    sign_out(current_user)
    redirect_to root_url
  end

end
