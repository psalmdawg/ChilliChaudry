$( document ).ready(function() {
    console.log( "ready!" );


  var cart = [];
  var orderArray = [];
  var orderIdArray =[];
  var orderCostArray=[];

  $('.add-to-order-btn').on('click',function(){

      $("#order").empty();
      $("#modal-order").empty();


        //stores info from the orders in an object
      var orderedItem ={
        dish_id: $(this).closest('.add-to-button').find(".form-dish-id").val(),
        dish_name:$(this).closest('.add-to-button').find(".form-dish-name").val(),
        dish_price:$(this).closest('.add-to-button').find(".form-dish-price").val()
      };

      //push the order data into a object and array
      orderArray.push( $(this).closest('.add-to-button').find(".form-dish-name").val() );
      orderIdArray.push( $(this).closest('.add-to-button').find(".form-dish-id").val() );
      orderCostArray.push(parseInt( $(this).closest('.add-to-button').find(".form-dish-price").val() ));

      cart.push(orderedItem);
      console.log(orderIdArray)
      console.log(orderCostArray)

      //total order cost
      var orderTotal = 0;
      $.each(orderCostArray,function() {
          orderTotal += this;
      });

      console.log(orderTotal)
      $(".order-total").html("Total " + orderTotal + " Ksh")
      $("#modal-order-total").html("Total " + orderTotal + " Ksh")


      var objectOfOrder = { };
      for (var i = 0; i<orderArray.length; i++) {
         objectOfOrder[orderArray[i]] = (objectOfOrder[orderArray[i]] || 0) + 1;
      }
      console.log(cart);
      // console.log("b" + objectOfOrder)
      // console.log(orderArray);

      for (var key in objectOfOrder) {
          if (objectOfOrder.hasOwnProperty(key)) {
              $("#order").append($("<li>").html(  objectOfOrder[key] +  " x " + key));
              $("#modal-order").append($("<li>").html(  objectOfOrder[key] +  " x " + key))
          }
      }
  });
}); //document ready





// function occurrences(){
//   var array =['fish', 'fish', 'fish', 'dog','dog', 'NICEdog', 'keith'];
//   var obj = { };
//   for (var i = 0; i<array.length; i++) {
//      obj[array[i]] = (obj[array[i]] || 0) + 1;
//   }
//   console.log(obj);
// }



// $('<div>').html('sdfsdfs')
