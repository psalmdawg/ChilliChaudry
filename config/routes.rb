Rails.application.routes.draw do

  # get 'orders/create'

get '/' => 'home#index'
get'/login' => 'home#login'
get '/logout' => 'sessions#destroy'
get '/api/dish' => 'api/dish#index'
get '/api/order' => 'api/order#index'
post '/api/order' => 'api/order#create'
post '/confirmation' => 'orders#create'
post '/orders/:id' => 'orders#update'
get  '/orders/view' => 'orders#show_individual'
get '/todo' => 'home#todo'

resources:dish
resources:charges
resources:sessions
resources:admin


end
