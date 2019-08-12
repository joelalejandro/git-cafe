window.onload = function() {
  $(".loader").fadeOut("slow");
}

$(document).ready(main);

var contador = 1 ;

function main(){

  $('.menu_bar').click(function(){
     if(contador == 1){
			$('nav').animate({
				top: '76'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				top: '-100%'
      });
    } 
  });
};
window.onscroll = function (){

  if(contador==0){
  contador = 1;
  $('nav').animate({
  top: '-100%'
  });
  }	
  }
