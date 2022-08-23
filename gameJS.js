score =0;
cross= true;

audioElement = new Audio('song/music.mp3');
audiogo = new Audio('song/gameover.mp3');
setTimeout(()=>{
     audioElement.play();
}, 1000); 

document.onkeydown= function(e){
    console.log("Key code is :" ,e.keyCode);
    if(e.keyCode==32 || e.keyCode==38){
        sweetCat = document.querySelector('.sweetCat');
        sweetCat.classList.add('animatesweetCat');
        setTimeout(()=>{
            sweetCat.classList.remove('animatesweetCat');
        },700);
    }

    if(e.keyCode==39){
        sweetCat = document.querySelector('.sweetCat');
        CatX = parseInt(window.getComputedStyle(sweetCat, null).getPropertyValue('left'));
        sweetCat.style.left = CatX + 110 + "px";
    }

    if(e.keyCode==37){
        sweetCat = document.querySelector('.sweetCat');
        CatX = parseInt(window.getComputedStyle(sweetCat, null).getPropertyValue('left'));
        sweetCat.style.left = (CatX - 110) + "px";
    }
}

setInterval(()=>{
    sweetCat = document.querySelector('.sweetCat');
    gameOver = document.querySelector('.gameOver');
    angryCat = document.querySelector('.angryCat');
 
    catx = parseInt(window.getComputedStyle(sweetCat, null).getPropertyValue('left'));
    caty = parseInt(window.getComputedStyle(sweetCat, null).getPropertyValue('top'));

    bunnyx = parseInt(window.getComputedStyle(angryCat, null).getPropertyValue('left'));
    bunnyy = parseInt(window.getComputedStyle(angryCat, null).getPropertyValue('top'));

    offsetX = Math.abs(catx-bunnyx);
    offsetY = Math.abs(caty-bunnyy);
    if(offsetX<73 && offsetY<52){
        gameOver.style.visibility = 'visible';
        angryCat.classList.remove('bunny');
        audiogo.play();
        setTimeout(()=>{
            audioElement.pause();
            audiogo.pause();
       }, 1000);
    }

    else if(offsetX<145 && cross){
        score +=1;
        updateScore(score);
        cross= false;
        setTimeout(()=>{
            cross = true;
        },1000);

        setTimeout(()=>{
            anidur = parseFloat(window.getComputedStyle(angryCat, null).getPropertyValue('animation-duration'));
            newdur = anidur -0.1;
            angryCat.style.animationDuration = newdur + 's';
        },1000);
    } 
},100);

function updateScore(score){
    scoreCount.innerHTML = "Your Score: " + score;
}