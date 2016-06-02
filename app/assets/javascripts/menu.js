$( document ).ready(function() {
    console.log( "ready!" );

  // var cart = [];
  var orderArray = [];
  var orderIdArray =[];
  var orderCostArray=[];


  $('.add-to-order-btn').on('click',function(){

      $("#order").empty();
      $("#modal-order").empty();

        //stores info from the orders in an object
      // var orderedItem ={
      //   dish_id: $(this).closest('.add-to-button').find(".form-dish-id").val(),
      //   dish_name:$(this).closest('.add-to-button').find(".form-dish-name").val(),
      //   dish_price:$(this).closest('.add-to-button').find(".form-dish-price").val()
      // };

      //push the order data into a object and array
      orderArray.push( $(this).closest('.add-to-button').find(".form-dish-name").val() );
      orderIdArray.push( $(this).closest('.add-to-button').find(".form-dish-id").val() );
      orderCostArray.push(parseInt( $(this).closest('.add-to-button').find(".form-dish-price").val() ));

      // cart.push(orderedItem);
      // console.log(orderIdArray)
      // console.log(orderCostArray)
      console.log(orderArray)

      //total order cost
      var orderTotal = 0;
      $.each(orderCostArray,function() {
          orderTotal += this;
      });

      $('#confirmation-buy').val(orderIdArray)

      // console.log(orderTotal)
      $(".order-total").html("Total " + orderTotal + " Ksh")
      $("#modal-order-total").html("Total " + orderTotal + " Ksh")

      var objectOfOrder = { };

      for (var i = 0; i<orderArray.length; i++) {
         objectOfOrder[orderArray[i]] = (objectOfOrder[orderArray[i]] || 0) + 1;
      }
      // console.log(cart);
      console.log("b" + objectOfOrder)
      // console.log(orderArray);

      //loop through an object and retrieve keys and values.
      for (var key in objectOfOrder) {
          if (objectOfOrder.hasOwnProperty(key)) {
              $("#order").append($("<li class='odr-lst-itm'>").html(  objectOfOrder[key] +  " x " + key +
              "<img class='add-item-img' src='assets/plus-icon.png'>" +
              "<img class='minus-item-img' src='assets/minus-icon.png'>"));
              $("#modal-order").append($("<li>").html(  objectOfOrder[key] +  " x " + key))
          }
      }
  } );

  //NEED TO ACCESS THE ARRAYS DECLARED GLOBALLY ABOVE AND ADD OD REMOVE THE VALUES.
  //find the dish name and add another one of it to the array of ordered dishes
  $('#order').on('click', '.add-item-img', function() {
        // console.log($(this).closest('.add-item-img').find(".odr-lst-itm").html())
        // console.log("plus")
  })

  //find the dish name. and remove it from the array of ordered dishes
  $('#order').on('click', '.minus-item-img', function() {
        console.log('minus')
  })

  // var array = [2, 5, 9];
  // var index = array.indexOf(5);
  //   if (index > -1) {
  //     array.splice(index, 1);
  //   }


}); //document ready
