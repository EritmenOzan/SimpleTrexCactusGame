const mercan=document.querySelector("#mercan");
const gulyabani=document.querySelector("#gulyabani");

function zipla(){
    if(gulyabani.classList!="gulyabani-animate")

    if(mercan.classList!= "mercan-animate")
        {
            gulyabani.classList.add("gulyabani-animate");
        }
   {    
    mercan.classList.add("mercan-animate");
    setTimeout(function(){
    mercan.classList.remove("mercan-animate");
   },500);
   } 
}

var carpismaKontrol = setInterval(function(){

    var mercanBottom =parseInt(window
            .getComputedStyle(mercan)
            .getPropertyValue("bottom"));

    var gulyabanileft =parseInt(window
            .getComputedStyle(gulyabani)
            .getPropertyValue("left"));

    if(gulyabanileft > 0 && gulyabanileft < 80 && mercanBottom < 70){
        alert("Yakalandın!");
    }
},10);