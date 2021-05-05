var flowerContainer = document.getElementById("flowerContainer");
var key = "82b09463b8c35e8af5977a298837e791";
var d = new Date();
var currentTime = d.getTime();
var hour = d.getHours();
var minute = d.getMinutes();
var seconds = d.getSeconds();
var year = 2021; 
var month = 3;
var day = 28;
var output1 = document.getElementById("output1");
var locationkey = "4079d9f3d06ed67b55f2833282f4efed";


function sunTime(){
    fetch('http://api.ipstack.com/70.19.45.226?access_key=' + locationkey)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
        console.log(data);
        console.log(data.latitude);
        console.log(data.longitude);
        var lat = data.latitude;
        var roundedLat = Math.floor(lat);
        var lon = data.longitude;
        var roundedLon = Math.floor(lon);

        var suntimes = SunCalc.getTimes(new Date(), lat, lon);
        var sunrise = suntimes.sunrise.getTime();
        var sunset = suntimes.sunset.getTime();
        // var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        
        console.log(suntimes);
        console.log("SUNRISE" + ":" + " " + sunrise);
        console.log("SUNSET" + ":" + " " + sunset);
        console.log("CURRENT TIME" +":" + " " + currentTime);
        console.log(roundedLat);

        output1.style.backgroundColor = "rgb("+ roundedLon + "," + roundedLon + "," + roundedLon + ")";
    })
}
sunTime(), 1000;

let flowerlayer = document.getElementById("flowerlayer");
const pane = new Tweakpane({
  title: 'CREATE YOUR SYMBOL OF STRENGTH',
});

const params = {
  Happy: 5,
  // Motivated: 12,
  Energized: 16,
  Confident: 5,
  Motivated: 125,
  Inspired: 360,

};

const tab = pane.addTab({
  pages: [
    {title: 'How do you currently feel?'},
  ],
});

const btn = pane.addButton({
  title: 'Save Symbol',
});

const btn2 = pane.addButton({
  title: 'Reset',
});

let flowersketch = function() {
  setup = function(){
      cnv = createCanvas(windowWidth, windowHeight);
      angleMode(RADIANS);
      frameRate(.9);
      tab.pages[0].addInput(params, "Happy", { min: 1, max: 10});
      // tab.pages[0].addInput(params, "Motivated", { min: 10, max: 15 });
      tab.pages[0].addInput(params, "Energized", { min: 9, max: 25 });
      tab.pages[0].addInput(params, "Confident", { min: 1, max: 10 });
      tab.pages[0].addInput(params, "Motivated", { min: 50, max: 200 });
      tab.pages[0].addInput(params, "Inspired", { min: 300, max: 410 });   
      btn.on('click', () => {
        frameRate(0);
        save(cnv, 'symbol_of_strength.png');
      });
      btn2.on('click', () => {
        frameRate(.9);
      });
    }

    draw = function(){
      windowResized();
      for (let x=0;x<1;x++){
        for (let y=0;y<1;y++){
          push()
          flowers();
          erase();
          pop()
        }
      }
    }

    flowers = function(){
        for (let j = 0; j < params.Confident*10; j++) {
          noFill();
          stroke(random(0,255),random(0,255),random(0,255));
          strokeWeight(params.Energized/params.Motivated);
          s=random(params.Kind);
          ran=random(width/10, height/10)
          beginShape()

              for (let i=0;i<(params.Inspired * params.Happy);i++){
                x=ran*sin(s*i)*cos(i) * (1.2 + (numTimes/8));
                y=ran*sin(s*i)*sin(i) * (1.2 + (numTimes/8));
                vertex(x+windowWidth/2,y+windowHeight/2);
              }
          endShape(CLOSE)
        }
        erase();
    }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}

new p5(flowersketch, flowerlayer);

var numTimes = localStorage.getItem("visits-Hlfma");
if(numTimes == null) {
  numTimes = 0;
} else {
  numTimes = parseInt(numTimes, 10);
}
numTimes++;
localStorage.setItem("visits-Hlfma", (numTimes).toString(10))
console.log(numTimes);

var counterNumber = document.getElementById("counterNumber");
counterNumber.innerHTML = numTimes;

