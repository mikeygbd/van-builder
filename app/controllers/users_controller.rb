class UsersController < ApplicationController
  def show
    PartsScraper.scrape_campervanhq
    @user = current_user
  end

  def sign_out
    render 'application#welcome'

  end
end
