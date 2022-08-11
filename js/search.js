document.getElementById('searchProduct').addEventListener('keyup' ,OnSearch)
function OnSearch(){
    var input = document.getElementById('searchProduct').value.toLowerCase();
    var searchinput = input.replace(" " , "");

    const item_row = document.getElementsByClassName('product_row');

 
    for(i = 0 ; i < item_row.length; i++){
       
       const item_row_replace = item_row[i].getElementsByTagName('h3')[0].innerText
       const name_item = item_row_replace.replace(" ", "")
    
        if(!name_item.toLocaleLowerCase().includes(searchinput)){
             item_row[i].style.display = 'none'
           }
        else if(name_item.toLocaleLowerCase().includes(searchinput)){
            item_row[i].style.display = 'flex'
           }
         
        }
}


   
  



