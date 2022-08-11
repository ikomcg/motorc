document.getElementById("list-acc").addEventListener("click" ,function(){
    document.getElementById("list-account").style.left = "0"
    document.getElementsByTagName("body")[0].classList.add('show-list-acc');
})
document.onclick = function(e){
    if(e.target.id !== 'list-acc' && e.target.id !=="list-account" ){
      document.getElementById("list-account").style.left="-1000px";
      document.getElementsByTagName("body")[0].removeAttribute("class");   
    }
  }