window.addEventListener('scroll', function(){
    const header = document.querySelector('#showcase');
    //  header.classList.toggle("sticky",this.window.scrollY > 0)
    if(window.scrollY > 400){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});