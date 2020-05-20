$(document).ready(function () {
     $('.sidenav-burger-div').click(function (event) {
         $('.sidenav-burger-div, .navbar').toggleClass('active');
         $('body').toggleClass('lock'); /* allows to get rid off or menu scroll while we are scrolling our nav bar in mobile width*/
     });
 });