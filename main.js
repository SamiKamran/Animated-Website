
const AnimationNow = document.querySelector("#AnimationNow")

const header_background = document.querySelector(".header-background")
const paragraph = document.querySelector(".parag")
const btn= document.querySelector(".btn")
const  ul_link =document.querySelector(".ul-link")
const slider = document.querySelector(".slider")



AnimationNow.addEventListener("click", function(){

    
  
  const tl = new  TimelineMax()
  
  tl.fromTo(header_background, 1, {height: "0"}, {height: "100vh", ease: Power2.easeInOut}).delay(0.8)
  .fromTo(header_background, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut}, "-=2.2")
  .fromTo(header_background, 2.2, {width: "60%"}, {width: "100%", ease: Power2.easeInOut}, "-=1.2")

  .fromTo(slider, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, "-=2.5")
      .fromTo(btn, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
    .fromTo(paragraph, 0.5, {opacity: 0, x: -80}, {opacity: 1, x: 0}, "-=0.5")
  






  
  })
