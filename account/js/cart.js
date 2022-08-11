window.onload = function(){
    updateCartPrice()
}
function updateCartPrice(){
    const price =  document.getElementsByClassName('price-cart');
    var total = 0;
    for(let i = 0; i < price.length; i++){
        const add_price =  price[i].innerHTML
        const price_rep = add_price.replace('$' ,'')
        total = total + parseFloat(price_rep)
        
    }
    document.getElementsByClassName('price-cart-total')[0].innerHTML = '$ ' + total;

}

document.getElementById('selectall').addEventListener('click' , function(){
    select()
})
function select(){
    const checks = document.getElementById('selectall').checked
    const cart_check =  document.getElementsByClassName('select_cart');
    for(let i = 0 ; i < cart_check.length; i++){
    if (checks == true){
        document.getElementsByClassName('select_cart')[i].checked = true
    }
    else{
        document.getElementsByClassName('select_cart')[i].checked = false
    }   
    }
}



