const productrow = document.getElementsByClassName('product_row');

const itemdesc = document.getElementsByClassName('moto-item');
const itemviewname = itemdesc[0].getElementsByTagName('h3')[0];
const itemimgsrc = itemdesc[0].getElementsByTagName('img')[0].getAttributeNode("src");
const priceview = itemdesc[0].getElementsByTagName('h5')[0]


for(let i = 0;i < productrow.length; i++){
    
   productrow[i].addEventListener("click",function(){
    var imgsrc = productrow[i].getElementsByTagName('img')[0].getAttributeNode('src').value;
    var itemname = productrow[i].getElementsByTagName('h3')[0].innerText;
    const price_item = productrow[i].getElementsByTagName('span')[0].innerText;
  
    itemimgsrc.value = imgsrc;    
    itemviewname.innerText = itemname;
    priceview.innerText = price_item;
    document.getElementById("product-view").style.display = 'flex';    
    

   })
  
}

document.getElementById('close-item-moto').addEventListener('click', closepurchase)
function closepurchase(){
    document.getElementById("product-view").style.display = 'none';    
    document.getElementById('quanti-item').value = '1';
    
}

document.getElementById('add-quanti').addEventListener('click',function(){
    var quanti_value = document.getElementById('quanti-item');
    if(quanti_value.value == 10 ){
        return
    }
    quanti_value.value++;
})
document.getElementById('minus-quanti').addEventListener('click',function(){
    var quanti_value = document.getElementById('quanti-item');
    if(quanti_value.value == 1 ){
        return
    }
    quanti_value.value-- ;
})
