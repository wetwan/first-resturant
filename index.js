let slidesIndexx = 0
sshowSlides()
 function sshowSlides(){
    let slides =document.querySelectorAll('.slide')
    slidesIndexx++
    if (slidesIndexx >= slides.length){
        slidesIndexx = 0;
    }
    let offset = -slidesIndexx * slides[0].offsetWidth;
    document.querySelector('.slides').styles.transform = `translateX(${offset}px)`
    setTimeout(sshowSlides, 2000)

 }
 let slidesIndex = 0;
 showSlides();
 
 function showSlides() {
     let slides = document.querySelectorAll('.slide');
     slides.forEach((slide, index) => {
         slide.classList.add('hidden');
         if (index === slidesIndex) {
             slide.classList.remove('hidden');
         }
     });
 
     slidesIndex++;
     if (slidesIndex >= slides.length) {
         slidesIndex = 0;
     }
 
     setTimeout(showSlides, 2000);
 }
 