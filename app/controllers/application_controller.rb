class ApplicationController < ActionController::Base

  def welcome

  end

  private

   def after_sign_in_path_for(resource)
      "/users/show"
   end


end
