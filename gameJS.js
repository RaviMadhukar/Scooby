document.onkeydown= function(e){
    console.log("Key code is :" ,e.keyCode);
    if(e.keyCode==32 || e.keyCode==38){
        sweetCat = document.querySelector('.sweetCat');
        sweetCat.classList.add('animatesweetCat');
        setTimeout(()=>{
            sweetCat.classList.remove('animatesweetCat');
        },700);
    }
}