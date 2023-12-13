document.addEventListener('DOMContentLoaded', function () {
    const slideInParagraph = document.querySelector('.about-left-col');

    function checkSlide() {
        const slideInAt = window.scrollY + window.innerHeight - slideInParagraph.clientHeight / 2;
        const isHalfShown = slideInAt > slideInParagraph.offsetTop;
        const isNotScrolledPast = window.scrollY < slideInParagraph.offsetTop + slideInParagraph.clientHeight;

        if (isHalfShown && isNotScrolledPast) {
            slideInParagraph.classList.add('slide-in');
        } else {
            slideInParagraph.classList.remove('slide-in');
        }
    }

    window.addEventListener('scroll', checkSlide);
});