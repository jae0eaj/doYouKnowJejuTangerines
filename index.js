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








/* 모바일 세로스크롤 X */ 
function setScreenSize() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);



/* 스크롤 이벤트 자체 제거*/ 
disableScroll = () => {
    document.querySelector('body').addEventListener('touchmove', this.removeEvent, { passive: false });
    document.querySelector('body').addEventListener('onclick', this.removeEvent, { passive: false });
    document.querySelector('body').addEventListener('mousewheel', this.removeEvent, { passive: false });
  }

  removeEvent = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  enableScroll = () => {
    document.querySelector('body').removeEventListener('touchmove', this.removeEvent);
    document.querySelector('body').removeEventListener('onclick', this.removeEvent);
    document.querySelector('body').removeEventListener('mousewheel', this.removeEvent);
}
