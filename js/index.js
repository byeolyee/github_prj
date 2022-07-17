function initMap() {
    const myLatLng = {
        lat: 37.782293,
        lng: -122.391240,
    }

    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: myLatLng,
            scrollwheel: false,
            zoom: 18
        }
    );

    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'GitHub',
    });
}

initMap();

// const container = document.getElementById('map');
// const options = {
//     center: new kakao.maps.LatLng(33.450701, 126.570667),
//     level: 3
// };
// const map = new kakao.maps.Map(container, options);