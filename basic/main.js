var i = 0;
var x = canvas.width/2;
var y = canvas.height-30;

function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 100;

  ctx.clearRect(0, 0, canvas.width, canvas.heigh)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + (100*i), 0, (i * Math.PI), false);
  ctx.arc(centerX, centerY, radius - (100*i), 0, (i + i * Math.PI), false);
console.log(Math.floor(10*i));
  ctx.lineWidth = .9;
  ctx.strokeStyle = `rgb(76, 1${i * 70 + 30}${Math.floor(10*i)}), 244)`;
// rgb(244, 1${Math.floor(10*i)}0, 6${Math.floor(10*i)})
  ctx.stroke();

  i = (i + .001);
}
function draw2() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 100;

  ctx.clearRect(0, 0, canvas.width, canvas.heigh)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + (100*i), 0, (i + i + i * Math.PI), true);
  ctx.arc(centerX, centerY, radius - (100*i), 0, (i * Math.PI), false);

  ctx.lineWidth = 1;
  ctx.strokeStyle = `rgb(66, 1${i * 70 + 9}, 244)`;
  ctx.stroke();
  i = (i + .01);
}

  var timerId = setInterval(() => {
    draw()
    draw2()

    if(Math.floor(i) === 1) {
      stop();
    }
  }, 20);

  function stop() {
    console.log('hi');
    clearInterval(timerId);
  }


  draw()
