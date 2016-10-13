//Diese Funktion testet, ob das Fenster gerade "im Fokus" ist.

var window_focus;

$(window).focus(function() {
    window_focus = true;
}).blur(function() {
    window_focus = false;
});

$(document).one('click', function() {
    setInterval(function() {
        $('body').append('has focus? ' + window_focus + '<br>');
    }, 1000);
});​
