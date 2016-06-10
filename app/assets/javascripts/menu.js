$( document ).ready(function() {
    console.log( "ready!" );

  $('.add-to-order-btn').on('click',function(){
      var name = $(this).closest('.add-to-button').find(".form-dish-name").val();
      var price = parseInt( $(this).closest('.add-to-button').find(".form-dish-price").val() );
      var dishId = $(this).closest('.add-to-button').find(".form-dish-id").val();
      addItemToCart(name, price, dishId, 1)
      displayCart();
      saveCart();
      });

      $("#cancel-order").click(function(event){
        clearCart();
        displayCart();
        makeOrderArray()
      });


      $("#order").on("click", ".delete-item", function(event){
       var name = $(this).attr("name");
       removeItemFromCartAll(name);
       displayCart();
     });

     $("#order").on("click", ".subtract-item", function(event){
       var name = $(this).attr("name");
       removeItemFromCart(name);
       displayCart();
     })


     $("#myBtn").click(function(){
       makeOrderArray()
     });


     $("#order").on("click", ".plus-item", function(event){
       var name = $(this).attr("name");
       var dishId = $(this).closest('li').find(".hidden-dish-id").val();


       addItemToCart(name, dishId, 0, 1);
       displayCart();

     })

      var cart = [];

      function addItemToCart(name, price, dishId, count){
        for(var i in cart){

          if (cart[i].name === name){
              cart[i].count += count;
              saveCart();
              return;
          }
        }
        var item = new Item(name, price, dishId, count);
         cart.push(item);
         saveCart();
      }

      function displayCart(){


        var cartArray = listCart();
        var output = "";
        var modalOutput = "";


        for(var i in cartArray) {
          output += '<li>'
          + " <input class='hidden-dish-id' type='hidden' value='"
          + cartArray[i].dishId
          + "'>"
          + cartArray[i].count
          + " "
          + " " + cartArray[i].name
          + " " + cartArray[i].total
          + " <button class='plus-item' name='"
          + cartArray[i].name +"'>+</button>"
          + " <button class='subtract-item' name='"
          + cartArray[i].name +"'>-</button>"
          + " <button class='delete-item' name='"
          + cartArray[i].name+"'>X</button>"
          + "</li>";

          modalOutput +=
          '<li>'
          + cartArray[i].count
          + " x "
          + cartArray[i].name
          + '</li>';


        }

        $("#order").html(output);
        $(".order-total").html( totalCart() );
        $("#modal-order-total").html( 'Total: KES ' + totalCart() );
        $("#modal-order").html( modalOutput );

      }

      var Item = function(name, price, dishId, count){
        this.name = name
        this.dishId = dishId
        this.price = price
        this.count = count
      }

      function listCart(){
        // console.log('this is a copy')
      	var cartCopy = [];
      	for (var i in cart){
        		var item = cart[i];
        		var itemCopy = {};
        		for (var p in item){  // this is a loop that goes through every property
      			     itemCopy[p]=item[p] // in 'item' and copies it to item copy
      		  }
            itemCopy.total = (item.price * item.count).toFixed(2) //this adds an extra property ('price')to each object item.
            cartCopy.push(itemCopy);
      	}

          console.log(cartCopy)
      	return cartCopy;

      }

    function removeItemFromCartAll(name){
     	for (var i in cart){
     		if(cart[i].name === name){
     		cart.splice(i,1);
     		break;
         }
   	   }
       saveCart();
    }


    function removeItemFromCart(name){
     	for(var i in cart){
     		if (cart[i].name === name){
     			cart[i].count --;
     			if(cart[i].count === 0){
     				cart.splice(i,1)
     			}
     			break;
     		}
     	}
      saveCart();
    }

    function clearCart() {
    	cart = []
      saveCart();
    }

    function totalCart() {
    	var totalCost = 0;
    	for(var i in cart){
    		totalCost += cart[i].price * cart[i].count;
    	}
    	return totalCost; //2 decimal places
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart (){
    	cart = JSON.parse(localStorage.getItem("shoppingCart"));
    }

    function makeOrderArray(){
      var arrayOfDish = [];
      for(var i in cart) {
        arrayOfDish.push(fillArray(cart[i].dishId, cart[i].count))
      }
        var orderedDishIds = arrayOfDish.join()
        var dishIdOutput = orderedDishIds.split(",")
        console.log(dishIdOutput)

        $("#confirmation-buy-array").val(dishIdOutput)
    }

    function fillArray(value, len) {
      var arr = [];
      for (var i = 0; i < len; i++) {
        arr.push(value);
      }
      return arr;
    }

    loadCart();

    displayCart();
