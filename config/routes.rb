Rails.application.routes.draw do
  root 'sessions#new'

  resources :users
  resource :session
  resources :listings do
    resources :comments
  end
end
