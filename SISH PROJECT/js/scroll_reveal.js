// Initialize Scroll Reveal 
function initializeScrollReveal(origin){
    return ScrollReveal({
        origin: origin,
        distance: '1.5rem',
        duration: 2000,
        reset: 'true',
    })
};

// Top
const srTop = initializeScrollReveal('top');
srTop.reveal('.about', {delay: 100});
srTop.reveal('.about-video', {delay: 100});
srTop.reveal('.about-chat', {delay: 100});
srTop.reveal('.about-services', {delay: 100});
srTop.reveal('.map', {delay: 100});
srTop.reveal('.doctors', {delay: 100});


// Left
const srLeft = initializeScrollReveal('left');
srLeft.reveal('.about-news', {delay: 400});
srLeft.reveal('.about-articles', {delay: 400});

// Right
const srRight = initializeScrollReveal('right');
srRight.reveal('.about-events', {delay: 400});
srRight.reveal('.read-more', {delay: 400});
