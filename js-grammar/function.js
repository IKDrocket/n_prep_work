var myBrirthTime = new Date(1994,11,28,5,30);

function updateParagraph(){
  var now = new Date();
  var seconds = (now.getTime() - myBrirthTime.getTime()) /1000;
  document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過。';
}

var radius = [5,10,15];

function areaCircle() {
    for (var i=0; i < radius.length; i++){
        document.write('<p>' + 3.14*radius[i]**2 + '</p>');
    }
}

areaCircle();
setInterval(updateParagraph,50);
