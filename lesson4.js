let nav=document.getElementsByClassName('nav')[0];

// document.getElementById('mobile-menu-btn').onclick= function(){
//     nav.classList.toggle('show-nav');
// };


document.getElementById('mobile-menu-btn').addEventListener('click',function(){
    nav.classList.toggle('show-nav');
});

