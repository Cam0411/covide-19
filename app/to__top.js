const toTop = document.querySelector(' .on__top')
toTop.style.display = 'none'
function addToTop(){
    window.addEventListener('scroll',() => {
        if (window.pageYOffset > 200){
            toTop.style.display = 'flex'
        }else {
            toTop.style.display = 'none'
        }
    })
}
addToTop()


$(document).ready(function(){

    $("a").on('click', function(event) {
  
     
      if (this.hash !== "") {
   
        event.preventDefault();

        var hash = this.hash;
  
       
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
       
          window.location.hash = hash;
        });
      } 
    });
  });