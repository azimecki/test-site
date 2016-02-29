// slideshow on the index page
function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
      : $('#slideshow IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 3000 );
});


function show_auto_pricing() {
    document.getElementById('auto-info').style.display = "block";
    document.getElementById('home-info').style.display = "none";
    document.getElementById('commercial-info').style.display = "none";
}

function show_home_pricing() {
    document.getElementById('home-info').style.display = "block";
    document.getElementById('auto-info').style.display = "none";
    document.getElementById('commercial-info').style.display = "none";
}

function show_comm_pricing() {
    document.getElementById('commercial-info').style.display = "block";
    document.getElementById('home-info').style.display = "none";
    document.getElementById('auto-info').style.display = "none";
}

function show_belk() {
    document.getElementById('belk_lg').style.display = "block";
    document.getElementById('car_lg').style.display = "none";
    document.getElementById('deck_lg').style.display = "none";
    document.getElementById('house_lg').style.display = "none";
    document.getElementById('pier_lg').style.display = "none";
    document.getElementById('side_house_lg').style.display = "none";
    document.getElementById('table_lg').style.display = "none";
}

function show_car() {
    document.getElementById('belk_lg').style.display = "none";
    document.getElementById('car_lg').style.display = "block";
    document.getElementById('deck_lg').style.display = "none";
    document.getElementById('house_lg').style.display = "none";
    document.getElementById('pier_lg').style.display = "none";
    document.getElementById('side_house_lg').style.display = "none";
    document.getElementById('table_lg').style.display = "none";
}

function show_deck() {
    document.getElementById('belk_lg').style.display = "none";
    document.getElementById('car_lg').style.display = "none";
    document.getElementById('deck_lg').style.display = "block";
    document.getElementById('house_lg').style.display = "none";
    document.getElementById('pier_lg').style.display = "none";
    document.getElementById('side_house_lg').style.display = "none";
    document.getElementById('table_lg').style.display = "none";
}

function show_house() {
    document.getElementById('belk_lg').style.display = "none";
    document.getElementById('car_lg').style.display = "none";
    document.getElementById('deck_lg').style.display = "none";
    document.getElementById('house_lg').style.display = "block";
    document.getElementById('pier_lg').style.display = "none";
    document.getElementById('side_house_lg').style.display = "none";
    document.getElementById('table_lg').style.display = "none";
}

function show_pier() {
    document.getElementById('belk_lg').style.display = "none";
    document.getElementById('car_lg').style.display = "none";
    document.getElementById('deck_lg').style.display = "none";
    document.getElementById('house_lg').style.display = "none";
    document.getElementById('pier_lg').style.display = "block";
    document.getElementById('side_house_lg').style.display = "none";
    document.getElementById('table_lg').style.display = "none";
}

function show_side_house() {
    document.getElementById('belk_lg').style.display = "none";
    document.getElementById('car_lg').style.display = "none";
    document.getElementById('deck_lg').style.display = "none";
    document.getElementById('house_lg').style.display = "none";
    document.getElementById('pier_lg').style.display = "none";
    document.getElementById('side_house_lg').style.display = "block";
    document.getElementById('table_lg').style.display = "none";
}

function show_table() {
    document.getElementById('belk_lg').style.display = "none";
    document.getElementById('car_lg').style.display = "none";
    document.getElementById('deck_lg').style.display = "none";
    document.getElementById('house_lg').style.display = "none";
    document.getElementById('pier_lg').style.display = "none";
    document.getElementById('side_house_lg').style.display = "none";
    document.getElementById('table_lg').style.display = "block";
}