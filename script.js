document.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('.cardBoxBarRightCircle');
    const overlay = document.getElementById('overlay');
    const cardBoxBarRightCircle = document.querySelectorAll('.cardBoxBarRightCircle');
    const triangle = document.querySelector('.triangle');
    const cardBoxBarShared = document.querySelector('.cardBoxBarShared');
    const cardBoxBar = document.querySelector('.cardBoxBar');
    let locked = false;

    icon.addEventListener('click', showSocials);
    icon.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' '){
            showSocials.call(this);
            event.preventDefault();
        }
    });

    function showSocials() {
        if (overlay.style.display === 'none' || overlay.style.display === '') {
            locked = true;
            cardBoxBar.classList.add('visible');
            cardBoxBarShared.classList.add('visible');
            overlay.classList.add('visible');
            triangle.classList.add('visible');
            cardBoxBarRightCircle.forEach(circle => {
                circle.classList.add('selected');
            });
        } else {
            cardBoxBar.classList.remove('visible');
            cardBoxBarShared.classList.remove('visible');
            overlay.classList.remove('visible');
            triangle.classList.remove('visible');
            cardBoxBarRightCircle.forEach(circle => {
                circle.classList.remove('selected');
            });
        }
    }

    const body = document.querySelector('body');
    body.addEventListener('click', hideSocials);
    body.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' '){
            hideSocials.call(this);
            event.preventDefault();
        }
    });

    function hideSocials() {
        if(locked === true){
            locked = false;
            return;
        }
        cardBoxBar.classList.remove('visible');
        cardBoxBarShared.classList.remove('visible');
        overlay.classList.remove('visible');
        triangle.classList.remove('visible');
        cardBoxBarRightCircle.forEach(circle => {
            circle.classList.remove('selected');
        });
    }
});