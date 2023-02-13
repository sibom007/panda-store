document.getElementById("set-more"),addEventListener("keyup",function(event){
 const setop = event.target.value;
 const deleteme = document.getElementById("btn-more");
 if (setop === "sibomsaha77") {
    deleteme.removeAttribute("disabled");
 }
 else{
    deleteme.setAttribute("disabled", true);
 }
})




