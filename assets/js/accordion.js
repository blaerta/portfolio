const accordionTriggers = document.querySelectorAll('.accordion .trigger');

accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const accordion = trigger.parentElement;

        const isOpen = accordion.classList.contains('open');

        if(isOpen) {
            accordion.classList.remove('open');

            if(window.innerWidth <= 600) {
                accordion.style.backgroundColor = 'transparent';
                accordion.style.borderColor = '#fff';
            }
        } else {
            accordion.classList.add('open');
            if (window.innerWidth <= 600) {
                accordion.style.backgroundColor = '#8d3d47';
                accordion.style.borderColor = '#8d3d47';
            }
        }
    });


window.addEventListener('resize', () => {
    const accordion = trigger.parentElement;
    if (accordion.classList.contains('open')) {
        if (window.innerWidth <= 600) {
            accordion.style.backgroundColor = '#8d3d47';
            accordion.style.borderColor = '#8d3d47';
        } else {
            accordion.style.backgroundColor = '';
            accordion.style.borderColor = '';
        }
    } else {
        if (window.innerWidth <= 600) {
            accordion.style.backgroundColor = 'transparent';
            accordion.style.borderColor = '#fff';
        } else {
            accordion.style.backgroundColor = '';
            accordion.style.borderColor = '';
        }
    }
});
});