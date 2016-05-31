Rails.application.routes.draw do

get '/' => 'home#index'
get '/api/dish' => 'api/dish#index'
get '/confirmation' => 'home#confirmation'

resources:dish
resources:charges


end
