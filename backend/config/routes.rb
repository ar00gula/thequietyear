Rails.application.routes.draw do
  resources :projects
  resources :cards
  resources :players
  resources :contempts
  resources :resources
  resources :games

  get '/rules', to: 'games#rulebook'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
