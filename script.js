let flag=0;
//to tell the no. of slider

function controller(x){
  flag=flag+x;
  slideshow(flag);
}

slideshow(flag);
function slideshow(num){
  //num= for recieve

  let slides=document.getElementsByClassName('slide');
  if(num == slides.length){
    flag=0;
    num=0;
  }
  if(num<0){
    flag=slides.length-1;
    num=slides.length-1;
  }
  for(let y of slides){
    y.style.display="none";
  }
  slides[num].style.display="block";//visible
}
