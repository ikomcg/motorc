const order = document.getElementsByClassName('order_receive')

for(let i = 0; i < order.length; i++){
    order[i].addEventListener('click', function(e){
        var order_received = e.target.parentElement.parentElement.parentElement;

        var nameitem =  order_received.getElementsByClassName('item-name')[0].innerHTML
        var imgsrc = order_received.getElementsByClassName("img-item")[0]
        var priceitem =  order_received.getElementsByClassName('price-order')[0]

        var complete_page = document.getElementById("complete-page")
        var div = document.createElement('div');
        div.classList.add('to-pay');

        var complete_row = `  <div class="product-row">
        <div class="top-product">
                <h3 class="m-0">Completed</h3>
                <span><i class="bi bi-bag-check-fill" style="font-size: 23px ;"></i>Parcel has been delivered</span>
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
                </div>
                <h4>Order Total: <span>${priceitem.innerHTML}</span> </h4>
            </div>
        </div>
    </div>`

    div.innerHTML = complete_row;
    complete_page.append(div)

    e.target.parentElement.parentElement.parentElement.parentElement.remove();
        if(order.length == 0){
                document.getElementById('receive-result').style.display = 'flex';
        }
        else{
            document.getElementById('receive-result').style.display = 'none';
        }
    })
}