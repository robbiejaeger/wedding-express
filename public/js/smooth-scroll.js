$('.on-page-nav a').click(function() {
   var target = $(this.hash);
   target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
   if (target.length) {
     $('html,body').animate({
       scrollTop: target.offset().top
     }, 250);
     return false;
   }
 });
