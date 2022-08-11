increasdecreasequntity();

document.getElementById("open-cart").addEventListener("click" ,function(){
    document.getElementById('cart-section').style.right = '0';
    document.getElementById("header").style.overflow ='visible'
    document.getElementsByTagName("body")[0].classList.add('show-cart');
})

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

const item= document.getElementsByClassName('moto-item');
const itemname = item[0].getElementsByTagName('h3')[0];
const itemsrc = item[0].getElementsByTagName('img')[0].getAttributeNode("src");

const item_cart_div = document.getElementsByClassName('items-cart-div')[0];

const itemprice = document.getElementsByClassName('item-price');
const pricecart = itemprice[0].getElementsByTagName('h5')[0];

const itemquant = document.getElementById('quanti-item')



document.getElementById('add-to-cart').addEventListener('click',function(){
 
     const item_info = document.getElementsByClassName('items-cart')
         for( let i = 0 ; i < item_info.length; i++){
             const item_exist = item_info[i].getElementsByTagName('h3')[0].innerText
    
             if (itemname.innerText.includes(item_exist)){
                exist_status()
                return
              }
         }
          

         var cartdiv = document.createElement('div')
         cartdiv.classList.add('items-cart')
       
         var cartrow = `
         <img src="${itemsrc.value}" alt="" srcset="">
         <div class="item-info">
                 <h3>${itemname.innerText}</h3>
                 <div class="items-price">
                     <div class="item-quantity">
                         <i class="bi bi-dash" ></i>
                         <input value="${itemquant.value}" type="text" min="1" max="10" class="cart-quanti" readonly>
                         <i class="bi bi-plus"></i>
                     </div>  
                     <span>${pricecart.innerText}</span>
                 </div>
         </div>`
     
         
         cartdiv.innerHTML = cartrow
         item_cart_div.append(cartdiv)  
         updatePrice();
         show_status();
         increasdecreasequntity(); 
      
})

function show_status(){
    const show = document.getElementById('confirm-cart')

    show.style.display = 'block';

    const myTimeout = setTimeout(showconfirm, 1500);
    function showconfirm() {
        show.style.display = 'none';
    }

}
function exist_status(){
    const show = document.getElementById('exist-cart')

    show.style.display = 'none';

    const myTimeout = setTimeout(showconfirm, 1500);
    function showconfirm() {
        show.style.display = 'none';
    }

}
function increasdecreasequntity(){
    
    const quanti_class = document.getElementsByClassName('item-quantity')
    const last_class = quanti_class.length
      
        quanti_class[last_class - 1].getElementsByClassName('bi bi-dash')[0].addEventListener('click' ,minusQuantity)
        
        function minusQuantity(){
            
        var itemquantity = quanti_class[last_class -1].getElementsByClassName('cart-quanti')[0];

        if(itemquantity.value == 1){
            return
        }
            itemquantity.value --
            updatePrice();          
            
            

        }

        quanti_class[last_class - 1].getElementsByClassName('bi bi-plus')[0].addEventListener('click' ,function(){
        var itemquantity = quanti_class[last_class - 1].getElementsByClassName('cart-quanti')[0];
        
        if(itemquantity.value == 10){
            return
        }
            itemquantity.value ++
            updatePrice();
           
        })
    }

window.onload = function(){
    updatePrice()
}

function updatePrice(){

    const items_cart = document.getElementsByClassName("items-price");
    var total = 0

    for(let i = 0 ; i < items_cart.length; i++){
        const price_total = items_cart[i].getElementsByTagName("span")[0].innerText;
        const quanti_class = items_cart[i].getElementsByTagName('input')[0].value;

        var cart_total =   parseFloat(price_total.replace("$",""))
        total = total +(cart_total * quanti_class)
        
    }
    const price_class = document.getElementsByClassName('items-total');
    const price_total = price_class[0].getElementsByTagName('span')[0];

    price_total.innerText = "$ " +  total

}
