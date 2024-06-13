let storyOpening = document.querySelector(".story-opening");
let sOImg = document.querySelector(".story-opening img")
let sOH = document.querySelector(".story-opening h1")
let btn1 = document.querySelector(".option-one");
let opt1Screen = document.querySelector(".option-one-screen");
let btn2 = document.querySelector(".option-two");
let opt1End = document.querySelector('.option-one-end')
let opt2Screen = document.querySelector(".option-two-screen")
let opt2End = document.querySelector('.option-two-end')


btn1.addEventListener('click', function(){
    storyOpening.style.display='none'
    opt1Screen.style.display='block'
    btn1.style.visibility='hidden'
    btn2.innerHTML='Continue'
    
    btn2.addEventListener('click', function(){
        opt1Screen.style.display='none'
        opt2Screen.style.display='none'
        opt1End.style.display='block'
        btn1.style.visibility='hidden'
        btn2.style.visibility='hidden'
    });
});

btn2.addEventListener('click', function(){
    storyOpening.style.display='none'
    opt2Screen.style.display='block'
    btn1.innerHTML='Continue'
    btn2.style.visibility='hidden'

    btn1.addEventListener('click', function(){
        opt1Screen.style.display='none'
        opt2Screen.style.display='none'
        opt2End.style.display='block'
        btn1.style.visibility='hidden'
        btn2.innerHTML='Continue'
    });
});


sOImg.addEventListener('mouseOver', function(){
    sOH.style.visibility='visible'
})