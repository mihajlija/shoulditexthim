
var answer1 =  "<h1 class='f6 f2-m f-subheadline-l fw8 tc b'>No.</h1>";
var answer2 =  "<h1 class='f6 f2-m f-subheadline-l fw8 tc b'>Don't text him.</h1>";
var img = "<svg viewBox='0 0 100 100' height='200px'><path fill='#000' d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'><animateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' from='0 50 50' to='360 50 50' /></path></svg>";
var button =  "<a class='f6 link ph3 pv2 mb2 dib white bg-black tracked' href='#0' onclick='compute(answer2, button)'>Are you sure?</a>"


function display(html) {
    document.getElementById("main").innerHTML =html;
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}


function thinkAboutIt(answer) {
    milliseconds = getRandom(1000, 8000);
    setTimeout(function(){ display(answer)}, milliseconds);
}

function compute(answer, button){
    display(img);
    thinkAboutIt(answer+button);
}


/*
function shouldITextHim(){
    document.getElementById('unsure').onclick = function() {
      var unsure = true;
    }​;​

    if (unsure == true)
       var fuccboi = true;
    if (fuccboi == true)
         var answer = false;
    return answer;     
}
*/
