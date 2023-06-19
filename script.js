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

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxuw2iKQQFAFbdBjUp4NRuSQi0I_SN8V4Y_rJfBCJqoP3Pf8dTiOxza-BINYCQTfMjh/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message Sent successfulyy'
        setTimeout(function(){
            msg.innerHTML=""},5000)
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

