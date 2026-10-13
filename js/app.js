$(window).on('load', function(){
    initMobileMenu();
    initPopup();
    initScrollUpButton();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initScrollUpButton() {
    $('#scrollUpArrow').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
}

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

function initPopup() {
    var $popupWindow = $('#popupWindow');
    var $overlay = $('#overlay');

    // Открытие попапа
    $('#subscribePopupButton').on('click', function() {
        $popupWindow.addClass('visible');
        $overlay.addClass('visible');
    });

    // Закрытие по крестику и по тёмному фону (overlay)
    $('#closeButton, #overlay').on('click', function() {
        closePopup();
    });

    // Закрытие по клику на сам popup_wrapper,
    // но НЕ по клику на его содержимое
    $popupWindow.on('click', function(event) {
        if (event.target === this) {
            closePopup();
        }
    });

    function closePopup() {
        $popupWindow.removeClass('visible');
        $overlay.removeClass('visible');
    }
}