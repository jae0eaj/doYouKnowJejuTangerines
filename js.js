/* 마우스 애니메이션 */
let mouse = document.querySelector('#mouse');

let myAnimation = requestAnimationFrame(aniFn);

let posX = 0;
let posY = 0;
let targetPosX = 0;
let targetPosY = 0;
let g = 0.05;

function aniFn()
{
    mouse.style.left = posX+ 'px';
    mouse.style.top = posY+ 'px';
    
    //move algorithm
    posX += (targetPosX-posX) * g;
    posY += (targetPosY-posY) * g;
   
    requestAnimationFrame(aniFn);
}



document.addEventListener('mousemove', setPos);

function setPos(e)
{
    targetPosX = e.clientX;
    targetPosY = e.clientY;
}
/* 마우스 애니메이션 */


/* swiper 방식 귤 슬라이더*/
var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 10,

    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    speed: 250,


    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1920: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
    },
});




/* 이미지 슬라이더 */ 

let nowIndex = 1;


const imageSlider = document.querySelector('#imgSlider');

const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');
const bottomBtn03 = document.querySelector('#imgTo3');
const bottomBtn04 = document.querySelector('#imgTo4');
const bottomBtn05 = document.querySelector('#imgTo5');
const bottomBtn06 = document.querySelector('#imgTo6');
const bottomBtn07 = document.querySelector('#imgTo7');
const bottomBtn08 = document.querySelector('#imgTo8');
// const bottomBtn09 = document.querySelector('#imgTo9');
// const bottomBtn10 = document.querySelector('#imgTo10');
// const bottomBtn11 = document.querySelector('#imgTo11');
// const bottomBtn12 = document.querySelector('#imgTo12');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottomBtn01.addEventListener('click', moveA);
bottomBtn02.addEventListener('click', moveB);
bottomBtn03.addEventListener('click', moveC);
bottomBtn04.addEventListener('click', moveD);
bottomBtn05.addEventListener('click', moveE);
bottomBtn06.addEventListener('click', moveF);
bottomBtn07.addEventListener('click', moveG);
bottomBtn08.addEventListener('click', moveH);
// bottomBtn09.addEventListener('click', moveI);
// bottomBtn10.addEventListener('click', moveJ);
// bottomBtn11.addEventListener('click', moveK);
// bottomBtn12.addEventListener('click', moveL);

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);


// MOVE to First image.
function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
    nowIndex = 1;
}
// MOVE to Second image.
function moveB()
{
    imageSlider.style.transform = 'translate(-60rem)';
    nowIndex = 2;
}
// MOVE to Third image.
function moveC()
{
    imageSlider.style.transform = 'translate(-120rem)';
    nowIndex = 3;
}
// MOVE to Fourth image.
function moveD()
{
    imageSlider.style.transform = 'translate(-180rem)';
    nowIndex = 4;
}
// MOVE to Fifth image.
function moveE()
{
    imageSlider.style.transform = 'translate(-240rem)';
    nowIndex = 5;
}
// MOVE to Sixth image.
function moveF()
{
    imageSlider.style.transform = 'translate(-300rem)';
    nowIndex = 6;
}
// MOVE to Seventh image.
function moveG()
{
    imageSlider.style.transform = 'translate(-360rem)';
    nowIndex = 7;
}
// MOVE to Eighth image.
function moveH()
{
    imageSlider.style.transform = 'translate(-420rem)';
    nowIndex = 8;
}
// // MOVE to Nineth image.
// function moveI()
// {
//     imageSlider.style.transform = 'translate(-480rem)';
//     nowIndex = 9;
// }
// // MOVE to Tenth image.
// function moveJ()
// {
//     imageSlider.style.transform = 'translate(-540rem)';
//     nowIndex = 10;
// }
// // MOVE to Eleven image.
// function moveK()
// {
//     imageSlider.style.transform = 'translate(-600rem)';
//     nowIndex = 11;
// }
// // MOVE to Twelve image.
// function moveL()
// {
//     imageSlider.style.transform = 'translate(-660rem)';
//     nowIndex = 12;
// }


// Move to Left image. 
function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex == 1;
    }
    else
    {
        nowIndex -= 1;   
    }

    moveSlider(nowIndex);
}
// Move to Right image. 
function moveRight()
{
    if(nowIndex == 8)
    {
        nowIndex == 8;
    }   
    else
    {
        nowIndex += 1;
    }

    moveSlider(nowIndex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
        case 4:
            moveD();
        break;
        case 5:
            moveE();
        break;
        case 6:
            moveF();
        break;
        case 7:
            moveG();
        break;
        case 8:
            moveH();
        break;
        // case 9:
        //     moveI();
        // break;
        // case 10:
        //     moveJ();
        // break;
        // case 11:
        //     moveK();
        // break;
        // case 12:
        //     moveL();
        // break;
    }
}








/* 비디오 to 메인 페이지 */ 


// let videoWeb = document.querySelector('#videoForWeb');
// let link = 'main.html';
// videoWeb.onended = function()
// {
//     location.href = link;
// }










// if(window.addEventListener)
// {
//     window.addEventListener('load', function(){
//     if(window.HTMLVideoElement) {
//     var player = document.getElementById('videoForWeb');
//     player.addEventListener("ended", function() {
//     //이 부분이 실행된다
//     location.href= 'main.html';
//     });}}, false);
// }

// 출처: https://reg1.tistory.com/6 [보조기억장치:티스토리]









/* <video id=myVideo src... ...></video>

<script>

myVideo.onended = function() {

    미디어가 끝난 후 발생하는 이벤트;

}

</script> */








// /* 비디오 재생 */
// playVideo = (video) => {
//     this._video.addEventListener('ended',(e) => {
//         nextPage(main.html);
//       });
// } 




