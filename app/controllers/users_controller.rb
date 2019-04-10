class UsersController < ApplicationController
  def show
    PartsScraper.scrape_campervanhq
    @user = current_user
  end


end
