//
//
// $(".add-to-cart").click(function(event){
//   event.preventDefault();
//   var name = $(this).attr("data-name");
//   var price = Number($(this).attr("data-price"));
//
//
//   addItemToCart(name, price, 1 )
//   displayCart();
// });
//
// $('#clear-cart').click(function(event){
//   clearCart();
//   displayCart();
// });
//
// function displayCart(){
//
//   var cartArray = listCart();
//   var output = "";
//
//   for(var i in cartArray) {
//     output += '<li>'
//     + cartArray[i].name
//     + " " + cartArray[i].count
//     + " x " + cartArray[i].price
//     + " = $" + cartArray[i].total
//     + " <button class='plus-item' data-name='"
//     + cartArray[i].name +"'>+</button>"
//     + " <button class='subtract-item' data-name='"
//     + cartArray[i].name +"'>-</button>"
//     + " <button class='delete-item' data-name='"
//     + cartArray[i].name+"'>X</button>"
//     + "</li>";
//   }
//
//   $("#show-cart").html(output);
//   $("#total-cart").html( totalCart() )
// }
//
// $("#show-cart").on("click", ".delete-item", function(event){
//   console.log('trying to remove one item');
//   console.log($(this).attr("data-name"))
//   var name = $(this).attr("data-name");
//   removeItemFromCartAll(name);
//   displayCart();
// });
//
//
// $("#show-cart").on("click", ".subtract-item", function(event){
//   var name = $(this).attr("data-name");
//   removeItemFromCart(name);
//   displayCart();
//   console.log('trying to remove one item')
// })
//
//
// $("#show-cart").on("click", ".plus-item", function(event){
//   var name = $(this).attr("data-name");
//   addItemToCart(name, 0, 1);
//   displayCart();
// })
//
// // ================================
//
// var cart = [];
//
// var Item = function(name, price, count){
// 	this.name = name
// 	this.price = price
// 	this.count = count
// }
//
// function addItemToCart(name, price, count){
// 	for(var i in cart){
// 		if (cart[i].name === name){
//   			cart[i].count += count;
//         saveCart();
//   			return;
// 		}
// 	}
// 	var item = new Item(name, price, count);
// 	 cart.push(item);
//    saveCart();
// }
//
//   // addItemToCart("apple",1.94,1);
//   // addItemToCart("pear",12.99,1);
//   // addItemToCart("car",10.99,1);
//   // addItemToCart("apple",1.99,1);
//   // addItemToCart("apple",1.99,1);
//   // addItemToCart("apple",1.99,1);
//   // addItemToCart("apple",1.99,1);
//   // addItemToCart("peanut",4.50,1);
//   // addItemToCart("tapes",3.55,1);
//
// function removeItemFromCart(name){
// 	for(var i in cart){
// 		if (cart[i].name === name){
// 			cart[i].count --;
// 			if(cart[i].count === 0){
// 				cart.splice(i,1)
// 			}
// 			break;
// 		}
// 	}
// }
//
// function removeItemFromCartAll(name){
// 	for (var i in cart){
// 		if(cart[i].name === name){
// 		cart.splice(i,1);
// 		break;
//     }
// 	}
//   saveCart();
// }
//
// function clearCart() {
// 	cart = []
//   saveCart();
// }
//
// function countCart(){
// 	var totalCount = 0;
// 	for (var i in cart){
// 		totalCount += cart[i].count
// 	}
// 	return totalCount;
// }
//
// function totalCart() {
// 	var totalCost = 0;
// 	for(var i in cart){
// 		totalCost += cart[i].price * cart[i].count;
// 	}
// 	return totalCost.toFixed(2); //2 decimal places
// }
//
// //copies the cart for display.
// function listCart(){
// 	var cartCopy = [];
// 	for (var i in cart){
//   		var item = cart[i];
//   		var itemCopy = {};
//   		for (var p in item){  // this is a loop that goes through every property
// 			     itemCopy[p]=item[p] // in 'item' and copies it to item copy
// 		  }
//       itemCopy.total = (item.price * item.count).toFixed(2) //this adds an extra property ('price')to each object item.
//
//       cartCopy.push(itemCopy);
// 	}
// 	return cartCopy;
// }
//
// function saveCart() {
//     localStorage.setItem("shoppingCart", JSON.stringify(cart));
// }
//
// // localStorage.setItem("username", "Joe")
//
// function loadCart (){
// 	cart = JSON.parse(localStorage.getItem("shoppingCart"));
// }
//
// loadCart();
//
// displayCart();
// var array = listCart();
