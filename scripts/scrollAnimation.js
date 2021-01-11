const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

sr.reveal('.timeline-box',{delay:400}); // intro about

// TOP
const srTop = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
});

srTop.reveal('.descrip'); // descrip landing
srTop.reveal('.my-img img'); // my-img landing
srTop.reveal('.title'); // title about
srTop.reveal('.intro h3',{delay:200}); // intro about
srTop.reveal('.intro p',{delay:300}); // intro about
srTop.reveal('#servicos h1',{delay:100}); // h1 servicos
srTop.reveal('.type-box',{delay:300}); // type-box servicos




