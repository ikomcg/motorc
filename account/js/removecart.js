 const removecart = document.getElementsByClassName('remove-cart');

 for(let i = 0; i < removecart.length; i++ ){
    removecart[i].addEventListener("click" ,function(cartremove){
        cartremove.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
        updateCartPrice();
        
        if(removecart.length == 0){
            document.getElementById('no-result').style.display = "flex"
        }
        else{
            document.getElementById('no-result').style.display = "none"

        }
    })
 }

