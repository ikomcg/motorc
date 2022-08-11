const cancel = document.getElementsByClassName('cancel-purchase')


for(let i = 0; i < cancel.length; i++){
    cancel[i].addEventListener('click',function(cancelpurchase){
 
        var canelem = cancelpurchase.target.parentElement.parentElement.parentElement;

        var nameitem =  canelem.getElementsByClassName('item-name')[0].innerHTML
        var imgsrc = canelem.getElementsByClassName("img-item")[0]
        var priceitem =  canelem.getElementsByClassName('pricepurchase')[0]

        // console.log(imgsrc.getAttributeNode('src').value)
       

        var cancel_page = document.getElementById("cancel-page")
        var div = document.createElement('div');
        div.classList.add('to-pay');

        var cancel_row = `  <div class="product-row">
        <div class="top-product">
            <h3 class="m-0">Cancelled</h3>
            <span><i class="bi bi-bag-x-fill" style="font-size: 23px ;"></i> Parcel has been Cancelled</span>
        </div>
        <hr>
        <div class="item-user d-flex flex-column">
            <div class="d-flex p-1">
                <img src="${imgsrc.getAttributeNode('src').value}" alt="">
                <div class="d-flex flex-column justify-content-around p-2">
                    <h4>${nameitem}</h4>
                    <div class="item-info d-flex flex-row justify-content-between">
                        <h5>Quantity: <span>1</span></h5>
                        
                    </div>
                </div>
            </div>
          
            <div class="button-item d-flex flex-row justify-content-between align-items-center">
                <div class="button-purchase w-auto p-0">
                    <button>Buy Again</button>
                    <button>Contact motoRC</button>
                </div>
                <h4>Order Total: <span>${priceitem.innerHTML}</span> </h4>
            </div>
        </div>
    </div>`

    div.innerHTML = cancel_row;
    cancel_page.append(div)

    cancelpurchase.target.parentElement.parentElement.parentElement.parentElement.remove();

        if(cancel.length == 0){
                document.getElementById('no-result').style.display = 'flex';
        }
        else{
            document.getElementById('no-result').style.display = 'none';
        }

    })
}