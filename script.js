document.addEventListener('DOMContentLoaded', function () {
    // Scrolling functionality
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Slide-in animation on scroll
    const slideInParagraph = document.querySelector('.about-left-col');
    function checkSlide() {
        const slideInAt = window.scrollY + window.innerHeight - slideInParagraph.clientHeight / 4;
        const isHalfShown = slideInAt > slideInParagraph.offsetTop;
        const isNotScrolledPast = window.scrollY < slideInParagraph.offsetTop + slideInParagraph.clientHeight;

        if (isHalfShown && isNotScrolledPast) {
            slideInParagraph.classList.add('slide-in');
        } else {
            slideInParagraph.classList.remove('slide-in');
        }
    }
    window.addEventListener('scroll', checkSlide);

    // Heartbeat animation on scroll
    const heartbeatParagraph = document.querySelector('.signup-right-col');
    function fadeInOnScroll() {
        const elementTop = heartbeatParagraph.getBoundingClientRect().top;
        const elementBottom = heartbeatParagraph.getBoundingClientRect().bottom;

        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);

        if (isVisible) {
            heartbeatParagraph.classList.add('heartbeat-animation');
        }
    }
    function handleScroll() {
        fadeInOnScroll();
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load

    // Hamburger menu functionality
    document.getElementById('hamburger-icon').addEventListener('click', function () {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('show');
        document.querySelectorAll('.bar').forEach(function (bar) {
            bar.classList.toggle('active');
        });
    });
});