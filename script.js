const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>
    {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>
    {
        nav.classList.remove('active');
    })
}


// js for gallery of featured products

var MainImg = document.getElementById("MainImg");
var SmlImg = document.getElementsByClassName("small-img")


    SmlImg[0].onclick = function(){
        MainImg.src = SmlImg[0].src;
    }
    SmlImg[1].onclick = function(){
        MainImg.src = SmlImg[1].src;  
    }
    SmlImg[2].onclick = function(){
        MainImg.src = SmlImg[2].src;  
    }
    SmlImg[3].onclick = function(){
        MainImg.src = SmlImg[3].src;  
    }
    
