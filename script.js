let storyOpening = document.querySelector(".story-opening");
let storyOpeningH1 = document.querySelector('.story-opening h1')
let btn1 = document.querySelector(".option-one");
let opt1Screen = document.querySelector(".option-one-screen");
let btn2 = document.querySelector(".option-two");
let opt1End = document.querySelector('.option-one-end')
let opt2Screen = document.querySelector(".option-two-screen")
let opt2End = document.querySelector('.option-two-end')



btn1.addEventListener('click', function(){
    storyOpening.style.display='none'
    opt1Screen.style.display='block'
    btn1.style.display='none'
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
    btn2.style.display='none'

    btn1.addEventListener('click', function(){
        opt1Screen.style.display='none'
        opt2Screen.style.display='none'
        opt2End.style.display='block'
        btn1.style.visibility='hidden'
        btn2.innerHTML='Continue'
    });
});

btn2.addEventListener("mouseover", function(){
    storyOpening.style.backgroundColor='green'
    storyOpeningH1.style.color='black'

    btn2.addEventListener("mouseout", function(){
        storyOpening.style.backgroundColor='black'
        storyOpeningH1.style.color='white'
    });
});

btn1.addEventListener("mouseover", function(){
    storyOpening.style.backgroundColor='white'
    storyOpeningH1.style.color='black'

    btn1.addEventListener("mouseout", function(){
        storyOpening.style.backgroundColor='black'
        storyOpeningH1.style.color='white'
    });
});
