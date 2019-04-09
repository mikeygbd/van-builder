Rails.application.routes.draw do
  get 'parts/new'
  get 'parts/show'
  get 'parts/edit'
  get 'parts/update'
  get 'parts/destroy'
  get 'users/show'
  devise_for :users
  resources :parts
  resources :posts
  resources :wishlist_parts


  root 'application#welcome'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
