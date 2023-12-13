document.addEventListener('DOMContentLoaded', function () {
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
});
