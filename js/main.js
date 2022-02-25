window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}

document.querySelector('.toggle').addEventListener('click', function(){
    document.querySelector('.toggle').classList.toggle('active');
    document.querySelector('.header-nav').classList.toggle('animate');
    
})