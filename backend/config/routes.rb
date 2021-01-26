Rails.application.routes.draw do
  resources :projects
  resources :cards
  resources :users
  resources :contempts
  resources :resources
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
