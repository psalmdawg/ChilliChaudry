# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Admin.destroy_all
Dish.destroy_all
Order.destroy_all

admin = Admin.new
admin.name = "Paul"
admin.user_name = "chillies"
admin.password = "chillies"
admin.save

dish=Dish.new
dish.name='Chicken Nan Wrap & Chips '
dish.price=450
dish.description='Succulent Chicken Pieces rolled in Tasty Nan bread with Salad accompanied (with mint yogurt and Spicy Tamarind Sauce on the side) and with chips.'
dish.dish_type='Lunch Time Special Deals'
dish.save
dish1=Dish.new
dish1.name='Tandoori Chicken Wings & Chips'
dish1.price=450
dish1.description='Mouth-watering Tandoori Tikka Chicken Wings 5 pieces (with mint yogurt and Spicy Tamarind Sauce on the side) and with chips.'
dish1.dish_type='Lunch Time Special Deals'
dish1.save
dish2=Dish.new
dish2.name='Lunch Special Chicken Biriyani'
dish2.price=650
dish2.description="The best Biriyani's in Nairobi. Succulent Chicken Pieces in a Thick Rich Sauce served between layers of Saffron Rice. "
dish2.dish_type='Lunch Time Special Deals'
dish2.save
dish3=Dish.new
dish3.name='Lunch Special Mutton Biriyani'
dish3.price=650
dish3.description="The best Biriyani's in Nairobi. Tender Mutton Pieces in a thick rich Sauce served between layers of Saffron Rice. "
dish3.dish_type='Lunch Time Special Deals'
dish3.save
dish4=Dish.new
dish4.name='Tandoori Chicken Wings'
dish4.price=700
dish4.description='Mouth-watering Tandoori Tikka Chicken Wings 10 pieces cooked on skewers in a traditional Tandoor oven.'
dish4.dish_type='BBQ / Tandoori'
dish4.save
dish5=Dish.new
dish5.name='Tandoori Boneless Chicken Tikka'
dish5.price=750
dish5.description='Tasty Boneless Chicken Marinated in Yogurt and Spices cooked on skewers in a traditional Tandoor oven.'
dish5.dish_type='BBQ / Tandoori'
dish5.save
dish6=Dish.new
dish6.name='Tandoori Chicken Seehk Kebab'
dish6.price=750
dish6.description='Mouth-watering Chicken Mince Kebabs (4 kebabs). Cooked in our Tandoor oven. '
dish6.dish_type='BBQ / Tandoori'
dish6.save
dish7=Dish.new
dish7.name='Chef Special Chicken Korma'
dish7.price=800
dish7.description='Our Signature Dish! Absolutely Delicious, boneless Chicken cooked in Yogurt, Cream, Spices, Onion & Saffron. IT’S OUR FAVOURITE, let us know what you think? '
dish7.dish_type='Meat & Fish Curries & Biriyani'
dish7.save
dish8=Dish.new
dish8.name='Butter Chicken'
dish8.price=800
dish8.description='Our famous Butter Chicken, Boneless Chicken in a Rich Cashew Nut, Spices and Butter Sauce'
dish8.dish_type='Meat & Fish Curries & Biriyani'
dish8.save
dish9=Dish.new
dish9.name='Palak Mutton'
dish9.price=750
dish9.description='Must Try Our Palak Mutton, Tender Pieces of Mutton in a spicy Spinach Sauce'
dish9.dish_type='Meat & Fish Curries & Biriyani'
dish9.save
dish10=Dish.new
dish10.name='Kadai Mutton (Rogan Gosh)'
dish10.price=750
dish10.description='Boneless Mutton cooked in Red Sauce (Tomato & Onion) with Bell Peppers.'
dish10.dish_type='Meat & Fish Curries & Biriyani'
dish10.save
dish11=Dish.new
dish11.name='Chef Special Chicken Biriyani'
dish11.price=800
dish11.description="The best Biriyani's in Nairobi. Succulent Chicken Pieces in a Thick Rich Sauce served between layers of Saffron Rice. "
dish11.dish_type='Meat & Fish Curries & Biriyani'
dish11.save
dish12=Dish.new
dish12.name='Chef Special Mutton Biriyani'
dish12.price=800
dish12.description="The best Biriyani's in Nairobi. Tender Mutton Pieces in a thick rich Sauce served between layers of Saffron Rice. "
dish12.dish_type='Meat & Fish Curries & Biriyani'
dish12.save
dish13=Dish.new
dish13.name='Dhal Makhni'
dish13.price=650
dish13.description='Indian Lentils with Red Beans Cooked in a Delicious Creamy Spicy Sauce'
dish13.dish_type='Vegetarian'
dish13.save
dish14=Dish.new
dish14.name='Chickpea Potato Curry'
dish14.price=650
dish14.description='Delicious Chickpea & Potato is a red sauce made from mustard seed and spicy.'
dish14.dish_type='Vegetarian'
dish14.save
dish15=Dish.new
dish15.name='Vegetable Masala Curry'
dish15.price=650
dish15.description='Seasonal Vegetables in South Indian Spicy Sauce.'
dish15.dish_type='Vegetarian'
dish15.save
dish16=Dish.new
dish16.name='Paneer Masala Kofta '
dish16.price=650
dish16.description='Fresh Paneer Kofta Balls in a Rich Cream & Spices Sauce.'
dish16.dish_type='Vegetarian'
dish16.save
dish17=Dish.new
dish17.name='Baigan Aloo (Baby Aubergine)'
dish17.price=650
dish17.description='Roasted Fresh Baby Aubergine and Potato in a Masala Gravy.'
dish17.dish_type='Vegetarian'
dish17.save
dish18=Dish.new
dish18.name='Plain'
dish18.price=100
dish18.description='Tandoori Nan Bread'
dish18.dish_type='Nans & Rice'
dish18.save
dish19=Dish.new
dish19.name='Garlic'
dish19.price=150
dish19.description='Tandoori Nan Bread with Butter & Garlic'
dish19.dish_type='Nans & Rice'
dish19.save
dish20=Dish.new
dish20.name='Butter'
dish20.price=150
dish20.description='Tandoori Nan Bread with Butter'
dish20.dish_type='Nans & Rice'
dish20.save
dish21=Dish.new
dish21.name='Chilli'
dish21.price=150
dish21.description='Tandoori Nan Bread with Chilli'
dish21.dish_type='Nans & Rice'
dish21.save
dish22=Dish.new
dish22.name='Plain Rice'
dish22.price=150
dish22.description='Cooked to perfection plain rice'
dish22.dish_type='Nans & Rice'
dish22.save
dish23=Dish.new
dish23.name='Jeera Rice'
dish23.price=200
dish23.description='Stunning Jeera Rice '
dish23.dish_type='Nans & Rice'
dish23.save
dish24=Dish.new
dish24.name='Vegetable Pilau Rice'
dish24.price=200
dish24.description='Seasonal Vegetables with Pilau Rice '
dish24.dish_type='Nans & Rice'
dish24.save
dish25=Dish.new
dish25.name='Plain Chips'
dish25.price=150
dish25.description='Home Made Chips '
dish25.dish_type='Nans & Rice'
dish25.save
dish26=Dish.new
dish26.name='Chicken Biriyani'
dish26.price=800
dish26.description="The best Biriyani's in Nairobi. Succulent Chicken Pieces in a Thick Rich Sauce served between layers of Saffron Rice."
dish26.dish_type='Nans & Rice'
dish26.save
dish27=Dish.new
dish27.name='CHEF SPECIAL Boneless Chicken Tikka Salad'
dish27.price=650
dish27.description='Boneless chicken marinated in yogurt and spices cooked in a tandoor on a bed of a mixed lettuce, rocket leaves, tomato, cucumber & dressing on the side'
dish27.dish_type='Salads'
dish27.save
dish28=Dish.new
dish28.name='Healthy Yummy Salad'
dish28.price=500
dish28.description='Fresh mixed lettuce, Rocket Leaves, Beetroot, Tomato, Cucumber & dressing on the side'
dish28.dish_type='Salads'
dish28.save
dish29=Dish.new
dish29.name='MUST TRY Aubergine Raitha'
dish29.price=400
dish29.description='Tandoori Roasted Aubergine in a Mint Yogurt Jeera Cumin Sauce'
dish29.dish_type='Side Dishes'
dish29.save
dish30=Dish.new
dish30.name='Dahi Pakora'
dish30.price=350
dish30.description='Indian Lentils Bhagia in a Mint Yogurt Sauce'
dish30.dish_type='Side Dishes'
dish30.save
dish32=Dish.new
dish32.name="Samosa’s Mutton "
dish32.price=250
dish32.description="Portion of 4 Samosa. Our Famous & Tasty Samosa's "
dish32.dish_type='Side Dishes'
dish32.save
dish33=Dish.new
dish33.name="Samosa’s Vegetable "
dish33.price=200
dish33.description="Portion of 4 Samosa. Our Famous & Tasty Samosa's "
dish33.dish_type='Side Dishes'
dish33.save
dish34=Dish.new
dish34.name='Coca Cola'
dish34.price=100
dish34.description=
dish34.dish_type='Drinks'
dish34.save
dish35=Dish.new
dish35.name='Fanta'
dish35.price=100
dish35.description=
dish35.dish_type='Drinks'
dish35.save
dish36=Dish.new
dish36.name='Sprite'
dish36.price=100
dish36.description=
dish36.dish_type='Drinks'
dish36.save
dish37=Dish.new
dish37.name='Water'
dish37.price=100
dish37.description='Cool, clear H2O. Just the way mother nature intended!'
dish37.dish_type='Drinks'
dish37.save
