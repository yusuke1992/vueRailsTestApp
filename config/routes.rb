Rails.application.routes.draw do
  root to: 'page#home'
  get 'page/home'
  resources :books, only: [:index, :new, :create]

  namespace :api do
    resources :books, only: %i(show)
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
