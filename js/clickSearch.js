document.getElementsByClassName('fa-solid fa-magnifying-glass')[0].addEventListener('click' , function(){
   let loading = 0
   const name_item = document.getElementById('homeSearch').value
   
   localStorage.setItem("name_item" ,name_item)
   return;
})