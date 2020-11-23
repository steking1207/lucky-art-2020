// if HTML DOM Element that contains the map is found...
if (document.getElementById('map-canvas')){
    var mapOptions = {
        zoom: 15, // 預設級數
        center: { // 預設中心點
            lat: 24.631015,
            lng: 121.824617
        },
        scaleControl: true,
        scrollwheel: false, //滑鼠滾輪控制大小, true / false

        styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var icon = "assets/img/ui/marker.png";

    var infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < markers.length; i++) {
        var data = markers[i];
        var myLatlng = new google.maps.LatLng(data.lat, data.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: icon,
            title: data.title,
        });
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                infoWindow.setContent("<div class='info-window'>" + "<div class='font-weight-bold'>" + data.title + "</div><div class='clearfix'><div class='i-subtitle'><i class='fa fa-map-marker'></i></div><div class='i-content'>" + data.address + "</div></div><div class='clearfix'><div class='i-subtitle'><i class='fa fa-phone'></i></div><div class='i-content'>" + data.tel + "</div></div><div class='clearfix'><div class='i-subtitle'><i class='fa fa-envelope'></i></div></div>");
                infoWindow.open(map, marker);
            });
        })(marker, data);
    }

}
