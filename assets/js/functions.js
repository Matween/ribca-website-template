function toggleNav() {
    $("#fullscreen-nav").toggle();
    $("#container").toggle();
    $("#bottom").toggle();
    $("#menu").toggle();
}

function toggleBurgerNav() {
    $('.burger').trigger('click');
}

var texts = ["Kraljevsko dobro!", "Vljudno vabljeni.", "Pridite, ne bo vam žal."];
var counter = 0;
var heading = $("#change-text");
setInterval(change, 4000);

function change() {
  heading.text(texts[counter]);
  counter++;
  if (counter >= texts.length) {
    counter = 0;
  }
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(46.2530714, 15.1621289),
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var uluru = {lat: 46.2530714, lng: 15.1621289};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(function() {
    $('.footer-links-holder h3').click(function () {
        $(this).parent().toggleClass('active');
    });
});

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
$("#year-current").text(currentYear);


  
  
