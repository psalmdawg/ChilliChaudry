$( document ).ready(function() {
    console.log( "ready!" );



  $('.add-to-order-btn').on('click',function(){
      var name = $(this).closest('.add-to-button').find(".form-dish-name").val();
      var price = parseInt( $(this).closest('.add-to-button').find(".form-dish-price").val() );
      var dishId = $(this).closest('.add-to-button').find(".form-dish-id").val();
      addItemToCart(name, price, dishId, 1)
      displayCart();
      saveCart();
      // makeOrderArray()
      });

      $("#cancel-order").click(function(event){
        // console.log('cancelling')
        clearCart();
        displayCart();
        makeOrderArray()
      });


      $("#order").on("click", ".delete-item", function(event){
      //  console.log('trying to remove one item');
      //  console.log($(this).attr("name"))
       var name = $(this).attr("name");
       removeItemFromCartAll(name);
       displayCart();
      //  makeOrderArray()
     });


     $("#order").on("click", ".subtract-item", function(event){
       var name = $(this).attr("name");
       removeItemFromCart(name);
       displayCart();
      //  makeOrderArray()
      //  console.log(name)
     })


     $("#myBtn").click(function(){
       makeOrderArray()
     });



     $("#order").on("click", ".plus-item", function(event){
       var name = $(this).attr("name");
       var dishId = $(this).closest('li').find(".hidden-dish-id").val();
      //  console.log(name)
      //  console.log($(this).closest('li').find(".hidden-dish-id").val())

       addItemToCart(name, dishId, 0, 1);
       displayCart();
      //  makeOrderArray()
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
        // console.log(cart)

        var cartArray = listCart();
        var output = "";
        var modalOutput = "";
        // var modalHiddenData = JSON.stringify(cart)
        // console.log('hide' + modalHiddenData)

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

          // modalIdArrayOutput.push(cartArray[i].dishId);
          // console.log("id array" + modalIdArrayOutput)

        }

        $("#order").html(output);
        $(".order-total").html( totalCart() );
        $("#modal-order-total").html( 'Total: KES ' + totalCart() );
        $("#modal-order").html( modalOutput );
        // $("#confirmation-buy-array").val( modalHiddenData );
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
          // console.log('this is a copy')
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



  //       //stores info from the orders in an object
  //     // var orderedItem ={
  //     //   dish_id: $(this).closest('.add-to-button').find(".form-dish-id").val(),
  //     //   dish_name:$(this).closest('.add-to-button').find(".form-dish-name").val(),
  //     //   dish_price:$(this).closest('.add-to-button').find(".form-dish-price").val()
  //     // };
  //
  //     //push the order data into a object and array
  //     orderArray.push( $(this).closest('.add-to-button').find(".form-dish-name").val() );
  //     orderIdArray.push( $(this).closest('.add-to-button').find(".form-dish-id").val() );
  //     orderCostArray.push(parseInt( $(this).closest('.add-to-button').find(".form-dish-price").val() ));
  //
  //     // cart.push(orderedItem);
  //     // console.log(orderIdArray)
  //     // console.log(orderCostArray)
  //     console.log(orderArray)
  //     console.log($(this).closest('.add-to-button').find(".form-dish-name").val())
  //
  //     //total order cost
  //     var orderTotal = 0;
  //     $.each(orderCostArray,function() {
  //         orderTotal += this;
  //     });
  //
  //     $('#confirmation-buy').val(orderIdArray)
  //
  //     // console.log(orderTotal)
  //     $(".order-total").html("Total " + orderTotal + " Ksh")
  //     $("#modal-order-total").html("Total " + orderTotal + " Ksh")
  //
  //     var objectOfOrder = { };
  //
  //     for (var i = 0; i<orderArray.length; i++) {
  //        objectOfOrder[orderArray[i]] = (objectOfOrder[orderArray[i]] || 0) + 1;
  //     }
  //     // console.log(cart);
  //     console.log("b" + objectOfOrder)
  //     // console.log(orderArray);
  //
  //     //loop through an object and retrieve keys and values.
  //     for (var key in objectOfOrder) {
  //         if (objectOfOrder.hasOwnProperty(key)) {
  //             $("#order").append($("<li class='odr-lst-itm'>").html(  objectOfOrder[key] +  " x " + key +
  //             "<img class='add-item-img' src='assets/plus-icon.png'>" +
  //             "<img class='minus-item-img' src='assets/minus-icon.png'>"));
  //             $("#modal-order").append($("<li>").html(  objectOfOrder[key] +  " x " + key))
  //         }
  //     }
  // } );
  //
  // //NEED TO ACCESS THE ARRAYS DECLARED GLOBALLY ABOVE AND ADD OD REMOVE THE VALUES.
  // //find the dish name and add another one of it to the array of ordered dishes
  // $('#order').on('click', '.add-item-img', function() {
  //       console.log($(this).closest('.add-item-img').find(".odr-lst-itm").html())
  //       // console.log("plus")
  // })
  //
  // //find the dish name. and remove it from the array of ordered dishes
  // $('#order').on('click', '.minus-item-img', function() {
  //       console.log('minus')
  // })
  //
  // // var array = [2, 5, 9];
  // // var index = array.indexOf(5);
  // //   if (index > -1) {
  // //     array.splice(index, 1);
  // //   }


}); //document ready
