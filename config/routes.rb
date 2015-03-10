Rails.application.routes.draw do
  root 'session#new'

  resources :users
  resource :session
  resources :listings
end
