console.log('Hello world')
window.addEventListener('scroll',reveal);
function reveal(){
    let reveal = document.querySelectorAll('.reveal');

    for(let i=0;i <reveal.length; i++ ){

        let windowheight = window.innerHeight;
        let revealTop = reveal[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealTop < windowheight - revealpoint){
            reveal[i].classList.add('active');
        }
        else{
            reveal[i].classList.remove('active');
        }
    }
}
