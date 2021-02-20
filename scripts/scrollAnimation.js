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
srTop.reveal('.about-me .about-header'); // about header
srTop.reveal('.about-me .about-body .rc',{delay:200}); // about header
srTop.reveal('.about-me .about-body .text h2',{delay:200}); // about header
srTop.reveal('.about-me .about-body .text .small',{delay:200}); // about header
srTop.reveal('.about-me .about-body .text p',{delay:300}); // about header
srTop.reveal('.about-me .about-body .text .socials',{delay:500}); // about header

srTop.reveal('.intro p',{delay:300}); // intro about
srTop.reveal('#servicos h1',{delay:100}); // h1 servicos
srTop.reveal('.type-box',{delay:300}); // type-box servicos




