//get input to homepage
window.addEventListener('load' ,function(){
    
    const name = localStorage.getItem("name_item" )
    const name_item = document.getElementById('searchProduct').value = name
   
    OnSearch();
});