google.maps.event.addDomListener(window, 'load', init);
    var myLatlng = new google.maps.LatLng(51.5168157,-0.1370915);
    function init() {
        var mapOptions = {
            zoom: 17,
            center: myLatlng, 
            scrollwheel: false,
            draggable: false,
            styles: [{"featureType":"road.highway","elementType":"labels","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"hue":"#ffe94f"},{"saturation":100},{"lightness":4},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#ffe94f"},{"saturation":100},{"lightness":4},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#333333"},{"saturation":-100},{"lightness":-74},{"visibility":"off"}]}]
        };
        var mapElement = document.getElementById('mapdiv');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            optimized: false,
            icon: 'http://www.slongrad.com/arezzo/images/mapicon.png'
        });     
    }