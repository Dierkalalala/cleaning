$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '95px',
        slidesToShow: 1,
        prevArrow: '.carprev',
        nextArrow: '.carnext',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

$('.carousel-content').slick({
    centerMode: true,
    centerPadding: '95px',
    slidesToShow: 1,
    prevArrow: '.caaarprevv',
    nextArrow: '.caaarnextv',
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function () {
    $($(this).attr('href')).find('.slider').slick('refresh')
})
let menuIcon = document.getElementsByClassName('menu-icon')[0];
let menuModal = document.getElementsByClassName('menumodal')[0];
let close = document.getElementsByClassName('close')[0];
let callModal = document.getElementsByClassName('callmodal')[0]
menuIcon.addEventListener('click', showMenu);

function showMenu() {
    menuModal.classList.toggle('active-modal');

}

function closeMenu() {
    setTimeout(showMenu, 1000);
    menuModal.classList.add('disappear')
    setTimeout(menuModal.classList.remove('disappear'),800)
}

function callModalShow() {
    callModal.classList.toggle('active-modal')
}

function callModalHide() {
    setTimeout(callModalShow, 1000)
    callModal.classList.add('disappear')
    setTimeout(callModal.classList.remove('disappear'),800)
}
