var removeCartButton = document.getElementsByClassName("btn-danger")
console.log(removeCartButton);
for (var i = 0 ; i < removeCartButton.length ; i++) {
 var button= removeCartButton[i] ;
 button.addEventListener("click" , function(event) {
     var buttonCliked = event.target;
    buttonCliked.parentElement.parentElement.remove()
    updateCartTotal();
 })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
     var cartRows = cartItemContainer.getElementsByClassName("cart-row")
     for (var i = 0 ; i < removeCartButton.length ; i++) {
         var cartRow = cartRows[i]
         var priceElement = carrtRows.getElementsByClassName("cart-price")[0]
     }
}