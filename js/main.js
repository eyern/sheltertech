// to change projects;
let nameBtns = document.querySelectorAll(".projects .names > div");
let pros_imgs = document.querySelectorAll(".projects .imgs .img");
let pros_text = document.querySelectorAll(".projects .texts .text");

for(let i = 0; i < pros_imgs.length; i++){
    nameBtns[i].addEventListener("click",function(){
        pros_imgs.forEach((el)=>{
            el.classList.remove("active");
        })
        pros_imgs[i].classList.add("active");

        pros_text.forEach((el)=>{
            el.classList.remove("active");
        })
        pros_text[i].classList.add("active");

        nameBtns.forEach((el)=>{
            el.classList.remove("active");
        })
        nameBtns[i].classList.add("active");
    })
}

// owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.counter').counterUp({
    delay: 1,
    time: 400
});


// scroll to top page;
let topScrollBtn = document.querySelector(".top-scroll");

topScrollBtn.addEventListener("click",function(){
    scrollTo({
        top:0,
        behavior:"smooth"
    })
})

window.onscroll = ()=>{
      if (scrollY >= 200){
          topScrollBtn.style.opacity = 1;
          topScrollBtn.style.visibility = "visible";
      }else{
        topScrollBtn.style.opacity = 0;
        topScrollBtn.style.visibility = "hidden";
      }
}



window.onload = function(){
    document.body.style.overflowY = "visible";
    document.querySelector(".overlay-cover").style.display = "none";
}