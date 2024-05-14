let map;
let latitude;
let longitude;
let latitude2=35.66954967381857;
let longitude2=139.70300762497033;
const R = Math.PI / 180;
let kyori = distance();

/*==========
現在地の取得とMap情報の取得
==========*/
function GetMap() {
  navigator.geolocation.getCurrentPosition(successCP, erroCP);  
}


/*==========
関数群
==========*/
// 現在地の取得と地図の表示
function successCP(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  
  map = new Microsoft.Maps.Map('#mymap', {
    center: new Microsoft.Maps.Location(latitude, longitude),
    mapTypeId: Microsoft.Maps.MapTypeId.load,
    zoom: 10
  })
  let point =map.getCenter();
  pin(point);
  destination();
}

function erroCP(error) {
  alert("エラー");
}

// pinの設置
function pin(point){
  let pin =new Microsoft.Maps.Pushpin(point,{
    color:"red",
    title:"現在地"
  })
  map.entities.push (pin);
}

function destination(){
  let pin =new Microsoft.Maps.Pushpin({latitude:35.66954967381857,longitude:139.70300762497033},{
    color:"yellow",
    title:"G's"
  })
  map.entities.push (pin);
}

function distance(lat1, lng1, lat2, lng2) {
  lat1 *= R;
  lng1 *= R;
  lat2 *= R;
  lng2 *= R;
  return 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2));
}

