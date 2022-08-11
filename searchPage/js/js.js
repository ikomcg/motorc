//open cart
document.getElementById("open-cart").addEventListener("click" ,function(){
    document.getElementById('cart-section').style.right = '0';
    document.getElementById("header").style.overflow ='visible'
    document.getElementsByTagName("body")[0].classList.add('show-cart');
})

//close cart
document.getElementById("close-cart").addEventListener("click" ,function(){
     const cart = document.getElementById('cart-section');
     cart.style.right= '-1000px';
     document.getElementsByTagName("body")[0].removeAttribute('class');
     if(cart.style.right == "-1000px"){
        const myTimeout = setTimeout(cartoverflow, 90);
        function cartoverflow() {
            document.getElementById("header").style.overflow ='hidden'
        }
       
     }
     else{
        document.getElementById("header").style.overflow ='visible'
     }
})