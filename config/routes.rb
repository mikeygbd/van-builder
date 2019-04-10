Rails.application.routes.draw do



  get 'wishlist_parts/index'
  get 'wishlist_parts/new'
  get 'wishlist_parts/show'
  get 'wishlist_parts/create'
  get 'wishlist_parts/edit'
  get 'wishlist_parts/update'
  get 'wishlist_parts/destroy'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :parts
  resources :posts
  resources :wishlist_parts
  resources :sessions
  resources :users

  # Routes for Google authentication

  root 'application#welcome'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
