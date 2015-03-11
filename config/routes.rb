Rails.application.routes.draw do
  root 'sessions#new'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  resources :listings do
    resources :comments, only: [:create, :destroy]
  end
end
