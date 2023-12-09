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



/*비디오 재생 to 메인 페이지*/ 
document.getElementById('videoForWeb').addEventListener('ended', web, false);
document.getElementById('videoForIphone').addEventListener('ended', mobile, false);

function web(e) {
    location.href = 'main.html';
    // alert("end");
}
function mobile(e) {
    location.href = 'main.html';
    // alert("end");
}
