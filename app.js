



const images=document.querySelectorAll('.image');
const arrowleft=document.querySelector('#arrowleft');
const arrowright=document.querySelector('#arrowright');
let current=0;
function reset(){
   for(let i=0;i<images.length;i++){
      images[i].style.display='none';
   }
}
function startSlideShow(){
   reset();
   images[0].style.display='block';
}
startSlideShow();
//show prev
function slideLeft(){
   reset();
   images[current-1].style.display='block';
   current--;
}
function slideRight(){
   reset();
   images[current+1].style.display='block';
   current++;
}
arrowleft.addEventListener('click',()=>{
   if(current===0){
      current=images.length;

   }
   slideLeft();
})
arrowright.addEventListener('click',()=>{
   if(current===images.length-1){
      current=-1;
   }
   slideRight();
})


const func=()=>{
   const navlinks=document.querySelector('.menubar');
   const burger=document.querySelector('.burger');
   burger.addEventListener('click',()=>{
      navlinks.classList.toggle('show'); 
   });
 };
 window.onload(func());
  