Rails.application.routes.draw do
  # get 'news_feeds/index'
  # post 'news_feeds/index'
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :parts
  resources :posts
  resources :wishlist_parts
  resources :sessions
  resources :users
  resources :comments
  resources :news_feeds
  get '/users/:id/delete', to: 'users#destroy'
  get '/parts/:id/delete', to: 'parts#destroy'
  get '/wishlist_parts/:id/delete', to: 'wishlist_parts#destroy'
  get '/posts/:id/delete', to: 'posts#destroy'

  resources :posts do
  resources :comments, only:[:new, :show ]
end

  # Routes for Google authentication
  devise_scope :user do
  get "/users/auth/google_oauth2/callback", to: "users/omniauth_callbacks#google"
end
  root 'application#welcome'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
