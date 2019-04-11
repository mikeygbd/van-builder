class UsersController < ApplicationController
  def show
    PartsScraper.scrape_campervanhq
    @user = current_user
  end

  def destroy
    @user = User.find(params[:id])
    @user.delete
    redirect_to users_path(@users)
  end


end
