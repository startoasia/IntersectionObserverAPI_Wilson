var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('rotateIn');
            observer.unobserve(entry.target);
        }
        // else {
        //     entry.target.classList.remove('rotateIn');
        // }
    });
}, {
    rootMargin: "-10%",
});

document.querySelectorAll('.fly').forEach(item => {
    observer.observe(item);
});