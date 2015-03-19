Rails.application.routes.draw do

  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :listings do
      resources :comments, only: [:index, :create, :show, :destroy]
    end
    resources :comments, only: [:show]
  end

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

end
