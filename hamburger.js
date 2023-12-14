document.getElementById('hamburger-icon').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
    document.querySelectorAll('.bar').forEach(function(bar) {
        bar.classList.toggle('active');
    });
});
