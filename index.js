// $(document).ready(function () {
//   const $win = $(window);
//   const $navbar = $('#header');
//   const $toggle = $('.toggle-button');

//   // Ensure navbar exists
//   if (!$navbar.length) return;

//   // Initialize Typed.js for hero section
//   if ($('#typed').length) {
//     new Typed('#typed', {
//       strings: ['Lexington Web Developer', 'AI Enthusiast', 'Veteran Coder'],
//       typeSpeed: 50,
//       backSpeed: 25,
//       loop: true,
//     });
//   }

//   // Debounce function
//   function debounce(func, wait) {
//     let timeout;
//     return function () {
//       clearTimeout(timeout);
//       timeout = setTimeout(func, wait);
//     };
//   }

//   // Toggle navbar position
//   function toggle_onclick() {
//     const width = $navbar.width();
//     $navbar.css({ left: $win.width() <= 768 ? `-${width}px` : '0px' });
//   }

//   // Initial toggle
//   toggle_onclick();

//   // Resize with debounce
//   $win.resize(debounce(toggle_onclick, 100));

//   // Toggle click with accessibility
//   $toggle.on('click keypress', function (e) {
//     if (e.type === 'click' || e.key === 'Enter') {
//       $navbar.toggleClass('toggle-left');
//       $toggle.toggleClass('active').attr('aria-expanded', $navbar.hasClass('toggle-left'));
//     }
//   });
// });

$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })

});

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}