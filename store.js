var removeCartButton = document.getElementsByClassName("btn-danger")
console.log(removeCartButton);
for (var i = 0 ; i < removeCartButton.length ; i++) {
 var button= removeCartButton[i] ;
 button.addEventListener("click" , function(event) {
     var buttonCliked = event.target;
    buttonCliked.parentElement.parentElement.remove()
 })
}