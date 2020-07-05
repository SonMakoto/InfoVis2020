function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
      width: window.innerWidth*0.8,
      height: window.innerHeight,
      targetDom: document.getElementById('display'),
      enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var elem = document.getElementById('isovalue');
    var target = document.getElementById('value');
    var red = document.getElementById('red');
    var green = document.getElementById('green');
    var blue = document.getElementById('blue');
    var targetred = document.getElementById('redval');
    var targetgreen = document.getElementById('greenval');
    var targetblue = document.getElementById('blueval');
    var rangeValue = function (elem, target) {
      return function(evt){
    target.innerHTML = elem.value;
    }
  }
  var rangeValuered = function (red, redval) {
    return function(evt){
  redval.innerHTML = red.value;
    }
  }
var rangeValuegreen = function (green, greenval) {
  return function(evt){
greenval.innerHTML = green.value;
    }
  }
var rangeValueblue = function (blue, blueval) {
  return function(evt){
blueval.innerHTML = blue.value;
    }
  }
elem.addEventListener('input', rangeValue(elem, target));
red.addEventListener('input', rangeValuered(red, targetred));
green.addEventListener('input', rangeValuegreen(green, targetgreen));
blue.addEventListener('input', rangeValueblue(blue, targetblue));
  var reflection = 0;
    var isovalue =  127;
    var r=  0.5;
    var g=  0.5;
    var b=  0.5;
    document.getElementById('change-isovalue-button')
       .addEventListener('click', function() {
         screen.scene.remove(surfaces)
         reflection = getReflection();
         isovalue = elem.value;
          r = red.value;
          g = green.value;
          b = blue.value;
        surfaces = Isosurfaces( volume, isovalue ,screen ,reflection,r,g,b);
      screen.scene.add( surfaces );

       });

    var surfaces = Isosurfaces( volume, isovalue ,screen,reflection,r,g,b );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

    screen.loop();
}
function getReflection(){
  radio = document.getElementsByName('reflection')
  if(radio[0].checked){
    reflection = 0;
  }
  else if (radio[1].checked) {
    reflection = 1;
  }
  return reflection;
}